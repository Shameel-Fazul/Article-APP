import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route , Switch } from 'react-router-dom' //Switch element switches between the routes to check what route matches, and will only open one component at a time.
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>     
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path="/:post_id" component ={ Post } />
          </Switch>
        </div>
      </BrowserRouter>   
  );
 }
}
  
export default App;
