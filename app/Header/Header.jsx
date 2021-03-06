import React from 'react';
import styles from './_Header.scss';

export default class Header extends React.Component {
	constructor(props){
		super(props)
	}
	renderDayActive(){
		if(this.props.info){
			if(this.props.info.diff_active>0){
				return (
					<div className="item up-down up">
						<span>{this.props.info.today_iosAdrTotal.toLocaleString()}<em></em><i>+{this.props.info.diff_active.toLocaleString()}</i></span><s></s><p>日活总数 VS 昨天同时段</p>
					</div>)
			}else{
				return ( 
					<div className="item up-down down">
						<span>{this.props.info.today_iosAdrTotal.toLocaleString()}<em></em><i>{this.props.info.diff_active.toLocaleString()}</i></span><s></s><p>日活总数 VS 昨天同时段</p>
					</div>)
			}
		}
	}
	renderDayAdd(){
		if(this.props.info){
			if(this.props.info.diff_add>0){
				return (
					<div className="item up-down up">
						<span>{this.props.info.today_iosAdrAddTotal.toLocaleString()}<em></em><i>+{this.props.info.diff_add.toLocaleString()}</i></span><s></s><p>日新增总量 VS 昨天同时段</p>
					</div>
					)
			}else{
				return (
					<div className="item up-down down">
						<span>{this.props.info.today_iosAdrAddTotal.toLocaleString()}<em></em><i>{this.props.info.diff_add.toLocaleString()}</i></span><s></s><p>日新增总量 VS 昨天同时段</p>
					</div>)
			}
		}
	}
	render() {
		return (
			<div id="Header">
				<div className="item"><span>{this.props.info&&this.props.info.installationsTotalUsers.toLocaleString()}</span><s></s><p>激活总数</p></div>
				{this.renderDayActive()}
				{this.renderDayAdd()}
			</div>
			);
	}
}