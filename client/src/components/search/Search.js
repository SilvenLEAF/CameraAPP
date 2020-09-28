import M from 'materialize-css'
import '../../styles/Search.scss';
import '../../styles/Form.scss';


import React, { useState, useEffect, useContext } from 'react'


import { SearchContext } from '../../contexts/SearchContext';
import { useHistory } from 'react-router-dom';





function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { setSearchResults } = useContext(SearchContext)
  const history = useHistory();


  const [language, setLanguage] = useState('');
  const [location, setLocation] = useState('');
  const [fullTime, setFullTime] = useState(false);
  

    const handleSubmit = async (e)=>{
      e.preventDefault();

      console.log({ language, location, fullTime });
      

      // const jobRes = await fetch(`https://jobs.github.com/positions.json?description=${ language }&full_time=${ fullTime }&location=${ location }`)
      const jobRes = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${ language }&full_time=${ fullTime }&location=${ location }`)
      const jobData = await jobRes.json();

      console.log(jobData);
      setSearchResults(jobData)





      setLanguage('');
      setLocation('');
      setFullTime(false);

      const trueRadio = document.querySelector('#trueRadio');
      const falseRadio = document.querySelector('#falseRadio');
      
      
      trueRadio.checked = false;
      falseRadio.checked = true;

      console.log('Hi there history')
      history.push('/searchResults')
    }



  return (  
    <div className="container">

      <form className="myDefaultForm" onSubmit={ handleSubmit } >
        <h2><i className="fa fa-search"></i> Search</h2>
       
        <div className="input-field">
          <input type="text" value={ language } onChange={ e => setLanguage(e.target.value) } />
          <label htmlFor="language">Programming Language</label>
        </div>

        <div className="input-field">
          <input id="myFullTimeJobFilterFalseRadio" type="text" value={ location } onChange={ e => setLocation(e.target.value) } />
          <label htmlFor="location">Location</label>
        </div>

       
          <div id="filterByFullTimeJobLabel" >Filter by Full Time Jobs</div>
          <p>
            <label style={{ marginRight: "50px" }} >
              <input id="trueRadio" className="with-gap" name="fullTime" type="radio" onChange={ e=> setFullTime(true) } />
              <span>True</span>
            </label>
          
            <label>
              <input id="falseRadio" className="with-gap" name="fullTime" type="radio" onChange={ e=> setFullTime(false) } />
              <span>False</span>
            </label>
          </p>
          
      

        <div className="input-field right-align">
          <button type="submit" className="btn waves-effect waves-light" ><i className="fa fa-search"></i> Search</button>
        </div>


      </form>
    
    
    
    </div>
  )
}

export default Search
