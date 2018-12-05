import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from "./style";
import {GlobalIconFontStyle} from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';



class App extends Component {
  render() {
    return (    	
      <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconFontStyle />
        <Header />
      </Provider>
     </Fragment>
     	
    );
  }
}

export default App;
