import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {GlobalStyle} from "./style";
import {GlobalIconFontStyle} from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import store from './store';
import Write from './pages/write';


class App extends Component {
  render() {
    return (    	
      <Fragment>
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalIconFontStyle />
          
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
     </Fragment>	
    );
  }
}

export default App;
