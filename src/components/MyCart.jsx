import {useState} from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
const FakeData=[{
    title:'GrandHotel',
    price:'130',
    addressFull:'asdufh'

}, {
    title:'GrandHotel2',
    price:'130',
    addressFull:'asdufh'

}, {
    title:'GrandHotel3',
    price:'130',
    addressFull:'asdufh'

}];

const MyCart=()=> {
    const [toggle,setToggle]=useState(false);
    const hotels = useSelector((state) => state.selectedHotels);
    console.log(hotels);
    return (
        <div
            onMouseOver={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
            className="MyCartWrapper"
        >
            <div className="MyCartAble">MyCart</div>
            {toggle && ( 
                <div className="MyCartContent">
                    <header>
                        <h1>List your favourites</h1>
                    
                    </header>
                    <div className="MyCartList">
                        {hotels.map((el, index) => (
                            <div key={index}>
                                <h3>{el.title} - {el.price}$</h3>
                                <p>{el.addressFull}</p>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </div>
  )
}

export default MyCart