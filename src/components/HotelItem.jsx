import React from 'react';
import {Link} from "react-router-dom";
import '../css/Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { selectedHotels } from "../redux/actions/hotelsAction";

const HotelItem = ({hotel}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(selectedHotels(hotel));
    };

    let rating;


    if(hotel.rating > 9) {
        rating = "Wonderful"
    } else if(hotel.rating > 8) {
        rating = "Very Good"
    } else if (hotel.rating > 7){
        rating = "Good"
    }

  return (
    <div className="Hotel">
            <div className="Imgpart">      
               
                <img src={hotel.imgUrl1} alt="hotelpic"/>
                <FontAwesomeIcon icon={faHeart} onClick={() => handleClick()} />

            </div>
            <div className="Content">
                <div className="Innercontent">
                    <div className="Name">
                        <Link to="#" type="submit" className="Hotelname">{hotel.title}</Link>
                        <Link to="#" type="submit" className="Hotelplace">{hotel.quartier}</Link>
                    </div>
                    <div className="Type">
                        <Link to="#" type="submit" className="Refundable">{hotel.paymentType}</Link>
                      
                    </div> 
                  
                </div>

                <div className="FooterContent">
                    <div className="ReviewPart">
                        <span className="Bold">{hotel.rating}/10</span>
                        <span> {rating }</span>
                    </div>
                    <div className="PricePart">
                        <Link to="#" type="submit" className="Prom">5% off</Link>
                        <Link to="#" type="submit" className="Realprice">USD {hotel.price}</Link>
                    </div>

                    
                </div>
            </div>
    </div>
  )
}

export default HotelItem