import React, { Component, Fragment } from 'react';
import {GlobalStyle} from "./style";
import {GlobalIconFontStyle} from './statics/iconfont/iconfont';
import Header from './common/header';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFontStyle />
        <Header />
     </Fragment>
    );
  }
}

export default App;
