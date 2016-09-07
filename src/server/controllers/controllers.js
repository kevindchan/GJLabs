var express = require('express');
var axios = require('axios'); 
var API_KEY = require('../../../config.js'); 
var Promise = require('bluebird'); 
var _ = Promise.promisifyAll(require('underscore')); 

module.exports = {

  get: function (req, res, next) {
    res.send(index); 
  },

  post: function (req, res, next) {
    var count = 0;
    var styles = [30, 164];//req.data.styles;
    var startIBU = 45;//req.data.ibu;
    var startABV = 6.2;//req.data.abv;
    var results = [];
    // _.eachAsync(styles, function(style) {
    //   makeReq(style, startIBU, startABV, count, res); 
    // })
    // .then(function(something) {
    //   console.log('We have a promise');
    //   console.log('THE RESULT OF THE PROMISE IS:', something); 
    //   console.log(results); 
    // }); 
    var test = makeReq(styles, startIBU, startABV, count, res, 0);

  }
}; 


// Controllers List 

// getAllUsers
// createNewUser

// getOneUser
// addToProfile

// getProfile
// 

// function asyncForEach(styles, startIBU, startABV, count) {
//   var results = []; 
//   return new Promise(function (resolve, reject) {
//     resolve(function() {
//         styles.forEach(function(style) {
//         console.log('Firing from within the promise!'); 
//         console.log('Current style is: ', style); 
//         results.push(makeReq(style, startIBU, startABV, count))
//       })
//       return results;
//     });
//   })
// };

// var makeReq = function(style, startIBU, startABV, count, res, incSize) {
//   count++;
//   console.log(count); 
//   var incSize = incSize || .05;
//   var reqString = requestStrBuilder(style, startIBU, startABV, count, incSize);
//   axios.get(reqString)
//   .then(function(getResponse) {
//     if (getResponse.data.totalResults > 5 && count < 5) {
//       getResponse.data.data = makeReq(style, startIBU, startABV, count, res, incSize/2)
//     } else if (getResponse.data.totalResults === 0 && count < 5) {
//       getResponse.data.data = makeReq(style, startIBU, startABV, count, res, incSize * 2)
//     } else {
//       // results.push(getResponse.data.data);
//       res.send('you got beers!')
//       console.log('We finished');
//       console.log(getResponse.data.data); 
//     }
//     return getResponse.data.data;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }


var makeReq = function(styles, startIBU, startABV, count, res, index, incSize) {
  count++;
  var results = [];
  var style = styles[index];
  console.log(count); 
  var incSize = incSize || .05;
  var reqString = requestStrBuilder(style, startIBU, startABV, count, incSize);
  axios.get(reqString)
  .then(function(getResponse) {
    if (getResponse.data.totalResults > 5 && count < 5) {
      results.push(makeReq(styles, startIBU, startABV, count, res, index, incSize/2));
    } else if (getResponse.data.totalResults === undefined && count < 5) {
      results.push(makeReq(styles, startIBU, startABV, count, res, index, incSize * 2));
    } else if (index === styles.length - 1) {
      console.log('We finished');
      results.push(getResponse.data.data);
      console.log(results);
      res.send('you got beers!')
    } else {
      results.push(getResponse.data.data);
      results.push(makeReq(styles, startIBU, startABV, 0, res, index + 1));
      console.log('res: ', results);
    }
    return results;
  })
  .catch(function (error) {
    console.log(error);
  });
}

var requestStrBuilder = function(style, startIBU, startABV, count, incSize) {
  var finalStr = 'http://api.brewerydb.com/v2/beers/?availabilityId=1'
  if(startIBU != undefined) {
    finalStr += '&ibu=' + (startIBU - startIBU*incSize) + ',' + (startIBU + startIBU*incSize);
  }
  if(startABV != undefined) {
    finalStr += '&abv=' + (startABV - startABV*incSize) + ',' + (startABV + startABV*incSize);
  }
  finalStr += '&styleId=' + style;

  finalStr += '&key=' + API_KEY;
  console.log('our request: ', finalStr)
  console.log('incSize: ', incSize)
  return finalStr;
}



      