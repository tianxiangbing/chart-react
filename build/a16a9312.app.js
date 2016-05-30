webpackJsonp([1],{0:function(e,t,n){e.exports=n(91)},88:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(22),u=a(s),c=n(92),d=(a(c),n(90)),f=a(d),h=n(89),p=a(h);n(87);var y=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={list:null,rect:{c1:{w:930,h:670},c2:{w:650,h:420}}},n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.bindChart(),this.bindHeader();var t=new Date;setInterval(function(){e.bindHeader();var n=new Date;t.getDate()!=n.getDate()&&(t=n,e.bindChart())},1e4)}},{key:"bindHeader",value:function(){var e=this;fetch(CONFIG.header+"?t="+ +new Date).then(function(e){return e.json()}).then(function(t){var n=t.data;n.installationsTotalUsers=n.installations_android+n.installations_ios,n.today_iosAdrTotal=n.today_active_users_android+n.today_active_users_ios,n.yesterday_iosAdrTotal=n.yesterday_active_users_android+n.yesterday_active_users_ios,n.diff_active=n.today_iosAdrTotal-n.yesterday_iosAdrTotal,n.yesterday_iosAdrAddTotal=n.yesterday_add_users_ios+n.yesterday_add_users_android,n.today_iosAdrAddTotal=n.today_add_users_ios+n.today_add_users_android,n.diff_add=n.today_iosAdrAddTotal-n.yesterday_iosAdrAddTotal,e.setState({header:n})})}},{key:"bindChart",value:function(){var e=this;fetch(CONFIG.chart+"?t="+ +new Date).then(function(e){return e.json()}).then(function(t){for(var n=[],a=[],r=0;r<t.data.length;r++){var i=t.data[r];n.push({month:i.date,tem:i.today_active_users_android,city:"android"}),n.push({month:i.date,tem:i.today_active_users_ios,city:"ios"}),n.push({month:i.date,tem:i.today_active_users_android+i.today_active_users_ios,city:"总和"}),a.push({month:i.date,tem:i.today_add_users_android,city:"android"}),a.push({month:i.date,tem:i.today_add_users_ios,city:"ios"}),a.push({month:i.date,tem:i.today_add_users_android+i.today_add_users_ios,city:"总和"})}e.setState({list1:n,list2:a})})["catch"](function(e){console.log("parsing failed",e)})}},{key:"setRect",value:function(e,t){this.state.rect[e]=t,this.setState({rect:this.state.rect})}},{key:"render",value:function(){return u["default"].createElement("div",{className:"body"},u["default"].createElement(f["default"],{info:this.state.header}),u["default"].createElement("div",{className:"c1"},u["default"].createElement("div",{className:"sp_title"}," 单位（万/人） "),u["default"].createElement(p["default"],{sw:"900",sh:"670",height:this.state.rect.c1.h,width:this.state.rect.c1.w,unit:"w",mykey:"c1",list:this.state.list1,parentCallback:this.setRect.bind(this)}),u["default"].createElement("h2",null,"日活趋势图")),u["default"].createElement("div",{className:"c2"},u["default"].createElement("dl",null,u["default"].createElement("dt",{className:"dt-1"},"总趋势",u["default"].createElement("i",null)),u["default"].createElement("dt",{className:"dt-2"},"Android",u["default"].createElement("i",null)),u["default"].createElement("dt",{className:"dt-3"},"iOS",u["default"].createElement("i",null))),u["default"].createElement("div",{className:"sp_title"}," 单位（人） "),u["default"].createElement(p["default"],{sw:"730",sh:"500",height:this.state.rect.c2.h,width:this.state.rect.c2.w,mykey:"c2",list:this.state.list2,parentCallback:this.setRect.bind(this)}),u["default"].createElement("h2",null,"新增趋势")))}}]),t}(u["default"].Component);t["default"]=y},89:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(22),u=a(s),c=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.chart=null,n.oldRect={w:n.props.width,h:n.props.height},n}return o(t,e),l(t,[{key:"componentDidUpdate",value:function(e,t){if(JSON.stringify(this.props.list)==JSON.stringify(e.list)||null==this.props.list||0==this.props.list.length)return void(this.chart&&this.chart.changeSize(e.width,e.height));var n=this,a=new Date,r=(a.getFullYear(),a.getMonth(),a.getDate(),[]);r=this.props.list;var i=(G2.Stat,G2.Frame),o=new i(r);this.chart=new G2.Chart({container:this.refs.chart,width:this.props.width,height:this.props.height});var l=(r.slice(-3).map(function(e){return e.tem}),{month:{formatter:function(e){var t=new Date(e),n=t.getDate();return n==a.getDate()-1&&a.getMonth()==t.getMonth()?"昨天":t.getMonth()+1+"/"+("0"+n).slice(-2)},alias:" "},tem:{formatter:function(e){return"w"==n.props.unit?Math.floor(e/1e4)+"w":e},alias:" "},city:{type:"cat",alias:" ",values:["总和","android","ios"]}});this.chart.source(o,l),this.chart.area().position("month*tem").color("city").shape("smooth"),this.chart.render()}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setSize()},500)}},{key:"setSize",value:function(){var e=1920,t=document.body.clientWidth,n=parseInt(t/(e/this.props.sw)),a=parseInt(t/(e/this.props.sh));n!==this.oldRect.w&&(this.oldRect={w:n,h:a},this.props.parentCallback(this.props.mykey,{w:n,h:a}),this.chart&&this.chart.changeSize(parseInt(n),parseInt(a)))}},{key:"render",value:function(){return u["default"].createElement("div",{ref:"chart"})}}]),t}(u["default"].Component);t["default"]=c},90:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(22),u=a(s),c=n(93),d=(a(c),function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return o(t,e),l(t,[{key:"renderDayActive",value:function(){return this.props.info?this.props.info.diff_active>0?u["default"].createElement("div",{className:"item up-down up"},u["default"].createElement("span",null,this.props.info.today_iosAdrTotal.toLocaleString(),u["default"].createElement("em",null),u["default"].createElement("i",null,"+",this.props.info.diff_active.toLocaleString())),u["default"].createElement("s",null),u["default"].createElement("p",null,"日活总数 VS 昨天同时段")):u["default"].createElement("div",{className:"item up-down down"},u["default"].createElement("span",null,this.props.info.today_iosAdrTotal.toLocaleString(),u["default"].createElement("em",null),u["default"].createElement("i",null,this.props.info.diff_active.toLocaleString())),u["default"].createElement("s",null),u["default"].createElement("p",null,"日活总数 VS 昨天同时段")):void 0}},{key:"renderDayAdd",value:function(){return this.props.info?this.props.info.diff_add>0?u["default"].createElement("div",{className:"item up-down up"},u["default"].createElement("span",null,this.props.info.today_iosAdrAddTotal.toLocaleString(),u["default"].createElement("em",null),u["default"].createElement("i",null,"+",this.props.info.diff_add.toLocaleString())),u["default"].createElement("s",null),u["default"].createElement("p",null,"日新增总量 VS 昨天同时段")):u["default"].createElement("div",{className:"item up-down down"},u["default"].createElement("span",null,this.props.info.today_iosAdrAddTotal.toLocaleString(),u["default"].createElement("em",null),u["default"].createElement("i",null,this.props.info.diff_add.toLocaleString())),u["default"].createElement("s",null),u["default"].createElement("p",null,"日新增总量 VS 昨天同时段")):void 0}},{key:"render",value:function(){return u["default"].createElement("div",{id:"Header"},u["default"].createElement("div",{className:"item"},u["default"].createElement("span",null,this.props.info&&this.props.info.installationsTotalUsers.toLocaleString()),u["default"].createElement("s",null),u["default"].createElement("p",null,"激活总数")),this.renderDayActive(),this.renderDayAdd())}}]),t}(u["default"].Component));t["default"]=d},91:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(22),i=a(r),o=n(52),l=n(88),s=a(l);(0,o.render)(i["default"].createElement(s["default"],null),document.getElementById("app"))},92:function(e,t){"use strict"},93:function(e,t){"use strict"}});