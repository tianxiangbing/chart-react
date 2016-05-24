import React from 'react';
import styles from './_App.scss';

import Header from '../Header/Header';
import Chart from '../Chart/Chart';


export default class App extends React.Component {

	render() {
		return ( 
			<div className="body">
				<Header/>
				<div className = "c1" >
					<div className = "sp_title"> 单位（万/人） </div> 
					<Chart height="730" width="930" unit="w"/>
					<h2>日活趋势图</h2>
				</div>
				<div className="c2">
					<dl>
						<dt className="dt-1">总趋势<i/></dt>
						<dt className="dt-2">Android<i/></dt>
						<dt className="dt-3">iOS<i/></dt>
					</dl>
					<div className = "sp_title"> 单位（人） </div> 
					<Chart height="480" width="650"/>
					<h2>新增趋势</h2>
				</div>
			</div>
		);
	}
}