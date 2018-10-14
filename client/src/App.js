import React, { Component } from 'react';
import Articles from './pages/Articles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Saves from './pages/Saves'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Footer/>
          <Navbar/>
          <Switch>
            <Route exact path="/sciences/:science">
              <Articles name={window.location.href.split('/')[4]}/>
            </Route>
            <Route exact path='/saves'>
              <Saves></Saves>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
