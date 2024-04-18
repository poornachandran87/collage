import React from 'react'
import Button from '../layouts/Button'
import Divider from '../layouts/Divider'
import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { register,clearAuthError } from "../../actions/userActions"

import { Link, useNavigate } from 'react-router-dom'

import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Register = () => {
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
      })
      const dispatch =useDispatch()
      const navigate = useNavigate()
      const {loading,error,isAuthenticated} = useSelector(state => state.authState)
      const onChange = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value} )
      }
      const submitHandler = (e) =>{
        e.preventDefault()
        // const userData = new FormData()
        // userData.append('name',userData.name)
        // userData.append('email',userData.email)
        // userData.append('password',userData.password)
        
        dispatch(register(userData))
      } 
      useEffect(() => {
        if(isAuthenticated){
            navigate('/home')
        }
        if(error) {
             toast(error,{
                type:'error',
                onOpen:() =>{
                    dispatch(clearAuthError)
                }
             })
             return
      }
      
      },[error,isAuthenticated,dispatch,navigate])
  return (
      <div>

          <div className='flex flex-col md:items-center mt-[60px] md:mt-[60px] text-black'>
              <div className='ml-[30px] md:mr-[85px]'>

                  <h1 className='text-[#0396AB] font-extrabold text-2xl'>Create a New Account</h1>

              </div>
              <form onSubmit= {submitHandler}>

              <div className='input-style'>
                  <input type="name"
                      name="name"
                      onChange={onChange}
                      className='w-[22.5rem] '
                      id="name_field"
                      placeholder='Name'
                  />
              </div>

              <div className='input-style'>
                  <input type="email"
                      name="email"
                      onChange={onChange}
                      className='w-[22.5rem] '
                      id="email_field"
                      placeholder='Email ID'
                  />
              </div>
              <div className='input-style'>
                  <input type="phone"
                      name="phone"
                      onChange={onChange}
                      className='w-[22.5rem] '
                      id="phone_field"
                      placeholder='Mobile number'
                  />
              </div>

              <div className='input-style'>
                  <input type="password"
                      name="password"
                      onChange={onChange}
                      className='w-[22.5rem] '
                      id="password_field"
                      placeholder='Password'
                  />
              </div>
              {/* <div className='mt-[60px] ml-[22px] md:mt-[55px] md:mr-[38px]'> */}
              <div className='mt-[60px] flex justify-center md:mt-[55px] '>
                  <Button loading={loading} text={'CREATE AN ACCOUNT'} design='shadow-effect' />
              </div>
              </form>
          </div>
          <div className='mt-[30px]'>

              <Divider title={'or countinue with'} />

          </div>

          <div className='flex justify-center gap-5 mt-[20px]'>
              <button class="shadow-effect-inner rounded-full w-12 h-12">
                  <FcGoogle size={30} className='m-2' />

              </button>
              <button class="shadow-effect-inner rounded-full w-12 h-12">

                  <FaFacebook size={30} className='m-2' />
              </button>
              <button class="shadow-effect-inner rounded-full w-12 h-12">

                  <FaXTwitter size={25} className='m-2.5' />
              </button>
          </div>
          <div className='flex justify-center mt-[10px]'>
            <p>already a coustmer? <Link to={'/login'}><span className='text-blue-500'>login</span></Link></p>
          </div>


      </div>
  )
}

export default Register
