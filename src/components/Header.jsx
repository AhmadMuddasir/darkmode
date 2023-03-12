import React from 'react'
import image from "../assets/bg.png"

const Header = () => {
  return (
    <>
    <div className="header flex justify-center items-center rounded-lg h-[500px]  p-4 my-4 mx-6">
        <div className='flex justify-center items-center mt-6'>
            <div>
                <h1 className='text-4xl text-purple-700 m-4'>Welcome to our <span className='font-semibold'>Dark Mode</span>  website </h1>
                <p >this is the best dark mode web site you can find in the internet ever</p>
            </div>
            <div className='flex items-center m-4'>
                <img className='w-[70%]' src={image} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header