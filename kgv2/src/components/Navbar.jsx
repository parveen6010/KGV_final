// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CgFormatJustify, CgCloseO } from 'react-icons/cg';
// import logo from '../resource/logokgv.jpg';
// import './Phone.css';

// export const Navbar = () => {
//   // State to toggle mobile menu
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className='h-[3.5rem] py-2 sticky top-0 z-50 items-center w-full bg-black'>
//       <div className='Desktop-manu flex justify-between gap-20 max-w-[1240px] mx-auto '>
//         <div>
//           <Link to={"/"}>
//             <img src={logo} className='w-[40px] h-[40px]' loading="lazy" alt="Logo" />
//           </Link>
//         </div>
//         {/* Desktop Navigation */}
//         <div className='flex font-inter gap-14 text-lg text-white items-center hidden md:flex'>
//           <Link to={"/"} >Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
//         </div>
        
//         <div className='  md:mr-[10px] flex items-center justify-center gap-3'>
//         <button  className='font-semibold w-[40px] h-[30px] lg:text-[100%] md:text-[46%] text-[5px] know-contact-button bg-[#52d831]  rounded-md'> <Link to={"/"} >Know More</Link></button>
//         <button  className=' font-semibold w-[40px] h-[30px]  lg:text-[100%] md:text-[46%] text-[5px]  know-contact-button bg-[white]  rounded-md'><Link to={"/contactUs"}>Contact Us</Link></button>
//        </div>

//        <div className="md:hidden flex items-center">
 
//   {isMobileMenuOpen ?(
//   <CgCloseO
//     className=" close-navbar text-xl mr-2 text-white"
//     onClick={() => setMobileMenuOpen(prevState => !prevState)}
//   />
//   ) :(
//     <CgFormatJustify
//     className="  menu-navbar  text-xl mr-2 text-white"
//     onClick={() => setMobileMenuOpen(prevState => !prevState)}
//   />
//   )
//   }
// </div>

//       </div>
//       {/* Mobile Navigation Links */}
//       {isMobileMenuOpen && (
       
//         <div className=' pt-4 pb-4 bg-black flex flex-col font-inter text-lg text-white items-center mt-2'>
         
//           <Link to={"/"} className="  hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//         </div>
//       )}
//     </div>
//   );
// };























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgFormatJustify, CgCloseO } from 'react-icons/cg';
import logo from '../resource/logokgv.jpg';
import { Button2 } from './Button2';
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
          <Link to={"/"} >Home</Link>
          <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
          <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
          <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
        </div>
        
        <div className='md:mr-[10px] flex items-center justify-center gap-3'>
        <button  className='lg:text-[100%] md:text-[46%]  know-contact-button bg-[#52d831] p-2 rounded-md font-semibold'> <Link to={"/"} >Know More</Link></button>
        <div class=" rounded-md bg-[#57E226] p-[2px] ">
        <button  className='lg:text-[100%] md:text-[46%]  know-contact-button bg-[white]  p-1.5 rounded-md bg-white font-inter font-semibold'><Link to={"/contactUs"}>Contact Us</Link></button>
       </div>
       </div>
       <div className="md:hidden flex items-center">
 
  {isMobileMenuOpen ?(
  <CgCloseO
    className=" close-navbar text-xl mr-2 text-white"
    onClick={() => setMobileMenuOpen(prevState => !prevState)}
  />
  ) :(
    <CgFormatJustify
    className="  menu-navbar  text-xl mr-2 text-white"
    onClick={() => setMobileMenuOpen(prevState => !prevState)}
  />
  )
  }
</div>

      </div>
      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
       
        <div className=' pt-4 pb-4 bg-black flex flex-col font-inter text-lg text-white items-center mt-2'>
         
          <Link to={"/"} className="  hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
          <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};
