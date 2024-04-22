import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {login,clearAuthError} from '../../actions/userActions'
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading,error,isAuthenticated} = useSelector(state => state.authState)
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(login(mail,password))
      
    }
    useEffect(() => {
      if(isAuthenticated){
          navigate('/')
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
    <>

      <div className='flex justify-center items-center h-[500px] '>
        <form onSubmit={submitHandler} className='flex flex-col w-[300px] '>
          <label>Enter Your Mail</label>

          <input
            type='mail'
            className='border-solid border-2 border-black'
            name='mail'
            onChange={e => { setMail(e.target.value) }}
            value={mail}
          />

          <label>Enter Your Password</label>

          <input
            type='password'
            className='border-solid border-2 border-black'
            name='password'
            onChange={e => { setPassword(e.target.value) }}
            value={password}
          />
         
          <Link to='/password/forgot' className="float-right mb-4">Forgot Password?</Link>

          <button
            id="login_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={loading}
          >
            LOGIN
          </button>

          <Link to='/register' className="float-right mt-3">New User?</Link>

        </form>
      </div>

    </>
  )
}

export default Login
