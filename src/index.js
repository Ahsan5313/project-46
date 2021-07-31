import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Header from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
// import Home from './Components/Home.jsx'
 import About from './Components/About.jsx'
 import Services from './Components/Services.jsx'
 import Blog from './Components/Blog.jsx'
// import App from './App'



// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
 <div>

    { <Header/> }
    {/* { <Home/> } */}

    {/* <App /> */}
      
       {<About />} 
      { <Services />}
      { <Blog/> }
    
    { <Footer/> } 
  

 </div>,
  document.getElementById('root')
);


