import React, {useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';


const PropsearchPart = ({}) => {

 
  const [search, setSearch] = useSearchParams();
  const searchRef = useRef(null);


  const handleSearch = () => {

     const text = searchRef.current.value;

     if (text.length === 0) {
        search.delete('searchTitle');
        setSearch(search);

     } else {
        search.set('searchTitle', text);
        setSearch(search);
     }
  }


  let id;

  const handleRefresh = ()=>{
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(handleSearch, 600);
  }



  return (
    <div className='PropsearchPart'>   
        <h5 className="Innerheader">Search by Property Name</h5>
        <input type="text"
               placeholder="&#xF002; Search" 
               onChange={handleRefresh}
               ref = {searchRef}
            
               
               
               />
    
    </div>
  )
}

export default PropsearchPart