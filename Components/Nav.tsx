import React from 'react'

interface Props {
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
          <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                JOSHUA
                <span className="text-yellow-300">KIM</span>
            </h1>
            <div className="nav-link">Home</div>
            <div className="nav-link">ABOUT</div>
            <div className="nav-link">EXPERIENCE</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">CONTACT</div>
            <div onClick={openNav}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
        </div>
    </div>
  )
}

export default Nav
