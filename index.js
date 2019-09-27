"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defineProperty2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A react component for easily creating css-grids.
 */
var CreateGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateGrid, _React$Component);

  function CreateGrid() {
    _classCallCheck(this, CreateGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateGrid).apply(this, arguments));
  }

  _createClass(CreateGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          minItemWidth = _this$props.minItemWidth,
          minItemHeight = _this$props.minItemHeight,
          gap = _this$props.gap,
          style = _this$props.style;
      return _react["default"].createElement("div", {
        style: _objectSpread({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(".concat(minItemWidth, ", 1fr))"),
          gridGap: gap
        }, style)
      }, items.map(function (item) {
        return _react["default"].createElement("div", {
          style: _objectSpread({
            background: item.background || "#eeeeee",
            minHeight: minItemHeight,
            gridRow: item.row || "auto",
            gridColumn: item.col || "auto"
          }, item.style)
        });
      }));
    }
  }]);

  return CreateGrid;
}(_react["default"].Component);

_defineProperty(CreateGrid, "propTypes", (_defineProperty2 = {
  /** An array of objects represnting a item in the grid. */
  items: _propTypes["default"].array,

  /** A string with a value and a css suffix representing the mininum width of a grid-item. */
  minItemWidth: _propTypes["default"].string
}, _defineProperty(_defineProperty2, "minItemWidth", _propTypes["default"].string), _defineProperty(_defineProperty2, "gap", _propTypes["default"].string), _defineProperty(_defineProperty2, "style", _propTypes["default"].object), _defineProperty2));

_defineProperty(CreateGrid, "defaultProps", {
  minItemHeight: "200px",
  minItemWidth: "200px"
});

var _default = CreateGrid;
exports["default"] = _default;
