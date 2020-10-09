import M from 'materialize-css'
import '../../styles/Search.scss';


import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext'


import SearchListItem from './SearchListItem';





function SearchList() {
  useEffect(()=>{
    M.AutoInit();
  }, [])




  const { searchResults } = useContext(SearchContext)



  
  return (
    <div className="container" >
      <div className="pageTitle">Search Results</div>
      <div className="mySearchListItemsHolder">
        
        {
          !searchResults[0] && (
            <h4 className="red-text myLoading">
              NO Jobs found. <br/> ...Maybe LOADING... <br/> ...wait a sec...
            </h4>
          )
        }
        
        {
          searchResults[0] && searchResults.map(((item, index)=>{
            return (
              <Link to={ "/searchResultsDetails/" + index }>
                <SearchListItem key={ index } index={ index } time={ item.created_at } title={ item.title } type={ item.type } company={ item.company } location={ item.location } />                
              </Link>
            )
          }))
        }
      </div>
    </div>
  )
}

export default SearchList
