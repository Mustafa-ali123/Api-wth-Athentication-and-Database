import React from 'react'
import '../App.css';
import { useState } from 'react';
import { loginUser, signoutUser } from '../Config/FirebaseMethod';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons'

export default function LogIn() {
    const navigate=useNavigate()
    const[login,setlogin]=useState({})
    const check=()=>{
        loginUser(login)        
        
    }
    const logout=()=>{
        signoutUser()
    }
    return (
        <>
        
        <div className="d-flex justify-content-end">
            <Buttons click={logout} classes  label="Log Out" color="error" />
              
        </div>
            <div className='container mt-5  '>
                <div className=' row  '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-5 '>
                        <div className='login py-5 px-5 mx-auto'>
                            <h1 className='text-center fw-bolder mt-2'>Log In</h1>
                            <h4 className="my-3">Email :</h4>
                            <input onChange={e=>setlogin({...login,email: e.target.value})} type=" Email,number " placeholder=" Email" /><br />
                            <h4 className="my-3">Password :</h4>
                            <input onChange={e=>setlogin({...login,password: e.target.value})} type="password" placeholder="  Pasword" required="required" class="mb-3" /><br />
                            <button onClick={check} class="btn ml-5 btn-primary mb-3 ">Log in</button>
                            <br />
                            <button onClick={()=>navigate("/sign")} class="btn  btn-primary">Create New Account</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
