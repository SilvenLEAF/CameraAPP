import FAKESearchResults from '../FAKEDATA/FAKESearch';

import React, { createContext, useState } from 'react'



export const SearchContext= createContext();



function SearchContextProvider({ children }) {
  // const [searchResults, setSearchResults] = useState([]);
  const [searchResults, setSearchResults] = useState(FAKESearchResults);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }} >
      { children }
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
