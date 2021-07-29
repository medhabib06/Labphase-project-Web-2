import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';

import 'bootstrap/dist/css/bootstrap.min.css';
import {DataProvider} from './Components/Context'


function App() {
    return (
        <DataProvider>
        <div className="App">
            <Router>
              <Header/>
              <Body/>
            </Router>
        </div>
        </DataProvider>
    );
}

export default App;
