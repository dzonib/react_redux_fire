import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import NavBar from './Layout/Navbar'
import GlobalStyles from './Layout/GlobalStyles/GlobalStyles'

class App extends Component {
  render() {
    return (
    <Router>
      <> 
        <NavBar>
          <h1>Yo</h1>
        </NavBar>
        <GlobalStyles/>
      </>
    </Router>
    );
  }
}

export default App;
