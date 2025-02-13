import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME</h1>
          <h2 className='text-white text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold'>
            Some of my <span className='text-yellow-300'>Interests</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Outside of school, some of the interests that I have include both watching and playing sports, studying geography and playing the guitar.
            </p>
          </div>
          <div>
            
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download Resume</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[1.6rem] h-[1.7rem] text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
          <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[200px] h-[300px] relative'>
            <Image
              src="/images/interest.jpg"
              alt="interests"
              layout="fill"
              objectFit="contain"
              className="relative z-[11] w-[100%] h-[100%] object-contain" />
          </div>
      </div>
    </div>
  )
}

export default About
