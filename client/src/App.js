import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MobileFooterNav from './components/layouts/MobileFooterNav'
import BackToTopButton from './components/layouts/BackToTopButton'



import Home from './components/home/Home'


function App() {
  return (
    <BrowserRouter basename="/JobSearchAPP" >
      <div className="App">
        <Navbar/>
        <div id="myWrapper">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          
        </div>

        
          <BackToTopButton/>
          <Footer/>
          <MobileFooterNav/>
       
        

      
      </div>
    </BrowserRouter>
  );
}

export default App;
