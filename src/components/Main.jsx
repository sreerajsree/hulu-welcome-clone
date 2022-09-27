import React from 'react'
import Background from '../img/hulu-background.jpg'
import Logo from '../img/hulu-logo.png'
import Connect from '../img/connect.png'


const Main = () => {
  return (
    <>
        <div className='w-full h-full relative'>
            <img className='h-[660px] w-full object-cover' src={Background} alt="" />
            <div className='absolute flex items-center justify-between p-8 top-0 left-0 inset-x-0 bg-gradient-to-b from-black'>
                <img src={Logo} alt="Hulu Logo" className='w-[70px]' />
                <button className='uppercase text-gray-400 tracking-wider font-semibold text-lg hover:bg-black/80 hover:text-white px-3 py-2 rounded-lg'>Log in</button>
            </div>
            <div className='absolute h-full mx-auto top-[25%] items-center justify-center text-center inset-x-0 max-w-3xl'>
                <p className='text-[#00ed82] font-bold'>BUNDLE WITH ANY HULU PLAN & SAVE</p>
                <img src={Connect} alt="" className='h-36 flex mx-auto my-5' />
                <p className='font-bold text-3xl text-white'>Get endless entertainment, live sports, and the shows and movies you love.</p>
                <button className='bg-[#00ed82] mt-8 w-full rounded-md py-4 uppercase font-bold tracking-wider hover:opacity-60'>get the disney bundle</button>
                <p className='my-4 text-gray-400 text-xs font-bold'> 
                  <a href="What's included?" className='text-xs text-gray-400 mr-1 font-bold underline'>What's included?</a>
                  See
                  <a href="What's included?" className='text-xs text-gray-400 ml-1 font-bold underline'>Bundle terms.</a>
                </p>
                <p><a href="Sign up for Hulu only" className='text-white text-lg underline underline-offset-4'>Sign up for Hulu only</a></p>
            </div>
        </div>
    </>
  )
}

export default Main