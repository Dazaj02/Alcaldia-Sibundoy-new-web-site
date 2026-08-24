(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["signalR"] = factory();
	else
		root["signalR"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["DefaultHttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnectionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["MessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["NullLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["JsonHubProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["Subject"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This is where we add any polyfills we'll need for the browser. It is the entry module for browser-specific builds.

// Copy from Array.prototype into Uint8Array to polyfill on IE. It's OK because the implementations of indexOf and slice use properties
// that exist on Uint8Array with the same name, and JavaScript is magic.
// We make them 'writable' because the Buffer polyfill messes with it as well.
if (!Uint8Array.prototype.indexOf) {
    Object.defineProperty(Uint8Array.prototype, "indexOf", {
        value: Array.prototype.indexOf,
        writable: true,
    });
}
if (!Uint8Array.prototype.slice) {
    Object.defineProperty(Uint8Array.prototype, "slice", {
        // wrap the slice in Uint8Array so it looks like a Uint8Array.slice call
        // tslint:disable-next-line:object-literal-shorthand
        value: function (start, end) { return new Uint8Array(Array.prototype.slice.call(this, start, end)); },
        writable: true,
    });
}
if (!Uint8Array.prototype.forEach) {
    Object.defineProperty(Uint8Array.prototype, "forEach", {
        value: Array.prototype.forEach,
        writable: true,
    });
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.2+97478eb6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vertx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$2) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$2 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$2.prototype.then = then;
Promise$2.all = all;
Promise$2.race = race;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

/*global self*/
function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill;
Promise$2.Promise = Promise$2;

Promise$2.polyfill();

return Promise$2;

})));



//# sourceMappingURL=es6-promise.auto.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]; });

/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]; });

/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]; });

/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]; });

/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]; });

/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]; });

/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]; });

/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]; });

/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]; });

/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "3.1.3";













/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

/** Error thrown when an action is aborted. */
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function AbortError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return AbortError;
}(Error));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    HttpClient.prototype.getCookieString = function (url) {
        return "";
    };
    return HttpClient;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return DefaultHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof XMLHttpRequest !== "undefined") {
            _this.httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__["XhrHttpClient"](logger);
        }
        else {
            _this.httpClient = new _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__["NodeHttpClient"](logger);
        }
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this.httpClient.send(request);
    };
    DefaultHttpClient.prototype.getCookieString = function (url) {
        return this.httpClient.getCookieString(url);
    };
    return DefaultHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeHttpClient", function() { return NodeHttpClient; });
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This is an empty implementation of the NodeHttpClient that will be included in browser builds so the output file will be smaller

/** @private */
var NodeHttpClient = /** @class */ (function (_super) {
    __extends(NodeHttpClient, _super);
    // @ts-ignore: Need ILogger to compile, but unused variables generate errors
    function NodeHttpClient(logger) {
        return _super.call(this) || this;
    }
    NodeHttpClient.prototype.send = function () {
        return Promise.reject(new Error("If using Node either provide an XmlHttpRequest polyfill or consume the cjs or esm script instead of the browser/signalr.js one."));
    };
    return NodeHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrHttpClient", function() { return XhrHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var XhrHttpClient = /** @class */ (function (_super) {
    __extends(XhrHttpClient, _super);
    function XhrHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    XhrHttpClient.prototype.send = function (request) {
        var _this = this;
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            var headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach(function (header) {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
            };
            xhr.send(request.content || "");
        });
    };
    return XhrHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return HubConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return HubConnection; });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState["Disconnected"] = "Disconnected";
    /** The hub connection is connecting. */
    HubConnectionState["Connecting"] = "Connecting";
    /** The hub connection is connected. */
    HubConnectionState["Connected"] = "Connected";
    /** The hub connection is disconnecting. */
    HubConnectionState["Disconnecting"] = "Disconnecting";
    /** The hub connection is reconnecting. */
    HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol, reconnectPolicy) {
        var _this = this;
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.reconnectPolicy = reconnectPolicy;
        this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.reconnectingCallbacks = [];
        this.reconnectedCallbacks = [];
        this.invocationId = 0;
        this.receivedHandshakeResponse = false;
        this.connectionState = HubConnectionState.Disconnected;
        this.connectionStarted = false;
        this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy);
    };
    Object.defineProperty(HubConnection.prototype, "state", {
        /** Indicates the state of the {@link HubConnection} to the server. */
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubConnection.prototype, "connectionId", {
        /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
         *  in the disconnected state or if the negotiation step was skipped.
         */
        get: function () {
            return this.connection ? (this.connection.connectionId || null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubConnection.prototype, "baseUrl", {
        /** Indicates the url of the {@link HubConnection} to the server. */
        get: function () {
            return this.connection.baseUrl || "";
        },
        /**
         * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
         * Reconnecting states.
         * @param {string} url The url to connect to.
         */
        set: function (url) {
            if (this.connectionState !== HubConnectionState.Disconnected && this.connectionState !== HubConnectionState.Reconnecting) {
                throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
            }
            if (!url) {
                throw new Error("The HubConnection url must be a valid url.");
            }
            this.connection.baseUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        this.startPromise = this.startWithStateTransitions();
        return this.startPromise;
    };
    HubConnection.prototype.startWithStateTransitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState !== HubConnectionState.Disconnected) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = HubConnectionState.Connecting;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternal()];
                    case 2:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.connectionStarted = true;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection connected successfully.");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.connectionState = HubConnectionState.Disconnected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection failed to start successfully because of error '" + e_1 + "'.");
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.startInternal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakePromise, handshakeRequest, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stopDuringStartError = undefined;
                        this.receivedHandshakeResponse = false;
                        handshakePromise = new Promise(function (resolve, reject) {
                            _this.handshakeResolver = resolve;
                            _this.handshakeRejecter = reject;
                        });
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 3:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.resetTimeoutPeriod();
                        this.resetKeepAliveInterval();
                        return [4 /*yield*/, handshakePromise];
                    case 4:
                        _a.sent();
                        // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
                        // being rejected on close, because this continuation can run after both the handshake completed successfully
                        // and the connection was closed.
                        if (this.stopDuringStartError) {
                            // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
                            // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
                            // will cause the calling continuation to get scheduled to run later.
                            throw this.stopDuringStartError;
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Hub handshake failed with error '" + e_2 + "' during start(). Stopping HubConnection.");
                        this.cleanupTimeout();
                        this.cleanupPingTimer();
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        return [4 /*yield*/, this.connection.stop(e_2)];
                    case 6:
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        _a.sent();
                        throw e_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startPromise, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPromise = this.startPromise;
                        this.stopPromise = this.stopInternal();
                        return [4 /*yield*/, this.stopPromise];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        // Awaiting undefined continues immediately
                        return [4 /*yield*/, startPromise];
                    case 3:
                        // Awaiting undefined continues immediately
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.stopInternal = function (error) {
        if (this.connectionState === HubConnectionState.Disconnected) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
            return Promise.resolve();
        }
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
            return this.stopPromise;
        }
        this.connectionState = HubConnectionState.Disconnecting;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
        if (this.reconnectDelayHandle) {
            // We're in a reconnect delay which means the underlying connection is currently already stopped.
            // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
            // fire the onclose callbacks.
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this.reconnectDelayHandle);
            this.reconnectDelayHandle = undefined;
            this.completeClose();
            return Promise.resolve();
        }
        this.cleanupTimeout();
        this.cleanupPingTimer();
        this.stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
        // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
        // or the onclose callback is invoked. The onclose callback will transition the HubConnection
        // to the disconnected state if need be before HttpConnection.stop() completes.
        return this.connection.stop(error);
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createStreamInvocation(methodName, args, streamIds);
        var promiseQueue;
        var subject = new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        subject.cancelCallback = function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
                return _this.sendWithProtocol(cancelInvocation);
            });
        };
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        promiseQueue = this.sendWithProtocol(invocationDescriptor)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        this.launchStreams(streams, promiseQueue);
        return subject;
    };
    HubConnection.prototype.sendMessage = function (message) {
        this.resetKeepAliveInterval();
        return this.connection.send(message);
    };
    /**
     * Sends a js object to the server.
     * @param message The js object to serialize and send.
     */
    HubConnection.prototype.sendWithProtocol = function (message) {
        return this.sendMessage(this.protocol.writeMessage(message));
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var sendPromise = this.sendWithProtocol(this.createInvocation(methodName, args, true, streamIds));
        this.launchStreams(streams, sendPromise);
        return sendPromise;
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createInvocation(methodName, args, false, streamIds);
        var p = new Promise(function (resolve, reject) {
            // invocationId will always have a value for a non-blocking invocation
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error("Unexpected message type: " + invocationEvent.type));
                    }
                }
            };
            var promiseQueue = _this.sendWithProtocol(invocationDescriptor)
                .catch(function (e) {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
            _this.launchStreams(streams, promiseQueue);
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection starts reconnecting.
     *
     * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
     */
    HubConnection.prototype.onreconnecting = function (callback) {
        if (callback) {
            this.reconnectingCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection successfully reconnects.
     *
     * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
     */
    HubConnection.prototype.onreconnected = function (callback) {
        if (callback) {
            this.reconnectedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                        var error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                        if (message.allowReconnect === true) {
                            // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                            // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                            // tslint:disable-next-line:no-floating-promises
                            this.connection.stop(error);
                        }
                        else {
                            // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                            this.stopPromise = this.stopInternal(error);
                        }
                        break;
                    default:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type + ".");
                        break;
                }
            }
        }
        this.resetTimeoutPeriod();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
        }
        this.handshakeResolver();
        return remainingData;
    };
    HubConnection.prototype.resetKeepAliveInterval = function () {
        var _this = this;
        this.cleanupPingTimer();
        this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        // We don't care about the error. It should be seen elsewhere in the client.
                        // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                        this.cleanupPingTimer();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, this.keepAliveIntervalInMilliseconds);
    };
    HubConnection.prototype.resetTimeoutPeriod = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            try {
                methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "A callback for the method " + invocationMessage.target.toLowerCase() + " threw error '" + e + "'.");
            }
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                // We don't want to wait on the stop itself.
                this.stopPromise = this.stopInternal(new Error(message));
            }
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this.connectionState + ".");
        // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
        this.stopDuringStartError = this.stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
        // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
        // If it has already completed, this should just noop.
        if (this.handshakeResolver) {
            this.handshakeResolver();
        }
        this.cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this.cleanupTimeout();
        this.cleanupPingTimer();
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.completeClose(error);
        }
        else if (this.connectionState === HubConnectionState.Connected && this.reconnectPolicy) {
            // tslint:disable-next-line:no-floating-promises
            this.reconnect(error);
        }
        else if (this.connectionState === HubConnectionState.Connected) {
            this.completeClose(error);
        }
        // If none of the above if conditions were true were called the HubConnection must be in either:
        // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
        // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
        //    and potentially continue the reconnect() loop.
        // 3. The Disconnected state in which case we're already done.
    };
    HubConnection.prototype.completeClose = function (error) {
        var _this = this;
        if (this.connectionStarted) {
            this.connectionState = HubConnectionState.Disconnected;
            this.connectionStarted = false;
            try {
                this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
            }
        }
    };
    HubConnection.prototype.reconnect = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reconnectStartTime = Date.now();
                        previousReconnectAttempts = 0;
                        retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                        if (nextRetryDelay === null) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                            this.completeClose(error);
                            return [2 /*return*/];
                        }
                        this.connectionState = HubConnectionState.Reconnecting;
                        if (error) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting because of error '" + error + "'.");
                        }
                        else {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting.");
                        }
                        if (this.onreconnecting) {
                            try {
                                this.reconnectingCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                            }
                            // Exit early if an onreconnecting callback called connection.stop().
                            if (this.connectionState !== HubConnectionState.Reconnecting) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                                return [2 /*return*/];
                            }
                        }
                        _a.label = 1;
                    case 1:
                        if (!(nextRetryDelay !== null)) return [3 /*break*/, 7];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                            })];
                    case 2:
                        _a.sent();
                        this.reconnectDelayHandle = undefined;
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.startInternal()];
                    case 4:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "HubConnection reconnected successfully.");
                        if (this.onreconnected) {
                            try {
                                this.reconnectedCallbacks.forEach(function (c) { return c.apply(_this, [_this.connection.connectionId]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                            }
                        }
                        return [2 /*return*/];
                    case 5:
                        e_4 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt failed because of error '" + e_4 + "'.");
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        retryError = e_4 instanceof Error ? e_4 : new Error(e_4.toString());
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                        this.completeClose();
                        return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.getNextRetryDelay = function (previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
            return this.reconnectPolicy.nextRetryDelayInMilliseconds({
                elapsedMilliseconds: elapsedMilliseconds,
                previousRetryCount: previousRetryCount,
                retryReason: retryReason,
            });
        }
        catch (e) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
            return null;
        }
    };
    HubConnection.prototype.cancelCallbacksWithError = function (error) {
        var callbacks = this.callbacks;
        this.callbacks = {};
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(null, error);
        });
    };
    HubConnection.prototype.cleanupPingTimer = function () {
        if (this.pingServerHandle) {
            clearTimeout(this.pingServerHandle);
        }
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
            return {
                arguments: args,
                streamIds: streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
        else {
            var invocationId = this.invocationId;
            this.invocationId++;
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds: streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
    };
    HubConnection.prototype.launchStreams = function (streams, promiseQueue) {
        var _this = this;
        if (streams.length === 0) {
            return;
        }
        // Synchronize stream data so they arrive in-order on the server
        if (!promiseQueue) {
            promiseQueue = Promise.resolve();
        }
        var _loop_1 = function (streamId) {
            streams[streamId].subscribe({
                complete: function () {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId)); });
                },
                error: function (err) {
                    var message;
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    else if (err && err.toString) {
                        message = err.toString();
                    }
                    else {
                        message = "Unknown error";
                    }
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId, message)); });
                },
                next: function (item) {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createStreamItemMessage(streamId, item)); });
                },
            });
        };
        // We want to iterate over the keys, since the keys are the stream ids
        // tslint:disable-next-line:forin
        for (var streamId in streams) {
            _loop_1(streamId);
        }
    };
    HubConnection.prototype.replaceStreamingParams = function (args) {
        var streams = [];
        var streamIds = [];
        for (var i = 0; i < args.length; i++) {
            var argument = args[i];
            if (this.isObservable(argument)) {
                var streamId = this.invocationId;
                this.invocationId++;
                // Store the stream for later use
                streams[streamId] = argument;
                streamIds.push(streamId.toString());
                // remove stream from args
                args.splice(i, 1);
            }
        }
        return [streams, streamIds];
    };
    HubConnection.prototype.isObservable = function (arg) {
        // This allows other stream implementations to just work (like rxjs)
        return arg && arg.subscribe && typeof arg.subscribe === "function";
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args, streamIds) {
        var invocationId = this.invocationId;
        this.invocationId++;
        return {
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds: streamIds,
            target: methodName,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
        };
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
        };
    };
    HubConnection.prototype.createStreamItemMessage = function (id, item) {
        return {
            invocationId: id,
            item: item,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem,
        };
    };
    HubConnection.prototype.createCompletionMessage = function (id, error, result) {
        if (error) {
            return {
                error: error,
                invocationId: id,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
            };
        }
        return {
            invocationId: id,
            result: result,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
        };
    };
    return HubConnection;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() { return HandshakeProtocol; });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.


/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
        var response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arg", function() { return Arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDetail", function() { return getDataDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() { return formatArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Object.defineProperty(Platform, "isBrowser", {
        get: function () {
            return typeof window === "object";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isWebWorker", {
        get: function () {
            return typeof self === "object" && "importScripts" in self;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isNode", {
        get: function () {
            return !this.isBrowser && !this.isWebWorker;
        },
        enumerable: true,
        configurable: true
    });
    return Platform;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var detail = "";
    if (isArrayBuffer(data)) {
        detail = "Binary data of length " + data.byteLength;
        if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        detail = "String data of length " + data.length;
        if (includeContent) {
            detail += ". Content: '" + data + "'";
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, responseType, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!accessTokenFactory) return [3 /*break*/, 2];
                    return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _b.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    _b.label = 2;
                case 2:
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: headers,
                            responseType: responseType,
                        })];
                case 3:
                    response = _b.sent();
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
        this.outputConsole = console;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                    this.outputConsole.error("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                    this.outputConsole.warn("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                    this.outputConsole.info("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    this.outputConsole.log("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** Stream implementation to stream items to the server. */
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscription"](this, observer);
    };
    return Subject;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return HubConnectionBuilder; });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







// tslint:disable:object-literal-sort-keys
var LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    var mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error("Unknown log level: " + name);
    }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            var logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, transportTypeOrOptions);
        }
        else {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, { transport: transportTypeOrOptions });
        }
        return this;
    };
    /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    HubConnectionBuilder.prototype.withAutomaticReconnect = function (retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"]();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"](retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    };
    /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_1__["HttpConnection"](this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_2__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__["JsonHubProtocol"](), this.reconnectPolicy);
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultReconnectPolicy", function() { return DefaultReconnectPolicy; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// 0, 2, 10, 30 second delays before reconnect attempts.
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
var DefaultReconnectPolicy = /** @class */ (function () {
    function DefaultReconnectPolicy(retryDelays) {
        this.retryDelays = retryDelays !== undefined ? retryDelays.concat([null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    DefaultReconnectPolicy.prototype.nextRetryDelayInMilliseconds = function (retryContext) {
        return this.retryDelays[retryContext.previousRetryCount];
    };
    return DefaultReconnectPolicy;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnection", function() { return HttpConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportSendQueue", function() { return TransportSendQueue; });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
var WebSocketModule = null;
var EventSourceModule = null;
if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && "function" !== "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    WebSocketModule = requireFunc("ws");
    EventSourceModule = requireFunc("eventsource");
}
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        this.negotiateVersion = 1;
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
        this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent || false;
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.WebSocket) {
            if (WebSocketModule) {
                options.WebSocket = WebSocketModule;
            }
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.EventSource) {
            if (typeof EventSourceModule !== "undefined") {
                options.EventSource = EventSourceModule;
            }
        }
        this.httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
        this.connectionState = "Disconnected" /* Disconnected */;
        this.connectionStarted = false;
        this.options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var message, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
                        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
                        if (this.connectionState !== "Disconnected" /* Disconnected */) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = "Connecting " /* Connecting */;
                        this.startInternalPromise = this.startInternal(transferFormat);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 1:
                        _a.sent();
                        if (!(this.connectionState === "Disconnecting" /* Disconnecting */)) return [3 /*break*/, 3];
                        message = "Failed to start the HttpConnection before stop() was called.";
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        _a.sent();
                        return [2 /*return*/, Promise.reject(new Error(message))];
                    case 3:
                        if (this.connectionState !== "Connected" /* Connected */) {
                            message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        _a.label = 4;
                    case 4:
                        this.connectionStarted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== "Connected" /* Connected */) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this.sendQueue) {
            this.sendQueue = new TransportSendQueue(this.transport);
        }
        // Transport will not be null if state is connected
        return this.sendQueue.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState === "Disconnected" /* Disconnected */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                            return [2 /*return*/, this.stopPromise];
                        }
                        this.connectionState = "Disconnecting" /* Disconnecting */;
                        this.stopPromise = new Promise(function (resolve) {
                            // Don't complete stop() until stopConnection() completes.
                            _this.stopPromiseResolver = resolve;
                        });
                        // stopInternal should never throw so just observe it.
                        return [4 /*yield*/, this.stopInternal(error)];
                    case 1:
                        // stopInternal should never throw so just observe it.
                        _a.sent();
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.stopInternal = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, e_2, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Set error as soon as possible otherwise there is a race between
                        // the transport closing and providing an error and the error from a close message
                        // We would prefer the close message error.
                        this.stopError = error;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.sendQueue) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.sendQueue.stop()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "TransportSendQueue.stop() threw error '" + e_2 + "'.");
                        return [3 /*break*/, 8];
                    case 8:
                        this.sendQueue = undefined;
                        _a.label = 9;
                    case 9:
                        if (!this.transport) return [3 /*break*/, 14];
                        _a.label = 10;
                    case 10:
                        _a.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, this.transport.stop()];
                    case 11:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        e_3 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.transport.stop() threw error '" + e_3 + "'.");
                        this.stopConnection();
                        return [3 /*break*/, 13];
                    case 13:
                        this.transport = undefined;
                        return [3 /*break*/, 15];
                    case 14:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                        this.stopConnection();
                        _a.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.startTransport(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === "Disconnecting" /* Disconnecting */ || this_1.connectionState === "Disconnected" /* Disconnected */) {
                                            throw new Error("The connection was stopped during negotiation.");
                                        }
                                        if (negotiateResponse.error) {
                                            throw new Error(negotiateResponse.error);
                                        }
                                        if (negotiateResponse.ProtocolVersion) {
                                            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw new Error("Negotiate redirection limit exceeded.");
                        }
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                            this.features.inherentKeepAlive = true;
                        }
                        if (this.connectionState === "Connecting " /* Connecting */) {
                            // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                            // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "The HttpConnection connected successfully.");
                            this.connectionState = "Connected" /* Connected */;
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        e_4 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_4);
                        this.connectionState = "Disconnected" /* Disconnected */;
                        this.transport = undefined;
                        return [2 /*return*/, Promise.reject(e_4)];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, token, negotiateUrl, response, negotiateResponse, e_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        _b.label = 2;
                    case 2:
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl + ".");
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: headers,
                            })];
                    case 4:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            return [2 /*return*/, Promise.reject(new Error("Unexpected status code returned from negotiate " + response.statusCode))];
                        }
                        negotiateResponse = JSON.parse(response.content);
                        if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                            // Negotiate version 0 doesn't use connectionToken
                            // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                            negotiateResponse.connectionToken = negotiateResponse.connectionId;
                        }
                        return [2 /*return*/, negotiateResponse];
                    case 5:
                        e_5 = _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_5);
                        return [2 /*return*/, Promise.reject(e_5)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionToken) {
        if (!connectionToken) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionToken);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transportExceptions, transports, negotiate, _i, transports_1, endpoint, transportOrError, ex_1, ex_2, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionToken);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        this.connectionId = negotiateResponse.connectionId;
                        return [2 /*return*/];
                    case 2:
                        transportExceptions = [];
                        transports = negotiateResponse.availableTransports || [];
                        negotiate = negotiateResponse;
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 13];
                        endpoint = transports_1[_i];
                        transportOrError = this.resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(transportOrError instanceof Error)) return [3 /*break*/, 4];
                        // Store the error and continue, we don't want to cause a re-negotiate in these cases
                        transportExceptions.push(endpoint.transport + " failed: " + transportOrError);
                        return [3 /*break*/, 12];
                    case 4:
                        if (!this.isITransport(transportOrError)) return [3 /*break*/, 12];
                        this.transport = transportOrError;
                        if (!!negotiate) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 6:
                        negotiate = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        ex_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(ex_1)];
                    case 8:
                        connectUrl = this.createConnectUrl(url, negotiate.connectionToken);
                        _a.label = 9;
                    case 9:
                        _a.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
                    case 10:
                        _a.sent();
                        this.connectionId = negotiate.connectionId;
                        return [2 /*return*/];
                    case 11:
                        ex_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + endpoint.transport + "': " + ex_2);
                        negotiate = undefined;
                        transportExceptions.push(endpoint.transport + " failed: " + ex_2);
                        if (this.connectionState !== "Connecting " /* Connecting */) {
                            message = "Failed to select transport before stop() was called.";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        return [3 /*break*/, 12];
                    case 12:
                        _i++;
                        return [3 /*break*/, 3];
                    case 13:
                        if (transportExceptions.length > 0) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" ")))];
                        }
                        return [2 /*return*/, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                if (!this.options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                if (!this.options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.startTransport = function (url, transferFormat) {
        var _this = this;
        this.transport.onreceive = this.onreceive;
        this.transport.onclose = function (e) { return _this.stopConnection(e); };
        return this.transport.connect(url, transferFormat);
    };
    HttpConnection.prototype.resolveTransportOrError = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
            return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            if (transportMatches(requestedTransport, transport)) {
                var transferFormats = endpoint.transferFormats.map(function (s) { return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]; });
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && !this.options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && !this.options.EventSource)) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                        return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is not supported in your environment.");
                    }
                    else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'.");
                        try {
                            return this.constructTransport(transport);
                        }
                        catch (ex) {
                            return ex;
                        }
                    }
                }
                else {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                    return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' does not support " + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + ".");
                }
            }
            else {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
                return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is disabled by the client.");
            }
        }
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this.connectionState + ".");
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this.stopError || error;
        this.stopError = undefined;
        if (this.connectionState === "Disconnected" /* Disconnected */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
            return;
        }
        if (this.connectionState === "Connecting " /* Connecting */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection hasn't yet left the in the connecting state.");
            return;
        }
        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this.stopPromiseResolver();
        }
        if (error) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
        }
        this.connectionId = undefined;
        this.connectionState = "Disconnected" /* Disconnected */;
        if (this.onclose && this.connectionStarted) {
            this.connectionStarted = false;
            try {
                this.onclose(error);
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
            }
        }
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isBrowser || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        if (negotiateUrl.indexOf("negotiateVersion") === -1) {
            negotiateUrl += index === -1 ? "?" : "&";
            negotiateUrl += "negotiateVersion=" + this.negotiateVersion;
        }
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
/** @private */
var TransportSendQueue = /** @class */ (function () {
    function TransportSendQueue(transport) {
        this.transport = transport;
        this.buffer = [];
        this.executing = true;
        this.sendBufferedData = new PromiseSource();
        this.transportResult = new PromiseSource();
        this.sendLoopPromise = this.sendLoop();
    }
    TransportSendQueue.prototype.send = function (data) {
        this.bufferData(data);
        if (!this.transportResult) {
            this.transportResult = new PromiseSource();
        }
        return this.transportResult.promise;
    };
    TransportSendQueue.prototype.stop = function () {
        this.executing = false;
        this.sendBufferedData.resolve();
        return this.sendLoopPromise;
    };
    TransportSendQueue.prototype.bufferData = function (data) {
        if (this.buffer.length && typeof (this.buffer[0]) !== typeof (data)) {
            throw new Error("Expected data to be of type " + typeof (this.buffer) + " but was of type " + typeof (data));
        }
        this.buffer.push(data);
        this.sendBufferedData.resolve();
    };
    TransportSendQueue.prototype.sendLoop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transportResult, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (false) {}
                        return [4 /*yield*/, this.sendBufferedData.promise];
                    case 1:
                        _a.sent();
                        if (!this.executing) {
                            if (this.transportResult) {
                                this.transportResult.reject("Connection stopped.");
                            }
                            return [3 /*break*/, 6];
                        }
                        this.sendBufferedData = new PromiseSource();
                        transportResult = this.transportResult;
                        this.transportResult = undefined;
                        data = typeof (this.buffer[0]) === "string" ?
                            this.buffer.join("") :
                            TransportSendQueue.concatBuffers(this.buffer);
                        this.buffer.length = 0;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transport.send(data)];
                    case 3:
                        _a.sent();
                        transportResult.resolve();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        transportResult.reject(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TransportSendQueue.concatBuffers = function (arrayBuffers) {
        var totalLength = arrayBuffers.map(function (b) { return b.byteLength; }).reduce(function (a, b) { return a + b; });
        var result = new Uint8Array(totalLength);
        var offset = 0;
        for (var _i = 0, arrayBuffers_1 = arrayBuffers; _i < arrayBuffers_1.length; _i++) {
            var item = arrayBuffers_1[_i];
            result.set(new Uint8Array(item), offset);
            offset += item.byteLength;
        }
        return result;
    };
    return TransportSendQueue;
}());

var PromiseSource = /** @class */ (function () {
    function PromiseSource() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            var _a;
            return _a = [resolve, reject], _this.resolver = _a[0], _this.rejecter = _a[1], _a;
        });
    }
    PromiseSource.prototype.resolve = function () {
        this.resolver();
    };
    PromiseSource.prototype.reject = function (reason) {
        this.rejecter(reason);
    };
    return PromiseSource;
}());


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() { return LongPollingTransport; });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
        this.logMessageContent = logMessageContent;
        this.running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var pollOptions, token, pollUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                        this.url = url;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting.");
                        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary &&
                            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: {},
                            timeout: 100000,
                        };
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        this.receiving = this.poll(this.url, pollOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server.");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent) + ".");
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after stopping
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                this.closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Polling complete.");
                        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                        if (!this.pollAborted) {
                            this.raiseOnClose();
                        }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteOptions, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stopping polling.");
                        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                        this.running = false;
                        this.pollAbort.abort();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, this.receiving];
                    case 2:
                        _a.sent();
                        // Send DELETE to clean up long polling on the server
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        deleteOptions = {
                            headers: {},
                        };
                        return [4 /*yield*/, this.getAccessToken()];
                    case 3:
                        token = _a.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 4:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request sent.");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stop finished.");
                        // Raise close event here instead of in polling
                        // It needs to happen after the DELETE request is sent
                        this.raiseOnClose();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.raiseOnClose = function () {
        if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this.closeError) {
                logMessage += " Error: " + this.closeError;
            }
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, logMessage);
            this.onclose(this.closeError);
        }
    };
    return LongPollingTransport;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
        this.onabort = null;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() { return ServerSentEventsTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.logMessageContent = logMessageContent;
        this.eventSourceConstructor = eventSourceConstructor;
        this.onreceive = null;
        this.onclose = null;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting.");
                        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
                        this.url = url;
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                return;
                            }
                            var eventSource;
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isWebWorker) {
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
                            }
                            else {
                                // Non-browser passes cookies via the dictionary
                                var cookies = _this.httpClient.getCookieString(url);
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
                            }
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this.onreceive) {
                                        try {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                            _this.onreceive(e.data);
                                        }
                                        catch (error) {
                                            _this.close(error);
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    var error = new Error(e.data || "Error occurred");
                                    if (opened) {
                                        _this.close(error);
                                    }
                                    else {
                                        reject(error);
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                    _this.eventSource = eventSource;
                                    opened = true;
                                    resolve();
                                };
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() { return WebSocketTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory;
        this.logMessageContent = logMessageContent;
        this.webSocketConstructor = webSocketConstructor;
        this.httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting.");
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this.httpClient.getCookieString(url);
                            var opened = false;
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isNode && cookies) {
                                // Only pass cookies when in non-browser environments
                                webSocket = new _this.webSocketConstructor(url, undefined, {
                                    headers: {
                                        Cookie: "" + cookies,
                                    },
                                });
                            }
                            if (!webSocket) {
                                // Chrome is not happy with passing 'undefined' as protocol
                                webSocket = new _this.webSocketConstructor(url);
                            }
                            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                webSocket.binaryType = "arraybuffer";
                            }
                            // tslint:disable-next-line:variable-name
                            webSocket.onopen = function (_event) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url + ".");
                                _this.webSocket = webSocket;
                                opened = true;
                                resolve();
                            };
                            webSocket.onerror = function (event) {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                    error = event.error;
                                }
                                else {
                                    error = new Error("There was an error with the transport.");
                                }
                                reject(error);
                            };
                            webSocket.onmessage = function (message) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                if (_this.onreceive) {
                                    _this.onreceive(message.data);
                                }
                            };
                            webSocket.onclose = function (event) {
                                // Don't call close handler if connection was never established
                                // We'll reject the connect call instead
                                if (opened) {
                                    _this.close(event);
                                }
                                else {
                                    var error = null;
                                    // ErrorEvent is a browser only type we need to check if the type exists before using it
                                    if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                        error = event.error;
                                    }
                                    else {
                                        error = new Error("There was an error with the transport.");
                                    }
                                    reject(error);
                                }
                            };
                        })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this.webSocket.onclose = function () { };
            this.webSocket.onmessage = function () { };
            this.webSocket.onerror = function () { };
            this.webSocket.close();
            this.webSocket = undefined;
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this.close(undefined);
        }
        return Promise.resolve();
    };
    WebSocketTransport.prototype.close = function (event) {
        // webSocket will be null if the transport did not start successfully
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (event && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
            }
            else {
                this.onclose();
            }
        }
    };
    return WebSocketTransport;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return JsonHubProtocol; });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
    }
    /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
        }
        // Parse the messages
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());



/***/ })
/******/ ]);
});
//# sourceMappingURL=signalr.js.map
"use strict";
if (typeof window.MCDChat !== "object") {
    window.MCDChat = (function () {
        var identifiers = [];
        {
            var date = null;
            var timeout = null;
            /**Objeto de conexion  */
            var connection = null;
            /**El alias de la entidad que se conecta */
            var alias = null;
            /**Identificador de la entidad que se conecta */
            var siteID = null;
            /**Dominio de sitios territoriales */
            var authorityDomain = nosune.Settings.authorityDomain.split(nosune.Settings.general.siteKeyword)[1].replace('.', '');
            /**Dirección donde esta alojado el chat */
            var address = nosune.Settings.general.chatProtocol + '://chat.' + authorityDomain;
            /**Protocolo para sitios territoriales */
            var authorityProtocol = nosune.Settings.authorityDomain.split(':')[0];
            /**Identificador de la conversación */
            var currentConversationID = null;
            /**Identificacion del usuario administrador */
            var currentOfficial = null;
            /**Nombre del administrador */
            var currentOfficialNames = null;
            /**Llave de la conversación */
            var currentKey = null;
            /**Correo del usuario final (si aplica) */
            var currentEmail = null;
            /**call back de inicio del chat */
            var callStartChat = null;
            /**call back para recibir mensajes */
            var callReceiveMessage = null;
            /**call back cuando se une un usuario al chat */
            var callJoinUser = null;
            /**call back cuando se elimina una conversación */
            var callRemoveConversation = null;
            /**identificador del archivo */
            var fileID = null;
            /**Si la conexión se cierra por acto del usuario */
            var customClosed = false;
            /**intervalo de tiempo para conectar una conexion fallida */
            var intervalReconnect = null;
            /**Contador de intentos */
            var failedAttempts = 0;
            /**expresion regular para las url */
            var regUrl = /(ftp|http|https):\/\/[^ "]+/gi;
            /**Informacion de la url crawleada */
            var urlInfo = null;
            /**Si la ejecucion del end point del crawler esta habilitado */
            var executeCrawler = false;

            var unlockCrawler = true;
            var jsonQuestionsBot = null;
            var usuarioLocal = '';
            var welcomeMessage = '';
            var levelQuestionCahtBot = 0;
            var chatAgente = 0;
            var mainParentQuestionId = 0;
            var idLevelZero = 0;
            var idLevelOne = 0;
            var idLevelTwo = 0;
            var formChatUser = null;
            var timer, currSeconds = 0;
        }

        /**Función para inicio */
        function start() {
            var script = document.getElementById('MCDC');
            alias = htmlHelpers.urlSearchParams('d', script.src);
            if (window._mcd && _mcd.indexOf('enableChat') > -1) {
                loadClient();
            }
        }

        /**Inicia el hub para un usuario final */
        function initHubBasic() {
            if (connection === null) {
                connection = new signalR.HubConnectionBuilder().withUrl(address + '/chatHub',
                    { transport: signalR.HttpTransportType.WebSockets, skipNegotiation: true }).configureLogging(signalR.LogLevel.Error).build();

                connection.on("StartChat", function (admin, user, currentOfficialName, conversationID, key) {
                    currentOfficial = admin;
                    currentOfficialNames = currentOfficialName;
                    currentKey = key;
                    toggleControls(true);
                    htmlHelpers.get('chat-window-title').innerText = currentOfficialNames + ' está disponible';
                    htmlHelpers.get('chat-window-waiting').style.display = 'none';
                });

                connection.on('ChangeStatus', function (status) {
                    if (status === 2) {
                        services.signOut().then(function () {
                            closeConnection();
                            htmlHelpers.get('chat-primary-window').remove();
                            if (!currentOfficial) {
                                buildOpenChatButton();
                            } else {
                                buildQualify();
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                });

                connection.on("ReceiveMessage", function (user, currentID, message) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }

                    toggleControls(true);

                    htmlHelpers.get('chat-window-title').classList.remove('typing');
                    htmlHelpers.get('chat-window-title').innerHTML = currentOfficialNames + ' está disponible';
                    buildNewRow(message);
                });

                connection.on('ReceiveTyping', function (id, user) {
                    typing('chat-window-title', user);
                });

                connection.on('CloseAdmin', function () {
                    htmlHelpers.showAlert('El funcionario ha cerrado la conversación. Gracias por utlizar el chat institucional');
                    closeConnection();
                    buildQualify();
                    htmlHelpers.get('chat-primary-window').remove();
                });

                onCloseConnection();
            }

            connection.start().then(function () { }).catch(function (err) {
                return console.error(err.toString());
            });
        }

        /**Limpia las variables globales */
        function cleanVariables() {
            currentIdentifier = null;
            currentConversationID = null;
            currentOfficial = null;
            currentOfficialNames = null;
            currentKey = null;
            currentEmail = null;
        }

        /**
         * Habilita los controles del envio de mensajes
         * @param {any} enable
         */
        function toggleControls(enable) {
            if (htmlHelpers.get('chat-send-message')) {
                if (enable) {
                    htmlHelpers.get('chat-send-message').removeAttribute('disabled');
                    htmlHelpers.get('chat-message').removeAttribute('disabled');
                    htmlHelpers.get('chat-file').removeAttribute('disabled');
                    htmlHelpers.get('chat-close-window').style.display = 'block';
                }
                else {
                    htmlHelpers.get('chat-send-message').setAttribute('disabled', 'disabled');
                    htmlHelpers.get('chat-file').setAttribute('disabled', 'disabled');
                    htmlHelpers.get('chat-close-window').style.display = 'none';
                }
            }
        }

        /**Inicia nuevamente la conexion */
        function startConnection() {
            connection.start().then(function () {
                var message = htmlHelpers.get('chat-not-connection');
                if (message) {
                    message.remove();
                }
                toggleControls(true);
                if (intervalReconnect !== null) {
                    clearInterval(intervalReconnect);
                    intervalReconnect = null;
                }
            }).catch(function (err) {
                return console.error(err.toString());
            });
        }

        /**Evento de cierre de conexión */
        function onCloseConnection() {
            connection.onclose(function () {
                toggleControls(false);

                if (!customClosed) {
                    htmlHelpers.buildTemplate('not-connection.html', 'chat-not-connection');

                    intervalReconnect = setInterval(function () {
                        failedAttempts++;
                        htmlHelpers.get('chat-not-connection-counter').innerHTML = ' Intento ' + failedAttempts + ' de 20';
                        startConnection();
                        if (failedAttempts >= 20) {
                            console.log('Oopps');
                            clearInterval(intervalReconnect);
                            intervalReconnect = null;
                            window.location.reload();
                        }
                    }, 3000);
                }
            });
        }

        /** Checks if any admin is connected */
        function checkAvailable() {
            return services.checkOpenConversation(alias, window.nosune.Settings.general.enablePQR);
        }

        /**Closes the hub connection */
        function closeConnection() {
            customClosed = true;
            connection.stop();
        }

        function buildChatPqrds() {
            console.log('buildChatPqrds');
            formValidation.isSubmitted = false;
            var container = htmlHelpers.buildTemplate('pqrds-window.html', 'chat-pqrds-window');

            if (!currentEmail) {
                if (window.chatGOV) {
                    htmlHelpers.get('chat-email').value = window.chatGOV.email;
                }
                else {
                    loginkeyCloak();
                }
            } else {
                htmlHelpers.get('chat-email').value = currentEmail;
            }

            htmlHelpers.on('chat-email', 'input', function (e) { formValidation.validateRequiredEmail(); });

            htmlHelpers.on('txt-pqrds', 'input', function (e) { formValidation.validateRequired('txt-pqrds'); });

            htmlHelpers.on('chat-terms', 'click', function (e) { formValidation.validateRequired('chat-terms'); });

            var chatTitle = 'No hay un funcionario en linea.';
            var chatSubtitle = 'Deja tu mensaje, te daremos un código de seguimiento para que tengas una respuesta lo más pronto posible.';

            if (window.nosune.Settings.general.chatOnline) {
                try {
                    var copies = JSON.parse(window.nosune.Settings.general.chatOffline);
                    chatTitle = copies.title;
                    chatSubtitle = copies.subtitle;
                } catch (e) {

                }
            }

            htmlHelpers.get('chat-regis-title').innerText = chatTitle;
            htmlHelpers.get('chat-regis-subtitle').innerText = chatSubtitle;

            htmlHelpers.on('chat-close-pqrds', 'click', function (ev) {
                formValidation.isSubmitted = false;
                container.remove();
                buildOpenChatButton();
            });

            htmlHelpers.on('chat-form-pqrds', 'submit', function (ev) {
                ev.preventDefault();
                formValidation.isSubmitted = true;

                if (formValidation.validateFormPqrds()) {
                    htmlHelpers.get('chat-pqrds-send').disabled = true;
                    var data = [].reduce.call(ev.target.getElementsByTagName('input'), function (data, element) {
                        data[element.name] = element.value;
                        return data;
                    }, {});

                    data.siteID = siteID;
                    data.captcha = hcaptcha.getResponse();
                    data.anonymous = true;
                    data.source = 'Chat';
                    data.complaintFormTypeID = 6;
                    data.complaintFormType = {
                        complaintFormTypeID: 6
                    };
                    data.description = htmlHelpers.get('txt-pqrds').value;
                    data.email = htmlHelpers.get('chat-email').value.toLowerCase();
                    htmlHelpers.get('chat-pqrds-send').disabled = true;

                    services.setPqrds(data).then(function (response) {
                        htmlHelpers.showAlert('El número de seguimiento de tu PQRDS es <b>' + response.trackingID + '</b>');
                        container.remove();
                        buildOpenChatButton();
                    }).catch(function (error) {
                        hcaptcha.reset();

                        if (error.status === 400) {
                            hcaptcha.reset();
                            htmlHelpers.get('chat-pqrds-send').disabled = false;
                            try {
                                var error = JSON.parse(error.response);
                                if (error.error && error.error.details && error.error.details.length) {
                                    htmlHelpers.showAlert(error.error.details[0].message);
                                }
                            } catch (e) {
                                console.log(e);
                            }
                        } else {
                            htmlHelpers.showAlert('En este momento no se pudo crear la PQRDS, Intenta más tarde.');
                        }
                    });
                }
            });

            services.getPqrdsCaptcha().then(function (response) {
                hcaptcha.render("h-captcha", {
                    'sitekey': response,
                    'expired-callback': function recaptchaExpiredCallback() {
                        hcaptcha.reset();
                    }
                });
            });
        }

        /**
         * Construye el formulario para el ingreso del usuario
         * @param {any} isEnabled
         */
        function buildChatWindow(isEnabled) {
            htmlHelpers.buildTemplate('chat-window.html', 'chat-primary-window');

            var textMessage = htmlHelpers.get('chat-message');
            if (!isEnabled) {
                toggleControls(false);
                htmlHelpers.get('chat-window-waiting').style.display = 'flex';
            } else {
                toggleControls(true);
                htmlHelpers.get('chat-window-title').innerText = currentOfficialNames + ' ésta disponible';
            }
            initHubBasic();

            htmlHelpers.get('img-wait').src = address + '/images/chat-wait.svg';

            var buttons = htmlHelpers.get('chat-list-emojis').getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();

                    var myValue = this.getAttribute('data-value');
                    var myField = htmlHelpers.get('chat-message');
                    var limit = myField.getAttribute('maxlength');

                    if (myField.value.length < limit) {
                        try {
                            if (document.selection) {
                                myField.focus();
                                sel = document.selection.createRange();
                                sel.text = myValue;
                            }
                            else if (myField.selectionStart || myField.selectionStart == '0') {
                                var startPos = myField.selectionStart;
                                var endPos = myField.selectionEnd;
                                myField.value = myField.value.substring(0, startPos)
                                    + myValue
                                    + myField.value.substring(endPos, myField.value.length);
                            } else {
                                myField.value += myValue;
                            }
                        } catch (e) {
                            myField.value = myField.value + myValue;
                        }
                    }

                    htmlHelpers.get('chat-chars').innerHTML = (550 - myField.value.length);

                    myField.focus();
                    if (myField.setSelectionRange) {
                        myField.setSelectionRange(myField.value.length, myField.value.length)
                    }

                    var iconEmoji = htmlHelpers.get('icon-emojis');
                    iconEmoji.classList.add('icon-happy');
                    iconEmoji.classList.remove('icon-cross');
                    htmlHelpers.get('chat-list-emojis').style.display = 'none';
                    return false;
                });
            }

            htmlHelpers.on('chat-show-emojis', 'click', function (ev) {
                ev.preventDefault();
                ev.stopPropagation();

                var iconEmoji = htmlHelpers.get('icon-emojis');
                if (iconEmoji.classList.contains('icon-happy')) {
                    iconEmoji.classList.remove('icon-happy');
                    iconEmoji.classList.add('icon-cross');
                    htmlHelpers.get('chat-list-emojis').style.display = 'block';
                } else {
                    iconEmoji.classList.add('icon-happy');
                    iconEmoji.classList.remove('icon-cross');
                    htmlHelpers.get('chat-list-emojis').style.display = 'none';
                    htmlHelpers.get('chat-message').focus();
                }

                return false;
            });

            htmlHelpers.on('chat-message', 'keyup', function (ev) {
                htmlHelpers.get('chat-chars').innerHTML = (550 - ev.target.value.length);
            });

            htmlHelpers.on('chat-preview-url-close', 'click', function (ev) {
                unlockCrawler = false;
                urlInfo = null;
                bindUrl();
            });

            htmlHelpers.on('chat-message', 'input', function (ev) {
                var matches = ev.target.value.match(regUrl);
                if (matches && unlockCrawler) {
                    if (!urlInfo) {
                        executeCrawler = true;
                        services.crawler(matches[0]).then(function (data) {
                            if (data.image && executeCrawler) {
                                urlInfo = {};
                                urlInfo.url = matches[0];
                                urlInfo.title = data.title;
                                urlInfo.description = data.description;
                                urlInfo.image = data.image;
                                bindUrl();
                            }
                            executeCrawler = false;
                        }).catch(function (error) {
                            executeCrawler = false;
                            console.log(error);
                        });
                    }
                } else if (urlInfo) {
                    urlInfo = null;
                    bindUrl();
                }
            });

            htmlHelpers.on('chat-send-message', 'click', function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                if (fileID || (textMessage.value && textMessage.value.trim() !== '')) {
                    htmlHelpers.get('chat-chars').innerHTML = '550';
                    htmlHelpers.get('chat-file').style.display = 'block';
                    htmlHelpers.get('chat-icon-file').style.display = 'block';
                    htmlHelpers.get('chat-upload-file').style.display = 'block';

                    var additional = null;

                    if (urlInfo) {
                        additional = JSON.stringify(urlInfo);
                        urlInfo = null;
                        bindUrl();
                    }
                    executeCrawler = false;
                    unlockCrawler = true;

                    var value = ' ';

                    if (textMessage.value && textMessage.value.trim() !== '') {
                        value = textMessage.value;
                    }

                    if (value !== '') {
                        value = value.replace(/<[^>]*>/g, '');
                    }

                    //esto se implementa en caso de lentitud, es decir si escribe un mensaje y se demora mas tiempo en enviar que 2.5 segundos
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    } else {
                        timeout = setTimeout(function () {
                            services.getAllMessages(currentConversationID, 0, 1000).then(function (response) {
                                toggleControls(true);
                                for (var i = response.results.length - 1; i >= 0; i--) {
                                    buildNewRow(response.results[i]);
                                }
                            }).catch(function (error) {
                                console.log(error);
                            });
                            clearTimeout(timeout);
                        }, 2500);
                    }

                    sendMessage(value, currentConversationID, currentOfficial, fileID, additional);

                    textMessage.focus();
                    htmlHelpers.get('chat-message').value = '';
                    htmlHelpers.get('chat-file-name-text').innerHTML = '';
                    htmlHelpers.get('chat-file').style.display = 'block';
                    htmlHelpers.get('chat-icon-file').style.display = 'block';
                    htmlHelpers.get('chat-file-name-delete').style.display = 'none';

                    fileID = null;
                }
            });

            htmlHelpers.on('chat-message', 'keypress', function (ev) {
                var name = event.key;
                if ((fileID || (textMessage.value && textMessage.value.trim() !== '')) && name === 'Enter') {

                    htmlHelpers.get('chat-chars').innerHTML = '550';
                    htmlHelpers.get('chat-file').style.display = 'block';
                    htmlHelpers.get('chat-icon-file').style.display = 'block';
                    htmlHelpers.get('chat-upload-file').style.display = 'block';

                    var additional = null;

                    if (urlInfo) {
                        additional = JSON.stringify(urlInfo);
                        urlInfo = null;
                        bindUrl();
                    }
                    executeCrawler = false;
                    unlockCrawler = true;

                    var value = ' ';

                    if (textMessage.value && textMessage.value.trim() !== '') {
                        value = textMessage.value;
                    }

                    if (value !== '') {
                        value = value.replace(/<[^>]*>/g, '');
                    }

                    //esto se implementa en caso de lentitud, es decir si escribe un mensaje y se demora mas tiempo en enviar que 2.5 segundos
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    } else {
                        timeout = setTimeout(function () {
                            services.getAllMessages(currentConversationID, 0, 1000).then(function (response) {
                                toggleControls(true);
                                for (var i = response.results.length - 1; i >= 0; i--) {
                                    buildNewRow(response.results[i]);
                                }
                            }).catch(function (error) {
                                console.log(error);
                            });
                            clearTimeout(timeout);
                        }, 2500);
                    }

                    sendMessage(value, currentConversationID, currentOfficial, fileID, additional);

                    textMessage.focus();
                    htmlHelpers.get('chat-message').value = '';
                    htmlHelpers.get('chat-file-name-text').innerHTML = '';
                    htmlHelpers.get('chat-file').style.display = 'block';
                    htmlHelpers.get('chat-icon-file').style.display = 'block';
                    htmlHelpers.get('chat-file-name-delete').style.display = 'none';

                    fileID = null;
                }
                if (name === 'Enter') {
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            });

            htmlHelpers.on('chat-close-window', 'click', function (ev) {
                if (confirm('¿Deseas salir del chat?')) {
                    updateConversation(currentConversationID, 'Closed');
                }
            });

            htmlHelpers.on('chat-close-window-wait', 'click', function (ev) {
                if (confirm('¿Deseas salir del chat?')) {
                    updateConversation(currentConversationID, 'Closed');
                }
            });

            htmlHelpers.on('chat-file-name-delete', 'click', function (ev) {
                htmlHelpers.get('chat-file-name-text').innerHTML = '';
                htmlHelpers.get('chat-file').style.display = 'block';
                htmlHelpers.get('chat-icon-file').style.display = 'block';
                htmlHelpers.get('chat-file-name-delete').style.display = 'none';

                fileID = null;
            });

            htmlHelpers.on('chat-file', 'change', function (ev) {
                var inputFile = htmlHelpers.get('chat-file');
                var progressMessage = htmlHelpers.get('chat-load-file');
                var uploadFile = htmlHelpers.get('chat-upload-file');

                if (inputFile.files && inputFile.files.length && !window.lockUpload) {
                    htmlHelpers.get('chat-send-message').disabled = true;
                    progressMessage.style.display = 'block';
                    uploadFile.style.display = 'none';

                    window.lockUpload = true;

                    services.uploadFile(inputFile.files[0], function (percentage) {
                        progressMessage.innerHTML = '<div>Cargando archivo.. ' + percentage + '%</div>';
                    }).then(function (response) {
                        window.lockUpload = false;

                        htmlHelpers.get('chat-file-name-text').innerHTML = response.fileName;
                        htmlHelpers.get('chat-file-name-delete').style.display = 'inline';
                        htmlHelpers.get('chat-file').style.display = 'none';
                        htmlHelpers.get('chat-icon-file').style.display = 'none';

                        uploadFile.style.display = 'block';
                        progressMessage.style.display = 'none';
                        fileID = response.fileID;
                        inputFile.value = null;
                        htmlHelpers.get('chat-send-message').disabled = false;
                    }).catch(function (error) {
                        window.lockUpload = false;
                        htmlHelpers.get('chat-send-message').disabled = false;
                        progressMessage.style.display = 'none';
                        uploadFile.style.display = 'block';
                        if (error.status === 400) {
                            htmlHelpers.showAlert('No puedes subir este tipo de archivo');
                        } else if (error.status) {
                            htmlHelpers.showAlert('En este momento no puedes subir archivos. Inténtalo más tarde.');
                        }
                    });
                }
            });
        }

        /**Llena la informacion de la url que se esta escribiendo */
        function bindUrl() {
            if (urlInfo) {
                htmlHelpers.get('chat-preview-url-img').style.backgroundImage = 'url(' + urlInfo.image + ')';
                htmlHelpers.get('chat-preview-url-title').innerHTML = urlInfo.title;
                htmlHelpers.get('chat-preview-url-desc').innerHTML = urlInfo.description;
                htmlHelpers.get('chat-container-messages').classList.add('previewurl');
                htmlHelpers.get('chat-preview-url').style.display = 'flex';
            }
            else {
                htmlHelpers.get('chat-preview-url-img').style.backgroundImage = '';
                htmlHelpers.get('chat-preview-url-title').innerHTML = '';
                htmlHelpers.get('chat-preview-url-desc').innerHTML = '';
                htmlHelpers.get('chat-container-messages').classList.remove('previewurl');
                htmlHelpers.get('chat-preview-url').style.display = 'none';
            }
        }

        function loginkeyCloak() {
            var keycloakSettings = {
                "clientId": nosune.Settings.general.clientId,
                "realm": nosune.Settings.general.realm,
                "auth-server-url": nosune.Settings.general.keycloackURI + "/auth/",
                "ssl-required": "external",
                "resource": nosune.Settings.general.resourcekeycloak,
                "public-client": true,
                "confidential-port": 0
            };
            var _keycloak = new Keycloak(keycloakSettings);

            var options = {
                idpHint: 'oidc'
            };
            _keycloak.init({}).then(_keycloak.login(options));
        }


        /**Crea el formulario de registro para un nuevo chat */
        function buildRegister(chatOnSt) {
            var data = {};
            if (!window.chatGOV) {
                loginkeyCloak();
            }

            if (chatOnSt == true) {
                data.status = 'ChatBot';
            }
            data.siteID = siteID;
            data.alias = alias;
            data.email = window.chatGOV.email;
            data.names = window.chatGOV.name;
            data.identification = window.chatGOV.identification;

            usuarioLocal = data.names;
            usuarioLocalEmail = data.email;
            formChatUser = data;
            services.addConversation(data).then(function (data) {
                currentIdentifier = data.userIdentification;
                currentConversationID = data.conversationID;
                currentEmail = data.userEmail;
                currentKey = data.key;
                Promise.all([
                    services.checkConnectedUser(alias)
                ]).then(function (data) {
                    var response = data[0];
                    if (response.conversationStatus === 'ChatBot') {
                        buildChatBotWindow(true);
                    }
                    else {
                        buildChatWindow(false);
                    }
                })
            }).catch(function (error) {
                hcaptcha.reset();
                if (error.status === 400) {
                    var arrErrs = [];
                    if (error.response) {
                        var bodyError = JSON.parse(error.response);
                        if (bodyError.errors) {
                            for (var i in bodyError.errors) {
                                arrErrs.push(bodyError.errors[i]);
                            }
                        } else {
                            for (var i in bodyError) {
                                arrErrs.push(bodyError[i][0]);
                            }
                        }
                    }
                    if (arrErrs.length > 0) {
                        htmlHelpers.showAlert(arrErrs.join(', '));
                    }
                }
            });
        }

        function showQuestionsDefault(showWelcome) {
            var row = [];
            row.description = '';
            row.creationDate = moment();
            row.name = 'Asistente virtual';
            row.messageID = 1;
            row.creatorID = 'ChatBot';
            var item = 1;
            if (showWelcome && welcomeMessage && welcomeMessage.length > 0) {
                row.description = welcomeMessage + '\n <br> \n <br>';
            }
            for (var i in jsonQuestionsBot) {
                if (jsonQuestionsBot[i].level == 0) {
                    jsonQuestionsBot[i].idOrder = item;
                    row.description += item + '. ' + jsonQuestionsBot[i].questionDecription + '\n <br>';
                    item++;
                }
            }
            levelQuestionCahtBot = 1;
            buildNewRowChatBot(row);
            idLevelOne = 0;
            idLevelZero = 0;
            idLevelTwo = 0;
            mainParentQuestionId = 0;
            chatAgente = 0;
        }

        function showAswers(choose, level) {
            if (level == 0) {
                showQuestionsDefault();
            }
            else {
                Promise.all([
                    services.checkConnectedUser(alias)
                ]).then(function (data) {
                    {
                        var answer = false;
                        var response = data[0];
                        var item = 1;
                        var row = [];
                        var isValidAnser = false;
                        row.description = '';
                        row.creatorID = 'ChatBot';
                        row.creationDate = moment();
                        row.name = 'Asistente virtual';
                        row.messageID = 1;
                        var levelFind = level - 1;
                    }
                    for (var i in jsonQuestionsBot) {
                        if (!jsonQuestionsBot[i].asnwer && choose > 0 && level > 0 && levelFind == 0
                            && jsonQuestionsBot[i].idOrder == choose && jsonQuestionsBot[i].level == levelFind) {
                            isValidAnser = true;
                            mainParentQuestionId = jsonQuestionsBot[i].questionID;
                            idLevelZero = jsonQuestionsBot[i].questionID;
                            levelQuestionCahtBot = 1;
                            idLevelOne = 0;
                            idLevelTwo = 0;
                            if (idLevelZero == jsonQuestionsBot[i].parentID)
                                break;
                        }
                        else if (!jsonQuestionsBot[i].asnwer && choose > 0 && level > 0 && levelFind == 1
                            && jsonQuestionsBot[i].idOrder == choose && jsonQuestionsBot[i].level == levelFind
                            && jsonQuestionsBot[i].parentID == idLevelZero) {
                            isValidAnser = true;
                            mainParentQuestionId = jsonQuestionsBot[i].questionID;
                            idLevelOne = jsonQuestionsBot[i].questionID;
                            levelQuestionCahtBot = 2;
                            idLevelZero = 0;
                            idLevelTwo = 0;
                            if (idLevelOne == jsonQuestionsBot[i].parentID)
                                break;
                        }
                        else if (!jsonQuestionsBot[i].asnwer && choose > 0 && level > 0 && levelFind == 2
                            && jsonQuestionsBot[i].idOrder == choose && jsonQuestionsBot[i].level == levelFind
                            && jsonQuestionsBot[i].parentID == idLevelOne) {
                            isValidAnser = true;
                            mainParentQuestionId = jsonQuestionsBot[i].questionID;
                            idLevelTwo = jsonQuestionsBot[i].questionID;
                            levelQuestionCahtBot = 3;
                            idLevelOne = 0;
                            idLevelZero = 0;
                            if (idLevelTwo == jsonQuestionsBot[i].parentID)
                                break;
                        }
                        else if (jsonQuestionsBot[i].asnwer && choose > 0 && level > 0
                            && jsonQuestionsBot[i].idOrder == choose && jsonQuestionsBot[i].level == levelFind
                            && ((mainParentQuestionId == 0 && levelFind == 0) ||
                                (jsonQuestionsBot[i].parentID == mainParentQuestionId))
                        ) {
                            row.description = jsonQuestionsBot[i].asnwer + '\n <br>';
                            isValidAnser = true;
                            answer = true;
                            levelQuestionCahtBot = 0;
                            idLevelOne = 0;
                            idLevelZero = 0;
                            idLevelTwo = 0;
                            mainParentQuestionId = 0;
                            break;
                        }
                    }

                    if ((idLevelZero > 0 || idLevelOne > 0) && isValidAnser && !answer) {
                        parentQuestionId = idLevelZero;
                        for (var i in jsonQuestionsBot) {
                            if (jsonQuestionsBot[i].parentID == idLevelZero && idLevelZero > 0) {
                                jsonQuestionsBot[i].idOrder = item;
                                row.description += item + '. ' + jsonQuestionsBot[i].questionDecription + '\n <br>';
                                item++;
                                levelQuestionCahtBot = 2;
                            }
                            else if (jsonQuestionsBot[i].parentID == idLevelOne && idLevelOne > 0) {
                                jsonQuestionsBot[i].idOrder = item;
                                row.description += item + '. ' + jsonQuestionsBot[i].questionDecription + '\n <br>';
                                item++;
                                levelQuestionCahtBot = 3;
                            }
                        }
                    }

                    if (!answer && response.isConnected && !response.disabled && chatAgente == 0) {
                        row.description += '\n <br>';
                        row.description += item + '. Hablar con un agente. \n <br>';
                        chatAgente = item;
                    }
                    else if (!response.isConnected && response.disable) {
                        chatAgente = 0;
                    }
                    if (chatAgente > 0 && choose == chatAgente) {
                        formChatUser.status = 'BotToChat';
                        formChatUser.captcha = hcaptcha.getResponse();
                        htmlHelpers.get('chat-primaryB-window').remove();
                        services.addConversation(formChatUser).then(function (data) {
                            currentIdentifier = data.userIdentification;
                            currentConversationID = data.conversationID;
                            currentEmail = data.userEmail;
                            currentKey = data.key;
                            Promise.all([
                                services.checkConnectedUser(alias)
                            ]).then(function (data) {
                                buildChatWindow(false);
                            })
                        }).catch(function (error) {
                            hcaptcha.reset();
                            if (error.status === 400) {
                                var arrErrs = [];

                                if (error.response) {
                                    var bodyError = JSON.parse(error.response);
                                    if (bodyError.errors) {
                                        for (var i in bodyError.errors) {
                                            arrErrs.push(bodyError.errors[i]);
                                        }
                                    } else {
                                        for (var i in bodyError) {
                                            arrErrs.push(bodyError[i][0]);
                                        }
                                    }
                                }

                                if (arrErrs.length > 0) {
                                    htmlHelpers.showAlert(arrErrs.join(', '));
                                }
                            }
                        });
                    }
                    else if (isValidAnser) {
                        buildNewRowChatBot(row);
                    }
                    else {
                        showQuestionsDefault();
                    }
                });
            }
        }

        function resetTimerInactive(active) {
            var time = nosune.Settings.general.chatTimeInactivity;
            if (time != undefined && time > 0 && active) {
                time = time * 60000;
                /* Clear the previous interval */
                clearInterval(timer);
                /* Reset the seconds of the timer */
                currSeconds = 0;
                /* Set a new interval */
                timer = setInterval(startIdleTimer, time);
                return;
            }
            clearInterval(timer);
        };

        function startIdleTimer() {
            /* Increment the timer seconds */
            currSeconds++;
            updateConversation(currentConversationID, 'Closed');
            clearInterval(timer);
        }

        /**
         * Construye el formulario para el ingreso del usuario
         * @param {any} isEnabled
         */
        function buildChatBotWindow(isEnabled) {
            Promise.all([
                services.checkQuestions(alias)
            ]).then(function (questions) {
                var result = questions[0];
                welcomeMessage = result.responseMessage;
                jsonQuestionsBot = result.listQuestions;

                htmlHelpers.buildTemplate('chatBot-window.html', 'chat-primaryB-window');

                var textMessage = htmlHelpers.get('chat-message');
                htmlHelpers.get('img-wait').src = address + '/images/chat-wait.svg';

                showQuestionsDefault(true);

                htmlHelpers.on('chat-send-message', 'click', function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    if (textMessage.value && textMessage.value.trim() !== '') {
                        htmlHelpers.get('chat-chars').innerHTML = '3';
                        var value = ' ';

                        if (textMessage.value && textMessage.value.trim() !== '') {
                            value = textMessage.value;
                        }
                        var valoresAceptados = /^[0-9]+$/;
                        var row = [];
                        row.creationDate = moment();
                        row.name = usuarioLocal;
                        row.messageID = 1;
                        row.creatorID = usuarioLocal;
                        row.description = value;

                        if (value !== '') {
                            value = value.replace(/<[^>]*>/g, '');
                        }
                        if (value.match(valoresAceptados) && value <= jsonQuestionsBot.length) {
                            buildNewRowChatBot(row);
                            showAswers(value, levelQuestionCahtBot);
                        }

                        textMessage.focus();
                        htmlHelpers.get('chat-message').value = '';
                    }
                });

                htmlHelpers.on('chat-message', 'keypress', function (ev) {
                    var name = event.key;
                    if (name === 'Enter') {
                        htmlHelpers.get('chat-chars').innerHTML = '3';
                        var value = ' ';
                        if (textMessage.value && textMessage.value.trim() !== '') {
                            value = textMessage.value;
                        }
                        var valoresAceptados = /^[0-9]+$/;
                        var row = [];
                        row.creationDate = moment();
                        row.name = usuarioLocal;
                        row.messageID = 1;
                        row.creatorID = usuarioLocal;
                        row.description = value;
                        if (value !== '') {
                            value = value.replace(/<[^>]*>/g, '');
                        }
                        if (value.match(valoresAceptados) && value <= jsonQuestionsBot.length) {
                            buildNewRowChatBot(row);
                            showAswers(value, levelQuestionCahtBot);
                        }

                        textMessage.focus();
                        htmlHelpers.get('chat-message').value = '';
                    }
                    if (name === 'Enter') {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }
                });

                htmlHelpers.on('chat-message', 'keyup', function (ev) {
                    htmlHelpers.get('chat-chars').innerHTML = (3 - ev.target.value.length);
                });

                htmlHelpers.on('chat-preview-url-close', 'click', function (ev) {
                    unlockCrawler = false;
                    urlInfo = null;
                    bindUrl();
                });

                htmlHelpers.on('chat-message', 'input', function (ev) {
                    var matches = ev.target.value.match(regUrl);
                    if (matches && unlockCrawler) {
                        if (!urlInfo) {
                            executeCrawler = true;
                            services.crawler(matches[0]).then(function (data) {
                                if (data.image && executeCrawler) {
                                    urlInfo = {};
                                    urlInfo.url = matches[0];
                                    urlInfo.title = data.title;
                                    urlInfo.description = data.description;
                                    urlInfo.image = data.image;
                                    bindUrl();
                                }
                                executeCrawler = false;
                            }).catch(function (error) {
                                executeCrawler = false;
                                console.log(error);
                            });
                        }
                    } else if (urlInfo) {
                        urlInfo = null;
                        bindUrl();
                    }
                });



                htmlHelpers.on('chat-close-window', 'click', function (ev) {
                    if (confirm('¿Deseas salir del chat?')) {
                        formValidation.isSubmitted = false;
                        htmlHelpers.get('chat-primaryB-window').remove();
                        idLevelOne = 0;
                        idLevelZero = 0;
                        idLevelTwo = 0;
                        mainParentQuestionId = 0;
                        chatAgente = 0;
                        buildOpenChatButton();
                    }
                });

                htmlHelpers.on('chat-close-window-wait', 'click', function (ev) {
                    formValidation.isSubmitted = false;
                    htmlHelpers.get('chat-primaryB-window').remove();
                    idLevelOne = 0;
                    idLevelZero = 0;
                    idLevelTwo = 0;
                    mainParentQuestionId = 0;
                    chatAgente = 0;
                    buildOpenChatButton();
                });
            })
        }

        /**
         * crea una nueva fila en la conversción del usuario final
         * @param {any} row
         */
        function buildNewRowChatBot(row) {
            var time = moment(row.creationDate).format('h:mm a');
            identifiers.push(row.messageID);
            var item = htmlHelpers.newElement('div');
            var message = [];
            if (date != moment(row.creationDate).format('DD [de] MMMM [de] YYYY')) {
                date = moment(row.creationDate).format('DD [de] MMMM [de] YYYY');
                var divFecha = htmlHelpers.newElement('div');
                divFecha.innerHTML = date;
                divFecha.classList.add('chat-fecha');
                htmlHelpers.get('chat-container-messages').appendChild(divFecha);
            }
            message.push('<b>' + row.name + ':</b>');
            message.push('<br>' + htmlHelpers.findLinks(row.description));
            message.push('<p style="text-align:right;">' + time + '</p>');

            item.innerHTML = message.join('');
            if (row.creatorID === 'ChatBot') {
                item.classList.add('rigth');
            } else {
                item.classList.add('cLeft');
            }
            htmlHelpers.get('chat-container-messages').appendChild(item);
            htmlHelpers.get('chat-container-messages').scrollTop = htmlHelpers.get('chat-container-messages').scrollHeight;
        }

        /**Crea la ventana final para el usuario final */
        function buildEndWindow() {
            var btnContainer = htmlHelpers.buildTemplate('end-window.html');

            htmlHelpers.on('chat-email', 'input', function (e) { formValidation.validateRequiredEmail(); });

            if (currentEmail) {
                htmlHelpers.get('chat-email').value = currentEmail;
            }

            htmlHelpers.on('chat-end-out', 'click', function (ev) {
                formValidation.isSubmitted = false;
                btnContainer.remove();
                buildOpenChatButton();
            });

            htmlHelpers.on('end-chat-form-close', 'submit', function (ev) {
                ev.preventDefault();
                formValidation.isSubmitted = true;

                if (formValidation.validaFormClose()) {
                    var model = {
                        key: currentKey,
                        email: htmlHelpers.get('chat-email').value
                    };

                    htmlHelpers.get('chat-end-send').disabled = true;
                    htmlHelpers.get('chat-end-out').disabled = true;

                    services.sendEmail(model).then(function (data) {
                        formValidation.isSubmitted = false;
                        btnContainer.remove();
                        buildSuccessfulEmail(model.email);
                    }).catch(function (error) {
                        console.log(error);
                        formValidation.isSubmitted = false;
                        htmlHelpers.get('chat-end-send').disabled = false;
                        htmlHelpers.get('chat-end-out').disabled = false;
                        htmlHelpers.showAlert('Lo sentimos, no se pudo enviar el correo electrónico.');
                    });
                }
            });
        }

        function buildQualify() {
            var btnContainer = htmlHelpers.buildTemplate('qualify-chat.html');
            var buttons = htmlHelpers.get('contain-buttons').getElementsByTagName('button');

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function (ev) {
                    var value = this.getAttribute('data-value');
                    htmlHelpers.get('chat-form-qualification').value = value;
                    htmlHelpers.get('chat-form-qualification-val').style.display = 'none';
                    var index = parseInt(value);

                    for (var a = 0; a < buttons.length; a++) {
                        if (a < index) {
                            buttons[a].classList.add('active');
                        } else {
                            buttons[a].classList.remove('active');
                        }
                    }
                });
            }

            htmlHelpers.on('chat-form-qualify', 'submit', function (ev) {
                ev.preventDefault();
                formValidation.isSubmitted = true;

                if (formValidation.validateQualify()) {

                    var model = {
                        key: currentKey,
                        qualification: parseInt(htmlHelpers.get('chat-form-qualification').value),
                        comment: htmlHelpers.get('chat-form-comment').value,
                    };

                    htmlHelpers.get('chat-send-omit').disabled = true;
                    htmlHelpers.get('chat-send-qualify').disabled = true;
                    htmlHelpers.get('btn-close').disabled = true;

                    services.qualify(model).then(function (data) {
                        formValidation.isSubmitted = false;
                        btnContainer.remove();
                        buildEndWindow();
                    }).catch(function (error) {
                        formValidation.isSubmitted = false;
                        htmlHelpers.get('chat-send-omit').disabled = false;
                        htmlHelpers.get('chat-send-qualify').disabled = false;
                        htmlHelpers.get('btn-close').disabled = false;
                        htmlHelpers.showAlert('Lo sentimos, no se pudo enviar la calificación.');
                    });
                }
            });

            htmlHelpers.on('chat-send-omit', 'click', function (ev) {
                btnContainer.remove();
                buildEndWindow();
            });

            htmlHelpers.on('btn-close', 'click', function (ev) {
                btnContainer.remove();
                buildEndWindow();
            });
        }

        /**
         * Muestra la ventana donde se confirma el envio del correo
         * @param {any} email
         */
        function buildSuccessfulEmail(email) {
            var btnContainer = htmlHelpers.buildTemplate('send-email.html');

            htmlHelpers.get('label-email').innerText = email;

            htmlHelpers.get('img-wait').src = address + '/images/chat-wait.svg';

            htmlHelpers.on('btn-closer', 'click', function (ev) {
                btnContainer.remove();
                buildOpenChatButton();
            });
        }

        /**Validaciones para los dos formularios que se manejan (registro y envio de correo) */
        var formValidation = {
            isSubmitted: false,
            validateName: function () {
                var name = htmlHelpers.get('chat-name');
                var lblNames = htmlHelpers.get('lbl-chat-name');

                if (this.isSubmitted && name) {
                    if (name.validity.valueMissing) {
                        name.classList.add('chat-error');
                        lblNames.classList.add('label-error');
                        htmlHelpers.get('chat-name-val').style.display = 'block';
                        name.classList.remove('is-valid-field');
                        lblNames.classList.remove('is-valid');
                    }
                    else if (name && name.value) {
                        name.classList.remove('chat-error');
                        lblNames.classList.remove('label-error');
                        htmlHelpers.get('chat-name-val').style.display = 'none';
                        name.classList.add('is-valid-field');
                        lblNames.classList.add('is-valid');
                    }
                    else {
                        name.classList.remove('is-valid-field');
                        name.classList.remove('chat-error');
                        lblNames.classList.remove('label-error');
                        lblNames.classList.remove('is-valid');
                        htmlHelpers.get('chat-name-val').style.display = 'none';
                    }

                    return name.validity.valid;
                } else {
                    return true;
                }
            },
            validateRequiredEmail: function () {
                var email = htmlHelpers.get('chat-email');
                var lblEmail = htmlHelpers.get('lbl-chat-email');
                if (this.isSubmitted && email) {
                    if (email.validity.patternMismatch || email.validity.valueMissing) {
                        email.classList.remove('is-valid-field');
                        email.classList.add('chat-error');
                        lblEmail.classList.add('label-error');
                        lblEmail.classList.remove('is-valid');
                        htmlHelpers.get('chat-email-val').style.display = 'block';
                    }
                    else if (email && email.value) {
                        email.classList.remove('chat-error');
                        lblEmail.classList.remove('label-error');
                        htmlHelpers.get('chat-email-val').style.display = 'none';
                        email.classList.add('is-valid-field');
                        lblEmail.classList.add('is-valid');
                    }
                    else {
                        email.classList.remove('is-valid-field');
                        email.classList.remove('chat-error');
                        lblEmail.classList.remove('label-error');
                        lblEmail.classList.remove('is-valid');
                        htmlHelpers.get('chat-email-val').style.display = 'none';
                    }

                    return email.validity.valid;
                } else {
                    return true;
                }
            },
            validateEmail: function () {
                var email = htmlHelpers.get('chat-email');
                var lblEmail = htmlHelpers.get('lbl-chat-email');

                if (this.isSubmitted && email) {
                    if (email.validity.patternMismatch) {
                        email.classList.add('chat-error');
                        lblEmail.classList.add('label-error');
                        lblEmail.classList.remove('is-valid');
                        email.classList.remove('is-valid-field');
                        htmlHelpers.get('chat-email-val').style.display = 'block';
                    }
                    else {
                        email.classList.remove('chat-error');
                        lblEmail.classList.remove('label-error');
                        htmlHelpers.get('chat-email-val').style.display = 'none';
                        email.classList.add('is-valid-field');
                        lblEmail.classList.add('is-valid');
                    }

                    return email.validity.valid;
                } else {
                    return true;
                }
            },
            validateRequired: function (id) {
                var message = htmlHelpers.get(id);
                var label = htmlHelpers.get('lbl-' + id);
                if (this.isSubmitted && message) {
                    if (message.validity.valueMissing) {
                        message.classList.add('chat-error');
                        message.classList.remove('is-valid-field');
                        if (label) {
                            label.classList.remove('is-valid');
                            label.classList.add('label-error');
                        }
                        htmlHelpers.get(id + '-val').style.display = 'block';
                    }
                    else {
                        message.classList.remove('chat-error');
                        message.classList.add('is-valid-field');
                        if (label) {
                            label.classList.remove('label-error');
                            label.classList.add('is-valid');
                        }
                        htmlHelpers.get(id + '-val').style.display = 'none';
                    }

                    return message.validity.valid;
                } else {
                    return true;
                }
            },
            validateQualifing: function () {
                var message = htmlHelpers.get('chat-form-comment');
                var lblError = htmlHelpers.get('lbl_chat-areaQuali');

                if (this.isSubmitted && message) {
                    if (message.value === '') {
                        htmlHelpers.get('chat-form-qualification-val').style.display = 'block';
                        message.classList.remove('is-valid-field');
                        lblError.classList.add('label-error');
                        lblError.classList.remove('is-valid');
                    }
                    else {
                        htmlHelpers.get('chat-form-qualification-val').style.display = 'none';
                        message.classList.add('is-valid-field');
                        lblError.classList.add('is-valid');
                        lblError.classList.remove('label-error');
                    }

                    return message.value !== '';
                } else {
                    return true;
                }
            },
            validaForm: function (form) {
                return this.validateName() & this.validateEmail()
                    & this.validateCaptcha() & this.validateRequired('chat-terms');
            },
            validaFormClose: function (form) {
                return this.validateRequiredEmail();
            },
            validateFormPqrds: function (form) {
                return this.validateRequiredEmail() & this.validateRequired('txt-pqrds') &
                    this.validateCaptcha() & this.validateRequired('chat-terms');
            },
            validateQualify: function (form) {
                return this.validateQualifing();
            },
            validateCaptcha: function () {
                var captcha = hcaptcha.getResponse();
                var valido = captcha.length > 0;
                var lblError = htmlHelpers.get('captcha-val');
                if (!valido) {
                    lblError.classList.add('label-error');
                    lblError.classList.remove('is-valid');
                    htmlHelpers.get('captcha-val').style.display = 'block';
                }
                else {
                    lblError.classList.add('is-valid');
                    lblError.classList.remove('label-error');
                    htmlHelpers.get('captcha-val').style.display = 'none';
                }
                return valido;
            }
        };

        /**Habilita el boton de chat en el sitio */
        function buildOpenChatButton() {
            Promise.all([
                services.checkConnectedUser(alias)
            ]).then(function (data) {
                var response = data[0];
                siteID = response.siteID;
                if (!('remove' in Element.prototype)) {
                    Element.prototype.remove = function () {
                        if (this.parentNode) {
                            this.parentNode.removeChild(this);
                        }
                    };
                }
                cleanVariables();
                if (response.isConnected && !response.disabled) {
                    var btnContainer = htmlHelpers.buildTemplate('openchat.html');
                    htmlHelpers.on('chat-open', 'click', function (ev) {
                        buildRegister(false);
                        if (response.isAdmin) {
                            htmlHelpers.showAlert('Eres un administrador y no puedes iniciar una conversación');
                        }
                        btnContainer.remove();
                    });
                }
                else {
                    checkSetQuestions(alias, response);
                }
            })
        }

        function checkSetQuestions(alias, response) {
            Promise.all([
                services.checkQuestions(alias)
            ]).then(function (questions) {
                var result = questions[0];
                var btnContainer = htmlHelpers.buildTemplate('openSolicitaInformacion.html');
                htmlHelpers.on('chat-open', 'click', function (ev) {
                    identifiers = [];
                    formValidation.isSubmitted = false;
                    siteID = response.siteID;
                    if (response.isAdmin) {
                        htmlHelpers.showAlert('Eres un administrador y no puedes iniciar una conversación');
                    }
                    if (result.checkQuestion) {
                        buildRegister(true);
                        jsonQuestionsBot = result.listQuestions;
                    }
                    else {
                        formValidation.isSubmitted = false;
                        btnContainer.remove();
                        buildChatPqrds();
                    }
                    btnContainer.remove();
                });
            })
        }

        /**Verifica que el chat esta habilitado (es decir si hay usuarios administradores conectados), si es asi
         * entonces habilita el boton para abrir el chat*/
        function loadClient() {
            Promise.all([
                htmlHelpers.loadCss(address + '/css/styles.css'),
                checkAvailable()
            ]).then(function (data) {
                var response = data[1];
                if (response.isConnected && !response.disabled) {
                    siteID = response.siteID;
                    currentIdentifier = response.currentID;
                    currentConversationID = response.conversationID;
                    currentOfficial = response.currentOfficial;
                    currentOfficialNames = response.currentOfficialName;
                    currentEmail = response.currentEmail;
                    currentKey = response.currentKey;

                    if (response.conversationStatus === 'Opened') {
                        services.getAllMessages(response.conversationID, 0, 1000).then(function (response) {
                            buildChatWindow(true);

                            for (var i = response.results.length - 1; i >= 0; i--) {
                                buildNewRow(response.results[i]);
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                    else if (response.conversationStatus === 'Waiting') {
                        buildChatWindow(false);
                    }
                    else if (!response.hideButton) {
                        buildOpenChatButton();
                    }
                } else if (!response.hideButton) {
                    buildOpenChatButton();
                }


            });
        }

        /**
         * crea una nueva fila en la conversción del usuario final
         * @param {any} row
         */
        function buildNewRow(row) {
            if (identifiers.indexOf(row.messageID) === -1) {
                var time = moment(row.creationDate).format('h:mm a');
                identifiers.push(row.messageID);
                var item = htmlHelpers.newElement('div');
                var message = [];
                if (date != moment(row.creationDate).format('DD [de] MMMM [de] YYYY')) {
                    date = moment(row.creationDate).format('DD [de] MMMM [de] YYYY');
                    var divFecha = htmlHelpers.newElement('div');
                    divFecha.innerHTML = date;
                    divFecha.classList.add('chat-fecha');
                    htmlHelpers.get('chat-container-messages').appendChild(divFecha);
                }
                message.push('<b>' + row.name + ':</b>');
                message.push('<br>' + htmlHelpers.findLinks(row.description));
                message.push('<p style="text-align:right;">' + time + '</p>');
                if (row.file) {
                    message.push('<div class="chat-message-attach"><a title="' + row.file.fileName + '" target="_blank" href="' + address + row.file.path + '"><img src="' + address + '/images/icon-file.png" /></a><br /><a target="_blank" href="' + address + row.file.path + '">' + row.file.fileName + '</a></div>');
                }
                if (row.additional) {
                    try {
                        var crawInfo = JSON.parse(row.additional);
                        message.push('<div class="chat-craw-container"><a href="' + crawInfo.url + '" target="_blank">');
                        message.push('<div class="chat-craw-container-img"><img src="' + crawInfo.image + '"/></div>');
                        message.push('<div><b>' + crawInfo.title + '</b></div>');
                        message.push('<div><span>' + crawInfo.description + '</span></div>');
                        message.push('</a></div>');

                    } catch (e) {
                    }
                }
                item.innerHTML = message.join('');
                if (row.creatorID === currentKey) {
                    resetTimerInactive(false);
                    item.classList.add('rigth');
                } else {
                    item.classList.add('cLeft');
                    resetTimerInactive(true);
                }
                htmlHelpers.get('chat-container-messages').appendChild(item);
                htmlHelpers.get('chat-container-messages').scrollTop = htmlHelpers.get('chat-container-messages').scrollHeight;
            }
        }

        /**
         * Envia el mensaje del chat
         * @param {any} message
         * @param {any} id
         * @param {any} user
         * @param {any} fileID
         */
        function sendMessage(message, id, user, fileID, additional) {
            toggleControls(false);
            connection.invoke('SendMessage', message, id, user, fileID, additional).catch(function (err) {
                return console.error(err.toString());
            });
        }

        /**
         * Registra el evento cuando el usuario empieza a escribir
         * @param {any} id
         * @param {any} user
         */
        function typing(id, user) {
            htmlHelpers.get(id).innerHTML = user + ' está escribiendo';
            htmlHelpers.get(id).classList.add('typing');
        }

        function setTyping(name) {
            connection.invoke('Typing', name).catch(function (err) {
                return console.error(err.toString());
            });
        }

        /**
         * Metodo para subir un archivo desde afuera
         * @param {any} file
         * @param {any} callback
         */
        function uploadFile(file, callback) {
            return services.uploadFile(file, callback);
        }

        /**Cierra sesión de administrador */
        function close() {
            return services.deleteConnectedUser();
        }

        /**
         * Cambia el estado de una conversación
         * @param {any} id
         * @param {any} status
         */
        function updateConversation(id, status) {
            var model = {
                conversationID: id,
                status: status
            };

            return services.updateConversation(model);
        }

        /**
         * Evento cuando el administrador habilita la conversación con el usuario
         * @param {any} callback
         */
        function onStartChat(callback) {
            if (callback) {
                callStartChat = callback;
            }
        }

        /**
         * Evento para recibir mensajes por parte del administrador
         * @param {any} callback
         */
        function onReceiveMessage(callback) {
            if (callback) {
                callReceiveMessage = callback;
            }
        }

        /**
         * Evento cuando se une un usuario al chat
         * @param {any} callback
         */
        function onJoinUser(callback) {
            if (callback) {
                callJoinUser = callback;
            }
        }

        /**
         * Evento para elimina una conversación
         * @param {any} callback
         */
        function onRemoveConversation(callback) {
            if (callback) {
                callRemoveConversation = callback;
            }
        }

        /**
         * Activa la conversación por parte del usuario administrador
         * @param {any} id
         */
        function activateConversation(id) {
            connection.invoke('ActivateConversation', id).catch(function (err) {
                return console.error(err.toString());
            });
        }

        function getMessages(conversationID, page, pageSize) {
            return services.getAllMessages(conversationID, page, pageSize);
        }

        /**
         * Inicia los eventos para el administrador
         */
        function bindAdminEvents() {
            connection.on("JoinUser", function (user) {
                if (callJoinUser) {
                    callJoinUser.call(this, user);
                }
            });

            connection.on("StartChat", function (admin, user, currentOfficialName, conversationID, key) {
                if (callStartChat) {
                    callStartChat.call(this, { admin: admin, user: user, currentOfficialName: currentOfficialName, conversationID: conversationID });
                }
            });

            connection.on("ReceiveMessage", function (user, currentID, message) {
                if (callReceiveMessage) {
                    callReceiveMessage.call(this, user, currentID, message);
                }
            });

            connection.on("RemoveConversation", function (id, status, userID) {
                if (callRemoveConversation) {
                    callRemoveConversation.call(this, id, status, userID);
                }
            });

            onCloseConnection();
        }

        /**
         * Inicia la conexión al web socket y establece los eventos en el hub
         */
        function startHubManager() {
            return new Promise(function (resolve, reject) {
                connection = new signalR.HubConnectionBuilder().withUrl(address + '/chatHub', { transport: signalR.HttpTransportType.WebSockets, skipNegotiation: true }).configureLogging(signalR.LogLevel.Error).build();

                connection.start().then(function () {
                    bindAdminEvents();
                    resolve(true);
                }).catch(function (err) {
                    console.error(err.toString());
                    reject(err);
                });
            });
        }

        /**
         * Inicia sesión como usuario administrador
         * @param {any} token
         */
        function adminConnect(token) {
            return new Promise(function (resolve, reject) {
                sessionManager(token).then(function (data) {
                    siteID = data.siteID;
                    startHubManager().then(function (value) {
                        resolve(data);
                    });
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Obtiene la lista de usuarios que estan en cola
         * @param {any} status
         * @param {any} page
         * @param {any} pageIndex
         */
        function viewQueue(status, page, pageSize, criteria, conversationID, asc, start, end) {
            return services.getAllConversations(status, page, pageSize, criteria, conversationID, asc, start, end);
        }

        /**
         * Si el admin esta autenticado entonces retorna el id del sitio, si no entonces ingresa registro en la tabla de usuarios conectados
         * @param {string} token
         */
        function sessionManager(token) {
            var model = { token: token, alias: alias };
            return services.addConnectedUser(model);
        }

        /**Funciones para ayudar a modificar el DOM */
        var htmlHelpers = {
            /**
             * Busca todas las url y las convierte en links
             * @param {any} originalText
             */
            findLinks: function (originalText) {
                originalText = ' ___ ' + originalText;

                var pseudoUrlPattern1 = /^([^\/])?(www\.[\S]+(\b|$|[^<>]))/gim;
                var pseudoUrlPattern2 = /([^\/"><])(www\.[\S]+(\b|$))(?![^<>])?/gi;
                var pseudoUrlPattern3 = /([^\/"><])((http|https|ftp):\/\/[\S]+(\b|$))(?![^<>])?/gim;

                originalText = originalText
                    .replace(/<([^>]*)>/g, ' <$1>')
                    .replace(pseudoUrlPattern1, '$1<a target="_blank" href="http://$2">$2</a>')
                    .replace(pseudoUrlPattern2, '$1<a target="_blank" href="http://$2">$2</a>')
                    .replace(pseudoUrlPattern3, '$1<a target="_blank" href="$2">$2</a>');

                return originalText.replace(' ___ ', '');
            },

            /**
             * Retorna el elemento por el identificador
             * @param {any} id
             */
            get: function (id) {
                return document.getElementById(id);
            },

            /**
             * Adiciona un nuevo nodo al objeto
             * @param {any} object
             * @param {any} element
             */
            append: function (object, element) {
                object.appendChild(element);
            },
            /**
             * Adiciona un nuevo evento al elemento
             * @param {any} id
             * @param {any} event
             * @param {any} callback
             */
            on: function (id, event, callback) {
                this.get(id).addEventListener(event, callback);
            },
            /**
             * Crea un nuevo elemento en el DOM
             * @param {any} tag
             */
            newElement: function (tag) {
                return document.createElement(tag);
            },
            /**
             * crea un div de acuerdo al template indicado
             * @param {any} template
             * @param {any} id
             */
            buildTemplate: function (template, id) {
                var item = this.newElement('div');

                if (id) {
                    item.id = id;
                }

                item.innerHTML = window.templates[template];
                this.append(document.body, item);
                return item;
            },
            loadCss: function (path) {
                return new Promise(function (resolve, reject) {
                    resolve(true);
                });
            },
            /**
             * Custom alert
             * @param {any} message
             */
            showAlert: function (message) {
                if (!document.getElementById('chat-alert-ct')) {
                    var container = this.buildTemplate('alert-window.html', 'chat-alert-ct');
                    this.get('chat-alert-message').innerHTML = message;
                    this.on('chat-alert-close', 'click', function (ev) {
                        document.getElementById('chat-alert-ct').remove();
                    });
                    this.on('chat-alert-accept', 'click', function (ev) {
                        document.getElementById('chat-alert-ct').remove();
                    });
                }
            },
            /**
             * Function to process url params
             * @param {any} name
             */
            urlSearchParams: function (name, url) {
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
                if (results == null) {
                    return null;
                }
                else {
                    return decodeURI(results[1]) || 0;
                }
            }
        }

        /**Representa todas las llamadas a servicios externos */
        var services = {
            /**
             * Verifica si existen preguntas configuradas (CHATBOOT)
             * @param {any} alias
             */
            checkQuestions: function (alias) {
                return this.http(authorityProtocol + '://' + alias + '.' + authorityDomain + '/api/v1/chatquestion', 'GET');
            },
            /**
             * Obtiene todos los mensajes de una conversación
             * @param {any} id
             * @param {any} page
             * @param {any} pageSize
             */
            getAllMessages: function (id, page, pageSize) {
                return this.http(address + '/api/v1/messages/?conversationID=' + id + '&page=' + page + '&pageSize=' + pageSize, 'GET');
            },
            /**Cierra la sesión del usuario */
            signOut: function () {
                return this.http(address + '/api/v1/authentication/', 'POST');
            },
            /**
             * Actualiza la conversación y la cambia de estado
             * @param {any} model
             */
            updateConversation: function (model) {
                return this.http(address + '/api/v1/conversations/', 'PUT', model)
            },
            /**
             * Envia el historial por correo
             * @param {any} model
             */
            sendEmail: function (model) {
                return this.http(address + '/api/v1/email/', 'POST', model);
            },
            /**
             * Califica una conversación
             * @param {any} model
             */
            qualify: function (model) {
                return this.http(address + '/api/v1/conversations/qualify/', 'POST', model);
            },
            /**
             * Crea una nueva conversacion
             * @param {any} model
             */
            addConversation: function (model) {
                return this.http(address + '/api/v1/conversations/', 'POST', model)
            },
            /**
             * Obtiene el listado de conversaciones ordenadas por la mas antigua y que estan esperando
             * @param {any} status
             * @param {any} page
             * @param {any} pageSize
             * @param {any} criteria
             * @param {any} conversationID
             * @param {any} asc
             * @param {any} start
             * @param {any} end
             */
            getAllConversations: function (status, page, pageSize, criteria, conversationID, asc, start, end) {
                return this.http(address + '/api/v1/conversations/?status=' + status + '&page=' + page + '&pageSize=' + pageSize + '&criteria=' + (criteria ? criteria : '') + '&conversationID=' + (conversationID ? conversationID : '') + '&asc=' + (asc ? asc : 'false') + (start ? '&start=' + start : '') + (end ? '&end=' + end : ''), 'GET');
            },
            /**
             * Elimina un usuario administrador y cierra su sesión
             * @param {any} userID
             * @param {any} siteID
             */
            deleteConnectedUser: function () {
                return this.http(address + '/api/v1/connectedusers/removeadmin', 'DELETE');
            },
            /**
             * Crea un nuevo funcionario para atender peticiones
             * @param {any} model
             */
            addConnectedUser: function (model) {
                return this.http(address + '/api/v1/connectedusers/', 'POST', model);
            },
            /**
             * Verifica si existen funcionarios activos para iniciar el chat
             * @param {any} alias
             */
            checkConnectedUser: function (alias) {
                return this.http(address + '/api/v1/connectedusers/check/' + alias, 'GET');
            },
            /**
             * Verifica si existe una conversación abierta
             * @param {any} alias
             * @param {any} enabledPqrds
             */
            checkOpenConversation: function (alias, enabledPqrds) {
                return this.http(address + '/api/v1/conversations/check/' + alias + '/?enabledPqrds=' + enabledPqrds, 'GET');
            },
            /**obtiene el captcha para crear pqrds */
            getPqrdsCaptcha: function () {
                return this.http(authorityProtocol + '://' + alias + '.' + authorityDomain + '/api/v1/captcha', 'GET');
            },
            /**
             * Trae la informacion de una url
             * @param {any} url
             */
            crawler: function (url) {
                return this.http(authorityProtocol + '://' + alias + '.' + authorityDomain + '/api/v1/pagepreviews/?url=' + url, 'GET');
            },
            /**
             * Crea una nueva pqrds tipo sugerencia
             * @param {any} model
             */
            setPqrds: function (model) {
                return this.http(authorityProtocol + '://' + alias + '.' + authorityDomain + '/api/v1/complaintforms', 'POST', model);
            },
            /**
             * Esta funcion se utiliza para llamar servicios web
             * @param {any} path
             * @param {any} method
             * @param {any} model
             */
            http: function (path, method, model) {
                return new Promise(function (resolve, reject) {
                    var xhttp = new XMLHttpRequest();

                    xhttp.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            if (this.status === 200 || this.status === 201) {
                                if (this.response) {
                                    resolve(JSON.parse(this.response));
                                } else {
                                    resolve(this.response);
                                }
                            } else {
                                reject(this);
                            }
                        }
                    };

                    if (path.indexOf(nosune.Settings.authorityDomain) > -1) {
                        xhttp.withCredentials = false;
                    } else {
                        xhttp.withCredentials = true;
                    }

                    xhttp.open(method, path, true);
                    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

                    if (model) {
                        xhttp.send(JSON.stringify(model));
                    } else {
                        xhttp.send();
                    }
                });
            },
            /**
             * Sube un arhivo al servidor
             * @param {any} path
             * @param {any} file
             */
            uploadFile: function (file, callProgress) {
                var path = address + '/api/v1/files/upload/'

                return new Promise(function (resolve, reject) {
                    if (file.size > 5242880) {
                        htmlHelpers.showAlert('No puedes subir un archivo mayor a 5 megas');
                        reject(false);
                    } else if (!/\.(doc|txt|xls|xlsx|docx|ppt|pptx|page|number|pdf|tiff|bmp|jpg|jpeg|png|gif)$/.test(file.name.toLowerCase())) {
                        htmlHelpers.showAlert('No puedes subir este tipo de archivo');
                        reject(false);
                    } else {
                        var xhttp = new XMLHttpRequest();

                        if (xhttp.upload) {
                            xhttp.upload.onprogress = function (e) {
                                var done = e.position || e.loaded, total = e.totalSize || e.total;
                                var percentage = (Math.floor(done / total * 1000) / 10);

                                if (callProgress) {
                                    callProgress.call(null, percentage);
                                }
                            };
                        }

                        xhttp.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                if (this.status === 200 || this.status === 201) {
                                    if (this.response) {
                                        resolve(JSON.parse(this.response));
                                    } else {
                                        resolve(this.response);
                                    }
                                } else {
                                    reject(this);
                                }
                            }
                        };

                        var formData = new FormData();
                        formData.append("file", file);

                        xhttp.withCredentials = true;
                        xhttp.open('POST', path, true);
                        xhttp.send(formData);
                    }
                });
            }
        }

        start();

        /** Retorna todos los metodos públicos */
        var chat = {
            adminConnect: adminConnect,
            close: close,
            viewQueue: viewQueue,
            activateConversation: activateConversation,
            getMessages: getMessages,
            onStartChat: onStartChat,
            sendMessage: sendMessage,
            onReceiveMessage: onReceiveMessage,
            onJoinUser: onJoinUser,
            onRemoveConversation: onRemoveConversation,
            updateConversation: updateConversation,
            setTyping: setTyping,
            uploadFile: uploadFile
        };

        return chat;
    }());
}
window.templates = Object.create(null)
window.templates['alert-window.html'] = '<div class="modal-wrap">\n    <div class="modal-inner">\n        <div class="modal__close" id="chat-alert-close">\n            <svg width="19" height="19" viewBox="0 0 19.413 19.413">\n                <g transform="translate(10.414 -374.874) rotate(45)">\n                    <rect width="4.576" height="22.878" rx="2.288" transform="translate(260 274.727) rotate(-90)" fill="" />\n                    <rect width="4.576" height="22.878" rx="2.288" transform="translate(269.151 261)" fill="" />\n                </g>\n            </svg>\n        </div>\n        <div class="modal-wrapTxt">\n            <div class="modal__tit">Advertencia</div>\n            <div class="modal__txt" id="chat-alert-message"></div>\n            <br>\n            <button type="button" id="chat-alert-accept" class="custom-button-alert modal__btn btn-main fixModalBtn">Aceptar</button>\n        </div>\n    </div>\n</div>'
window.templates['chat-window.html'] = '<div class="chat-window">\n    <div id="chat-window-waiting" class="chat-window-waiting">\n        <div class="chat__close"  id="chat-close-window-wait"> </div>\n        <div class="chat-window-innerWait">\n            <img id="img-wait" src="/images/chat-wait.svg" alt="">\n            <p class="chat__subTit">En unos momentos <br> un agente de servicio te atenderá</p> \n        </div>        \n    </div>\n\n    <div class="chat-window-header">\n        <span id="chat-window-title"></span>\n        <button type="button" class="chat__close" id="chat-close-window"> </button>        \n    </div>\n    <div class="chat-window-container" id="chat-container-messages">\n    </div>\n    <div class="chat-window-url" id="chat-preview-url">\n        <div class="url-img" id="chat-preview-url-img">\n        </div>\n        <div class="url-info">\n            <div id="chat-preview-url-title"></div>\n            <div id="chat-preview-url-desc"></div>\n        </div>\n        <div class="url-close">\n            <button type="button" id="chat-preview-url-close">\n                <i class="icon-cross"></i>\n            </button>\n        </div>\n    </div>\n    <div class="chat-window-text">\n        <div class="chat-wArea">\n            <div class="list-emojis" id="chat-list-emojis">\n                <button data-value="😀" type="button">😀</button>\n                <button data-value="😃" type="button">😃</button>\n                <button data-value="😄" type="button">😄</button>\n                <button data-value="😁" type="button">😁</button>\n                <button data-value="😆" type="button">😆</button>\n                <button data-value="😂" type="button">😂</button>\n                <button data-value="😍" type="button">😍</button>\n                <button data-value="😘" type="button">😘</button>\n                <button data-value="😗" type="button">😗</button>\n                <button data-value="😙" type="button">😙</button>\n                <button data-value="😚" type="button">😚</button>\n                <button data-value="😊️" type="button">😊️</button>\n                <button data-value="🙂" type="button">🙂</button>\n                <button data-value="😐" type="button">😐</button>\n                <button data-value="😑" type="button">😑</button>\n                <button data-value="😶" type="button">😶</button>\n                <button data-value="🙄" type="button">🙄</button>\n                <button data-value="😏" type="button">😏</button>\n                <button data-value="😫" type="button">😫</button>\n                <button data-value="😥" type="button">😥</button>\n                <button data-value="😣" type="button">😣</button>\n                <button data-value="😴" type="button">😴</button>\n                <button data-value="😉" type="button">😉</button>\n                <button data-value="😛" type="button">😛</button>\n                <button data-value="😜" type="button">😜</button>\n                <button data-value="😝" type="button">😝</button>\n                <button data-value="😒" type="button">😒</button>\n                <button data-value="🤗" type="button">🤗</button>\n                <button data-value="😮" type="button">😮</button>\n                <button data-value="😷" type="button">😷</button>\n            </div>\n            <textarea required maxlength="550" id="chat-message" placeholder="Escribe un mensaje aquí"></textarea>\n            <div class="chat-window-counter">\n                <div id="chat-file-name">\n                    <span id="chat-file-name-text"></span>\n                    <button  style="display: none;" id="chat-file-name-delete"><i class="icon-delete"></i></button>\n                </div>\n                <div>\n                    <span id="chat-chars">550</span>\n                    Caracteres\n                </div>                \n            </div>\n        </div>\n        <div class="chat-window-buttons">\n            <button class="button-emoji" id="chat-show-emojis">\n                <i id="icon-emojis" class="icon-happy"></i>\n            </button>\n            <div class="chat-upload-file" id="chat-upload-file">\n                <i id="chat-icon-file" class="icon-attachment"></i>\n                <input type="file" id="chat-file" name="chat-file" value="" />\n            </div>\n            <div class="chat-upload-file" style="display: none;" id="chat-load-file">\n                Cargando archivo.. 0%\n            </div>\n            <div class="chat-window-buttons-send">\n                <button type="button" id="chat-send-message">                \n                    Enviar\n                </button>\n            </div>\n        </div>\n        \n    </div>    \n</div>'
window.templates['chatBot-window.html'] = '<div class="chat-window">\n    <div id="chat-window-waiting" class="chat-window-waiting">\n        <div class="chat__close" id="chat-close-window-wait"> </div>\n        <div class="chat-window-innerWait">\n            <img id="img-wait" src="/images/chat-wait.svg" alt="">\n            <p class="chat__subTit">En unos momentos será atendido</p>\n        </div>\n    </div>\n\n    <div class="chat-window-header">\n        <span id="chat-window-title"></span>\n        <button type="button" class="chat__close" id="chat-close-window"> </button>\n    </div>\n    <div class="chat-window-container" id="chat-container-messages">\n    </div>\n    <div class="chat-window-url" id="chat-preview-url">\n        <div class="url-img" id="chat-preview-url-img">\n        </div>\n        <div class="url-info">\n            <div id="chat-preview-url-title"></div>\n            <div id="chat-preview-url-desc"></div>\n        </div>\n        <div class="url-close">\n            <button type="button" id="chat-preview-url-close">\n                <i class="icon-cross"></i>\n            </button>\n        </div>\n    </div>\n    <div class="chat-window-text">\n        <div class="chat-wArea">\n            <textarea required maxlength="3" id="chat-message" placeholder="Escribe un mensaje aquí"></textarea>\n            <div class="chat-window-counter">\n                <div>\n                    <span id="chat-chars">3</span>\n                    Caracteres\n                </div>\n            </div>\n        </div>\n        <div class="chat-window-buttons">\n            <div class="chat-window-buttons-send">\n                <button type="button" id="chat-send-message">\n                    Enviar\n                </button>\n            </div>\n        </div>\n    </div>\n</div>'
window.templates['end-window.html'] = '<div class="chat-end-window chat-end-window--mail">\n    <button type="button" class="chat__close" id="chat-end-out"></button>\n\n    <div class="chat__tit ta-c">¿Quieres una copia de este chat en tu correo electrónico?</div>\n    <div class="chat-end-window-container">\n        <div class="chat-end-window-form">\n            <br><br>\n            <form novalidate id="end-chat-form-close">\n                <div class="chat-end-window-row" id="chat-end-info-email">\n                    <label id="lbl-chat-email">Correo electrónico</label>\n                    <input required autocomplete="off" id="chat-email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" type="email" name="email" maxlength="150" />\n                    <div class="chat-error-val" id="chat-email-val">\n                        El formato de correo no es válido\n                    </div>\n                </div>\n                \n                <div class="mt40">                     \n                    <button class="button-one" type="submit" id="chat-end-send">                        \n                        Enviar\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>'
window.templates['not-connection.html'] = '<div class="chat-not-connection">\n    Se ha perdido la conexión del Chat. CONECTANDO..  <span id="chat-not-connection-counter"></span>\n</div>'
window.templates['openSolicitaInformacion.html'] = '<button tabindex="1000" id="chat-open" type="button" class="button-open" style="z-index: 999;">\n    <span></span>\n    SOLICITA INFORMACIÓN\n</button>'
window.templates['openchat.html'] = '<button tabindex="1000" id="chat-open" type="button" class="button-open" style="z-index: 999;">\n    <span></span>\n    CHATEA\n</button>'
window.templates['pqrds-window.html'] = '<div class="chat-register">\n    <div class="chat__close" id="chat-close-pqrds"></div>\n    <div class="chat__tit" id="chat-regis-title"></div>\n    <div class="chat__subTit" id="chat-regis-subtitle"></div>\n    <form novalidate class="chat-register-form" id="chat-form-pqrds">\n        <div class="chat-register-row">\n            <p></p>\n        </div>\n        <div class="chat-register-row">\n            <label id="lbl-chat-email">Correo electrónico*</label>\n            <input required autocomplete="off" id="chat-email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" type="email" name="email" maxlength="150" />\n            <div class="chat-error-val" id="chat-email-val">\n                Debes ingresar un correo electrónico válido\n            </div>\n        </div>\n        <div class="chat-register-row">\n            <label id="lbl-txt-pqrds">Mensaje*</label>\n            <textarea required id="txt-pqrds" maxlength="2048"></textarea>\n            <div class="chat-error-val" id="txt-pqrds-val">\n                Debes ingresar un mensaje\n            </div>\n        </div>\n        <div>\n            <div id="h-captcha" class="h-captcha"></div>\n            <div class="chat-error-val" id="captcha-val">\n                Debes ingresar el captcha\n            </div>\n        </div>\n\n        <div class="chat-register-row">\n            <p class="chat__subTit">\n                <input type="checkbox" required id="chat-terms" name="chat-terms" />\n                Acepto <a target="_blank" href="/politicas" id="chat-terms-link">Políticas de privacidad</a>\n            </p>\n            <div class="chat-error-val" id="chat-terms-val">\n                Debes aceptar las políticas de privacidad\n            </div>\n        </div>\n        <div class="chat-flex-row">\n            <button class="button-one" name="b" type="submit" id="chat-pqrds-send">Enviar</button>\n        </div>\n    </form>\n</div>\n<!-- =============================================== -->'
window.templates['qualify-chat.html'] = '\n <div class="chat-window chat-window--qualify">\n    \n    <div class="chat__close" id="btn-close"></div>\n    <div class="chat__tit mt20 ta-c">Califica la atención de nuestro agente de servicio</div>\n    <form novalidate class="chat-register-form" id="chat-form-qualify">\n        <div class="chat-qualify-container" id="contain-buttons">\n            <button type="button" data-value="1"><i class="icon-star"></i></button>\n            <button type="button" data-value="2"><i class="icon-star"></i></button>\n            <button type="button" data-value="3"><i class="icon-star"></i></button>\n            <button type="button" data-value="4"><i class="icon-star"></i></button>\n            <button type="button" data-value="5"><i class="icon-star"></i></button>\n            <input type="hidden" required value="" name="qualification" id="chat-form-qualification" />\n        </div>\n        <div class="chat-qualify-txtCont">\n            <p>Malo</p>\n            <p>Excelente</p>\n        </div>\n        <div class="chat-error-val" id="chat-form-qualification-val">\n            Debes dar una calificación\n        </div>\n        <label id="lbl_chat-areaQuali">Comentario</label>\n        <textarea maxlength="140" id="chat-form-comment" class="chat-areaQuali"></textarea>\n\n        <div class="chat-wBtn mt20">\n            <button type="button" class="button-one" id="chat-send-omit">\n                Omitir\n            </button>\n            <button class="button-one" type="submit" id="chat-send-qualify">\n                Enviar\n            </button>\n        </div>\n    </form>        \n</div> '
window.templates['register-form.html'] = '<div class="chat-register">\n    <div class="chat__close" id="chat-close-form"></div>\n    <div class="chat__tit" id="chat-regis-title"></div>\n    <p class="chat__subTit" id="chat-regis-subtitle"></p>\n\n    <form novalidate class="chat-register-form" id="chat-form-register">\n        <div class="chat-register-row">\n            <label for="names" id="lbl-chat-name">Nombre *</label>\n            <input autocomplete="off" required id="chat-name" type="text" name="names" maxlength="100" />\n            <div class="chat-error-val" id="chat-name-val">\n                Debes ingresar tus nombres\n            </div>\n        </div>\n        <div class="chat-register-row">\n            <label for="email" id="lbl-chat-email">Correo electrónico</label>\n            <input autocomplete="off" id="chat-email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"\n                   type="email" name="email" maxlength="150" />\n            <div class="chat-error-val" id="chat-email-val">\n                El formato de correo no es válido\n            </div>\n        </div>\n\n        <div>\n            <div id="h-captcha" class="h-captcha"></div>\n            <div class="chat-error-val" id="captcha-val">\n                Debes ingresar el captcha\n            </div>\n        </div>\n\n        <div class="chat-register-row">\n            <p class="chat__subTit" id="">\n                <input class="chat__inputAct" type="checkbox" required id="chat-terms" name="chat-terms" />\n                Acepto\n                <a target="_blank" href="/politicas" id="chat-terms-link">Políticas de privacidad</a>\n            </p>\n            <div class="chat-error-val" id="chat-terms-val">\n                Debes aceptar las políticas de privacidad\n            </div>\n        </div>\n        <div class="chat-flex-row">\n            <button class="button-one" name="b" type="submit" id="chat-register">Chatear</button>\n        </div>\n    </form>\n</div>'
window.templates['send-email.html'] = '<div class="chat-window  chat-window--sendMail">\n    <div class="chat-window-waiting" style="display: block;">\n        <div class="chat__close" id="btn-closer"></div>\n        <div class="chat-window-innerWait  chat-window-innerWait--sendMail">\n            <img id="img-wait" style="width: 100px;" alt="">\n            <p class="chat__tit">Conversación enviada </p>\n            <p class="chat__subTit">Hemos enviado tu conversación al correo electrónico</p>\n            <p class="chat__subTit">\n                <b id="label-email"></b>\n            </p>  \n        </div>\n    </div>\n</div>\n'