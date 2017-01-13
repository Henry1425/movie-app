import React from 'react';
import { NavBar, Header } from './modules/';
import logo from './logo.svg';
import './App.css';


const styles = {
  root: {
    display: 'flex',
    justifyConent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  }
}

const App = ({ children }) => (
      <div style={styles.root}>
        <NavBar  />
        <Header />
        <h1>React Movie App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {children}
      </div>
    );


export default App;
