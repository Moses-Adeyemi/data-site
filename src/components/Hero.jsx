import React from 'react'









const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7x1 sm:text-6x1 text-4x1 fint-bold md:py-6 ' >Grow with data.</h1>
        <div className='flex justify-center'>
          <p className='md:text-5x1 sm:text-4x1 font-bold py-4' >Fast {' '}  FLexible  {' '}    Financing {' '}  for BTB, BTC, & SASS</p>

        </div >
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero;
