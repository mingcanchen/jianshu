import React, { Component }from 'react';
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

class Header extends Component {
	render() {
		const {focused, handleInputFocus, handleInputBlur } = this.props;
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
							in={focused}
							timeout={200} 
							classNames='slide'
						>
							<NavSearch
								className = {focused ? 'focused': ''}
								onFocus = {handleInputFocus}
								onBlur = {handleInputBlur}
							>
							</NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont': 'iconfont'}>
							&#xe60b;
						</i>
						
						{this.getListArea()}

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

	getListArea() {
		const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave } = this.props;
		const newList = list.toJS();
		const pageList = [];

		for (let i = (page - 1)* 10; i < page * 10; i++) {
			pageList.push(
				<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
			)
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter = {handleMouseEnter}
					onMouseLeave = {handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					
						<SearchInfoList>
							{pageList}
						</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}	
}
// 
const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		mouseIn: state.get(['header','mouseIn'])
	}
}
// 
const mapDispatchToProps =(dispatch) =>{

	return {

		handleInputFocus() {
			dispatch(actionCreators.getList());

			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {

			dispatch(actionCreators.searchBlur());
		},

		handleMouseEnter () {
			dispatch(actionCreators.mouseEnter());
		},

		handleMouseLeave () {
			dispatch(actionCreators.mouseLeave());
		}

	}
}
// 
export default connect(mapStateToProps,mapDispatchToProps)(Header);