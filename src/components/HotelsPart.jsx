import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HotelItem from './HotelItem';
import PaginationPart from './PaginationPart';
import {useSearchParams} from 'react-router-dom';

const HotelsPart = () => {
  const [search, setSearch] = useSearchParams();
  const [hotels, setHotels] = useState([]);

  console.log(search.get("searchTitle"));
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get('http://localhost:3000/hotel');
      setHotels(resp.data);
    }
    fetchData();
  }, []);

  

  return (
    <div className='HotelsPart'>
        {
            hotels.map(hotel=>{
                return <HotelItem hotel = {hotel} key = {hotel.id}/>
            })
        }
        <PaginationPart hotels={hotels}/>
    </div>
  )

   


}
export default HotelsPart