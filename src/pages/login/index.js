import React, { PureComponent} from 'react';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { 
	LoginWrapper,
	LoginBox,
	Input,
	Buttom
 } from './style';

class Login extends PureComponent {

	render() {
		const { loginStatus } = this.props;
		if(!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Buttom onClick={() => this.props.login(this.account, this.password)}>登录</Buttom>
					</LoginBox>
				</LoginWrapper>
			)
		} else {
			return <Redirect to='/' />
		}	
	}

}

const mapState = (state) => ({
	loginStatus: state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
		// console.log(accountElem.value, passwordElem.value);
		dispatch(actionCreators.login(accountElem.value, passwordElem.value));
	}
});

export default connect(mapState, mapDispatch)(Login);
