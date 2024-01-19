// import React from 'react'
// import { Book } from './Book'
// import { Link } from 'react-router-dom'
// import logo from '../resource/logokgv.jpg'
// import { Button2 } from './Button2'
// import { CgFormatJustify , CgCloseO } from "react-icons/cg";
// import "./Phone.css"

// export const Navbar = () => {
//   return (
//    <div className='h-[3.5rem] py-2 sticky top-0 z-50  items-center w-full bg-black '>

//    <div className='flex justify-between gap-20 max-w-[1240px]  mx-auto '>
//    <div ><Link to={"/"}><img src={logo} className='w-[40px] h-[40px]' loading="lazy"/></Link></div>
//    <div className='flex font-inter gap-14 text-lg text-white items-center'>
//        <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
//        <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
//        <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
//        <Link to={"/contactUs"}  className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
//    </div>
//     <div className='flex items-center justify-center gap-3'>
//       <button className='bg-[#52d831] px-2 py-1 rounded-md'>Know More</button>
//       <button className='bg-white text-[#52d831] px-2 py-1 rounded-md'>Contact Us</button>
//     </div>
//     {/* phone */}
//     <div className="mobile-navbar hidden md:flex">
//    <CgFormatJustify className=" menu-navber text-black" />
//    <CgCloseO className="close-navber text-white" />
//   </div>
//    </div>
  
// </div> 
    
//   )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgFormatJustify, CgCloseO } from 'react-icons/cg';
import logo from '../resource/logokgv.jpg';
import './Phone.css';

export const Navbar = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='h-[3.5rem] py-2 sticky top-0 z-50 items-center w-full bg-black'>
      <div className='Desktop-manu flex justify-between gap-20 max-w-[1240px] mx-auto '>
        <div>
          <Link to={"/"}>
            <img src={logo} className='w-[40px] h-[40px]' loading="lazy" alt="Logo" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className='flex font-inter gap-14 text-lg text-white items-center hidden md:flex'>
          <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
          <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
          <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
          <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
        </div>
        <div className='flex items-center justify-center gap-3'>
        <button className='know-button bg-[#52d831] px-2 py-1 rounded-md'>Know More</button>
        <button className='contact-button bg-white text-[#52d831] px-2 py-1 rounded-md'>Contact Us</button>
       </div>

        <div className="md:hidden flex items-center">
          <CgFormatJustify
            className={`menu-navbar text-white ${isMobileMenuOpen ? "hidden":"show"}` }
            onClick={() => setMobileMenuOpen(true)}
          />
          <CgCloseO
            className={`close-navbar text-white ${isMobileMenuOpen ? 'show' : 'hidden'}`}
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>
      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
       
        <div className=' bg-black flex flex-col font-inter text-lg text-white items-center mt-2'>
         
          <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
          <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};
