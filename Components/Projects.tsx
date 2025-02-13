import React from 'react'

function Projects() {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
          <h1 className='text-white text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase mb-[3rem] font-bold text-center'>Pro
            <span className='text-yellow-400'>Jects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-3 gap-[2rem]'>
            <div data-aos="fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[300px]'>
                    <img src="/images/onboard.png" alt="onboard" className='rounded-md relative z-[1] object-contain'/>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                  <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[300px]'>
                      <img src="/images/weather.png" alt="weather" className='rounded-md' />
                  </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                  <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[300px]'>
                      <img src="/images/geography.png" alt="geography" className='rounded-md w-[100%]' />
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Projects
