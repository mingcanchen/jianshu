import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
});

export const login = (account, password) => {
	// console.log(account+password);
	return (dispacth) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) =>{
			const result = res.data.data;
			if (result) {
				dispacth(changeLogin())
			}else {
				console.log('账号/密码有误');
			}
		})
	}
};

export const logout = () => ({
	type: constants.CHANGE_LOGOUT,
	value: false
});