import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <h2 className="pageTitle myLandingTitle">
        Looking for jobs?
      </h2>
      
      <div className="myLandingDescription">
        Now Job hunt MADE SUPER EASY! Find your DREAM JOBS on your fingertip. Yay!
      </div>
      


      
    </div>
  )
}

export default Home
