import React, { Component} from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {

	render() {

		return (
			<TopicWrapper>
				{
					this.props.list.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img 
									className='topic-pic'
									src={item.get('imgUrl')}
								/>
								{item.get('title')}
							</TopicItem>
						);
					})
				}

			</TopicWrapper>

		)
	}
}

const mapState = (state) =>({
	list: state.getIn(['home','topicList'])
});

export default connect(mapState, null)(Topic);