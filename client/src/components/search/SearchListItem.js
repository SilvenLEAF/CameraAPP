import '../../styles/SearchListItem.scss';




import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'





function SearchListItem({ index, time, title, type, company, location }) {
  return (

      <div className="container mySearchListItem" >
      
        
        
        <div className="myTimeStamp red-text">{ moment(time).calendar() }</div>
        <div className="blue-text myJobTitle" >{ title }</div>
        

        <p className="myJobCompany">
          { type }
        </p>

        <p className="myJobCompany">
          { company }
        </p>
        
        <p className="myJobLocation">
          { location }
        </p>
        
        


        <div className="myListItemButtonsHolder right-align">
          <button className="btn waves-effect waves-light" style={{ marginTop: "10px" }} >
            Full Details <i className="fa fa-eye"></i>
          </button>
        </div>


      </div>


  )
}

export default SearchListItem
