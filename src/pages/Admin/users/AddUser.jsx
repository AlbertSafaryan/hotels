import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddUser=()=> {
    const [hotel,setHotel]=useState({
        title:'',
        area:'',
        country:'',
        address:'',
        price:'',
        paymentType: '',
        rating:'',
        propClass:'',
        mealPlans:'',
        imgUrl1:'',
        imgUrl2:'',
        imgUrl3:'',
        imgUrl4:'',
        imgUrl5:'',
        imgUrl6:'',
        propertyHighlights:[''],
        mainAmeneties:[''],
        forFamilies:[''],
        cleaning:['']
    });
    const navigate=useNavigate();
    const onInputChange=(e)=>{
        setHotel({...hotel,[e.target.name]: e.target.value});
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/hotel',hotel);
        navigate('/')
    }
  return (
    <div className='AddUser'>
        <h2>Add Your Hotel</h2>
        <form onSubmit={e=> onSubmit(e)}>
                <div className='name'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your Hotel Title'
                    value={hotel.title}
                    onChange={e=>onInputChange(e)}
                    name="title" />
                </div>
                <div className='name'>
                    <label>Area</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your Area'
                    value={hotel.area}
                    onChange={e=>onInputChange(e)}
                    name="area" />
                </div>
                <div className='name'>
                    <label>Country</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your Country'
                    value={hotel.country}
                    onChange={e=>onInputChange(e)}
                    name="country" />
                </div>
                <div className='name'>
                    <label>Address</label>
                                        <input 
                    type="text" 
                    placeholder='Enter Your Addres'
                    value={hotel.addressFull}
                    onChange={e=>onInputChange(e)} 
                    name="addressFull"/>
                </div>
                <div className='name'>
                    <label>Price</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your Price'
                    value={hotel.price}
                    onChange={e=>onInputChange(e)} 
                    name="price"/>
                </div>
                <div className='name'>
                    <label>Payment</label>
                    <input 
                    type="text" 
                    placeholder='Fully/later'
                    value={hotel.paymentType}
                    onChange={e=>onInputChange(e)}
                    name="paymentType" />
                </div>
                <div className='name'>
                    <label>Rate</label>
                    <input 
                    type="text" 
                    placeholder='/10'
                    value={hotel.rating}
                    onChange={e=>onInputChange(e)}
                    name="rating" />
                </div>
                <div className='name'>
                    <label>Prop class</label>
                    <input 
                    type="text" 
                    placeholder='/5'
                    value={hotel.propClass}
                    onChange={e=>onInputChange(e)}
                    name="propClass" />
                </div>
                <div className='name'>
                    <label>MealPlans</label>
                    <input 
                    type="text" 
                    placeholder='BreakFast/Lunch/Dinner/All'
                    value={hotel.mealPlans}
                    onChange={e=>onInputChange(e)}
                    name="mealPlans" />
                </div>
                <div className='name'>
                    <label>Hotel 1 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl1}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl1" />
                </div>
                <div className='name'>
                    <label>Hotel 2 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl2}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl2" />
                </div>
                <div className='name'>
                    <label>Hotel 3 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl3}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl3" />
                </div>
                <div className='name'>
                    <label>Hotel 4 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl4}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl4" />
                </div>
                <div className='name'>
                    <label>Hotel 5 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl5}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl5" />
                </div>
                <div className='name'>
                    <label>Hotel 6 image</label>
                    <input 
                    type="text" 
                    placeholder='Put your image link'
                    value={hotel.imgUrl6}
                    onChange={e=>onInputChange(e)}
                    name="imgUrl6" />
                </div>
                <div className='name'>
                    <label>Property Highlights</label>
                    <input 
                    type="text" 
                    placeholder='Free Breakfast,Airport transfer,Air conditioning,Free Wifi,Gym,Bar'
                    value={hotel.propertyHighlights}
                    onChange={e=>onInputChange(e)}
                    name="propertyHighlights" />
                </div>
                <div className='name'>
                    <label>Main ameneties</label>
                    <input 
                    type="text" 
                    placeholder='Daily Housekeeping,Restaurant and bar/lounge,Rooftop terrace,Fitnes center,Coofe shop/cafe,24-hour business center,Airport shuttle,Terrace,24-hour front-desk,Front desk safe'
                    value={hotel.mainAmeneties}
                    onChange={e=>onInputChange(e)}
                    name="mainAmeneties" />
                </div>
                <div className='name'>
                    <label>For families</label>
                    <input 
                    type="text" 
                    placeholder='Children stay free,Free cribs/infant,Terrace,DailyHousekeeping,Laundry facilites,Coffee/tea maker'
                    value={hotel.forFamilies}
                    onChange={e=>onInputChange(e)}
                    name="forFamilies" />
                </div>
                <div className='name'>
                    <label>Cleaning</label>
                    <input 
                    type="text" 
                    placeholder='Personal,Protective,Equipment'
                    value={hotel.cleaning}
                    onChange={e=>onInputChange(e)}
                    name="cleaning" />
                </div>
                <div className="buttons">
                <button onClick={()=>navigate('/')}>Go Back</button>
                <button disabled={hotel.title.length>3  ? false:true}>Add Hotel</button>
                </div>
        </form>
    </div>
  )
}
export default AddUser