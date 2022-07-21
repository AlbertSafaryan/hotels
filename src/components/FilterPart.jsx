import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FilterPart = () => {
  return (
    <div className='FilterPart'>
          <h5 className="Heading">Filter by</h5>

                
          <div className="Budget">
              <h6 className="Innerheader">Your budget</h6>
              <form action="#" className="Checkbox">
                  <input type="checkbox" id="budget1" name="budget" value="budget1"/>
                  <label htmlFor="budget1">Less than USD 75</label><br/>
                  <input type="checkbox" id="budget2" name="budget" value="budget2"/>
                  <label htmlFor="budget2">USD 75 to USD 125</label><br/>

                  <input type="checkbox" className="some-checkbox" id="budget3" name="budget" value="budget3"/>
                  <label htmlFor="budget3">USD 125 to USD 200</label><br/>


                  <input type="checkbox" id="budget4" name="budget" value="budget4"/>
                  <label htmlFor="budget4">USD 200 to USD 300</label><br/>
                  <input type="checkbox" id="budget5" name="budget" value="budget5"/>
                  <label htmlFor="budget5">Greater than USD 300</label><br/>
              </form>         
          </div>       


            <div className="Rating">
                <h6 className="Innerheader">Guest rating</h6>
                <form action="#" className="Radio">
                    <input type="radio" id="rating1" name="rating" value="rating1"/>
                    <label htmlFor="rating1">Any</label><br/>
                    <input type="radio" id="rating2" name="rating" value="rating2"/>
                    <label htmlFor="rating2">Wonderful 9+</label><br/>
                    <input type="radio" id="rating3" name="rating" value="rating3"/>
                    <label htmlFor="rating3">Very good 8+</label><br/>
                    <input type="radio" id="rating4" name="rating" value="rating4"/>
                    <label htmlFor="rating4">Good 7+</label><br/>
                </form>           
            </div>    





             <div className="Propclass">
                 <h6 className="Innerheader">Property class</h6>
                   <form action="#" className="Stars">
                     <input type="checkbox" className="Starcheck" id="star1" name="star"/>
                     <label htmlFor="star1">
                         <div>
                             <span>1</span>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </label>
                     <br/>

                     <input type="checkbox" className="Starcheck" id="star2" name="star"/>
                     <label htmlFor="star2">
                         <div>
                             <span>2</span>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </label><br/>

                     <input type="checkbox" className="Starcheck" id="star3" name="star"/>
                     <label htmlFor="star3">
                         <div>
                             <span>3</span>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </label><br/>

                     <input type="checkbox" className="Starcheck" id="star4" name="star"/>
                     <label htmlFor="star4">
                         <div>
                             <span>4</span>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </label><br/>

                     <input type="checkbox" className="Starcheck" id="star5" name="star"/>
                     <label htmlFor="star5">
                         <div>
                             <span>5</span>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </label><br/>


                 </form>           
             </div>      


             <div className="Payment">
                 <h6 className="Innerheader">Payment type</h6>
                 <form action="#" className="Checkbox">
                     <input type="checkbox" id="payment1" name="payment" value="payment1"/>
                     <label htmlFor="payment1">Fully refundable</label><br/>
                     <input type="checkbox" id="payment2" name="payment" value="payment2"/>
                     <label htmlFor="payment2">Reserve now, pay later</label><br/>
                 
                 </form>         
                 </div>  
                        
            <div className="Meal">
                <h6 className="Innerheader">Meal plans available</h6>
                 <form action="#" className="Checkbox">
                     <input type="checkbox" id="meal1" name="meal" value="meal1"/>
                     <label htmlFor="meal1">Breakfast included</label><br/>
                     <input type="checkbox" id="meal2" name="meal" value="meal2"/>
                     <label htmlFor="meal2">Lunch included</label><br/>
                     <input type="checkbox" id="meal3" name="meal" value="meal2"/>
                     <label htmlFor="meal3">Dinner included</label><br/>       
                 </form>   
             </div>     



    </div>
  )
}

export default FilterPart