import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getInitialResults } from '../api';
import PropsearchPart from '../components/PropsearchPart';
import SearchPart from '../components/SearchPart';
import FilterPart from '../components/FilterPart';
import SortPart from '../components/SortPart';
import HotelsPart from '../components/HotelsPart';
import '../css/Results.css';



const Results = () => {


  // INITIAL SEARCH

  const [searchParams, setSearchParams] = useSearchParams();
  const [hotels, setHotels] = useState([])  




  const city = searchParams.get('city');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const adults = searchParams.get('adults');

  const prop = searchParams.get('prop')


  useEffect(()=>{
    
      getInitialResults(startDate, 
        endDate, 
        adults,
         city,
         prop)
                .then(properties=>{
                  setHotels(properties)             
                })


    
        
    },[searchParams])



  return (
    <div className='Results'>
      <SearchPart />
      <div className="MainBody">
        <div className="Container">
          <div className="Leftside">
              <PropsearchPart/>
              <FilterPart/>
          </div>
          <div className="Rightside">
              <SortPart  hotels = {[...hotels]}/>
              <HotelsPart hotels = {[...hotels]}/>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results