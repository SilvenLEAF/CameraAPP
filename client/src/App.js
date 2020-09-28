import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import SearchContextProvider from './contexts/SearchContext';



import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MobileFooterNav from './components/layouts/MobileFooterNav'
import BackToTopButton from './components/layouts/BackToTopButton'



import Home from './components/home/Home'
import Search from './components/search/Search';
import SearchList from './components/search/SearchList';
import FullDetailsPage from './components/details/FullDetailsPage';
import AllJobs from './components/allJobs/AllJobs';






function App() {
  return (
    <BrowserRouter basename="/JobSearchAPP" >
      <SearchContextProvider>





      <div className="App">
          <Navbar/>
          <div id="myWrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/searchResults" component={SearchList} />
              <Route path="/fullDetails/:index" component={FullDetailsPage} />
              
              <Route path="/allJobs" component={AllJobs} />
            </Switch>
            
          </div>

          
            <BackToTopButton/>
            <Footer/>
            <MobileFooterNav/>
        
          

        
        </div>






      </SearchContextProvider>
    </BrowserRouter>
  );
}

export default App;
