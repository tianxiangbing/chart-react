import React from 'react';
import styles from './_App.scss';

import Header from '../Header/Header';
import Chart from '../Chart/Chart';
import 'whatwg-fetch';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {list:null};
	}
	componentDidMount(){
		this.bindChart();
		this.bindHeader();
		var now = new Date();
		setInterval(()=>{
			this.bindHeader();
			let newNow = new Date();
			if(now.getDate() != newNow.getDate()){
				now = newNow;
				this.bindChart();
			}
		},1000*10)
	}
	bindHeader(){
		//fetch('/data/umeng/getdata?'+(+new Date()))
		fetch('/mock/header.json?'+(+new Date()))
		.then((response)=>{return response.json()})
		.then((response)=>{
			var data = response.data;
            //data.sysDate = data.date + " " + data.time;
            data.installationsTotalUsers = data.installations_android + data.installations_ios;
            data.today_iosAdrTotal = data.today_active_users_android + data.today_active_users_ios;
            data.yesterday_iosAdrTotal = data.yesterday_active_users_android + data.yesterday_active_users_ios;
            data.diff_active =data.today_iosAdrTotal-data.yesterday_iosAdrTotal;

            data.yesterday_iosAdrAddTotal = data.yesterday_add_users_ios + data.yesterday_add_users_android;
            data.today_iosAdrAddTotal = data.today_add_users_ios + data.today_add_users_android;
            data.diff_add = data.today_iosAdrAddTotal - data.yesterday_iosAdrAddTotal;
            this.setState({header:data});
		});
	}
	bindChart(){
		var _this =this;
		fetch('/mock/chart.json?'+(+new Date()))
		//fetch('/data/umeng/get30data?'+(+new Date()))
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				console.log('parsed json', json)
				//_this.setState({'list':json.data});
				let list1= [];
				let list2=[];
				for (var i = 0; i <json.data.length; i++) {
					let item =json.data[i];
					list1.push({
						month:item.date,
						tem:item.today_active_users_android,
						city:"android"
					})
					list1.push({
						month:item.date,
						tem:item.today_active_users_ios,
						city:"ios"
					})
					list1.push({
						month:item.date,
						tem:item.today_active_users_android+item.today_active_users_ios,
						city:"sum"
					})

					//list2
					list2.push({
						month:item.date,
						tem:item.today_add_users_android,
						city:"android"
					})
					list2.push({
						month:item.date,
						tem:item.today_add_users_ios,
						city:"ios"
					})
					list2.push({
						month:item.date,
						tem:item.today_add_users_android+item.today_add_users_ios,
						city:"sum"
					})
				};
				_this.setState({list1:list1,list2:list2});
				console.log(list1)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			})
	}
	render() {
		return ( 
			<div className="body">
				<Header info={this.state.header}/>
				<div className = "c1" >
					<div className = "sp_title"> 单位（万/人） </div> 
					<Chart height="730" width="930" unit="w" list={this.state.list1}/>
					<h2>日活趋势图</h2>
				</div>
				<div className="c2">
					<dl>
						<dt className="dt-1">总趋势<i/></dt>
						<dt className="dt-2">Android<i/></dt>
						<dt className="dt-3">iOS<i/></dt>
					</dl>
					<div className = "sp_title"> 单位（人） </div> 
					<Chart height="480" width="650" list={this.state.list2}/>
					<h2>新增趋势</h2>
				</div>
			</div>
		);
	}
}