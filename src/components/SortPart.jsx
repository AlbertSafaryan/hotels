import React from 'react'

const SortPart = ({hotels}) => {
  return (
    <div className='SortPart'>
        <div className="Qantity">{hotels.length} Properties Found</div>
            <div className="Sort">
                                        
                <select name="sort" id="sort">
                    <option value="recommended">
                        Sort By Recommended    
                    </option>
                    <option value="price">
                        Sort By Price     
                    </option>
                    <option value="property">
                        Sort By Class
                    </option>
                </select>
            </div>
    </div>
  )
}

export default SortPart