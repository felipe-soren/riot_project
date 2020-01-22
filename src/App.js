import React from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Routes from './Routes'

import GlobalStyle from './styles/global';

class App extends React.Component {
  render() {
    return(
    <>
    <GlobalStyle />
    <Header />
    <Routes />
    </>
    )
  }
}

export default App;
