import React from 'react';

export default class Chart extends React.Component {
		componentDidMount() {
			let _this = this;
		var now = new Date();
		var y = now.getFullYear();
		var m = now .getMonth();
		var d = now .getDate();
		var data =[];
		for (let i = 30; i >= 1; i--) {
			var nd = d- i;
			let item1 = {month:new Date(y,m,nd),tem:parseInt(Math.random()*100000+200000),"city": "彩云"};
			let item2 = {month:new Date(y,m,nd),tem:parseInt(Math.random()*900000+200000),"city": "麻绳"};
			let item3 = {month:new Date(y,m,nd),tem:parseInt(Math.random()*800000+200000),"city": "活跃"};
			data.push(item1)
			data.push(item2)
			data.push(item3)
		};
		console.log(this.refs.chart)
		var Stat = G2.Stat;
		var Frame = G2.Frame;
		var frame = new Frame(data);
		var chart = new G2.Chart({
			//id: 'c1',
			container:this.refs.chart,
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
				formatter: function(time) {
					var date = new Date(time);
					var day = date.getDate();
					if( day == now .getDate()-1 && now.getMonth() == date.getMonth() ){
						return "昨天"
					}
					if(day ==1){
						return date.getMonth()+"月"+day+"日";
					}
					return day;
				},
				alias: " "
			},
			"tem": {
				formatter: function(v) {
					if(_this.props.unit =="w"){
						return Math.floor(v / 10000) + "w"
					}else{
						return v;
					}
				},
				alias: " "
			},
			'city': {
				type: 'cat',
				alias: "昨天",
				values: ['1321454', '564562','198929']
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
	render(){
		return (
			<div ref="chart"></div>
			)
	}
}