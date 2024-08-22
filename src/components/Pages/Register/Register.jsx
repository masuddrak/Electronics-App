"use client";
import React from 'react'

export default function Register() {
    const handelSubmitForm = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password,name);

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
