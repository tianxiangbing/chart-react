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
		let _this = this;
		// Apply the theme
		var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
		$('.'+this.props.mykey+" .chart").highcharts({
			chart: {
				type: 'area'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				type:'datetime',
				allowDecimals: false,
				labels: {
					formatter: function() {
						var date = new Date(this.value);
						return date.getMonth()+"/"+ ("0"+date.getDate()).slice(-2); // clean, unformatted number for year
					}
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				lineWidth: 1,
				labels: {
					formatter: function() {
						if(_this.props.unit=="w"){
							return this.value / 10000 + 'w';
						}else{
							return this.value;
						}
					}
				}
			},
			exporting: {
				buttons: null
			},
			tooltip: {
				pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			},
			plotOptions: {
				area: {
					pointStart: function(){
						let date = new Date( (_this.props.list)[0].month);

						return  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) 
					}(),
                	pointInterval: 24 * 3600 * 1000, // one day
					marker: {
						enabled: false,
						symbol: 'circle',
						radius: 2,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				}
			},
			series: [{
				name: 'sum',
				data: (function() {
					let arr=[];
					(_this.props.list || []).forEach(item => {
						if(item.city == "sum"){
							arr.push(item.tem);
						}
					});
					console.log(arr)
					return arr
				})()
			}, {
				name: 'android',
				data:  (function() {
					let arr=[];
					(_this.props.list || []).forEach(item => {
						if(item.city == "android"){
							arr.push(item.tem);
						}
					});
					console.log(arr)
					return arr
				})()
			}, {
				name: 'ios',
				data:  (function() {
					let arr=[];
					(_this.props.list || []).forEach(item => {
						if(item.city == "ios"){
							arr.push(item.tem);
						}
					});
					console.log(arr)
					return arr
				})()
			}]
		});
	}
		/*this.setSize()*/
	componentDidMount() {
		/*		window.addEventListener('resize',function(){
					//var rect={h1:730,w1:930,h2:480,w2:650};
					this.setSize();
				}.bind(this)
				);
				setTimeout(()=>{
					this.setSize();
				},3000);*/
		let _this = this;
		this.setSize();
		Highcharts.theme = {
			colors: ["rgba(16,40,80,.8)", "#4d755d", "#2a7183"],
			chart: {
				backgroundColor: "#18242E",
				borderColor: '#000000',
				borderWidth: 0,
				className: 'dark-container',
				plotBackgroundColor: '#18242E',
				plotBorderColor: '#CCCCCC',
				plotBorderWidth: 0
			},
			title: {
				style: {
					color: '#C0C0C0',
					font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
				}
			},
			subtitle: {
				style: {
					color: '#666666',
					font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
				}
			},
			xAxis: {
				gridLineColor: '#333333',
				gridLineWidth: 0,
				labels: {
					style: {
						color: '#A0A0A0'
					}
				},
				lineColor: '#A0A0A0',
				tickColor: '#A0A0A0',
				title: {
					style: {
						color: '#CCC',
						fontWeight: 'bold',
						fontSize: '12px',
						fontFamily: 'Trebuchet MS, Verdana, sans-serif'

					}
				}
			},
			yAxis: {
				gridLineColor: '#333333',
				labels: {
					style: {
						color: '#A0A0A0'
					}
				},
				lineColor: '#A0A0A0',
				minorTickInterval: null,
				tickColor: '#A0A0A0',
				tickWidth: 1,
				title: {
					style: {
						color: '#CCC',
						fontWeight: 'bold',
						fontSize: '12px',
						fontFamily: 'Trebuchet MS, Verdana, sans-serif'
					}
				}
			},
			tooltip: {
				backgroundColor: 'rgba(0, 0, 0, 0.75)',
				style: {
					color: '#F0F0F0'
				}
			},
			toolbar: {
				itemStyle: {
					color: 'silver'
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						color: '#CCC'
					},
					marker: {
						lineColor: '#333'
					}
				},
				spline: {
					marker: {
						lineColor: '#333'
					}
				},
				scatter: {
					marker: {
						lineColor: '#333'
					}
				},
				candlestick: {
					lineColor: 'white'
				},
				 series: {
	                lineColor: '#000000'
	            }
			},
			legend: {
				itemStyle: {
					font: '9pt Trebuchet MS, Verdana, sans-serif',
					color: '#A0A0A0'
				},
				itemHoverStyle: {
					color: '#FFF'
				},
				itemHiddenStyle: {
					color: '#444'
				}
			},
			credits: {
				style: {
					color: '#666'
				}
			},
			labels: {
				style: {
					color: '#CCC'
				}
			},


			navigation: {
				buttonOptions: {
					symbolStroke: '#DDDDDD',
					hoverSymbolStroke: '#FFFFFF',
					theme: {
						fill: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0.4, '#606060'],
								[0.6, '#333333']
							]
						},
						stroke: '#000000'
					}
				}
			},

			// scroll charts
			rangeSelector: {
				buttonTheme: {
					fill: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1
						},
						stops: [
							[0.4, '#888'],
							[0.6, '#555']
						]
					},
					stroke: '#000000',
					style: {
						color: '#CCC',
						fontWeight: 'bold'
					},
					states: {
						hover: {
							fill: {
								linearGradient: {
									x1: 0,
									y1: 0,
									x2: 0,
									y2: 1
								},
								stops: [
									[0.4, '#BBB'],
									[0.6, '#888']
								]
							},
							stroke: '#000000',
							style: {
								color: 'white'
							}
						},
						select: {
							fill: {
								linearGradient: {
									x1: 0,
									y1: 0,
									x2: 0,
									y2: 1
								},
								stops: [
									[0.1, '#000'],
									[0.3, '#333']
								]
							},
							stroke: '#000000',
							style: {
								color: 'yellow'
							}
						}
					}
				},
				inputStyle: {
					backgroundColor: '#333',
					color: 'silver'
				},
				labelStyle: {
					color: 'silver'
				}
			},

			navigator: {
				handles: {
					backgroundColor: '#666',
					borderColor: '#AAA'
				},
				outlineColor: '#CCC',
				maskFill: 'rgba(16, 16, 16, 0.5)',
				series: {
					color: '#7798BF',
					lineColor: '#A6C7ED'
				}
			},

			scrollbar: {
				barBackgroundColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0.4, '#888'],
						[0.6, '#555']
					]
				},
				barBorderColor: '#CCC',
				buttonArrowColor: '#CCC',
				buttonBackgroundColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0.4, '#888'],
						[0.6, '#555']
					]
				},
				buttonBorderColor: '#CCC',
				rifleColor: '#FFF',
				trackBackgroundColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, '#000'],
						[1, '#333']
					]
				},
				trackBorderColor: '#666'
			},

			// special colors for some of the
			legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
			background2: 'rgb(35, 35, 70)',
			dataLabelsColor: '#444',
			textColor: '#C0C0C0',
			maskColor: 'rgba(255,255,255,0.3)'
		};
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
			//this.chart&&this.chart.changeSize(parseInt(nw),parseInt(nh))
			//this.setState({w:parseInt(nw),h:parseInt(nh)})
		}
	}
	
	render(){
		return (
				<div ref="chart" className="chart" style={{width:this.props.width,height:this.props.height}}>
				</div>
			)
	}
}