"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IssueFilter = _interopRequireDefault(require("./IssueFilter.jsx"));

var _IssueTable = _interopRequireDefault(require("./IssueTable.jsx"));

var _IssueAdd = _interopRequireDefault(require("./IssueAdd.jsx"));

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IssueList = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueList, _React$Component);

  var _super = _createSuper(IssueList);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _super.call(this);
    _this.state = {
      issues: []
    };
    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n    issueList {\n    id title status owner\n    created effort due\n    }\n}";
                _context.next = 3;
                return (0, _graphQLFetch.default)(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    issues: data.issueList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function () {
      var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation issueAdd($issue: IssueInputs!) {\n    issueAdd(issue: $issue) {\n    id\n  }\n}";
                _context2.next = 3;
                return (0, _graphQLFetch.default)(query, {
                  issue: issue
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createIssue(_x) {
        return _createIssue.apply(this, arguments);
      }

      return createIssue;
    }()
  }, {
    key: "render",
    value: function render() {
      var issues = this.state.issues;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(_IssueFilter.default, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_IssueTable.default, {
        issues: issues
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_IssueAdd.default, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

exports.default = IssueList;