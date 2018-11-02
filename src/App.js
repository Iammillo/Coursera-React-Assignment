import React, { Component } from 'react';
import Main from './components/Maincomponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import './App.css'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  
  render() {
    return(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    )
  }
}

export default App;