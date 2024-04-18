import React from 'react'
import { IoMdHome } from "react-icons/io";
import { WiTime4 } from "react-icons/wi";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div>
      <div className=' mb-[25px] ' >
        <button disabled='true' className={`bg-[#E9EAF0] w-[330px] h-[70px] text-[#646464] rounded-3xl ${'shadow-effect'} mx-[30px] px-6 items-center `}>
             <div className='flex justify-between items-center gap-5 '>
             <button class="shadow-effect-inner rounded-full w-10 h-10">
                  <IoMdHome size={30} className='m-1.5' />

              </button>
              <button class="shadow-effect-inner rounded-full w-10 h-10">
                  <WiTime4 size={32} className='m-1.5' />

              </button>
              <button class="shadow-effect-inner rounded-full w-10 h-10">

                  <FaHeart size={23} className='m-2.5' />
              </button>
              <button class="shadow-effect-inner rounded-full w-10 h-10">

                  <CgProfile size={30} className='m-1.5' />
              </button>
             </div>
              
              </button>
          </div>
    </div>
  )
}

export default Navbar;
