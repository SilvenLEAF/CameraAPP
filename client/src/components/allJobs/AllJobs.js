import M from 'materialize-css'
import '../../styles/Search.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePaginatedQuery } from 'react-query'


import { SearchContext } from '../../contexts/SearchContext';
import SearchListItem from '../search/SearchListItem';




const getAllJobs = async (page)=>{
  let language = '';  
  let location = '';

  const allJobsRes = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${ language }&location=${ location }&page=${ page }`)
  const allJobsData = await allJobsRes.json();

  console.log(allJobsData);
  return allJobsData
}






function AllJobs() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { setSearchResults } = useContext(SearchContext)
  const [page, setPage] = useState(0)

  const { resolvedData, latestData, status } = usePaginatedQuery([page], getAllJobs)
  if(resolvedData) setSearchResults(resolvedData);
  


  



  
  return (
    <div className="container" >
      <div className="pageTitle">All Jobs</div>
    
      <div className="mySearchListItemsHolder">
        {
         !resolvedData && (
           <h1 className="red-text myLoading">
             Loading...
           </h1>
         ) 
        }
        {
          resolvedData && resolvedData.map(((item, index)=>{
            return (
              <Link to={ "/allJobsDetails/" + index }>
                <SearchListItem key={ index } index={ index } time={ item.created_at } title={ item.title } type={ item.type } company={ item.company } location={ item.location } />
              </Link>
            )
          }))
        }
      </div>
    </div>
  )
}

export default AllJobs
