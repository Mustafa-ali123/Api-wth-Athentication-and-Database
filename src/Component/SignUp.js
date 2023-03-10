import React from 'react'
import '../App.css';
import { useState } from 'react';
import { signUpUser } from '../Config/FirebaseMethod';


export default function SignIn() {
    const[objdata,setobjdata]=useState({})
let createobj = (e) => {
    e.preventDefault()
    signUpUser(objdata)
};

    return (
        <>

            <h1 className='text-center fw-bolder mt-4'>Sign Up</h1>
            <div className='container sign'>
                <div className=' row '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-4'>

                        <div className='side mx-auto '>
                            <form className='py-5 px-4 '>

                                <div class="mb-3">
                                    <h4>First Name :</h4>
                                    <input type="text" onChange={e=>setobjdata({...objdata,userName: e.target.value})} placeholder='First Name ' class=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>

                                <div class="mb-3">
                                    <h4>Email address :</h4>
                                    <input type="text" onChange={e=>setobjdata({...objdata,email: e.target.value})} class="form-control" placeholder=' Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div class="mb-3">
                                    <h4>Password :</h4>
                                    <input type="password" onChange={e=>setobjdata({...objdata,password: e.target.value})}placeholder='Password ' class="form-control" id="exampleInputPassword1" />
                                </div>

                                <button onClick={createobj} type="submit" class="btn btn1 px-5  btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
