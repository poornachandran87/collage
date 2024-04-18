import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { clearAuthError, login } from "../../actions/userActions";
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Button from '../layouts/Button'
import Divider from '../layouts/Divider'

const Login = () => {
  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = location.search?'/'+location.search.split('=')[1]:'/';
  const {loading,error,isAuthenticated} = useSelector(state => state.authState)
  const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(login(email,password))
  }
  useEffect(() => {
      if(isAuthenticated){
          navigate(redirect)
      }
      if(error) {
           toast(error,{
              
             
              onOpen:() =>{
                  dispatch(clearAuthError)
              }
           })
           return
    }
    
    },[error,isAuthenticated,dispatch,navigate,redirect])
  
  return (
    <div>

          <div className='flex flex-col md:items-center mt-[180px] md:mt-[120px]'>
              <div className='ml-[30px] md:mr-[85px]'>

                  <h1 className='text-[#0396AB] font-extrabold text-2xl'>Welcome Back!</h1>

              </div>
              <form onSubmit={submitHandler}>

             

              <div className='input-style'>
                  <input type="email"
                      name="email"
                     
                      className='w-[22.5rem] '
                      id="email_field"
                      placeholder='Email ID'
                      value={email}
                      onChange={e => setEmail(e.target.value)}    
                  />
              </div>
              

              <div className='input-style'>
                  <input type="password"
                      name="password"
                      
                      className='w-[22.5rem] '
                      id="password_field"
                      placeholder='Password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
              </div>
              {/* <div className='mt-[60px] ml-[22px] md:mt-[55px] md:mr-[38px]'> */}
              <div className='mt-[60px] flex justify-center md:mt-[55px] '>
                  <Button loading={loading} text={'LOG IN'} design='shadow-effect' />
              </div>
              <div className='mt-[20px] mr-[25px]'>
             

              <Link to='/password/forgot' className="float-right mb-4">Forgot Password?</Link>
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
            <p>Don’t have an account? <Link to={'/register'}><span className='text-blue-500'> Sign up</span></Link></p>
          </div>


      </div>
  )
}

export default Login
