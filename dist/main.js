/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tSwitch = function () {
    function tSwitch(props) {
        _classCallCheck(this, tSwitch);

        this.properties = {
            element: props.element ? props.element : false,
            isActive: props.isActive ? props.isActive : false,
            isDisabled: props.isDisabled ? props.isDisabled : false,
            background: props.background ? props.background : '#FFF',
            backgroundActive: props.backgroundActive ? props.backgroundActive : '#5d9cec',
            size: props.size ? props.size : 'medium',
            additionalClass: props.additionalClass ? props.additionalClass : '',
            onActivate: props.onActivate ? props.onActivate : function () {},
            onDeactivate: props.onDeactivate ? props.onDeactivate : function () {},
            onToggle: props.onToggle ? props.onToggle : function () {},
            didMountCallback: props.didMountCallback ? true : false
        };
        this.replacedElement = this.properties.element;
        this.destinationElement = false;
        this.render();
        this.applyCustomStyles();
        this.didMountActiveState();
        this.toggle = this.toggle.bind(this);
        this.getIsActive = this.getIsActive.bind(this);
        this.mountListeners();
    }

    _createClass(tSwitch, [{
        key: 'insertAfter',
        value: function insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
    }, {
        key: 'didMountActiveState',
        value: function didMountActiveState() {
            if (this.properties.element.checked === true) {
                this.properties.isActive = true;
            }

            if (this.properties.isDisabled === true) {
                this.destinationElement.classList.add('disabled');
            }

            if (this.properties.isActive === true) {
                this.destinationElement.classList.add('active');
                this.properties.element.checked = true;
                if (this.properties.didMountCallback === true) {
                    this.properties.onActivate();
                }
            } else {
                this.properties.element.checked = false;
                if (this.properties.didMountCallback === true) {
                    this.properties.onDeactivate();
                }
            }
        }
    }, {
        key: 'getIsActive',
        value: function getIsActive() {
            return this.properties.isActive;
        }
    }, {
        key: 'setActive',
        value: function setActive(status) {
            if (status === true) {
                this.properties.onActivate();
                this.properties.isActive = true;
                this.properties.element.checked = true;
                this.destinationElement.style.boxShadow = this.properties.backgroundActive + ' 0 0 0 11px inset';
            } else {
                this.properties.onDeactivate();
                this.properties.isActive = false;
                this.properties.element.checked = false;
                this.destinationElement.style.boxShadow = 'rgb(223, 223, 223) 0 0 0 0 inset';
            }
        }
    }, {
        key: 'mountListeners',
        value: function mountListeners() {
            this.destinationElement.addEventListener('click', this.toggle);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.properties.isDisabled === true) {
                return false;
            }
            this.properties.onToggle(!this.properties.isActive);
            var status = this.destinationElement.classList.toggle('active');
            this.setActive(status);
        }
    }, {
        key: 'applyCustomStyles',
        value: function applyCustomStyles() {
            this.destinationElement.style.backgroundColor = this.properties.background;
            this.destinationElement.classList.add(this.properties.size);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.properties.element === false) {
                throw new Error('No valid ID was providen for element to render');
                return false;
            }
            if (this.properties.element.getAttribute('type') !== 'checkbox') {
                throw new Error('Pointed element is not a checkbox type');
                return false;
            }
            this.replacedElement.style.display = 'none';
            var destinationElement = document.createElement('span');
            destinationElement.classList.add('t-switch');
            var smallElement = document.createElement('small');
            destinationElement.appendChild(smallElement);
            this.destinationElement = destinationElement;
            this.properties.element.parentNode.insertBefore(destinationElement, this.properties.element.nextSibling);
            if (this.properties.additionalClass) {
                destinationElement.classList.add(this.properties.additionalClass);
            }
        }
    }]);

    return tSwitch;
}();

// module.exports = tSwitch;


exports.default = tSwitch;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tswitch = __webpack_require__(0);

var _tswitch2 = _interopRequireDefault(_tswitch);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swch = new _tswitch2.default({
    element: document.getElementById('example-switch'),
    size: 'x-small',
    additionalClass: 'lorem',
    onActivate: function onActivate() {
        console.log('onActivate');
    },
    onDeactivate: function onDeactivate() {
        console.log('onDeactivate');
    },
    onToggle: function onToggle(checked) {
        if (checked) {
            console.log('On toggle checked');
        } else {
            console.log('On toggle unchecked');
        }
    }
});

/***/ })
/******/ ]);