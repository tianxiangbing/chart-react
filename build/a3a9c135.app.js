webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(39);

	var _App = __webpack_require__(169);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(170);

	var _App2 = _interopRequireDefault(_App);

	var _Header = __webpack_require__(174);

	var _Header2 = _interopRequireDefault(_Header);

	var _Chart = __webpack_require__(177);

	var _Chart2 = _interopRequireDefault(_Chart);

	__webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = { list: null };
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				fetch('/mock/chart.json').then(function (result) {
					console.log(result);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'body' },
					_react2.default.createElement(_Header2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'c1' },
						_react2.default.createElement(
							'div',
							{ className: 'sp_title' },
							' 单位（万/人） '
						),
						_react2.default.createElement(_Chart2.default, { height: '730', width: '930', unit: 'w' }),
						_react2.default.createElement(
							'h2',
							null,
							'日活趋势图'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'c2' },
						_react2.default.createElement(
							'dl',
							null,
							_react2.default.createElement(
								'dt',
								{ className: 'dt-1' },
								'总趋势',
								_react2.default.createElement('i', null)
							),
							_react2.default.createElement(
								'dt',
								{ className: 'dt-2' },
								'Android',
								_react2.default.createElement('i', null)
							),
							_react2.default.createElement(
								'dt',
								{ className: 'dt-3' },
								'iOS',
								_react2.default.createElement('i', null)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'sp_title' },
							' 单位（人） '
						),
						_react2.default.createElement(_Chart2.default, { height: '480', width: '650' }),
						_react2.default.createElement(
							'h2',
							null,
							'新增趋势'
						)
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },

/***/ 170:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	"use strict";

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(175);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'Header' },
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement(
							'span',
							null,
							'17,268'
						),
						_react2.default.createElement('s', null),
						_react2.default.createElement(
							'p',
							null,
							'激活总数'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement(
							'span',
							null,
							'17,268'
						),
						_react2.default.createElement('s', null),
						_react2.default.createElement(
							'p',
							null,
							'月活总量（往前30天）'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item up-down up' },
						_react2.default.createElement(
							'span',
							null,
							'17,268',
							_react2.default.createElement('em', null),
							_react2.default.createElement(
								'i',
								null,
								'+799'
							)
						),
						_react2.default.createElement('s', null),
						_react2.default.createElement(
							'p',
							null,
							'日活总数VS昨天同时段'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item up-down down' },
						_react2.default.createElement(
							'span',
							null,
							'17,268',
							_react2.default.createElement('em', null),
							_react2.default.createElement(
								'i',
								null,
								'-799'
							)
						),
						_react2.default.createElement('s', null),
						_react2.default.createElement(
							'p',
							null,
							'日新增总量VS昨天同时段'
						)
					)
				);
			}
		}]);

		return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },

/***/ 175:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	"use strict";

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chart = function (_React$Component) {
		_inherits(Chart, _React$Component);

		function Chart() {
			_classCallCheck(this, Chart);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).apply(this, arguments));
		}

		_createClass(Chart, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this = this;
				var now = new Date();
				var y = now.getFullYear();
				var m = now.getMonth();
				var d = now.getDate();
				var data = [];
				for (var i = 30; i >= 1; i--) {
					var nd = d - i;
					var item1 = { month: new Date(y, m, nd), tem: parseInt(Math.random() * 100000 + 200000), "city": "彩云" };
					var item2 = { month: new Date(y, m, nd), tem: parseInt(Math.random() * 900000 + 200000), "city": "麻绳" };
					var item3 = { month: new Date(y, m, nd), tem: parseInt(Math.random() * 800000 + 200000), "city": "活跃" };
					data.push(item1);
					data.push(item2);
					data.push(item3);
				};
				console.log(this.refs.chart);
				var Stat = G2.Stat;
				var Frame = G2.Frame;
				var frame = new Frame(data);
				var chart = new G2.Chart({
					//id: 'c1',
					container: this.refs.chart,
					width: this.props.width,
					height: this.props.height
				});
				/*chart.axis('tem', {
	   	formatter:function(dimValue){
	   		return (dimValue / 10000).toFixed(0) + 'w';
	   	},
	   	gridAlign: 'start',
	   	tickCount:5
	   });
	   chart.axis('month', {
	   	gridAlign: 'start',
	   	tickCount:5
	   });*/
				var defs = {
					'month': {
						formatter: function formatter(time) {
							var date = new Date(time);
							var day = date.getDate();
							if (day == now.getDate() - 1 && now.getMonth() == date.getMonth()) {
								return "昨天";
							}
							if (day == 1) {
								return date.getMonth() + "月" + day + "日";
							}
							return day;
						},
						alias: " "
					},
					"tem": {
						formatter: function formatter(v) {
							if (_this.props.unit == "w") {
								return Math.floor(v / 10000) + "w";
							} else {
								return v;
							}
						},
						alias: " "
					},
					'city': {
						type: 'cat',
						alias: "昨天",
						values: ['1321454', '564562', '198929']
					}
				};
				//console.log(getPosition({xDim: value, yDim: value}))
				chart.source(frame, defs);
				// area 支持的图形类型：'area','smooth','line','dotLine','smoothLine','dotSmoothLine'
				chart.area().position('month*tem').color('city').shape('smooth');
				/*chart.guide().text([50, 50], '越差的钻石切割工艺分散', {
	   	'text-anchor': 'middle'
	   });*/

				chart.render();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", { ref: "chart" });
			}
		}]);

		return Chart;
	}(_react2.default.Component);

	exports.default = Chart;

/***/ }

});