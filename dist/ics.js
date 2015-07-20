"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Property = require("./Property");

var _Property2 = _interopRequireDefault(_Property);

var _errors = require("./errors");

var Component = (function () {
  _createClass(Component, null, [{
    key: "separator",
    value: "\n",
    enumerable: true
  }, {
    key: "requiredProps",
    value: [],
    enumerable: true
  }, {
    key: "validProps",
    value: {},
    enumerable: true
  }, {
    key: "validComponents",
    value: {},
    enumerable: true
  }]);

  function Component() {
    _classCallCheck(this, Component);

    this.prefix = "BEGIN:" + this.constructor.componentName;
    this.suffix = "END:" + this.constructor.componentName;

    this._props = [];
    this._components = [];
  }

  _createClass(Component, [{
    key: "props",
    value: function props() {
      return Object.freeze(this._props.slice(0));
    }
  }, {
    key: "propNames",
    value: function propNames() {
      return Object.freeze(this.props().map(function (prop) {
        return prop.constructor.propName;
      }));
    }
  }, {
    key: "addProp",
    value: function addProp(prop) {
      var _this = this;

      var validProps = this.constructor.validProps;
      var propName = prop.constructor.propName;

      if (!(prop instanceof _Property2["default"])) throw new TypeError("Expected `prop` to be an instance of Property.");
      if (!validProps[propName]) throw new _errors.InvalidProvidedPropError();

      validProps[propName].forEach(function (validator) {
        return validator(_this, prop);
      });

      this._props.push(prop);
      return prop;
    }
  }, {
    key: "components",
    value: function components() {
      return Object.freeze(this._components.slice(0));
    }
  }, {
    key: "componentNames",
    value: function componentNames() {
      return Object.freeze(this.components().map(function (prop) {
        return prop.constructor.componentName;
      }));
    }
  }, {
    key: "addComponent",
    value: function addComponent(component) {
      var _this2 = this;

      var validComponents = this.constructor.validComponents;
      var componentName = component.constructor.componentName;

      if (!(component instanceof Component)) throw new TypeError("Expected `component` to be an instance of Component.");
      if (!validComponents[componentName]) throw new _errors.InvalidProvidedComponentError();

      validComponents[componentName].forEach(function (validator) {
        return validator(_this2, component);
      });

      this._components.push(component);
      return component;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._props = this._components = [];
    }
  }, {
    key: "validateRequired",
    value: function validateRequired() {
      var requiredProps = this.constructor.requiredProps;

      var intersection = Component._intersect(requiredProps, this.propNames());

      if (intersection.length > 0) throw new _errors.InvalidComponentError();

      return true;
    }
  }, {
    key: "toString",
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
  }], [{
    key: "_intersect",
    value: function _intersect(a, b) {
      var b_ = new Set(b);
      return a.filter(function (item) {
        return !b_.has(item);
      });
    }
  }]);

  return Component;
})();

exports["default"] = Component;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _VALARM = require("./VALARM");

var _VALARM2 = _interopRequireDefault(_VALARM);

var _VCALENDAR = require("./VCALENDAR");

var _VCALENDAR2 = _interopRequireDefault(_VCALENDAR);

var _VEVENT = require("./VEVENT");

var _VEVENT2 = _interopRequireDefault(_VEVENT);

var _VTODO = require("./VTODO");

var _VTODO2 = _interopRequireDefault(_VTODO);

exports["default"] = {
  VALARM: _VALARM2["default"],
  VCALENDAR: _VCALENDAR2["default"],
  VEVENT: _VEVENT2["default"],
  VTODO: _VTODO2["default"]
};
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Component2 = require("../Component");

var _Component3 = _interopRequireDefault(_Component2);

var _validators = require("./validators");

var VALARM = (function (_Component) {
  _inherits(VALARM, _Component);

  function VALARM() {
    _classCallCheck(this, VALARM);

    _get(Object.getPrototypeOf(VALARM.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VALARM, null, [{
    key: "componentName",
    value: "VALARM",
    enumerable: true
  }, {
    key: "requiredProps",
    value: ["ACTION", "TRIGGER"],
    enumerable: true
  }, {
    key: "validProps",
    value: {
      "ACTION": [(0, _validators.singleton)()],
      "TRIGGER": [(0, _validators.singleton)()],

      "DURATION": [(0, _validators.singleton)()],
      "REPEAT": [(0, _validators.singleton)()],

      "DESCRIPTION": [(0, _validators.singleton)()],
      "SUMMARY": [(0, _validators.singleton)()],
      "ATTACH": [(0, _validators.singleton)()],

      "ATTENDEE": []
    },
    enumerable: true
  }]);

  return VALARM;
})(_Component3["default"]);

exports["default"] = VALARM;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _required = require("./required");

var _required2 = _interopRequireDefault(_required);

var _singleton = require("./singleton");

var _singleton2 = _interopRequireDefault(_singleton);

var _unique = require("./unique");

var _unique2 = _interopRequireDefault(_unique);

exports["default"] = {
  required: _required2["default"],
  singleton: _singleton2["default"],
  unique: _unique2["default"]
};
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = required;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Property = require("../../Property");

var _Property2 = _interopRequireDefault(_Property);

var _Component = require("../../Component");

var _Component2 = _interopRequireDefault(_Component);

var _errors = require("../../errors");

function required() {
  return function (component, subject) {
    var subjectName = undefined,
        names = undefined;

    if (subject instanceof _Property2["default"]) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof _Component2["default"]) {
      subjectName = subject.constructor.componentName;
      names = component.componentNames();
    }

    if (!names.includes(subjectName)) throw new _errors.ValidationError();
  };
}

module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = singleton;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Property = require("../../Property");

var _Property2 = _interopRequireDefault(_Property);

var _Component = require("../../Component");

var _Component2 = _interopRequireDefault(_Component);

var _errors = require("../../errors");

function singleton() {
  return function (component, subject) {
    var subjectName = undefined,
        names = undefined;

    if (subject instanceof _Property2["default"]) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof _Component2["default"]) {
      subjectName = subject.constructor.componentName;
      names = component.componentNames();
    }

    var filtered = names.filter(function (name) {
      return name === subjectName;
    });
    if (filtered.length >= 1) throw new _errors.ValidationError();
  };
}

module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = unique;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _Property = require("../../Property");

var _Property2 = _interopRequireDefault(_Property);

var _Component = require("../../Component");

var _Component2 = _interopRequireDefault(_Component);

var _errors = require("../../errors");

function unique(uniqueNames) {
  return function (component, subject) {
    var subjectName = undefined,
        names = undefined;

    if (subject instanceof _Property2["default"]) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof _Component2["default"]) {
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

module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Component2 = require("../Component");

var _Component3 = _interopRequireDefault(_Component2);

var _validators = require("./validators");

var VCALENDAR = (function (_Component) {
  _inherits(VCALENDAR, _Component);

  function VCALENDAR() {
    _classCallCheck(this, VCALENDAR);

    _get(Object.getPrototypeOf(VCALENDAR.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VCALENDAR, null, [{
    key: "componentName",
    value: "VCALENDAR",
    enumerable: true
  }, {
    key: "requiredProps",
    value: ["PRODID", "VERSION"],
    enumerable: true
  }, {
    key: "validProps",
    value: {
      "PRODID": [(0, _validators.singleton)()],
      "VERSION": [(0, _validators.singleton)()],

      "CALSCALE": [(0, _validators.singleton)()],
      "METHOD": [(0, _validators.singleton)()]
    },
    enumerable: true
  }, {
    key: "validComponents",
    value: {
      "VEVENT": [],
      "VTODO": [],
      "VJOURNAL": [],
      "VFREEBUSY": [],
      "VTIMEZONE": []
    },
    enumerable: true
  }]);

  return VCALENDAR;
})(_Component3["default"]);

exports["default"] = VCALENDAR;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Component2 = require("../Component");

var _Component3 = _interopRequireDefault(_Component2);

var _validators = require("./validators");

var VEVENT = (function (_Component) {
  _inherits(VEVENT, _Component);

  function VEVENT() {
    _classCallCheck(this, VEVENT);

    _get(Object.getPrototypeOf(VEVENT.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VEVENT, null, [{
    key: "componentName",
    value: "VEVENT",
    enumerable: true
  }, {
    key: "requiredProps",
    value: ["DTSTAMP", "UID"],
    enumerable: true
  }, {
    key: "validProps",
    value: {
      "DTSTAMP": [(0, _validators.singleton)()],
      "UID": [(0, _validators.singleton)()],

      "DTSTART": [(0, _validators.singleton)()],
      "CLASS": [(0, _validators.singleton)()],
      "CREATED": [(0, _validators.singleton)()],
      "DESCRIPTION": [(0, _validators.singleton)()],
      "GEO": [(0, _validators.singleton)()],
      "LAST-MOD": [(0, _validators.singleton)()],
      "LOCATION": [(0, _validators.singleton)()],
      "ORGANIZER": [(0, _validators.singleton)()],
      "PRIORITY": [(0, _validators.singleton)()],
      "SEQ": [(0, _validators.singleton)()],
      "STATUS": [(0, _validators.singleton)()],
      "SUMMARY": [(0, _validators.singleton)()],
      "TRANSP": [(0, _validators.singleton)()],
      "URL": [(0, _validators.singleton)()],
      "RECURID": [(0, _validators.singleton)()],
      "RRULE": [(0, _validators.singleton)()],

      "DTEND": [(0, _validators.singleton)(), (0, _validators.unique)(["DURATION"])],
      "DURATION": [(0, _validators.singleton)(), (0, _validators.unique)(["DTEND"])],

      "ATTACH": [],
      "ATTENDEE": [],
      "CATEGORIES": [],
      "COMMENT": [],
      "CONTACT": [],
      "EXDATE": [],
      "RSTATUS": [],
      "RELATED": [],
      "RESOURCES": [],
      "RDATE": []
    },
    enumerable: true
  }, {
    key: "validComponents",
    value: {
      "VALARM": []
    },
    enumerable: true
  }]);

  return VEVENT;
})(_Component3["default"]);

exports["default"] = VEVENT;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Component2 = require("../Component");

var _Component3 = _interopRequireDefault(_Component2);

var _validators = require("./validators");

var VTODO = (function (_Component) {
  _inherits(VTODO, _Component);

  function VTODO() {
    _classCallCheck(this, VTODO);

    _get(Object.getPrototypeOf(VTODO.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VTODO, null, [{
    key: "componentName",
    value: "VTODO",
    enumerable: true
  }, {
    key: "requiredProps",
    value: ["DTSTAMP", "UID"],
    enumerable: true
  }, {
    key: "validProps",
    value: {
      "DTSTAMP": [(0, _validators.singleton)()],
      "UID": [(0, _validators.singleton)()],

      "CLASS": [(0, _validators.singleton)()],
      "COMPLETED": [(0, _validators.singleton)()],
      "CREATED": [(0, _validators.singleton)()],
      "DESCRIPTION": [(0, _validators.singleton)()],
      "DTSTART": [(0, _validators.singleton)()],
      "GEO": [(0, _validators.singleton)()],
      "LAST-MOD": [(0, _validators.singleton)()],
      "LOCATION": [(0, _validators.singleton)()],
      "ORGANIZER": [(0, _validators.singleton)()],
      "PERCENT": [(0, _validators.singleton)()],
      "PRIORITY": [(0, _validators.singleton)()],
      "RECURID": [(0, _validators.singleton)()],
      "SEQ": [(0, _validators.singleton)()],
      "STATUS": [(0, _validators.singleton)()],
      "SUMMARY": [(0, _validators.singleton)()],
      "URL": [(0, _validators.singleton)()],
      "RRULE": [(0, _validators.singleton)()],

      "DUE": [(0, _validators.singleton)(), (0, _validators.unique)(["DURATION"])],
      "DURATION": [(0, _validators.singleton)(), (0, _validators.unique)(["DUE"])],

      "ATTACH": [],
      "ATTENDEE": [],
      "CATEGORIES": [],
      "COMMENT": [],
      "CONTACT": [],
      "EXDATE": [],
      "RSTATUS": [],
      "RELATED": [],
      "RESOURCES": [],
      "RDATE": []
    },
    enumerable: true
  }, {
    key: "validComponents",
    value: {
      "VALARM": []
    },
    enumerable: true
  }]);

  return VTODO;
})(_Component3["default"]);

exports["default"] = VTODO;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _InvalidProvidedComponentError = require("./InvalidProvidedComponentError");

var _InvalidProvidedComponentError2 = _interopRequireDefault(_InvalidProvidedComponentError);

var _InvalidProvidedPropError = require("./InvalidProvidedPropError");

var _InvalidProvidedPropError2 = _interopRequireDefault(_InvalidProvidedPropError);

exports["default"] = {
  InvalidProvidedComponentError: _InvalidProvidedComponentError2["default"],
  InvalidProvidedPropError: _InvalidProvidedPropError2["default"]
};
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _es6Error = require("es6-error");

var _es6Error2 = _interopRequireDefault(_es6Error);

var InvalidComponentError = (function (_ExtendableError) {
  _inherits(InvalidComponentError, _ExtendableError);

  function InvalidComponentError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? "Component does not contain all required properties." : arguments[0];

    _classCallCheck(this, InvalidComponentError);

    _get(Object.getPrototypeOf(InvalidComponentError.prototype), "constructor", this).call(this, message);
  }

  return InvalidComponentError;
})(_es6Error2["default"]);

exports["default"] = InvalidComponentError;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _es6Error = require("es6-error");

var _es6Error2 = _interopRequireDefault(_es6Error);

var InvalidProvidedComponentError = (function (_ExtendableError) {
  _inherits(InvalidProvidedComponentError, _ExtendableError);

  function InvalidProvidedComponentError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? "Provided component's type is not listed in validComponents." : arguments[0];

    _classCallCheck(this, InvalidProvidedComponentError);

    _get(Object.getPrototypeOf(InvalidProvidedComponentError.prototype), "constructor", this).call(this, message);
  }

  return InvalidProvidedComponentError;
})(_es6Error2["default"]);

exports["default"] = InvalidProvidedComponentError;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _es6Error = require("es6-error");

var _es6Error2 = _interopRequireDefault(_es6Error);

var InvalidProvidedPropError = (function (_ExtendableError) {
  _inherits(InvalidProvidedPropError, _ExtendableError);

  function InvalidProvidedPropError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? "Provided property's type is not listed in validProps." : arguments[0];

    _classCallCheck(this, InvalidProvidedPropError);

    _get(Object.getPrototypeOf(InvalidProvidedPropError.prototype), "constructor", this).call(this, message);
  }

  return InvalidProvidedPropError;
})(_es6Error2["default"]);

exports["default"] = InvalidProvidedPropError;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _es6Error = require("es6-error");

var _es6Error2 = _interopRequireDefault(_es6Error);

var ValidationError = (function (_ExtendableError) {
  _inherits(ValidationError, _ExtendableError);

  function ValidationError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? "Provided object was invalid for the recieving component." : arguments[0];

    _classCallCheck(this, ValidationError);

    _get(Object.getPrototypeOf(ValidationError.prototype), "constructor", this).call(this, message);
  }

  return ValidationError;
})(_es6Error2["default"]);

exports["default"] = ValidationError;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Property = require("./Property");

var _Property2 = _interopRequireDefault(_Property);

var _properties = require("./properties");

var _properties2 = _interopRequireDefault(_properties);

var _Component = require("./Component");

var _Component2 = _interopRequireDefault(_Component);

var _components = require("./components");

var _components2 = _interopRequireDefault(_components);

var ICS = (function () {
  function ICS() {
    _classCallCheck(this, ICS);
  }

  _createClass(ICS, null, [{
    key: "toBlob",
    value: function toBlob(string) {
      return new Blob([string], { type: ICS.MIME_TYPE });
    }
  }, {
    key: "toBase64",
    value: function toBase64(string, callback) {
      var blob = this.toBlob(string);
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
  }, {
    key: "Property",
    value: _Property2["default"],
    enumerable: true
  }, {
    key: "properties",
    value: _properties2["default"],
    enumerable: true
  }, {
    key: "Component",
    value: _Component2["default"],
    enumerable: true
  }, {
    key: "components",
    value: _components2["default"],
    enumerable: true
  }, {
    key: "MIME_TYPE",
    value: "text/calendar",
    enumerable: true
  }]);

  return ICS;
})();

exports["default"] = ICS;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var ACTION = (function (_Property) {
  _inherits(ACTION, _Property);

  function ACTION() {
    _classCallCheck(this, ACTION);

    _get(Object.getPrototypeOf(ACTION.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ACTION, null, [{
    key: "propName",
    value: "ACTION",
    enumerable: true
  }]);

  return ACTION;
})(_Property3["default"]);

exports["default"] = ACTION;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _formatDate = require("format-date");

var _formatDate2 = _interopRequireDefault(_formatDate);

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var CATEGORIES = (function (_Property) {
  _inherits(CATEGORIES, _Property);

  function CATEGORIES() {
    _classCallCheck(this, CATEGORIES);

    _get(Object.getPrototypeOf(CATEGORIES.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CATEGORIES, [{
    key: "shortTransformer",
    value: function shortTransformer() {
      return typeof this.value === "string";
    }
  }, {
    key: "transformer",
    value: function transformer() {
      return this.value.join(",");
    }
  }], [{
    key: "propName",
    value: "CATEGORIES",
    enumerable: true
  }]);

  return CATEGORIES;
})(_Property3["default"]);

exports["default"] = CATEGORIES;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var DESCRIPTION = (function (_Property) {
  _inherits(DESCRIPTION, _Property);

  function DESCRIPTION() {
    _classCallCheck(this, DESCRIPTION);

    _get(Object.getPrototypeOf(DESCRIPTION.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DESCRIPTION, null, [{
    key: "propName",
    value: "DESCRIPTION",
    enumerable: true
  }]);

  return DESCRIPTION;
})(_Property3["default"]);

exports["default"] = DESCRIPTION;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _DTSTAMP2 = require("./DTSTAMP");

var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

var DTEND = (function (_DTSTAMP) {
  _inherits(DTEND, _DTSTAMP);

  function DTEND() {
    _classCallCheck(this, DTEND);

    _get(Object.getPrototypeOf(DTEND.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DTEND, null, [{
    key: "propName",
    value: "DTEND",
    enumerable: true
  }]);

  return DTEND;
})(_DTSTAMP3["default"]);

exports["default"] = DTEND;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _formatDate = require("format-date");

var _formatDate2 = _interopRequireDefault(_formatDate);

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var DTSTAMP = (function (_Property) {
  _inherits(DTSTAMP, _Property);

  function DTSTAMP() {
    _classCallCheck(this, DTSTAMP);

    _get(Object.getPrototypeOf(DTSTAMP.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DTSTAMP, [{
    key: "shortTransformer",
    value: function shortTransformer() {
      return /[0-9]{8}T[0-9]{6}/.test(this.value);
    }
  }, {
    key: "transformer",
    value: function transformer() {
      var format = "{year}{month}{day}T{hours}{minutes}{seconds}";
      var date = new Date(Date.parse(this.value));

      return (0, _formatDate2["default"])(format, date);
    }
  }], [{
    key: "propName",
    value: "DTSTAMP",
    enumerable: true
  }]);

  return DTSTAMP;
})(_Property3["default"]);

exports["default"] = DTSTAMP;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _DTSTAMP2 = require("./DTSTAMP");

var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

var DTSTART = (function (_DTSTAMP) {
  _inherits(DTSTART, _DTSTAMP);

  function DTSTART() {
    _classCallCheck(this, DTSTART);

    _get(Object.getPrototypeOf(DTSTART.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DTSTART, null, [{
    key: "propName",
    value: "DTSTART",
    enumerable: true
  }]);

  return DTSTART;
})(_DTSTAMP3["default"]);

exports["default"] = DTSTART;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _DTSTAMP2 = require("./DTSTAMP");

var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

var DUE = (function (_DTSTAMP) {
  _inherits(DUE, _DTSTAMP);

  function DUE() {
    _classCallCheck(this, DUE);

    _get(Object.getPrototypeOf(DUE.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DUE, null, [{
    key: "propName",
    value: "DUE",
    enumerable: true
  }]);

  return DUE;
})(_DTSTAMP3["default"]);

exports["default"] = DUE;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ACTION = require("./ACTION");

var _ACTION2 = _interopRequireDefault(_ACTION);

var _CATEGORIES = require("./CATEGORIES");

var _CATEGORIES2 = _interopRequireDefault(_CATEGORIES);

var _DESCRIPTION = require("./DESCRIPTION");

var _DESCRIPTION2 = _interopRequireDefault(_DESCRIPTION);

var _DTSTAMP = require("./DTSTAMP");

var _DTSTAMP2 = _interopRequireDefault(_DTSTAMP);

var _DTSTART = require("./DTSTART");

var _DTSTART2 = _interopRequireDefault(_DTSTART);

var _DTEND = require("./DTEND");

var _DTEND2 = _interopRequireDefault(_DTEND);

var _DUE = require("./DUE");

var _DUE2 = _interopRequireDefault(_DUE);

var _LOCATION = require("./LOCATION");

var _LOCATION2 = _interopRequireDefault(_LOCATION);

var _PRODID = require("./PRODID");

var _PRODID2 = _interopRequireDefault(_PRODID);

var _SUMMARY = require("./SUMMARY");

var _SUMMARY2 = _interopRequireDefault(_SUMMARY);

var _TRIGGER = require("./TRIGGER");

var _TRIGGER2 = _interopRequireDefault(_TRIGGER);

var _UID = require("./UID");

var _UID2 = _interopRequireDefault(_UID);

var _VERSION = require("./VERSION");

var _VERSION2 = _interopRequireDefault(_VERSION);

exports["default"] = {
  ACTION: _ACTION2["default"],
  CATEGORIES: _CATEGORIES2["default"],
  DESCRIPTION: _DESCRIPTION2["default"],
  DTSTAMP: _DTSTAMP2["default"],
  DTSTART: _DTSTART2["default"],
  DTEND: _DTEND2["default"],
  DUE: _DUE2["default"],
  LOCATION: _LOCATION2["default"],
  PRODID: _PRODID2["default"],
  SUMMARY: _SUMMARY2["default"],
  TRIGGER: _TRIGGER2["default"],
  UID: _UID2["default"],
  VERSION: _VERSION2["default"]
};
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var LOCATION = (function (_Property) {
  _inherits(LOCATION, _Property);

  function LOCATION() {
    _classCallCheck(this, LOCATION);

    _get(Object.getPrototypeOf(LOCATION.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(LOCATION, null, [{
    key: "propName",
    value: "LOCATION",
    enumerable: true
  }]);

  return LOCATION;
})(_Property3["default"]);

exports["default"] = LOCATION;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var PRODID = (function (_Property) {
  _inherits(PRODID, _Property);

  function PRODID() {
    _classCallCheck(this, PRODID);

    _get(Object.getPrototypeOf(PRODID.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PRODID, null, [{
    key: "propName",
    value: "PRODID",
    enumerable: true
  }]);

  return PRODID;
})(_Property3["default"]);

exports["default"] = PRODID;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var SUMMARY = (function (_Property) {
  _inherits(SUMMARY, _Property);

  function SUMMARY() {
    _classCallCheck(this, SUMMARY);

    _get(Object.getPrototypeOf(SUMMARY.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(SUMMARY, null, [{
    key: "propName",
    value: "SUMMARY",
    enumerable: true
  }]);

  return SUMMARY;
})(_Property3["default"]);

exports["default"] = SUMMARY;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var TRIGGER = (function (_Property) {
  _inherits(TRIGGER, _Property);

  function TRIGGER() {
    _classCallCheck(this, TRIGGER);

    _get(Object.getPrototypeOf(TRIGGER.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TRIGGER, null, [{
    key: "propName",
    value: "TRIGGER",
    enumerable: true
  }]);

  return TRIGGER;
})(_Property3["default"]);

exports["default"] = TRIGGER;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _simpleGuid = require("simple-guid");

var _simpleGuid2 = _interopRequireDefault(_simpleGuid);

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var UID = (function (_Property) {
  _inherits(UID, _Property);

  function UID() {
    _classCallCheck(this, UID);

    _get(Object.getPrototypeOf(UID.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(UID, [{
    key: "shortTransformer",
    value: function shortTransformer() {
      return !!this.value;
    }
  }, {
    key: "transformer",
    value: function transformer() {
      return (0, _simpleGuid2["default"])();
    }
  }], [{
    key: "propName",
    value: "UID",
    enumerable: true
  }]);

  return UID;
})(_Property3["default"]);

exports["default"] = UID;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Property2 = require("../Property");

var _Property3 = _interopRequireDefault(_Property2);

var VERSION = (function (_Property) {
  _inherits(VERSION, _Property);

  function VERSION() {
    _classCallCheck(this, VERSION);

    _get(Object.getPrototypeOf(VERSION.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VERSION, [{
    key: "shortTransformer",
    value: function shortTransformer() {
      return /[0-9].[0-9]/.test(this.value);
    }
  }, {
    key: "transformer",
    value: function transformer() {
      return parseFloat(this.value).toFixed(1);
    }
  }], [{
    key: "propName",
    value: "VERSION",
    enumerable: true
  }]);

  return VERSION;
})(_Property3["default"]);

exports["default"] = VERSION;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Property = (function () {
  _createClass(Property, null, [{
    key: "keyRegex",
    value: /^[A-Z]([A-Z]|-)*[A-Z]$/,
    enumerable: true
  }, {
    key: "propName",
    value: "Property",
    enumerable: true
  }]);

  function Property(value) {
    var skipTransformer = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    _classCallCheck(this, Property);

    this.value = value;
    this.skipTransformer = skipTransformer;
  }

  _createClass(Property, [{
    key: "shortTransformer",
    value: function shortTransformer() {
      return true;
    }
  }, {
    key: "transformer",
    value: function transformer() {
      return this.value;
    }
  }, {
    key: "transformedValue",
    value: function transformedValue() {
      if (this.skipTransformer || this.shortTransformer()) return this.value;
      return this.transformer();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.constructor.propName + ":" + this.transformedValue();
    }
  }]);

  return Property;
})();

exports["default"] = Property;
module.exports = exports["default"];
