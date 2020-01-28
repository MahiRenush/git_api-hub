import React from 'react';
import './App.css';
import Maincontainer from './Container/Maincontainer'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './services/root'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Provider store={configureStore}>
          <Maincontainer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
