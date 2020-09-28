import M from 'materialize-css'
import '../../styles/FullDetailsPage.scss';



import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { SearchContext } from '../../contexts/SearchContext';




function FullDetailsPage(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { searchResults } = useContext(SearchContext)
  const index = props.match.params.index;

  const jobInfo = searchResults && searchResults[parseInt(index)];
  

  useEffect(()=>{
    const myFullDetailsJobDescription = document.querySelector('.myFullDetailsJobDescription')
    const myFullDetailsJobApplyProcess = document.querySelector('.myFullDetailsJobApplyProcess')

    myFullDetailsJobDescription.innerHTML = jobInfo && jobInfo.description;
    myFullDetailsJobApplyProcess.innerHTML = jobInfo && jobInfo.how_to_apply;
  })


  return (
    <div id="myFullDetailsPage" className="container" >
      {/* <h2 className="pageTitle">Full Details</h2> */}

      <div className="right-align" >
        <Link to="/searchResults" className="btn waves-effect waves-light" style={{marginTop: "30px"}} >
            Go Back <i className="fa fa-arrow-left"></i>
        </Link>
      </div>


      <div className="myDetailsHolder">


        <div className="myTimeStamp red-text">{ jobInfo && moment(jobInfo.created_at).calendar() }</div>
        <h3 className="myJobTitle"> { jobInfo && jobInfo.title } </h3>
        
        
        <div className="myJobCompany"> 
          <img src={ jobInfo && jobInfo.company_logo } alt="Company Logo" className="myJobCompanyLogo"/>
          { jobInfo && jobInfo.company }
         </div>
        
        <div className="myJobLocation"> { jobInfo && jobInfo.location } </div>
        <div className="myJobType"> { jobInfo && jobInfo.type } </div>
        


        
        <h4 className="myJobSectionTitle">Job Description <hr/></h4>
        <div className="myFullDetailsJobDescription" ></div>


        <h4 className="myJobSectionTitle">How to apply? <hr/></h4>
        <div className="myFullDetailsJobApplyProcess"></div>

      </div>
    </div>
  )
}

export default FullDetailsPage
