import React, { Component} from 'react';
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight 
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {

	render() {

		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
});

export default connect(null,mapDispatch)(Home);
