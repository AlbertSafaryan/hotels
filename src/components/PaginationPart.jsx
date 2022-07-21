import React from 'react';
import {Link} from 'react-router-dom'

const PaginationPart = () => {
  return (
    <div className='Pagination'>
        <Link to="/" type="submit">Previous</Link>
        <Link to="/" type="submit">1</Link>
        <Link to="/" type="submit">2</Link>
        <Link to="/" type="submit">3</Link>
        <Link to="/" type="submit">Next</Link>      
    </div>
  )
}

export default PaginationPart