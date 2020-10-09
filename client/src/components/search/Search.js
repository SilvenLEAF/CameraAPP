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


  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTime, setFullTime] = useState(false);
  

    const handleSubmit = async (e)=>{
      e.preventDefault();

      console.log({ description, location, fullTime });
      

      const jobRes = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${ description }&location=${ location }`)
      const jobData = await jobRes.json();

      console.log(jobData);
      setSearchResults(jobData)





      setDescription('');
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
        <h2 className="myDefaultFormName" ><i className="fa fa-search"></i> Search</h2>
       
        <div className="input-field">
          <input type="text" value={ description } onChange={ e => setDescription(e.target.value) } 
            pattern="[a-zA-Z0-9\s]*" 
            title="Can not use symbols here"
          />
          <label htmlFor="description">Description <span className="red-text">(optional)</span> </label>
        </div>

        <div className="input-field">
          <input id="myFullTimeJobFilterFalseRadio" type="text" value={ location } onChange={ e => setLocation(e.target.value) } />
          <label htmlFor="location">Location <span className="red-text">(optional)</span></label>
        </div>

       
          <div id="filterByFullTimeJobLabel" >Filter by Full Time Jobs</div>
          <p>
            <label style={{ marginRight: "50px" }} >
              <input id="trueRadio" className="with-gap" name="fullTime" type="radio" onChange={ e=> setFullTime(true) } />
              <span>Yes, only Fulltime</span>
            </label>
          
            <label>
              <input id="falseRadio" className="with-gap" name="fullTime" type="radio" onChange={ e=> setFullTime(false) } />
              <span>No, give me all</span>
            </label>
          </p>
          
      

        <div className="input-field right-align">
          <button type="submit" className="btn myBtn waves-effect waves-light" ><i className="fa fa-search"></i> Search</button>
        </div>


      </form>
    
    
    
    </div>
  )
}

export default Search
