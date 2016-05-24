import React from 'react';
import styles from './_Header.scss';

export default class Header extends React.Component {
	render() {
		return (
			<div id="Header">
				<div className="item"><span>17,268</span><s></s><p>激活总数</p></div>
				<div className="item"><span>17,268</span><s></s><p>月活总量（往前30天）</p></div>
				<div className="item up-down up">
				<span>17,268<em></em><i>+799</i></span><s></s><p>日活总数VS昨天同时段</p>
				</div>
				<div className="item up-down down"><span>17,268<em></em><i>-799</i></span><s></s><p>日新增总量VS昨天同时段</p></div>
			</div>
			);
	}
}