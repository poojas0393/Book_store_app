import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"

function Signup() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data);


  return (
    <>
      <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_4" className='border-[2px] shadow-md p-5 rounded-md'>
          <div>
            <form method="div" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span><br></br>
              <input type='text' placeholder='Enter your name' className='w-80 px-3 border rounded-md outline-none py-1' {...register("name", { required: true })}></input>
            <br/>
            {errors.name && <span className='text-red-700'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span><br></br>
              <input type='email' placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none py-1' {...register("email", { required: true })}></input>
            <br/>
            {errors.email && <span className='text-red-700'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span><br></br>
              <input type='password' placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none py-1' {...register("password", { required: true })}></input>
            <br/>
            {errors.password && <span className='text-red-700'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
              <p>Have account? {" "}
                <button className='underline text-blue-500 cursor-pointer'
                onClick={()=>
                  document.getElementById("my_modal_3").showModal()
                }>
                Login
                </button> {" "}
                <Login/>
                </p>
            </div>
            </form>
          </div>
      </div>
    </div>
    </>
  )
}
export default Signup;