import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	NavSearch,
	Addition,
	Button
} from './style';

// 定义热搜函数
const getListArea= (show) => {
	if (show) {
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>
						换一批
					</SearchInfoSwitch>
				</SearchInfoTitle>
				
					<SearchInfoList>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
					</SearchInfoList>
			</SearchInfo>
		)
	}else {
		return null;
	}
}

const Header = (props) => {
	return(
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载APP</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					 <i className='iconfont'>&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition 
						in={props.focused}
						timeout={200} 
						classNames='slide'
					>
						<NavSearch
							className = {props.focused ? 'focused': ''}
							onFocus = {props.handleInputFocus}
							onBlur = {props.handleInputBlur}
						>
						</NavSearch>
					</CSSTransition>
					<i className={props.focused ? 'focused iconfont': 'iconfont'}>
						&#xe60b;
					</i>
					
					{getListArea(props.focused)}

				</SearchWrapper>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe678;</i>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</Nav>
		</HeaderWrapper>	
	)			
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused'])
		// focused: state.get('header').get('focused')
	}
}

const mapDispatchToProps =(dispatch) =>{

	return {

		handleInputFocus() {

			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {

			dispatch(actionCreators.searchBlur());
		}

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);