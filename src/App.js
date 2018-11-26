import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/posts';
import PostForm from './components/postForm';

import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          
          <PostForm/>
          <br/>
          <Posts/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
