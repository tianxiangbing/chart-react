import React from 'react';
export default class Chart extends React.Component {
	constructor(props){
		super(props);
		this.chart = null;
		this.oldRect = {w:this.props.width,h:this.props.height};
	}
	componentDidUpdate(newValue,oldValue){
		if(JSON.stringify(this.props.list)==JSON.stringify(newValue.list) || this.props.list==null||this.props.list.length==0){
			this.chart&& this.chart.changeSize(newValue.width,newValue.height)
			return;
		}
		//let data =this.props.list;
		let _this = this;
		var now = new Date();
		var y = now.getFullYear();
		var m = now.getMonth();
		var d = now.getDate();
		var data = [];
		/*for (let i = 30; i >= 1; i--) {
			var nd = d - i;
			let item1 = {
				month: new Date(y, m, nd),
				tem: parseInt(Math.random() * 100000 + 200000),
				"city": "彩云"
			};
			let item2 = {
				month: new Date(y, m, nd),
				tem: parseInt(Math.random() * 900000 + 200000),
				"city": "麻绳"
			};
			let item3 = {
				month: new Date(y, m, nd),
				tem: parseInt(Math.random() * 800000 + 200000),
				"city": "活跃"
			};
			data.push(item1)
			data.push(item2)
			data.push(item3)
		};
		console.log(JSON.stringify(this.props.list))
		console.log(data)*/
		data=this.props.list
		var Stat = G2.Stat;
		var Frame = G2.Frame;
		var frame = new Frame(data);
		this.chart = new G2.Chart({
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
		let lastArr = data.slice(-3).map((item)=>{
			return item.tem;
		});
		var defs = {
			'month': {
				formatter: function(time) {
					var date = new Date(time);
					var day = date.getDate();
					if (day == now.getDate() - 1 && now.getMonth() == date.getMonth()) {
						return "昨天"
					}
					//if (day == 1) {
						return (date.getMonth()+1) + "/" + ("0"+day).slice(-2) + "";
					//}
					return day;
				},
				alias: " "
			},
			"tem": {
				formatter: function(v) {
					if (_this.props.unit == "w") {
						return Math.floor(v / 10000) + "w"
					} else {
						return v;
					}
				},
				alias: " "
			},
			'city': {
				type: 'cat',
				alias: " ",
				values: ["android",'ios','sum']
			}
		};
		//console.log(getPosition({xDim: value, yDim: value}))
		this.chart.source(frame, defs);
		// area 支持的图形类型：'area','smooth','line','dotLine','smoothLine','dotSmoothLine'
		this.chart.area().position('month*tem').color('city').shape('smooth');
		/*chart.guide().text([50, 50], '越差的钻石切割工艺分散', {
			'text-anchor': 'middle'
		});*/

		this.chart.render();
		/*this.setSize()*/
	}
	componentDidMount(){
		/*window.addEventListener('resize',function(){
			//var rect={h1:730,w1:930,h2:480,w2:650};
			this.setSize();
		}.bind(this)
		);*/
		setInterval(()=>{
			this.setSize();
		},500);
	}
	setSize(){
		var oldwidth = 1920;
		var newWidth = document.body.clientWidth;
		var nw = parseInt(newWidth/(oldwidth/this.props.sw));
		var nh = parseInt( newWidth/(oldwidth/this.props.sh));
		//this.setState({'w':nw,'h':nh});
		if(nw !== this.oldRect.w){
			this.oldRect= {w:nw,h:nh}
			this.props.parentCallback(this.props.mykey,{w:nw,h:nh});
			this.chart&&this.chart.changeSize(parseInt(nw),parseInt(nh))
		}
	}
	
	render(){
		return (
				<div ref="chart">
				</div>
			)
	}
}