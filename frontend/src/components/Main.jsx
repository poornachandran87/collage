import React from 'react'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Button from './layouts/Button'
import { Link, useNavigate } from 'react-router-dom'
const Main = () => {
    
      const navigate = useNavigate()
      const {isAuthenticated} = useSelector(state => state.authState)
    useEffect(() => {
        if(isAuthenticated){
            navigate('/home')
        }
        
      
      },[isAuthenticated,navigate])
  return (
      <div>
          <div className='flex flex-col justify-center '>

              <div className='flex flex-col justify-center items-center mx-[32px] mt-[183px] '>

                  <img className='h-[200px] w-[300px]' src="./assets/logo.png" alt="logo" />
                  <p className='text-[#676C7A] text-center font-medium text-xl'>Crafting Dreams, Building Futures </p>

              </div>
              {/* <div className='flex justify-center mt-[310px]  md:mt-[210px] '> */}
              <div className='flex justify-center mt-[190px] mb-[20px]'> 
                    <Link to={'/register'}> 
                    <Button text='GET STARTED' design='shadow-effect'/>
                    </Link>

              </div>
          </div>
      </div>
  ) 
}

export default Main
