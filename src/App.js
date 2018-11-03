import React, { Component } from 'react';
import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {
  render() {
    return(
    <Provider store={store}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </Provider>
    )
  }
}

export default App;