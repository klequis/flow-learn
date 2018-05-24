// @flow
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent'
import Count from './Count'
import TheChildren from './TheChildren'
import MyEnhancedComponent from './MyEnhancedComponent'
import Variables from './Variables'
import SealedObject from './SealedObject'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <ClassComponent foo={2} />
      <Count />
      <TheChildren>{'hello'} <strong>world</strong></TheChildren>
      {/* {React.createElement(TheChildren, {}, 1, 2)} */}
      Pass an array <TheChildren>{[1, 2]}{[3, 4]}</TheChildren>
      Enhanced: <MyEnhancedComponent a={1} b={2} />
      <Variables />
      <SealedObject />
    </div>
  );
}

export default App;
