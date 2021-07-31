import React from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div>
       
       <Router>

        <Navbar/>       
        <Switch>
          <Route path='/' exact/>
        </Switch>
         

       </Router>
   
     
       
    </div>
  )
}
