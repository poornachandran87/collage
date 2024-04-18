import React from 'react';
import StarRating from './StarRating';


const Imagecard = () => {
   
  return (
   <div className=' p-3 border-4  rounded-xl border-red-500'>
    
    <div className=' w-[100px] h-[100px] border-4 rounded-full border-red-500'>
      
    </div>
    


    <StarRating rating={3.7} />
  

    
   </div>
  );
};

export default Imagecard;
