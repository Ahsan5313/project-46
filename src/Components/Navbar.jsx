import React, {Component} from 'react'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx';
import Services from './Services.jsx'
import Blog from './Blog.jsx'



class Navbar extends Component{

  render() {

    return (

      <Router>


      <div>
       
            <nav class="navbar navbar-expand-lg  fixed-top text-uppercase">
          <div class="container">
            <a class="navbar-brand font-weight-bold" href="#">logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to='/' class="nav-link active px-lg-4">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to='/about' class="nav-link px-lg-4" >About</Link>
                </li>
                <li class="nav-item">
                  <Link to='/services' class="nav-link px-lg-4" >Services</Link>
                </li>
                <li class="nav-item">
                  <Link to='/blog' class="nav-link  px-lg-4" href="#" >Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> 

        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact  path="/" component={About}>
            <About />
          </Route>
          <Route exact path="/" component={Services}>
            <Services />
          </Route>
          <Route exact  path="/" component={Blog}>
            <Blog />
          </Route>
         
        </Switch>


      </div>

      </Router>
    )
  }
      
    


}

export default Navbar;

