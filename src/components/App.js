import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import Header from './Layout/Header'
import GlobalStyles from './Styles/GlobalStyles/GlobalStyles'
import {theme} from './Styles/GlobalStyles/Theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <> <Header>
            <h1>Yo</h1>
          </Header>
          <GlobalStyles/>
        </>
      </Router>
    </ThemeProvider>
    );
  }
}

export default App;
