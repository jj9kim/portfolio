import ParticleFunc from "@/Components/Particle"
import React from 'react'
import TextEffect from "./TextEffect"

function Hero() {
  return (
    <div className="h-[88vh] bg-cover bg-center relative">
      <img src="./images/banner.jpg" alt="banner"/>
        <ParticleFunc/>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center absolute top-[0%] left-[10%] -translate-x-0.5">
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                HI, I'M <span className="text-yellow-400">JOSH!</span>
              </h1>
              <TextEffect />
            </div>
            <p className="mt-[2rem] text-[20px] text-[#ffffff92]">Currently a third year math student double majoring in Statistics and Computational Mathematics at the University of Waterloo</p>
        </div>
        <div className="mt-[2rem] ml-[10rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6]">
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download Resume</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[1.6rem] h-[1.7rem] text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
