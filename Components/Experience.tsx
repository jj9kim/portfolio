import React from 'react'

function Experience() {
    return (
        <div className='bg-[#121212] pt-4rem md:pt-[8rem] pb-[5rem]'>
            <h2 className='text-white text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-center'>
                Professional <span className='text-yellow-400'>Experience</span>
            </h2>
            <div className='grid grid-cols-2 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div data-aos="fade-right">
                    <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem]'>
                            Feugmo Research Group
                        </h1>
                        <h2 className='text-[16px]'>
                            Software Engineer Intern <span>(Jan–Apr 2024)</span>
                        </h2>
                        <p className='text-[12px] text-[#d3d2d2] mt-[1rem]'> Developed a program displaying key information about short-range order. Led the planning and developing processes of building the application using Python. Translated theoretical calculations from academic articles into practical application</p>
                    </div >
                </div>
                <div data-aos="fade-left">
                    <div className='bg-blue-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem]'>
                            JLW Inc.
                        </h1>
                        <h2 className='text-[16px]'>Business and Marketing Specialist <span>(Apr–Aug 2023)</span></h2>
                        <p className='text-[12px] text-[#d3d2d2] mt-[1rem]'> Created business opportunities in the United States by scheduling appointments for partners. Led regional projects by executing research on companies and developing marketing strategies which resulted in 8 appointments for an in-person business trip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
