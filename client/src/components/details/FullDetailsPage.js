import React from 'react'
import { Link } from 'react-router-dom'





function FullDetailsPage() {
  return (
    <div className="container" >
      <h2 className="pageTitle">Full Details</h2>

      <div className="right-align" >
        <Link to="/searchResults" className="btn waves-effect waves-light">
            Go Back <i className="fa fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  )
}

export default FullDetailsPage
