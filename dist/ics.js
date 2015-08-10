(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _ICS = __webpack_require__(5);

	_defaults(exports, _interopRequireWildcard(_ICS));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Property = (function () {
	  _createClass(Property, null, [{
	    key: 'keyRegex',
	    value: /^[A-Z]([A-Z]|-)*[A-Z]$/,
	    enumerable: true
	  }, {
	    key: 'propName',
	    value: 'Property',
	    enumerable: true
	  }]);

	  function Property(value, props) {
	    var skipTransformer = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    _classCallCheck(this, Property);

	    this.value = value;
	    this.props = props || {};
	    this.skipTransformer = skipTransformer;
	  }

	  _createClass(Property, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return true;
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value;
	    }
	  }, {
	    key: 'transformedValue',
	    value: function transformedValue() {
	      if (this.skipTransformer || this.shortTransformer()) return this.value;
	      return this.transformer();
	    }
	  }, {
	    key: 'transformedProps',
	    value: function transformedProps() {
	      var props = [];
	      for (var key in this.props) {
	        props.push(key + '=' + this.props[key]);
	      }return props.join(';');
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var hasProps = Object.keys(this.props).length > 0;
	      var key = this.constructor.propName + (hasProps ? ';' + this.transformedProps() : '');
	      var value = this.transformedValue();
	      return (key + ':' + value).match(/.{1,75}/g).join('\r\n ');
	    }
	  }]);

	  return Property;
	})();

	exports['default'] = Property;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ICS = __webpack_require__(5);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _properties = __webpack_require__(39);

	var properties = _interopRequireWildcard(_properties);

	var _errors = __webpack_require__(7);

	var Component = (function () {
	  _createClass(Component, null, [{
	    key: 'separator',
	    value: '\r\n',
	    enumerable: true
	  }, {
	    key: 'requiredProps',
	    value: [],
	    enumerable: true
	  }, {
	    key: 'validProps',
	    value: {},
	    enumerable: true
	  }, {
	    key: 'validComponents',
	    value: {},
	    enumerable: true
	  }]);

	  function Component() {
	    _classCallCheck(this, Component);

	    this.prefix = 'BEGIN:' + this.constructor.componentName;
	    this.suffix = 'END:' + this.constructor.componentName;

	    this._props = [];
	    this._components = [];
	  }

	  _createClass(Component, [{
	    key: 'props',
	    value: function props() {
	      return Object.freeze(this._props.slice(0));
	    }
	  }, {
	    key: 'propNames',
	    value: function propNames() {
	      return Object.freeze(this.props().map(function (prop) {
	        return prop.constructor.propName;
	      }));
	    }
	  }, {
	    key: 'addProp',
	    value: function addProp(name, value, props, skipTransformer) {
	      var _this = this;

	      var validProps = this.constructor.validProps;

	      if (!validProps[name]) throw new _errors.InvalidProvidedPropError();

	      var PropClass = properties[name] || properties._default(name);
	      var prop = new PropClass(value, props, skipTransformer);
	      validProps[name].forEach(function (validator) {
	        return validator(_this, prop);
	      });

	      this._props.push(prop);

	      return prop;
	    }
	  }, {
	    key: 'components',
	    value: function components() {
	      return Object.freeze(this._components.slice(0));
	    }
	  }, {
	    key: 'componentNames',
	    value: function componentNames() {
	      return Object.freeze(this.components().map(function (prop) {
	        return prop.constructor.componentName;
	      }));
	    }
	  }, {
	    key: 'addComponent',
	    value: function addComponent(component) {
	      var _this2 = this;

	      var validComponents = this.constructor.validComponents;
	      var componentName = component.constructor.componentName;

	      if (!(component instanceof Component)) throw new TypeError('Expected `component` to be an instance of Component.');
	      if (!validComponents[componentName]) throw new _errors.InvalidProvidedComponentError();

	      validComponents[componentName].forEach(function (validator) {
	        return validator(_this2, component);
	      });

	      this._components.push(component);
	      return component;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._props = this._components = [];
	    }
	  }, {
	    key: 'validateRequired',
	    value: function validateRequired() {
	      var requiredProps = this.constructor.requiredProps;

	      var intersection = Component._intersect(requiredProps, this.propNames());

	      if (intersection.length > 0) throw new _errors.InvalidComponentError();

	      return true;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      this.validateRequired();

	      var props = this._props.map(function (prop) {
	        return prop.toString();
	      });
	      var components = this._components.map(function (component) {
	        return component.toString();
	      });

	      return [this.prefix].concat(_toConsumableArray(props), _toConsumableArray(components), [this.suffix]).join(this.constructor.separator);
	    }
	  }, {
	    key: 'toBlob',
	    value: function toBlob() {
	      return new Blob([this.toString()], { type: _ICS2['default'].MIME_TYPE });
	    }
	  }, {
	    key: 'toBase64',
	    value: function toBase64() {
	      var blob = this.toBlob();
	      var reader = new window.FileReader();

	      return new Promise(function (resolve, reject) {
	        reader.readAsDataURL(blob);
	        reader.onloadend = function () {
	          return resolve(reader.result);
	        };
	        reader.onerror = function () {
	          return reject(reader.error);
	        };
	        reader.onabort = function () {
	          return reject();
	        };
	      });
	    }
	  }], [{
	    key: '_intersect',
	    value: function _intersect(a, b) {
	      var b_ = new Set(b);
	      return a.filter(function (item) {
	        return !b_.has(item);
	      });
	    }
	  }]);

	  return Component;
	})();

	exports['default'] = Component;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _formatDate = __webpack_require__(8);

	var _formatDate2 = _interopRequireDefault(_formatDate);

	var _ICS = __webpack_require__(5);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var DTSTAMP = (function (_Property) {
	  _inherits(DTSTAMP, _Property);

	  function DTSTAMP() {
	    _classCallCheck(this, DTSTAMP);

	    _get(Object.getPrototypeOf(DTSTAMP.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DTSTAMP, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return !(this.value instanceof Date);
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      var valueIsDate = this.props.VALUE == 'DATE';

	      if (valueIsDate) {
	        // Remove timezone offset
	        var offset = this.value.getTimezoneOffset() * 60000;
	        this.value = new Date(this.value.getTime() + offset);
	      }

	      var format = valueIsDate ? _ICS2['default'].DateFormat : _ICS2['default'].DateTimeFormat;
	      return (0, _formatDate2['default'])(format, this.value);
	    }
	  }], [{
	    key: 'propName',
	    value: 'DTSTAMP',
	    enumerable: true
	  }]);

	  return DTSTAMP;
	})(_Property3['default']);

	exports['default'] = DTSTAMP;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var key in props) {
	      var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
	    }Object.defineProperties(target, props);
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc && desc.writable) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	var _inherits = function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	};

	var _classCallCheck = function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var ExtendableError = (function (_Error) {
	  function ExtendableError(message) {
	    _classCallCheck(this, ExtendableError);

	    Error.captureStackTrace(this, this.constructor);
	    this.message = message;
	    _get(Object.getPrototypeOf(ExtendableError.prototype), "constructor", this).call(this, message);
	  }

	  _inherits(ExtendableError, _Error);

	  _createClass(ExtendableError, {
	    name: {
	      get: function get() {
	        return this.constructor.name;
	      }
	    }
	  });

	  return ExtendableError;
	})(Error);

	module.exports = ExtendableError;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _components = __webpack_require__(18);

	var components = _interopRequireWildcard(_components);

	var ICS = (function () {
	  function ICS() {
	    _classCallCheck(this, ICS);
	  }

	  _createClass(ICS, null, [{
	    key: 'Property',
	    value: _Property2['default'],
	    enumerable: true
	  }, {
	    key: 'Component',
	    value: _Component2['default'],
	    enumerable: true
	  }, {
	    key: 'MIME_TYPE',
	    value: 'text/calendar',
	    enumerable: true
	  }, {
	    key: 'DateFormat',
	    value: '{year}{month}{day}',
	    enumerable: true
	  }, {
	    key: 'DateTimeFormat',
	    value: '{year}{month}{day}T{hours}{minutes}{seconds}',
	    enumerable: true
	  }]);

	  return ICS;
	})();

	exports['default'] = ICS;

	for (var componentName in components) {
	  ICS[componentName] = components[componentName];
	}
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _required2 = __webpack_require__(19);

	var _required3 = _interopRequireDefault(_required2);

	exports.required = _required3['default'];

	var _singleton2 = __webpack_require__(20);

	var _singleton3 = _interopRequireDefault(_singleton2);

	exports.singleton = _singleton3['default'];

	var _unique2 = __webpack_require__(21);

	var _unique3 = _interopRequireDefault(_unique2);

	exports.unique = _unique3['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _InvalidComponentError2 = __webpack_require__(22);

	var _InvalidComponentError3 = _interopRequireDefault(_InvalidComponentError2);

	exports.InvalidComponentError = _InvalidComponentError3['default'];

	var _InvalidProvidedComponentError2 = __webpack_require__(23);

	var _InvalidProvidedComponentError3 = _interopRequireDefault(_InvalidProvidedComponentError2);

	exports.InvalidProvidedComponentError = _InvalidProvidedComponentError3['default'];

	var _InvalidProvidedPropError2 = __webpack_require__(24);

	var _InvalidProvidedPropError3 = _interopRequireDefault(_InvalidProvidedPropError2);

	exports.InvalidProvidedPropError = _InvalidProvidedPropError3['default'];

	var _ValidationError2 = __webpack_require__(25);

	var _ValidationError3 = _interopRequireDefault(_ValidationError2);

	exports.ValidationError = _ValidationError3['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var format = __webpack_require__(10);
	var leftpad = __webpack_require__(11);
	var days = __webpack_require__(9);
	var months = __webpack_require__(12);

	module.exports = formatDate;

	function formatDate(template, date) {
	  if (!date) date = new Date();

	  return format(template, {
	    day: leftpad(date.getDate(), 2, "0"),
	    month: leftpad(date.getMonth() + 1, 2, "0"),
	    year: date.getFullYear(),
	    hours: leftpad(date.getHours(), 2, "0"),
	    minutes: leftpad(date.getMinutes(), 2, "0"),
	    seconds: leftpad(date.getSeconds(), 2, "0"),
	    "day-name": days[date.getDay()],
	    "month-name": months[date.getMonth()],

	    // utc
	    "utc-day": leftpad(date.getUTCDate(), 2, "0"),
	    "utc-month": leftpad(date.getUTCMonth() + 1, 2, "0"),
	    "utc-year": date.getUTCFullYear(),
	    "utc-hours": leftpad(date.getUTCHours(), 2, "0"),
	    "utc-minutes": leftpad(date.getUTCMinutes(), 2, "0"),
	    "utc-seconds": leftpad(date.getUTCSeconds(), 2, "0"),
	    "utc-day-name": days[date.getUTCDay()],
	    "utc-month-name": months[date.getUTCMonth()]
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*!
	 * days <https://github.com/jonschlinkert/days>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT license.
	 */

	'use strict';

	module.exports = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	module.exports = format;

	function format(text) {
	  var context;

	  if (typeof arguments[1] == 'object' && arguments[1]) {
	    context = arguments[1];
	  } else {
	    context = Array.prototype.slice.call(arguments, 1);
	  }

	  return String(text).replace(/\{?\{([^{}]+)}}?/g, replace(context));
	};

	function replace(context, nil) {
	  return function (tag, name) {
	    if (tag.substring(0, 2) == '{{' && tag.substring(tag.length - 2) == '}}') {
	      return '{' + name + '}';
	    }

	    if (!context.hasOwnProperty(name)) {
	      return tag;
	    }

	    if (typeof context[name] == 'function') {
	      return context[name]();
	    }

	    return context[name];
	  };
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = leftpad;

	function leftpad(str, len, ch) {
	  str = String(str);

	  var i = -1;

	  ch || (ch = ' ');
	  len = len - str.length;

	  while (++i < len) {
	    str = ch + str;
	  }

	  return str;
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	/*!
	 * months <https://github.com/jonschlinkert/months>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT license.
	 */

	'use strict';

	module.exports = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var guid = function guid() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0,
	        v = c === 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	  }).toUpperCase();
	};

	module.exports = guid;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(6);

	var VALARM = (function (_Component) {
	  _inherits(VALARM, _Component);

	  function VALARM() {
	    _classCallCheck(this, VALARM);

	    _get(Object.getPrototypeOf(VALARM.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(VALARM, null, [{
	    key: 'componentName',
	    value: 'VALARM',
	    enumerable: true
	  }, {
	    key: 'requiredProps',
	    value: ['ACTION', 'TRIGGER'],
	    enumerable: true
	  }, {
	    key: 'validProps',
	    value: {
	      ACTION: [(0, _validators.singleton)()],
	      TRIGGER: [(0, _validators.singleton)()],

	      DURATION: [(0, _validators.singleton)()],
	      REPEAT: [(0, _validators.singleton)()],

	      DESCRIPTION: [(0, _validators.singleton)()],
	      SUMMARY: [(0, _validators.singleton)()],
	      ATTACH: [(0, _validators.singleton)()],

	      ATTENDEE: []
	    },
	    enumerable: true
	  }]);

	  return VALARM;
	})(_Component3['default']);

	exports['default'] = VALARM;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(6);

	var VCALENDAR = (function (_Component) {
	  _inherits(VCALENDAR, _Component);

	  function VCALENDAR() {
	    _classCallCheck(this, VCALENDAR);

	    _get(Object.getPrototypeOf(VCALENDAR.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(VCALENDAR, null, [{
	    key: 'componentName',
	    value: 'VCALENDAR',
	    enumerable: true
	  }, {
	    key: 'requiredProps',
	    value: ['PRODID', 'VERSION'],
	    enumerable: true
	  }, {
	    key: 'validProps',
	    value: {
	      PRODID: [(0, _validators.singleton)()],
	      VERSION: [(0, _validators.singleton)()],

	      CALSCALE: [(0, _validators.singleton)()],
	      METHOD: [(0, _validators.singleton)()]
	    },
	    enumerable: true
	  }, {
	    key: 'validComponents',
	    value: {
	      VEVENT: [],
	      VTODO: [],
	      VJOURNAL: [],
	      VFREEBUSY: [],
	      VTIMEZONE: []
	    },
	    enumerable: true
	  }]);

	  return VCALENDAR;
	})(_Component3['default']);

	exports['default'] = VCALENDAR;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(6);

	var VEVENT = (function (_Component) {
	  _inherits(VEVENT, _Component);

	  function VEVENT() {
	    _classCallCheck(this, VEVENT);

	    _get(Object.getPrototypeOf(VEVENT.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(VEVENT, null, [{
	    key: 'componentName',
	    value: 'VEVENT',
	    enumerable: true
	  }, {
	    key: 'requiredProps',
	    value: ['DTSTAMP', 'UID'],
	    enumerable: true
	  }, {
	    key: 'validProps',
	    value: {
	      DTSTAMP: [(0, _validators.singleton)()],
	      UID: [(0, _validators.singleton)()],

	      DTSTART: [(0, _validators.singleton)()],
	      CLASS: [(0, _validators.singleton)()],
	      CREATED: [(0, _validators.singleton)()],
	      DESCRIPTION: [(0, _validators.singleton)()],
	      GEO: [(0, _validators.singleton)()],
	      'LAST-MOD': [(0, _validators.singleton)()],
	      LOCATION: [(0, _validators.singleton)()],
	      ORGANIZER: [(0, _validators.singleton)()],
	      PRIORITY: [(0, _validators.singleton)()],
	      SEQUENCE: [(0, _validators.singleton)()],
	      STATUS: [(0, _validators.singleton)()],
	      SUMMARY: [(0, _validators.singleton)()],
	      TRANSP: [(0, _validators.singleton)()],
	      URL: [(0, _validators.singleton)()],
	      'RECURRENCE-ID': [(0, _validators.singleton)()],
	      RRULE: [(0, _validators.singleton)()],

	      DTEND: [(0, _validators.singleton)(), (0, _validators.unique)(['DURATION'])],
	      DURATION: [(0, _validators.singleton)(), (0, _validators.unique)(['DTEND'])],

	      ATTACH: [],
	      ATTENDEE: [],
	      CATEGORIES: [],
	      COMMENT: [],
	      CONTACT: [],
	      EXDATE: [],
	      'REQUEST-STATUS': [],
	      RELATED: [],
	      RESOURCES: [],
	      RDATE: []
	    },
	    enumerable: true
	  }, {
	    key: 'validComponents',
	    value: {
	      VALARM: []
	    },
	    enumerable: true
	  }]);

	  return VEVENT;
	})(_Component3['default']);

	exports['default'] = VEVENT;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(6);

	var VTODO = (function (_Component) {
	  _inherits(VTODO, _Component);

	  function VTODO() {
	    _classCallCheck(this, VTODO);

	    _get(Object.getPrototypeOf(VTODO.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(VTODO, null, [{
	    key: 'componentName',
	    value: 'VTODO',
	    enumerable: true
	  }, {
	    key: 'requiredProps',
	    value: ['DTSTAMP', 'UID'],
	    enumerable: true
	  }, {
	    key: 'validProps',
	    value: {
	      DTSTAMP: [(0, _validators.singleton)()],
	      UID: [(0, _validators.singleton)()],

	      CLASS: [(0, _validators.singleton)()],
	      COMPLETED: [(0, _validators.singleton)()],
	      CREATED: [(0, _validators.singleton)()],
	      DESCRIPTION: [(0, _validators.singleton)()],
	      DTSTART: [(0, _validators.singleton)()],
	      GEO: [(0, _validators.singleton)()],
	      'LAST-MOD': [(0, _validators.singleton)()],
	      LOCATION: [(0, _validators.singleton)()],
	      ORGANIZER: [(0, _validators.singleton)()],
	      PERCENT: [(0, _validators.singleton)()],
	      PRIORITY: [(0, _validators.singleton)()],
	      'RECURRENCE-ID': [(0, _validators.singleton)()],
	      SEQUENCE: [(0, _validators.singleton)()],
	      STATUS: [(0, _validators.singleton)()],
	      SUMMARY: [(0, _validators.singleton)()],
	      URL: [(0, _validators.singleton)()],
	      RRULE: [(0, _validators.singleton)()],

	      DUE: [(0, _validators.singleton)(), (0, _validators.unique)(['DURATION'])],
	      DURATION: [(0, _validators.singleton)(), (0, _validators.unique)(['DUE'])],

	      ATTACH: [],
	      ATTENDEE: [],
	      CATEGORIES: [],
	      COMMENT: [],
	      CONTACT: [],
	      EXDATE: [],
	      'REQUEST-STATUS': [],
	      RELATED: [],
	      RESOURCES: [],
	      RDATE: []
	    },
	    enumerable: true
	  }, {
	    key: 'validComponents',
	    value: {
	      VALARM: []
	    },
	    enumerable: true
	  }]);

	  return VTODO;
	})(_Component3['default']);

	exports['default'] = VTODO;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _VALARM2 = __webpack_require__(14);

	var _VALARM3 = _interopRequireDefault(_VALARM2);

	exports.VALARM = _VALARM3['default'];

	var _VCALENDAR2 = __webpack_require__(15);

	var _VCALENDAR3 = _interopRequireDefault(_VCALENDAR2);

	exports.VCALENDAR = _VCALENDAR3['default'];

	var _VEVENT2 = __webpack_require__(16);

	var _VEVENT3 = _interopRequireDefault(_VEVENT2);

	exports.VEVENT = _VEVENT3['default'];

	var _VTODO2 = __webpack_require__(17);

	var _VTODO3 = _interopRequireDefault(_VTODO2);

	exports.VTODO = _VTODO3['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = required;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(7);

	function required() {
	  return function (component, subject) {
	    var subjectName = undefined;
	    var names = undefined;

	    if (subject instanceof _Property2['default']) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2['default']) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    if (!names.includes(subjectName)) throw new _errors.ValidationError();
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = singleton;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(7);

	function singleton() {
	  return function (component, subject) {
	    var subjectName = undefined;
	    var names = undefined;

	    if (subject instanceof _Property2['default']) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2['default']) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    var filtered = names.filter(function (name) {
	      return name === subjectName;
	    });
	    if (filtered.length >= 1) throw new _errors.ValidationError();
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = unique;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(7);

	function unique(uniqueNames) {
	  return function (component, subject) {
	    var subjectName = undefined;
	    var names = undefined;

	    if (subject instanceof _Property2['default']) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2['default']) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    var a = new Set(names);
	    var b = new Set([subjectName].concat(_toConsumableArray(uniqueNames)));
	    var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
	      return !b.has(x);
	    }));
	    return difference > 1 ? false : true;

	    if (difference > 1) throw new _errors.ValidationError();
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _es6Error = __webpack_require__(4);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	var InvalidComponentError = (function (_ExtendableError) {
	  _inherits(InvalidComponentError, _ExtendableError);

	  function InvalidComponentError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Component does not contain all required properties.' : arguments[0];

	    _classCallCheck(this, InvalidComponentError);

	    _get(Object.getPrototypeOf(InvalidComponentError.prototype), 'constructor', this).call(this, message);
	  }

	  return InvalidComponentError;
	})(_es6Error2['default']);

	exports['default'] = InvalidComponentError;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _es6Error = __webpack_require__(4);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	var InvalidProvidedComponentError = (function (_ExtendableError) {
	  _inherits(InvalidProvidedComponentError, _ExtendableError);

	  function InvalidProvidedComponentError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided component\'s type is not listed in validComponents.' : arguments[0];

	    _classCallCheck(this, InvalidProvidedComponentError);

	    _get(Object.getPrototypeOf(InvalidProvidedComponentError.prototype), 'constructor', this).call(this, message);
	  }

	  return InvalidProvidedComponentError;
	})(_es6Error2['default']);

	exports['default'] = InvalidProvidedComponentError;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _es6Error = __webpack_require__(4);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	var InvalidProvidedPropError = (function (_ExtendableError) {
	  _inherits(InvalidProvidedPropError, _ExtendableError);

	  function InvalidProvidedPropError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided property\'s type is not listed in validProps.' : arguments[0];

	    _classCallCheck(this, InvalidProvidedPropError);

	    _get(Object.getPrototypeOf(InvalidProvidedPropError.prototype), 'constructor', this).call(this, message);
	  }

	  return InvalidProvidedPropError;
	})(_es6Error2['default']);

	exports['default'] = InvalidProvidedPropError;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _es6Error = __webpack_require__(4);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	var ValidationError = (function (_ExtendableError) {
	  _inherits(ValidationError, _ExtendableError);

	  function ValidationError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided object was invalid for the recieving component.' : arguments[0];

	    _classCallCheck(this, ValidationError);

	    _get(Object.getPrototypeOf(ValidationError.prototype), 'constructor', this).call(this, message);
	  }

	  return ValidationError;
	})(_es6Error2['default']);

	exports['default'] = ValidationError;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _formatDate = __webpack_require__(8);

	var _formatDate2 = _interopRequireDefault(_formatDate);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var CATEGORIES = (function (_Property) {
	  _inherits(CATEGORIES, _Property);

	  function CATEGORIES() {
	    _classCallCheck(this, CATEGORIES);

	    _get(Object.getPrototypeOf(CATEGORIES.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CATEGORIES, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value.join(',');
	    }
	  }], [{
	    key: 'propName',
	    value: 'CATEGORIES',
	    enumerable: true
	  }]);

	  return CATEGORIES;
	})(_Property3['default']);

	exports['default'] = CATEGORIES;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var CREATED = (function (_DTSTAMP) {
	  _inherits(CREATED, _DTSTAMP);

	  function CREATED() {
	    _classCallCheck(this, CREATED);

	    _get(Object.getPrototypeOf(CREATED.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CREATED, null, [{
	    key: 'propName',
	    value: 'CREATED',
	    enumerable: true
	  }]);

	  return CREATED;
	})(_DTSTAMP3['default']);

	exports['default'] = CREATED;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var DTEND = (function (_DTSTAMP) {
	  _inherits(DTEND, _DTSTAMP);

	  function DTEND() {
	    _classCallCheck(this, DTEND);

	    _get(Object.getPrototypeOf(DTEND.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DTEND, null, [{
	    key: 'propName',
	    value: 'DTEND',
	    enumerable: true
	  }]);

	  return DTEND;
	})(_DTSTAMP3['default']);

	exports['default'] = DTEND;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var DTSTART = (function (_DTSTAMP) {
	  _inherits(DTSTART, _DTSTAMP);

	  function DTSTART() {
	    _classCallCheck(this, DTSTART);

	    _get(Object.getPrototypeOf(DTSTART.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DTSTART, null, [{
	    key: 'propName',
	    value: 'DTSTART',
	    enumerable: true
	  }]);

	  return DTSTART;
	})(_DTSTAMP3['default']);

	exports['default'] = DTSTART;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var DUE = (function (_DTSTAMP) {
	  _inherits(DUE, _DTSTAMP);

	  function DUE() {
	    _classCallCheck(this, DUE);

	    _get(Object.getPrototypeOf(DUE.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DUE, null, [{
	    key: 'propName',
	    value: 'DUE',
	    enumerable: true
	  }]);

	  return DUE;
	})(_DTSTAMP3['default']);

	exports['default'] = DUE;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _formatDate = __webpack_require__(8);

	var _formatDate2 = _interopRequireDefault(_formatDate);

	var _ICS = __webpack_require__(5);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var EXDATE = (function (_Property) {
	  _inherits(EXDATE, _Property);

	  function EXDATE() {
	    _classCallCheck(this, EXDATE);

	    _get(Object.getPrototypeOf(EXDATE.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(EXDATE, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      if (Array.isArray(this.value)) {
	        return !this.value.every(function (value) {
	          return value instanceof Date;
	        });
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      var valueIsDate = this.props.VALUE == 'DATE';
	      var format = valueIsDate ? _ICS2['default'].DateFormat : _ICS2['default'].DateTimeFormat;

	      return this.value.map(function (value) {
	        if (valueIsDate) {
	          // Remove timezone offset
	          var offset = value.getTimezoneOffset() * 60000;
	          value = new Date(value.getTime() + offset);
	        }

	        return (0, _formatDate2['default'])(format, value);
	      }).join();
	    }
	  }], [{
	    key: 'propName',
	    value: 'EXDATE',
	    enumerable: true
	  }]);

	  return EXDATE;
	})(_Property3['default']);

	exports['default'] = EXDATE;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var GEO = (function (_Property) {
	  _inherits(GEO, _Property);

	  function GEO() {
	    _classCallCheck(this, GEO);

	    _get(Object.getPrototypeOf(GEO.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(GEO, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value.join(';');
	    }
	  }], [{
	    key: 'propName',
	    value: 'GEO',
	    enumerable: true
	  }]);

	  return GEO;
	})(_Property3['default']);

	exports['default'] = GEO;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var LAST_MODIFIED = (function (_DTSTAMP) {
	  _inherits(LAST_MODIFIED, _DTSTAMP);

	  function LAST_MODIFIED() {
	    _classCallCheck(this, LAST_MODIFIED);

	    _get(Object.getPrototypeOf(LAST_MODIFIED.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LAST_MODIFIED, null, [{
	    key: 'propName',
	    value: 'LAST-MODIFIED',
	    enumerable: true
	  }]);

	  return LAST_MODIFIED;
	})(_DTSTAMP3['default']);

	exports['default'] = LAST_MODIFIED;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var RDATE = (function (_DTSTAMP) {
	  _inherits(RDATE, _DTSTAMP);

	  function RDATE() {
	    _classCallCheck(this, RDATE);

	    _get(Object.getPrototypeOf(RDATE.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(RDATE, null, [{
	    key: 'propName',
	    value: 'RDATE',
	    enumerable: true
	  }]);

	  return RDATE;
	})(_DTSTAMP3['default']);

	exports['default'] = RDATE;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var TRANSP = (function (_Property) {
	  _inherits(TRANSP, _Property);

	  function TRANSP() {
	    _classCallCheck(this, TRANSP);

	    _get(Object.getPrototypeOf(TRANSP.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TRANSP, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return !!this.value ? 'TRANSPARENT' : 'OPAQUE';
	    }
	  }], [{
	    key: 'propName',
	    value: 'TRANSP',
	    enumerable: true
	  }]);

	  return TRANSP;
	})(_Property3['default']);

	exports['default'] = TRANSP;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _simpleGuid = __webpack_require__(13);

	var _simpleGuid2 = _interopRequireDefault(_simpleGuid);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var UID = (function (_Property) {
	  _inherits(UID, _Property);

	  function UID() {
	    _classCallCheck(this, UID);

	    _get(Object.getPrototypeOf(UID.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(UID, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return !!this.value;
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return (0, _simpleGuid2['default'])();
	    }
	  }], [{
	    key: 'propName',
	    value: 'UID',
	    enumerable: true
	  }]);

	  return UID;
	})(_Property3['default']);

	exports['default'] = UID;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	var VERSION = (function (_Property) {
	  _inherits(VERSION, _Property);

	  function VERSION() {
	    _classCallCheck(this, VERSION);

	    _get(Object.getPrototypeOf(VERSION.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(VERSION, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return /[0-9].[0-9]/.test(this.value);
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return parseFloat(this.value).toFixed(1);
	    }
	  }], [{
	    key: 'propName',
	    value: 'VERSION',
	    enumerable: true
	  }]);

	  return VERSION;
	})(_Property3['default']);

	exports['default'] = VERSION;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	exports['default'] = function (name) {
	  return (function (_Property) {
	    _inherits(_default, _Property);

	    function _default() {
	      _classCallCheck(this, _default);

	      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(_default, null, [{
	      key: 'propName',
	      value: name,
	      enumerable: true
	    }]);

	    return _default;
	  })(_Property3['default']);
	};

	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _default3 = __webpack_require__(38);

	var _default4 = _interopRequireDefault(_default3);

	exports._default = _default4['default'];

	var _CATEGORIES2 = __webpack_require__(26);

	var _CATEGORIES3 = _interopRequireDefault(_CATEGORIES2);

	exports.CATEGORIES = _CATEGORIES3['default'];

	var _CREATED2 = __webpack_require__(27);

	var _CREATED3 = _interopRequireDefault(_CREATED2);

	exports.CREATED = _CREATED3['default'];

	var _DTEND2 = __webpack_require__(28);

	var _DTEND3 = _interopRequireDefault(_DTEND2);

	exports.DTEND = _DTEND3['default'];

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	exports.DTSTAMP = _DTSTAMP3['default'];

	var _DTSTART2 = __webpack_require__(29);

	var _DTSTART3 = _interopRequireDefault(_DTSTART2);

	exports.DTSTART = _DTSTART3['default'];

	var _DUE2 = __webpack_require__(30);

	var _DUE3 = _interopRequireDefault(_DUE2);

	exports.DUE = _DUE3['default'];

	var _EXDATE2 = __webpack_require__(31);

	var _EXDATE3 = _interopRequireDefault(_EXDATE2);

	exports.EXDATE = _EXDATE3['default'];

	var _GEO2 = __webpack_require__(32);

	var _GEO3 = _interopRequireDefault(_GEO2);

	exports.GEO = _GEO3['default'];

	var _LAST_MODIFIED2 = __webpack_require__(33);

	var _LAST_MODIFIED3 = _interopRequireDefault(_LAST_MODIFIED2);

	exports.LAST_MODIFIED = _LAST_MODIFIED3['default'];

	var _RDATE2 = __webpack_require__(34);

	var _RDATE3 = _interopRequireDefault(_RDATE2);

	exports.RDATE = _RDATE3['default'];

	var _TRANSP2 = __webpack_require__(35);

	var _TRANSP3 = _interopRequireDefault(_TRANSP2);

	exports.TRANSP = _TRANSP3['default'];

	var _UID2 = __webpack_require__(36);

	var _UID3 = _interopRequireDefault(_UID2);

	exports.UID = _UID3['default'];

	var _VERSION2 = __webpack_require__(37);

	var _VERSION3 = _interopRequireDefault(_VERSION2);

	exports.VERSION = _VERSION3['default'];

/***/ }
/******/ ])
});
;