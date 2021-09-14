(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/_object-sap.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/_object-sap.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/fuse.js/dist/fuse.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/fuse.js/dist/fuse.js"); } }(); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEIsbUJBQU8sQ0FBQyxnSEFBNEMsc0I7Ozs7Ozs7Ozs7Ozs7QUNBbEYsbUJBQU8sQ0FBQyx3SEFBMkM7QUFDbkQsaUJBQWlCLG1CQUFPLENBQUMsNEVBQXFCOzs7Ozs7Ozs7Ozs7OztBQ0Q5QztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvRUFBVztBQUNqQyxXQUFXLG1CQUFPLENBQUMsZ0VBQVM7QUFDNUIsWUFBWSxtQkFBTyxDQUFDLGtFQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwRUFBYztBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyw0RUFBZTtBQUM3QztBQUNBLG1CQUFPLENBQUMsNEVBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0MiLCJmaWxlIjoiMi4yNDk2OTRhZTBiMmE4MmY5M2U5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8qIVxuICogRnVzZS5qcyB2My4zLjAgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IEtpcm9sbG9zIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKiBcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkZ1c2VcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRnVzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGdXNlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkgPyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IEFycmF5LmlzQXJyYXkob2JqKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYml0YXBSZWdleFNlYXJjaCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgYml0YXBTZWFyY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIHBhdHRlcm5BbHBoYWJldCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBCaXRhcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQml0YXAocGF0dGVybiwgX3JlZikge1xuICAgIHZhciBfcmVmJGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb24gPSBfcmVmJGxvY2F0aW9uID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsb2NhdGlvbixcbiAgICAgICAgX3JlZiRkaXN0YW5jZSA9IF9yZWYuZGlzdGFuY2UsXG4gICAgICAgIGRpc3RhbmNlID0gX3JlZiRkaXN0YW5jZSA9PT0gdW5kZWZpbmVkID8gMTAwIDogX3JlZiRkaXN0YW5jZSxcbiAgICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgICAgdGhyZXNob2xkID0gX3JlZiR0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCA/IDAuNiA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgICBfcmVmJG1heFBhdHRlcm5MZW5ndGggPSBfcmVmLm1heFBhdHRlcm5MZW5ndGgsXG4gICAgICAgIG1heFBhdHRlcm5MZW5ndGggPSBfcmVmJG1heFBhdHRlcm5MZW5ndGggPT09IHVuZGVmaW5lZCA/IDMyIDogX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgICBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSA9IF9yZWYuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgX3JlZiR0b2tlblNlcGFyYXRvciA9IF9yZWYudG9rZW5TZXBhcmF0b3IsXG4gICAgICAgIHRva2VuU2VwYXJhdG9yID0gX3JlZiR0b2tlblNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gLyArL2cgOiBfcmVmJHRva2VuU2VwYXJhdG9yLFxuICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9IF9yZWYubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJG1pbk1hdGNoQ2hhckxlbmc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQml0YXApO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICBtYXhQYXR0ZXJuTGVuZ3RoOiBtYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlOiBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICB0b2tlblNlcGFyYXRvcjogdG9rZW5TZXBhcmF0b3IsXG4gICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLnBhdHRlcm4ubGVuZ3RoIDw9IG1heFBhdHRlcm5MZW5ndGgpIHtcbiAgICAgIHRoaXMucGF0dGVybkFscGhhYmV0ID0gcGF0dGVybkFscGhhYmV0KHRoaXMucGF0dGVybik7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJpdGFwLCBbe1xuICAgIGtleTogJ3NlYXJjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh0ZXh0KSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRXhhY3QgbWF0Y2hcbiAgICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgIG1hdGNoZWRJbmRpY2VzOiBbWzAsIHRleHQubGVuZ3RoIC0gMV1dXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gcGF0dGVybiBsZW5ndGggaXMgZ3JlYXRlciB0aGFuIHRoZSBtYWNoaW5lIHdvcmQgbGVuZ3RoLCBqdXN0IGRvIGEgYSByZWdleCBjb21wYXJpc29uXG4gICAgICB2YXIgX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbWF4UGF0dGVybkxlbmd0aCA9IF9vcHRpb25zLm1heFBhdHRlcm5MZW5ndGgsXG4gICAgICAgICAgdG9rZW5TZXBhcmF0b3IgPSBfb3B0aW9ucy50b2tlblNlcGFyYXRvcjtcblxuICAgICAgaWYgKHRoaXMucGF0dGVybi5sZW5ndGggPiBtYXhQYXR0ZXJuTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBiaXRhcFJlZ2V4U2VhcmNoKHRleHQsIHRoaXMucGF0dGVybiwgdG9rZW5TZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICAgIHZhciBfb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbG9jYXRpb24gPSBfb3B0aW9uczIubG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UgPSBfb3B0aW9uczIuZGlzdGFuY2UsXG4gICAgICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMyLnRocmVzaG9sZCxcbiAgICAgICAgICBmaW5kQWxsTWF0Y2hlcyA9IF9vcHRpb25zMi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfb3B0aW9uczIubWluTWF0Y2hDaGFyTGVuZ3RoO1xuXG4gICAgICByZXR1cm4gYml0YXBTZWFyY2godGV4dCwgdGhpcy5wYXR0ZXJuLCB0aGlzLnBhdHRlcm5BbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzOiBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCaXRhcDtcbn0oKTtcblxuLy8gbGV0IHggPSBuZXcgQml0YXAoXCJvZCBtbiB3YXJcIiwge30pXG4vLyBsZXQgcmVzdWx0ID0geC5zZWFyY2goXCJPbGQgTWFuJ3MgV2FyXCIpXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQpXG5cbm1vZHVsZS5leHBvcnRzID0gQml0YXA7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBkZWVwVmFsdWUgPSBmdW5jdGlvbiBkZWVwVmFsdWUob2JqLCBwYXRoLCBsaXN0KSB7XG4gIGlmICghcGF0aCkge1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBnb3R0ZW4gdG8gdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgIGxpc3QucHVzaChvYmopO1xuICB9IGVsc2Uge1xuICAgIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICAgIHZhciBmaXJzdFNlZ21lbnQgPSBwYXRoO1xuICAgIHZhciByZW1haW5pbmcgPSBudWxsO1xuXG4gICAgaWYgKGRvdEluZGV4ICE9PSAtMSkge1xuICAgICAgZmlyc3RTZWdtZW50ID0gcGF0aC5zbGljZSgwLCBkb3RJbmRleCk7XG4gICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gb2JqW2ZpcnN0U2VnbWVudF07XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFyZW1haW5pbmcgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykpIHtcbiAgICAgICAgbGlzdC5wdXNoKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgZGVlcFZhbHVlKHZhbHVlW2ldLCByZW1haW5pbmcsIGxpc3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlbWFpbmluZykge1xuICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgZGVlcFZhbHVlKHZhbHVlLCByZW1haW5pbmcsIGxpc3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gIHJldHVybiBkZWVwVmFsdWUob2JqLCBwYXRoLCBbXSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXRjaG1hc2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgbWluTWF0Y2hDaGFyTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gIHZhciBtYXRjaGVkSW5kaWNlcyA9IFtdO1xuICB2YXIgc3RhcnQgPSAtMTtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgaSA9IDA7XG5cbiAgZm9yICh2YXIgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBpIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRJbmRpY2VzO1xufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgdmFyIG1hc2sgPSB7fTtcbiAgdmFyIGxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtYXNrW3BhdHRlcm4uY2hhckF0KGkpXSA9IDA7XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGVuOyBfaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChfaSldIHw9IDEgPDwgbGVuIC0gX2kgLSAxO1xuICB9XG5cbiAgcmV0dXJuIG1hc2s7XG59O1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIFNQRUNJQUxfQ0hBUlNfUkVHRVggPSAvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRleHQsIHBhdHRlcm4pIHtcbiAgdmFyIHRva2VuU2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAvICsvZztcblxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4ucmVwbGFjZShTUEVDSUFMX0NIQVJTX1JFR0VYLCAnXFxcXCQmJykucmVwbGFjZSh0b2tlblNlcGFyYXRvciwgJ3wnKSk7XG4gIHZhciBtYXRjaGVzID0gdGV4dC5tYXRjaChyZWdleCk7XG4gIHZhciBpc01hdGNoID0gISFtYXRjaGVzO1xuICB2YXIgbWF0Y2hlZEluZGljZXMgPSBbXTtcblxuICBpZiAoaXNNYXRjaCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBtYXRjaGVzTGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBtYXRjaGVzTGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbaV07XG4gICAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFt0ZXh0LmluZGV4T2YobWF0Y2gpLCBtYXRjaC5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBUT0RPOiByZXZpc2l0IHRoaXMgc2NvcmVcbiAgICBzY29yZTogaXNNYXRjaCA/IDAuNSA6IDEsXG4gICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICBtYXRjaGVkSW5kaWNlczogbWF0Y2hlZEluZGljZXNcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBfcmVmKSB7XG4gIHZhciBfcmVmJGVycm9ycyA9IF9yZWYuZXJyb3JzLFxuICAgICAgZXJyb3JzID0gX3JlZiRlcnJvcnMgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGVycm9ycyxcbiAgICAgIF9yZWYkY3VycmVudExvY2F0aW9uID0gX3JlZi5jdXJyZW50TG9jYXRpb24sXG4gICAgICBjdXJyZW50TG9jYXRpb24gPSBfcmVmJGN1cnJlbnRMb2NhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkY3VycmVudExvY2F0aW9uLFxuICAgICAgX3JlZiRleHBlY3RlZExvY2F0aW9uID0gX3JlZi5leHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbiA9IF9yZWYkZXhwZWN0ZWRMb2NhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmJGRpc3RhbmNlID09PSB1bmRlZmluZWQgPyAxMDAgOiBfcmVmJGRpc3RhbmNlO1xuXG4gIHZhciBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuICB2YXIgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeTtcbiAgfVxuXG4gIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlO1xufTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBiaXRhcFNjb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBtYXRjaGVkSW5kaWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRleHQsIHBhdHRlcm4sIHBhdHRlcm5BbHBoYWJldCwgX3JlZikge1xuICB2YXIgX3JlZiRsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBsb2NhdGlvbiA9IF9yZWYkbG9jYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGxvY2F0aW9uLFxuICAgICAgX3JlZiRkaXN0YW5jZSA9IF9yZWYuZGlzdGFuY2UsXG4gICAgICBkaXN0YW5jZSA9IF9yZWYkZGlzdGFuY2UgPT09IHVuZGVmaW5lZCA/IDEwMCA6IF9yZWYkZGlzdGFuY2UsXG4gICAgICBfcmVmJHRocmVzaG9sZCA9IF9yZWYudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX3JlZiR0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCA/IDAuNiA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgX3JlZiRmaW5kQWxsTWF0Y2hlcyA9IF9yZWYuZmluZEFsbE1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IF9yZWYkZmluZEFsbE1hdGNoZXMgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9IF9yZWYubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gX3JlZiRtaW5NYXRjaENoYXJMZW5nID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRtaW5NYXRjaENoYXJMZW5nO1xuXG4gIHZhciBleHBlY3RlZExvY2F0aW9uID0gbG9jYXRpb247XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIHZhciB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIHZhciBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIHZhciBiZXN0TG9jYXRpb24gPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbik7XG5cbiAgdmFyIHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcblxuICAvLyBhIG1hc2sgb2YgdGhlIG1hdGNoZXNcbiAgdmFyIG1hdGNoTWFzayA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRMZW47IGkgKz0gMSkge1xuICAgIG1hdGNoTWFza1tpXSA9IDA7XG4gIH1cblxuICBpZiAoYmVzdExvY2F0aW9uICE9PSAtMSkge1xuICAgIHZhciBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiAwLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfSk7XG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcblxuICAgIC8vIFdoYXQgYWJvdXQgaW4gdGhlIG90aGVyIGRpcmVjdGlvbj8gKHNwZWVkIHVwKVxuICAgIGJlc3RMb2NhdGlvbiA9IHRleHQubGFzdEluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbiArIHBhdHRlcm5MZW4pO1xuXG4gICAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgIHZhciBfc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiAwLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGJlc3RMb2NhdGlvbixcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihfc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIHZhciBsYXN0Qml0QXJyID0gW107XG4gIHZhciBmaW5hbFNjb3JlID0gMTtcbiAgdmFyIGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIHZhciBtYXNrID0gMSA8PCBwYXR0ZXJuTGVuIC0gMTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgcGF0dGVybkxlbjsgX2kgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICB2YXIgYmluTWluID0gMDtcbiAgICB2YXIgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgdmFyIF9zY29yZTMgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBfaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3Njb3JlMyA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIHZhciBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICB2YXIgZmluaXNoID0gZmluZEFsbE1hdGNoZXMgPyB0ZXh0TGVuIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgdmFyIGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgX2kpIC0gMTtcblxuICAgIGZvciAodmFyIGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgdmFyIGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNoYXJNYXRjaCkge1xuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoYml0QXJyW2ogKyAxXSA8PCAxIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKF9pICE9PSAwKSB7XG4gICAgICAgIGJpdEFycltqXSB8PSAobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgICAgZXJyb3JzOiBfaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBleHBlY3RlZExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIHZhciBfc2NvcmUyID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IF9pICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdzY29yZScsIHNjb3JlLCBmaW5hbFNjb3JlKVxuXG4gICAgaWYgKF9zY29yZTIgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coJ0ZJTkFMIFNDT1JFJywgZmluYWxTY29yZSlcblxuICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIHNjb3JlOiBmaW5hbFNjb3JlID09PSAwID8gMC4wMDEgOiBmaW5hbFNjb3JlLFxuICAgIG1hdGNoZWRJbmRpY2VzOiBtYXRjaGVkSW5kaWNlcyhtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aClcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQml0YXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGRlZXBWYWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBGdXNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGdXNlKGxpc3QsIF9yZWYpIHtcbiAgICB2YXIgX3JlZiRsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uID0gX3JlZiRsb2NhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkbG9jYXRpb24sXG4gICAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWYkZGlzdGFuY2UgPT09IHVuZGVmaW5lZCA/IDEwMCA6IF9yZWYkZGlzdGFuY2UsXG4gICAgICAgIF9yZWYkdGhyZXNob2xkID0gX3JlZi50aHJlc2hvbGQsXG4gICAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyAwLjYgOiBfcmVmJHRocmVzaG9sZCxcbiAgICAgICAgX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoID0gX3JlZi5tYXhQYXR0ZXJuTGVuZ3RoLFxuICAgICAgICBtYXhQYXR0ZXJuTGVuZ3RoID0gX3JlZiRtYXhQYXR0ZXJuTGVuZ3RoID09PSB1bmRlZmluZWQgPyAzMiA6IF9yZWYkbWF4UGF0dGVybkxlbmd0aCxcbiAgICAgICAgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICBjYXNlU2Vuc2l0aXZlID0gX3JlZiRjYXNlU2Vuc2l0aXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgX3JlZiR0b2tlblNlcGFyYXRvciA9IF9yZWYudG9rZW5TZXBhcmF0b3IsXG4gICAgICAgIHRva2VuU2VwYXJhdG9yID0gX3JlZiR0b2tlblNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gLyArL2cgOiBfcmVmJHRva2VuU2VwYXJhdG9yLFxuICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIF9yZWYkbWluTWF0Y2hDaGFyTGVuZyA9IF9yZWYubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJG1pbk1hdGNoQ2hhckxlbmcsXG4gICAgICAgIF9yZWYkaWQgPSBfcmVmLmlkLFxuICAgICAgICBpZCA9IF9yZWYkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJGlkLFxuICAgICAgICBfcmVmJGtleXMgPSBfcmVmLmtleXMsXG4gICAgICAgIGtleXMgPSBfcmVmJGtleXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRrZXlzLFxuICAgICAgICBfcmVmJHNob3VsZFNvcnQgPSBfcmVmLnNob3VsZFNvcnQsXG4gICAgICAgIHNob3VsZFNvcnQgPSBfcmVmJHNob3VsZFNvcnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJHNob3VsZFNvcnQsXG4gICAgICAgIF9yZWYkZ2V0Rm4gPSBfcmVmLmdldEZuLFxuICAgICAgICBnZXRGbiA9IF9yZWYkZ2V0Rm4gPT09IHVuZGVmaW5lZCA/IGRlZXBWYWx1ZSA6IF9yZWYkZ2V0Rm4sXG4gICAgICAgIF9yZWYkc29ydEZuID0gX3JlZi5zb3J0Rm4sXG4gICAgICAgIHNvcnRGbiA9IF9yZWYkc29ydEZuID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlO1xuICAgIH0gOiBfcmVmJHNvcnRGbixcbiAgICAgICAgX3JlZiR0b2tlbml6ZSA9IF9yZWYudG9rZW5pemUsXG4gICAgICAgIHRva2VuaXplID0gX3JlZiR0b2tlbml6ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHRva2VuaXplLFxuICAgICAgICBfcmVmJG1hdGNoQWxsVG9rZW5zID0gX3JlZi5tYXRjaEFsbFRva2VucyxcbiAgICAgICAgbWF0Y2hBbGxUb2tlbnMgPSBfcmVmJG1hdGNoQWxsVG9rZW5zID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkbWF0Y2hBbGxUb2tlbnMsXG4gICAgICAgIF9yZWYkaW5jbHVkZU1hdGNoZXMgPSBfcmVmLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyA9IF9yZWYkaW5jbHVkZU1hdGNoZXMgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgX3JlZiRpbmNsdWRlU2NvcmUgPSBfcmVmLmluY2x1ZGVTY29yZSxcbiAgICAgICAgaW5jbHVkZVNjb3JlID0gX3JlZiRpbmNsdWRlU2NvcmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlU2NvcmUsXG4gICAgICAgIF9yZWYkdmVyYm9zZSA9IF9yZWYudmVyYm9zZSxcbiAgICAgICAgdmVyYm9zZSA9IF9yZWYkdmVyYm9zZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHZlcmJvc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnVzZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQ6IHRocmVzaG9sZCxcbiAgICAgIG1heFBhdHRlcm5MZW5ndGg6IG1heFBhdHRlcm5MZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmU6IGNhc2VTZW5zaXRpdmUsXG4gICAgICB0b2tlblNlcGFyYXRvcjogdG9rZW5TZXBhcmF0b3IsXG4gICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICBpbmNsdWRlTWF0Y2hlczogaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmU6IGluY2x1ZGVTY29yZSxcbiAgICAgIHNob3VsZFNvcnQ6IHNob3VsZFNvcnQsXG4gICAgICBnZXRGbjogZ2V0Rm4sXG4gICAgICBzb3J0Rm46IHNvcnRGbixcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICB0b2tlbml6ZTogdG9rZW5pemUsXG4gICAgICBtYXRjaEFsbFRva2VuczogbWF0Y2hBbGxUb2tlbnNcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGxpc3QpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZ1c2UsIFt7XG4gICAga2V5OiAnc2V0Q29sbGVjdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbGxlY3Rpb24obGlzdCkge1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlYXJjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaChwYXR0ZXJuKSB7XG4gICAgICB0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicgKyBwYXR0ZXJuICsgJ1wiJyk7XG5cbiAgICAgIHZhciBfcHJlcGFyZVNlYXJjaGVyczIgPSB0aGlzLl9wcmVwYXJlU2VhcmNoZXJzKHBhdHRlcm4pLFxuICAgICAgICAgIHRva2VuU2VhcmNoZXJzID0gX3ByZXBhcmVTZWFyY2hlcnMyLnRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgIGZ1bGxTZWFyY2hlciA9IF9wcmVwYXJlU2VhcmNoZXJzMi5mdWxsU2VhcmNoZXI7XG5cbiAgICAgIHZhciBfc2VhcmNoMiA9IHRoaXMuX3NlYXJjaCh0b2tlblNlYXJjaGVycywgZnVsbFNlYXJjaGVyKSxcbiAgICAgICAgICB3ZWlnaHRzID0gX3NlYXJjaDIud2VpZ2h0cyxcbiAgICAgICAgICByZXN1bHRzID0gX3NlYXJjaDIucmVzdWx0cztcblxuICAgICAgdGhpcy5fY29tcHV0ZVNjb3JlKHdlaWdodHMsIHJlc3VsdHMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNob3VsZFNvcnQpIHtcbiAgICAgICAgdGhpcy5fc29ydChyZXN1bHRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdChyZXN1bHRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcHJlcGFyZVNlYXJjaGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wcmVwYXJlU2VhcmNoZXJzKCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gICAgICB2YXIgdG9rZW5TZWFyY2hlcnMgPSBbXTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b2tlbml6ZSkge1xuICAgICAgICAvLyBUb2tlbml6ZSBvbiB0aGUgc2VwYXJhdG9yXG4gICAgICAgIHZhciB0b2tlbnMgPSBwYXR0ZXJuLnNwbGl0KHRoaXMub3B0aW9ucy50b2tlblNlcGFyYXRvcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICB0b2tlblNlYXJjaGVycy5wdXNoKG5ldyBCaXRhcCh0b2tlbnNbaV0sIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmdWxsU2VhcmNoZXIgPSBuZXcgQml0YXAocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHsgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLCBmdWxsU2VhcmNoZXI6IGZ1bGxTZWFyY2hlciB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZWFyY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VhcmNoKCkge1xuICAgICAgdmFyIHRva2VuU2VhcmNoZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBmdWxsU2VhcmNoZXIgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0O1xuICAgICAgdmFyIHJlc3VsdE1hcCA9IHt9O1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgICAgLy8gQ2hlY2sgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QsIGlmIGl0J3MgYSBzdHJpbmcsIHRoZW4gd2UgYXNzdW1lXG4gICAgICAvLyB0aGF0IGV2ZXJ5IGl0ZW0gaW4gdGhlIGxpc3QgaXMgYWxzbyBhIHN0cmluZywgYW5kIHRodXMgaXQncyBhIGZsYXR0ZW5lZCBhcnJheS5cbiAgICAgIGlmICh0eXBlb2YgbGlzdFswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGl0ZW1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLl9hbmFseXplKHtcbiAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICB2YWx1ZTogbGlzdFtpXSxcbiAgICAgICAgICAgIHJlY29yZDogaSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgcmVzdWx0TWFwOiByZXN1bHRNYXAsXG4gICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgICAgZnVsbFNlYXJjaGVyOiBmdWxsU2VhcmNoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHdlaWdodHM6IG51bGwsIHJlc3VsdHM6IHJlc3VsdHMgfTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgZmlyc3QgaXRlbSBpcyBhbiBPYmplY3QgKGhvcGVmdWxseSksIGFuZCB0aHVzIHRoZSBzZWFyY2hpbmdcbiAgICAgIC8vIGlzIGRvbmUgb24gdGhlIHZhbHVlcyBvZiB0aGUga2V5cyBvZiBlYWNoIGl0ZW0uXG4gICAgICB2YXIgd2VpZ2h0cyA9IHt9O1xuICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gbGlzdC5sZW5ndGg7IF9pIDwgX2xlbjsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IGxpc3RbX2ldO1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBrZXlzTGVuID0gdGhpcy5vcHRpb25zLmtleXMubGVuZ3RoOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHRoaXMub3B0aW9ucy5rZXlzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgd2VpZ2h0c1trZXkubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHdlaWdodDogMSAtIGtleS53ZWlnaHQgfHwgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChrZXkud2VpZ2h0IDw9IDAgfHwga2V5LndlaWdodCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgd2VpZ2h0IGhhcyB0byBiZSA+IDAgYW5kIDw9IDEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleSA9IGtleS5uYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWlnaHRzW2tleV0gPSB7XG4gICAgICAgICAgICAgIHdlaWdodDogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9hbmFseXplKHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMub3B0aW9ucy5nZXRGbihpdGVtLCBrZXkpLFxuICAgICAgICAgICAgcmVjb3JkOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IF9pXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgcmVzdWx0TWFwOiByZXN1bHRNYXAsXG4gICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgdG9rZW5TZWFyY2hlcnM6IHRva2VuU2VhcmNoZXJzLFxuICAgICAgICAgICAgZnVsbFNlYXJjaGVyOiBmdWxsU2VhcmNoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyB3ZWlnaHRzOiB3ZWlnaHRzLCByZXN1bHRzOiByZXN1bHRzIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2FuYWx5emUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5hbHl6ZShfcmVmMiwgX3JlZjMpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXG4gICAgICAgICAgX3JlZjIkYXJyYXlJbmRleCA9IF9yZWYyLmFycmF5SW5kZXgsXG4gICAgICAgICAgYXJyYXlJbmRleCA9IF9yZWYyJGFycmF5SW5kZXggPT09IHVuZGVmaW5lZCA/IC0xIDogX3JlZjIkYXJyYXlJbmRleCxcbiAgICAgICAgICB2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuICAgICAgICAgIHJlY29yZCA9IF9yZWYyLnJlY29yZCxcbiAgICAgICAgICBpbmRleCA9IF9yZWYyLmluZGV4O1xuICAgICAgdmFyIF9yZWYzJHRva2VuU2VhcmNoZXJzID0gX3JlZjMudG9rZW5TZWFyY2hlcnMsXG4gICAgICAgICAgdG9rZW5TZWFyY2hlcnMgPSBfcmVmMyR0b2tlblNlYXJjaGVycyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmMyR0b2tlblNlYXJjaGVycyxcbiAgICAgICAgICBfcmVmMyRmdWxsU2VhcmNoZXIgPSBfcmVmMy5mdWxsU2VhcmNoZXIsXG4gICAgICAgICAgZnVsbFNlYXJjaGVyID0gX3JlZjMkZnVsbFNlYXJjaGVyID09PSB1bmRlZmluZWQgPyBbXSA6IF9yZWYzJGZ1bGxTZWFyY2hlcixcbiAgICAgICAgICBfcmVmMyRyZXN1bHRNYXAgPSBfcmVmMy5yZXN1bHRNYXAsXG4gICAgICAgICAgcmVzdWx0TWFwID0gX3JlZjMkcmVzdWx0TWFwID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYzJHJlc3VsdE1hcCxcbiAgICAgICAgICBfcmVmMyRyZXN1bHRzID0gX3JlZjMucmVzdWx0cyxcbiAgICAgICAgICByZXN1bHRzID0gX3JlZjMkcmVzdWx0cyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmMyRyZXN1bHRzO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dmFsdWV0IGNhbiBiZSBzZWFyY2hlZFxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICB2YXIgYXZlcmFnZVNjb3JlID0gLTE7XG4gICAgICB2YXIgbnVtVGV4dE1hdGNoZXMgPSAwO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9sb2coJ1xcbktleTogJyArIChrZXkgPT09ICcnID8gJy0nIDoga2V5KSk7XG5cbiAgICAgICAgdmFyIG1haW5TZWFyY2hSZXN1bHQgPSBmdWxsU2VhcmNoZXIuc2VhcmNoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fbG9nKCdGdWxsIHRleHQ6IFwiJyArIHZhbHVlICsgJ1wiLCBzY29yZTogJyArIG1haW5TZWFyY2hSZXN1bHQuc2NvcmUpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9rZW5pemUpIHtcbiAgICAgICAgICB2YXIgd29yZHMgPSB2YWx1ZS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpO1xuICAgICAgICAgIHZhciBzY29yZXMgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5TZWFyY2hlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciB0b2tlblNlYXJjaGVyID0gdG9rZW5TZWFyY2hlcnNbaV07XG5cbiAgICAgICAgICAgIHRoaXMuX2xvZygnXFxuUGF0dGVybjogXCInICsgdG9rZW5TZWFyY2hlci5wYXR0ZXJuICsgJ1wiJyk7XG5cbiAgICAgICAgICAgIC8vIGxldCB0b2tlblNjb3JlcyA9IFtdXG4gICAgICAgICAgICB2YXIgaGFzTWF0Y2hJblRleHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3b3Jkcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICB2YXIgd29yZCA9IHdvcmRzW2pdO1xuICAgICAgICAgICAgICB2YXIgdG9rZW5TZWFyY2hSZXN1bHQgPSB0b2tlblNlYXJjaGVyLnNlYXJjaCh3b3JkKTtcbiAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgICBpZiAodG9rZW5TZWFyY2hSZXN1bHQuaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIG9ialt3b3JkXSA9IHRva2VuU2VhcmNoUmVzdWx0LnNjb3JlO1xuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2hJblRleHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3Jlcy5wdXNoKHRva2VuU2VhcmNoUmVzdWx0LnNjb3JlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbd29yZF0gPSAxO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICBzY29yZXMucHVzaCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fbG9nKCdUb2tlbjogXCInICsgd29yZCArICdcIiwgc2NvcmU6ICcgKyBvYmpbd29yZF0pO1xuICAgICAgICAgICAgICAvLyB0b2tlblNjb3Jlcy5wdXNoKG9iailcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhhc01hdGNoSW5UZXh0KSB7XG4gICAgICAgICAgICAgIG51bVRleHRNYXRjaGVzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXZlcmFnZVNjb3JlID0gc2NvcmVzWzBdO1xuICAgICAgICAgIHZhciBzY29yZXNMZW4gPSBzY29yZXMubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDE7IF9pMiA8IHNjb3Jlc0xlbjsgX2kyICs9IDEpIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VTY29yZSArPSBzY29yZXNbX2kyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXZlcmFnZVNjb3JlID0gYXZlcmFnZVNjb3JlIC8gc2NvcmVzTGVuO1xuXG4gICAgICAgICAgdGhpcy5fbG9nKCdUb2tlbiBzY29yZSBhdmVyYWdlOicsIGF2ZXJhZ2VTY29yZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmluYWxTY29yZSA9IG1haW5TZWFyY2hSZXN1bHQuc2NvcmU7XG4gICAgICAgIGlmIChhdmVyYWdlU2NvcmUgPiAtMSkge1xuICAgICAgICAgIGZpbmFsU2NvcmUgPSAoZmluYWxTY29yZSArIGF2ZXJhZ2VTY29yZSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9nKCdTY29yZSBhdmVyYWdlOicsIGZpbmFsU2NvcmUpO1xuXG4gICAgICAgIHZhciBjaGVja1RleHRNYXRjaGVzID0gdGhpcy5vcHRpb25zLnRva2VuaXplICYmIHRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2VucyA/IG51bVRleHRNYXRjaGVzID49IHRva2VuU2VhcmNoZXJzLmxlbmd0aCA6IHRydWU7XG5cbiAgICAgICAgdGhpcy5fbG9nKCdcXG5DaGVjayBNYXRjaGVzOiAnICsgY2hlY2tUZXh0TWF0Y2hlcyk7XG5cbiAgICAgICAgLy8gSWYgYSBtYXRjaCBpcyBmb3VuZCwgYWRkIHRoZSBpdGVtIHRvIDxyYXdSZXN1bHRzPiwgaW5jbHVkaW5nIGl0cyBzY29yZVxuICAgICAgICBpZiAoKGV4aXN0cyB8fCBtYWluU2VhcmNoUmVzdWx0LmlzTWF0Y2gpICYmIGNoZWNrVGV4dE1hdGNoZXMpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0cyBpbiBvdXIgcmVzdWx0c1xuICAgICAgICAgIHZhciBleGlzdGluZ1Jlc3VsdCA9IHJlc3VsdE1hcFtpbmRleF07XG4gICAgICAgICAgaWYgKGV4aXN0aW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIGxvd2VzdCBzY29yZVxuICAgICAgICAgICAgLy8gZXhpc3RpbmdSZXN1bHQuc2NvcmUsIGJpdGFwUmVzdWx0LnNjb3JlXG4gICAgICAgICAgICBleGlzdGluZ1Jlc3VsdC5vdXRwdXQucHVzaCh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBhcnJheUluZGV4OiBhcnJheUluZGV4LFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIHNjb3JlOiBmaW5hbFNjb3JlLFxuICAgICAgICAgICAgICBtYXRjaGVkSW5kaWNlczogbWFpblNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgcmF3IHJlc3VsdCBsaXN0XG4gICAgICAgICAgICByZXN1bHRNYXBbaW5kZXhdID0ge1xuICAgICAgICAgICAgICBpdGVtOiByZWNvcmQsXG4gICAgICAgICAgICAgIG91dHB1dDogW3tcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBhcnJheUluZGV4OiBhcnJheUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzY29yZTogZmluYWxTY29yZSxcbiAgICAgICAgICAgICAgICBtYXRjaGVkSW5kaWNlczogbWFpblNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlc1xuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdE1hcFtpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBfaTMgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IF9pMyA8IGxlbjsgX2kzICs9IDEpIHtcbiAgICAgICAgICB0aGlzLl9hbmFseXplKHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgYXJyYXlJbmRleDogX2kzLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlW19pM10sXG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHJlc3VsdE1hcDogcmVzdWx0TWFwLFxuICAgICAgICAgICAgcmVzdWx0czogcmVzdWx0cyxcbiAgICAgICAgICAgIHRva2VuU2VhcmNoZXJzOiB0b2tlblNlYXJjaGVycyxcbiAgICAgICAgICAgIGZ1bGxTZWFyY2hlcjogZnVsbFNlYXJjaGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY29tcHV0ZVNjb3JlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbXB1dGVTY29yZSh3ZWlnaHRzLCByZXN1bHRzKSB7XG4gICAgICB0aGlzLl9sb2coJ1xcblxcbkNvbXB1dGluZyBzY29yZTpcXG4nKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHJlc3VsdHNbaV0ub3V0cHV0O1xuICAgICAgICB2YXIgc2NvcmVMZW4gPSBvdXRwdXQubGVuZ3RoO1xuXG4gICAgICAgIHZhciBjdXJyU2NvcmUgPSAxO1xuICAgICAgICB2YXIgYmVzdFNjb3JlID0gMTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNjb3JlTGVuOyBqICs9IDEpIHtcbiAgICAgICAgICB2YXIgd2VpZ2h0ID0gd2VpZ2h0cyA/IHdlaWdodHNbb3V0cHV0W2pdLmtleV0ud2VpZ2h0IDogMTtcbiAgICAgICAgICB2YXIgc2NvcmUgPSB3ZWlnaHQgPT09IDEgPyBvdXRwdXRbal0uc2NvcmUgOiBvdXRwdXRbal0uc2NvcmUgfHwgMC4wMDE7XG4gICAgICAgICAgdmFyIG5TY29yZSA9IHNjb3JlICogd2VpZ2h0O1xuXG4gICAgICAgICAgaWYgKHdlaWdodCAhPT0gMSkge1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oYmVzdFNjb3JlLCBuU2NvcmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXRbal0ublNjb3JlID0gblNjb3JlO1xuICAgICAgICAgICAgY3VyclNjb3JlICo9IG5TY29yZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzW2ldLnNjb3JlID0gYmVzdFNjb3JlID09PSAxID8gY3VyclNjb3JlIDogYmVzdFNjb3JlO1xuXG4gICAgICAgIHRoaXMuX2xvZyhyZXN1bHRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc29ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zb3J0KHJlc3VsdHMpIHtcbiAgICAgIHRoaXMuX2xvZygnXFxuXFxuU29ydGluZy4uLi4nKTtcbiAgICAgIHJlc3VsdHMuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZm9ybWF0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Zvcm1hdChyZXN1bHRzKSB7XG4gICAgICB2YXIgZmluYWxPdXRwdXQgPSBbXTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgIHRoaXMuX2xvZygnXFxuXFxuT3V0cHV0OlxcblxcbicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy5wdXNoKGZ1bmN0aW9uIChyZXN1bHQsIGRhdGEpIHtcbiAgICAgICAgICB2YXIgb3V0cHV0ID0gcmVzdWx0Lm91dHB1dDtcbiAgICAgICAgICBkYXRhLm1hdGNoZXMgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvdXRwdXQubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gb3V0cHV0W2ldO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5tYXRjaGVkSW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgIGluZGljZXM6IGl0ZW0ubWF0Y2hlZEluZGljZXMsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgIG9iai5rZXkgPSBpdGVtLmtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdhcnJheUluZGV4JykgJiYgaXRlbS5hcnJheUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgb2JqLmFycmF5SW5kZXggPSBpdGVtLmFycmF5SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5jbHVkZVNjb3JlKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy5wdXNoKGZ1bmN0aW9uIChyZXN1bHQsIGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pZCkge1xuICAgICAgICAgIHJlc3VsdC5pdGVtID0gdGhpcy5vcHRpb25zLmdldEZuKHJlc3VsdC5pdGVtLCB0aGlzLm9wdGlvbnMuaWQpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgZmluYWxPdXRwdXQucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICBpdGVtOiByZXN1bHQuaXRlbVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBfbGVuMiA9IHRyYW5zZm9ybWVycy5sZW5ndGg7IGogPCBfbGVuMjsgaiArPSAxKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXJzW2pdKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmaW5hbE91dHB1dC5wdXNoKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmluYWxPdXRwdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2xvZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2coKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgICAgdmFyIF9jb25zb2xlO1xuXG4gICAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRnVzZTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdXNlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1c2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==