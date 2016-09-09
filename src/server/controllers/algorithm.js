var graphs = require('../graph/node.js');  
var aleGraph = graphs.aleGraph; 
var lagerGraph = graphs.lagerGraph; 
var styleFamilies = require('../../../beerdata/styleFamilies.js')


// Current Input: Hard Coded Data, result of 5 'GET' requests from the same beer category. 
// All pale ale category = (25, [25, 29, 32, 33, 37])
// styleId breakdown = [25, 25, 29, 32, 33]; 
var beerList = require('../../../beerdata/multipleExample.js'); 
var styleFamilyId = 'cdkpyx'; // -> Refers to the paleAle category 
var styleFamily = [25, 29, 32, 33, 37]; // -> All styles related to paleAle

// Desired Input: Access User's Beer List, includes Beer ID, ibu, abv, srm (calculated from average if neccesary)
// var beerList = User.find({})..... 

// Ideal Input/Idea: Can we calculate and store the results of running the algorithm everytime a user adds the beer?
// Seems like it may be a cleaner way to store a specific set of values when everything is available in system. 


var algorithm = function(beerList) {
	var beerListStylesId = beerList.map((beer) => beer.styleId); 

	// Step 1. Determine the Specific Case: 
	var algorithmCase = categoryConfirm(styleFamily, beerListStylesId); 


	// Step 2. Calculate Query String Values (styles, abv, ibu, srm)
	//////
	// 2.1 Weighted Preference for Styles 
	// -> Weighted preference for results based on styleIds from beer list 
	///////

	// selectionsPerStyle is an object that will contain the number of beers will select per 
	// a query for a given styleId 
	var selectionsPerStyle = {}
	// Total list of recommendations that we pull 1 result from
	var recommendationListLength = 15; 
	// The ratio that we prefer styleIds the user has previously selected
	var selectedRatio = .80; 
	// This 20% will allow users to see styles they have not previously chosen (ie styleId=37); 
	var unselectedRatio = .20; 

	var total = beerListStylesId.length; 
	var unselected = 0; 

	// Count the frequency a given styleId shows up in the users beers list.
	beerListStylesId.forEach((style) => {
		selectionsPerStyle[style] = selectionsPerStyle[style] + 1 || 1; 
	}); 

	// Add the styleIds that have never been selected to the selections object:
	styleFamily.forEach((style) => {
		if (selectionsPerStyle[style] === undefined) {
			selectionsPerStyle[style] = 0; 
			// selectionsPerStyle['unselected'] = selectionsPerStyle['unselected'] + 1 || 1; 
			unselected++; 
		}; 
	}); 

	var styleKeys = Object.keys(selectionsPerStyle); 
	styleKeys.forEach((key) => {
		var styleCount = selectionsPerStyle[key]; 
		var stylePercent = styleCount / total; 
		selectionsPerStyle[key] = selectionPerStyleCalculator(stylePercent, recommendationListLength, selectedRatio, unselected); 
	})

	beerList_avgABV = beerList.map((beer) => {
		return propertyFinder('abv', beer); 
	})
	var avgABV = avgCalculator(beerList_avgABV); 	

	beerList_avgIBU = beerList.map((beer) => {
		return propertyFinder('ibu', beer); 
	})
	var avgIBU = avgCalculator(beerList_avgIBU); 


	beerList_avgSRM = beerList.map((beer) => {
		return propertyFinder('srm', beer); 
	})
	var avgSRM = avgCalculator(beerList_avgSRM); 


	//////
	// 3 Algorithm Result 
	///////

	var algorithmResult = {}; 
	algorithmResult.styles = styleKeys; 
	algorithmResult.styleCount = selectionsPerStyle; 
	algorithmResult.abv = avgABV
	algorithmResult.ibu = avgIBU
	algorithmResult.srm = avgSRM



	//////// COMPARE TO CURRENT NODES ////////
	console.log(algorithmResult); 

	currentNodesObjects = beerList[0].style; 
	currentNodeCharacteristics = calculateStyleCharacteristics(currentNodesObjects); 
	console.log(currentNodeCharacteristics); 

	comparisonData = calculateComparison(algorithmResult, currentNodeCharacteristics); 

	console.log(comparisonData); 

	currentNode = aleGraph.storage[25]; 
	// console.log(currentNode);

	var adjacentNodes = calculateComparableNodes(comparisonData, currentNode); 
	console.log(adjacentNodes); 

	return algorithmResult; 
	
}; 

var getBeerOverlapScores = function(beerList) {
	stylesScores = {};
	for (var i = 0; i < beerList.length; i++) {
		var currentNode = getCurrentNode(beerList[i]);
		var adjFams = currentNode.allAdjacent();
		console.log('adjFams: ', adjFams);
		for (var j = 0; j < adjFams.length; j++) {
			if (adjFams[j] !== undefined && stylesScores[adjFams[j]] === undefined) {
				stylesScores[adjFams[j]] = 1;
			} else if (adjFams[j] !== undefined) {
				stylesScores[adjFams[j]]++;
			}
		}
	}
	console.log('Scores: ', stylesScores);
	return stylesScores;
}

var getCurrentNode = function(beer) {
	for (var i = 0; i < aleGraph.nodes.length; i++) {
		if (beer.styleFamilyId === aleGraph.nodes[i].styleId) {
			return aleGraph.nodes[i]
		}
	}
	for (var i = 0; i < lagerGraph.nodes.length; i++) {
		if (beer.styleFamilyId === lagerGraph.nodes[i].styleId) {
			return lagerGraph.nodes[i]
		}
	}
}

var categoryConfirm = function(styleFamily, styleIdArray) {
	// Naive approach for looking through array of styles in users beer list
	// and checking if they all belong to the same styleFamily. 
	styleIdArray.forEach((styleId) => {
		if (styleFamily.indexOf(styleId) === -1) {
			return false
		}
	})
	return 1; 
};  

var selectionPerStyleCalculator = function(stylePercent, listLength, ratio, unselectedCount) {
	if (stylePercent > 0) {
		return Math.floor(ratio * listLength * stylePercent); 
	} else {
		return Math.floor((1-ratio) * listLength / unselectedCount); 
	}
}

var avgCalculator = function(propertyArray) {
	var len = propertyArray.length; 
	return propertyArray.reduce((a,b) => a + b) / len; 
}; 

var calculateStyleCharacteristics = function (beerObject) {
	var characteristics = {}; 
	characteristics['ibu'] = stylePropertyFinder('ibu', beerObject); 
	characteristics['srm'] = stylePropertyFinder('srm', beerObject); 
 	return characteristics; 
}

var propertyFinder = function(property, beerDataObject) {
	var min = property + 'Min'; 
	var max = property + 'Max'; 
	if (beerDataObject[property] !== undefined) {
		return parseFloat(beerDataObject[property]); 
	} else if (beerDataObject.style[min] !== undefined && beerDataObject.style[max] !== undefined) {
		return ( (parseFloat(beerDataObject.style[min]) + parseFloat(beerDataObject.style[max])) / 2 ); 
	} else {
		return null; 
	}
} 

var stylePropertyFinder = function(property, beerDataObject) {
	var min = property + 'Min'; 
	var max = property + 'Max'; 
    if (beerDataObject[min] !== undefined && beerDataObject[max] !== undefined) {
		return ( (parseFloat(beerDataObject[min]) + parseFloat(beerDataObject[max])) / 2 ); 
	} else {
		return null; 
	}
} 

var calculateComparison = function(algorithmObject, nodeObject) {
	var characteristicKeys = Object.keys(nodeObject); 
	var comparisonResult = {}; 
	comparisonResult['increase'] = []; 
	comparisonResult['decrease'] = []; 
	characteristicKeys.forEach((key) => {
		comparisonResult[key] = (algorithmObject[key] - nodeObject[key]).toFixed(2);
		var percent = (comparisonResult[key] / nodeObject[key]).toFixed(2); 
		comparisonResult[key + 'Percent'] = percent; 
		if (percent >= .15) {
			comparisonResult.increase.push(key); 
		} else if ( percent <= -.15) {
			comparisonResult.decrease.push(key);
		}
	}); 
	return comparisonResult; 
}

var calculateComparableNodes = function(comparisonObject, node) {
	var increase = comparisonObject.increase; 
	var decrease = comparisonObject.decrease;
	var comparableNodes = []; 

	increase.forEach(function(char) {
		console.log(char); 
		if (char === 'ibu') {
			comparableNodes.push(node.moreIBU.styleId || null); 
		} else {
			comparableNodes.push(node.moreSRM.styleId || null); 
		}
	}); 

	decrease.forEach(function(char) {
		if (char === 'ibu') {
			comparableNodes.push(node.lessIBU.styleId || null); 
		} else {
			comparableNodes.push(node.lessSRM.styleId || null); 
		}
	}); 

	return comparableNodes; 
}

module.exports = algorithm; 