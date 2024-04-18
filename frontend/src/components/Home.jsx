import React from 'react'
import Navbar from './layouts/Navbar'
import Imagecard from './layouts/Imagecard'
import StarRating from './layouts/StarRating';



const Home = () => {
  return (
    <div>
      <div className=' p-3'>
        <h1>Hello, <b>Madara</b></h1>
        <h1>Select a Construction Firm</h1>

        <div className="border-2  border-slate-200 w-full mx-auto"></div>
        
        
      </div>
      <div className='m-5'>
      <Imagecard />
      </div>
      <StarRating rating={3.7} />
      <Navbar />
    </div>
  ) 
}

export default Home
