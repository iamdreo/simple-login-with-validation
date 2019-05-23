import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Andela react login task</h2>
          <ul>
            <li>Create login form</li>
            <li>minum length of password 6 characters</li>
            <li>email must be valid email</li>
            <li>button will be disabled until valid</li>
            <li>on login, show that its sucessful</li>
            
          </ul>
        
        <LoginForm />
      </div>
    );
  }
}export default App;