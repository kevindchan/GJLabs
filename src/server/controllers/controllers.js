var express = require('express');
var http = require('http'); 



module.exports = {

  get: function (req, res, next) {
    res.send(index); 
  },

  post: function (req, res, next) {
    var count = 0;
    var styles = req.data.styles;
    var startIBU = req.data.ibu;
    var startABV = req.data.abv;
    var results = [];
    styles.forEach(function(style) {
      makeReq(style, startIBU, startABV)
    })
  }
}; 


// Controllers List 

// getAllUsers
// createNewUser

// getOneUser
// addToProfile

// getProfile
// 
var requestStrBuilder = function(style, startIBU, startABV, incSize) {
  var finalStr = 'http://api.brewerydb.com/v2/beers/?availabilityId=1'
  if(startIBU != undefined) {
    finalStr += '&ibu=' + (startIBU - startIBU*incSize) + ',' + (startIBU + startIBU*incSize);
  }
  if(startABV != undefined) {
    finalStr += '&abv=' + (startABV - startABV*incSize) + ',' + (startABV + startABV*incSize);
  }
  finalStr += '&styleId=' + style;

  finalStr += '&key=2b2a80b4f6d8a3c8e50c75c82e6c8949';
  return finalStr;
}

var makeReq = function(style, startIBU, startABV, incSize) {
  count++;
  var incSize = incSize || .05;
  data = [];
  var reqStr = requestStrBuilder(style, startIBU, startABV, incSize);
  http({
    method: 'GET',
    url: reqString
  }).then(function(data) {
    var res;
    console.log(data);
    // if (data.totalResults > 5 && count < 5) {
    //   makeReq(style, startIBU, startABV, incSize/2)
    // } else if (data.totalResults === 0 && count < 5) {
    //   makeReq(style, startIBU, startABV, incSize * 2)
    // } else {
    //   results.push(data);
    // }
    res.json('you got beers!')
  })
}


      