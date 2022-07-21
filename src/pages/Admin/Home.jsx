import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Home = () => {

  const [hotels, setHotels] = useState([]);
  const[searchApiData,setSearchApiData]=useState([]);
  const[filterValue,setFilterValue]=useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    loadHotels();
  }, []);
  const loadHotels = async()=>{
    const result = await axios.get('http://localhost:3000/hotel');
    setHotels(result.data);
    setSearchApiData(result.data);
  };
const handleFilter=(e)=>{
  if(e.target.value === ''){
    setHotels(searchApiData);
  }
  else{
   const filterReault=searchApiData.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setHotels(filterReault)
  }
  setFilterValue(e.target.value)
}
  return (
    <div className='Home'>
      
      <button onClick={()=> navigate('/admin/users/add')}>Add New Hotel</button>
      <input 
      type="text"
      placeholder='Search...'
      className='search'
      value={filterValue}
      onInput={(e)=>handleFilter(e)}
      />
      <table style={ {width: '100%'} }>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Area</th>
            <th>Country</th>
            <th>Address</th>
            <th>Price</th>
            <th>Payment</th>
            </tr>
        </thead>
        <tbody>
          {
            hotels.map(hotels=>(
              <tr key={hotels.id}>
                <td>{hotels.id}</td>
                <td>{hotels.title}</td>
                <td>{hotels.area}</td>
                <td>{hotels.country}</td>
                <td> {hotels.addressFull}</td>
                <td>{hotels.price}</td>
                <td>{hotels.paymentType}</td>
            </tr>
            ))
          }
        </tbody>       
      </table>
    </div>
  )
}

export default Home