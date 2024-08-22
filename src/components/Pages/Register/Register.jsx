"use client";
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

export default function Register() {
    const handelSubmitForm = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { email, password, name }

        try {
            const data = await axios.post("http://localhost:3000/register/api", userInfo)
            console.log(data.statusText)
            if (data.status === 200) {
                return  toast.success("create user successfull")
            }
        } catch (error) {
            console.log(error)
            return toast.error(error)
        }

    }
    return (
        <div>
            <form onSubmit={handelSubmitForm} className='space-x-2'>
                <input type="text" name='name' placeholder=" Enter Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='email' placeholder=" Enter Email" className="input input-bordered w-full max-w-xs" />
                <input type="password" name='password' placeholder=" Enter Password" className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}
