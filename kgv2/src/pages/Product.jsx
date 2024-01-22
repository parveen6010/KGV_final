
// import React from "react";
// import logo from "../resource/kgvLogo.png";
// import bike from "../resource/bike_main.png";
// import { Footer } from "../components/Footer";
// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { BenefitCard } from "../components/BenefitCard";
// import { comp } from "../Data/Components";
// import { Link } from "react-router-dom";
// import img_comp from "../resource/compare_list.png";
// import { BusinessBook } from "../components/BusinessBook";
// import SplendorBike from "../resource/splendor.png";
// import bike1 from '../resource/bike1.jpg';
// import bike2 from '../resource/bike2.jpg';
// import bike3 from '../resource/bike3.jpg';
// import bike4 from '../resource/bike4.jpg';
// import bike5 from '../resource/bike_main.png';

// import "../components/Phone.css" 


// export const Product = () => {
//   return (
//     <div className=" w-full overflow-x-hidden    ">
//       {/* hero page */}
//       <div
//         className="h-[3%] md:h-[700px] bike-firstpage flex flex-col items-center justify-center  lg:h-screen lg:w-screen bg-gradient-radial from-[rgba(0,0,0,0.75)] via-gray-400 to-[rgba(0,0,0,0.75)]"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, #D3D3D3, rgb(0 0 0 / 86%))",
//         }}
//       >
//         <h1 className=" pt-[100px] flex items-center justify-center scale-[0.9]  lg:pr-[20px] lg:scale-[1.2]  md:text-1/2  lg:text-4xl font-extrabold absolute sm:absolute lg:absolute  md:absolute lg:top-40 font-serif" style={{ fontFamily: 'Anybody' }}>Experience the power of future..</h1>
//         <img
//           src={bike5}
//           className="   scale-[1.1] pl-[100px]  top-40  lg:left-[200px] lg:scale-[1.2] md:pt-[100px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute md:absolute lg:absolute top-[4%] sm:left-[25%] md:left-[25%] lg:left-[25%] hover:scale-100 transition-all duration-500     "
//         />
        
//         <div
//           className=" text-[400%] h-[200px] pt-[35px] text-[10rem] lg:Energyclass uppercase  font-extrabold lg:text-transparent  lg:text-[17rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#56e422c4] via-[#56e422c4] to-[#56e422c4] bg-opacity-20 text_properties"
//           style={{
//             WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "2px",
//             WebkitTextStrokeColor: "green",
//           }}
//         >
//           ENERGY
//         </div>
//         <Link to={"/booking"}>
//         <button className=" ml-[-19px] absolute w-[40px] h-[20px]  text-[6px] top-[7%] md:text-[60%] sm:text-[60%] lg:text-[100%] text-white   rounded-md bg-green-700 font-inter font-semibold lg:text-[100%]">Buy Now</button>
//         </Link>
//       </div>


//       <div className=" h:[] md:h-1/2 sm:pt-[4%] sm:pb-[4%]  md:classproduct sm:classproduct lg:classproduct  sm:w-full md:w-full lg:w-full  sm:h-screen md:h-screen lg:h-screen flex flex-col justify-center relative items-center z-10 ">
//         <img
//           src={wave}
//           className="imageclass w-full absolute h-full blur-[1px] top-0 -z-10"
//           loading="lazy"
//         />
//         <div className="  classproductinner flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5    ">
//           <div className="md:text-[200%] sm:text-4xl sm:h-1/2   lg:text-4xl font-bold text-center  ">PRODUCT </div>
//           <div className=" text:[10%] text-center max-w-[100%] lg:text-2xl md:text-base lg:text-3xl ">
//             We at KGV, are developing a product that is customer oriented and
//             manufactured with a vision of solving the problem of high
//             transportation cost by converting currently available conventional
//             two-wheeler into a plug in hybrid EV. We want to expose our product
//             to the international market and the ASEAN summit is the perfect
//             platform to showcase our product to the world
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div>
//       {/* <div className="bg-[#57E226] h-full w-full flex flex-col justify-center items-center p-10 gap-10">
//             <h1 className="font-extrabold text-4xl">Purchase the Product!</h1>
//            <img src={bike1} className="h-2/4 w-2/4 rounded-lg shadow-sm "/>
//            <div className="flex flex-col items-center ">
//             <h2 className="font-extrabold text-lg text-white mb-2">Transform Your Ride with KGV Hybrid Bike!</h2>
//             <p className="text-center font-semibold">Get ready to redefine your biking experience with the KGV Hybrid Bike. This groundbreaking innovation is not just a bike, it’s the future of biking, blending the best of both petrol and electric power into one seamless, efficient, and exhilarating experience.</p>
//            </div>
//            <button className="md:text-[60%] sm:text-[60%] lg:text-[100%] text-black py-3 px-5 rounded-md bg-white font-inter font-semibold text-[100%]">Buy Now</button>
//       </div> */}


//       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full h-screen  bg-[#55ff17db]  relative z-10 p-5 md:h-100 ">
//         <img
//           src={goldenwave}
//           className="w-full h-full  absolute scale-110 -z-10"
//           loading="lazy"
//         />
//         <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center md:text-center md:text-2xl">
//          Components
//         </div>

//         <div className=" flex flex-col items-center h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
//           {comp.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* We started from the bike, and we’ll make its delivery shortly to all the commuters worldwide.

// Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs.
//  */}

//       <div className="md:m-[5%] sm:pt-[6%] sm:pb-[6%] sm:mt-[6%] sm:mb-[6%] w-11/12 mx-auto max-w-[1204px] border-2 border-black  flex flex-col justify-center items-center gap-8 pt-7 mt-7 mb-7 pb-7 rounded-lg  ">
//         <div className="uppercase font-bold text-3xl ">
//           {" "}
//           Comparison of motorcyles{" "}
//         </div>
//         <div>
//           <img src={img_comp} loading="lazy" />
//         </div>
//       </div>

//       {/* working  */}
//       <div className="sm:h-[40%] sm:p-[4%]  w-full h-screen bg-black relative z-10  pt-3 flex justify-center items-center ">
//         <img
//           src={goldenwave}
//           className="w-full blur-[4px] h-full scale-110   absolute -z-10"
//           loading="lazy"
//         />
//         <div className="sm:h-[60%] w-11/12 flex flex-col items-center  max-w-[1204px] mx-auto pb-8  text-white  bg-white bg-opacity-25  rounded-lg   ">
//           <div className="sm:text-[150%] uppercase text-3xl font-bold mt-8">working</div>
//           <div className=" sm:h-[40%] sm:text-[80%] text-xl  w-[80%] pt-6 ">
//             After the successful installation of the KGV Plug-in hybrid Electric
//             kit. The rider is ready to go. The rider will simply input the key
//             into the keyhole designated for the electric mode and can simply
//             apply the throttle without engaging any gears.For switching back to
//             the petrol mode, the rider just simply needs to remove the key from
//             KGV-designed electric keyhole and insert into the keyhole provided
//             by the respective OEM ,folloing which the rider can run the
//             motorcyle in petrol mode The working mechanism of electric vehicles
//             involves a driver’s input through the throttle, which is controlled
//             by the controller for determining the need of power used by motors.
//             The **Lithium iron phosphate (LFP) battery gives the power in form
//             of electrical energy to the wheel hub motor that converts the
//             electrical energy into mechanical power, for the driver to control
//             the vehicle's speed and direction by the controller. Furthermore,
//             the DC/DC converter regulates the voltage level for the distribution
//             of electricity to the lighting system. This integrated system will
//             allow the electric vehicles to move forward or in reverse direction,
//             responding to the driver inputs.Distribution of weight was taken
//             care by giving battery on back side and fixing the hub motor in
//             front wheel to balance the weight and ensure a smooth drive.
//           </div>
//         </div>
//       </div >

//       <BusinessBook />
//     </div>
//   );
// };












import React from "react";
import logo from "../resource/kgvLogo.png";
import bike from "../resource/bike_main.png";
import { Footer } from "../components/Footer";
import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { BenefitCard } from "../components/BenefitCard";
import { comp } from "../Data/Components";
import { Link } from "react-router-dom";
import img_comp from "../resource/compare_list.png";
import { BusinessBook } from "../components/BusinessBook";
import SplendorBike from "../resource/splendor.png";
import bike1 from '../resource/bike1.jpg';
import bike2 from '../resource/bike2.jpg';
import bike3 from '../resource/bike3.jpg';
import bike4 from '../resource/bike4.jpg';
import bike5 from '../resource/bike_main.png';

import "../components/Phone.css" 


export const Product = () => {
  return (
    <div className=" w-full overflow-x-hidden    ">
      {/* hero page */}
      <div
        className=" md:h-[700px] bike-firstpage flex flex-col items-center justify-center  h-screen w-screen bg-gradient-radial from-[rgba(0,0,0,0.75)] via-gray-400 to-[rgba(0,0,0,0.75)]"
        style={{
          background:
            "radial-gradient(ellipse at center, #D3D3D3, rgb(0 0 0 / 86%))",
        }}
      >
        <h1 className="lg:pr-[20px] lg:scale-[1.2]  md:text-1/2 experince-text text-4xl font-extrabold absolute top-40 font-serif" style={{ fontFamily: 'Anybody' }}>Experience the power of future..</h1>
        <img
          src={bike5}
          className="lg:postion-relative lg:left-[200px] lg:scale-[1.2] md:pt-[100px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[25%] scale-75 hover:scale-100 transition-all duration-500     "
        />
        <div
          className=" Energyclass uppercase  font-extrabold text-transparent  text-[17rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#56e422c4] via-[#56e422c4] to-[#56e422c4] bg-opacity-20 text_properties"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "green",
          }}
        >
          ENERGY
        </div>
        <Link to={"/booking"}>
        <button className="absolute top-[16%] md:text-[60%] sm:text-[60%] lg:text-[100%] text-white py-3 px-4  rounded-md bg-green-700 font-inter font-semibold text-[100%]">Buy Now</button>
        </Link>
      </div>


      <div className="md:h-1/2 sm:pt-[4%] sm:pb-[4%]  classproduct w-full h-screen flex flex-col    justify-center relative items-center   z-10 ">
        <img
          src={wave}
          className="imageclass w-full absolute h-full blur-[1px] top-0 -z-10"
          loading="lazy"
        />
        <div className="  classproductinner flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5    ">
          <div className="md:text-[200%] sm:text-4xl sm:h-1/2   text-4xl font-bold text-center  ">PRODUCT </div>
          <div className=" text-center max-w-[100%] text-2xl md:text-base lg:text-3xl ">
            We at KGV, are developing a product that is customer oriented and
            manufactured with a vision of solving the problem of high
            transportation cost by converting currently available conventional
            two-wheeler into a plug in hybrid EV. We want to expose our product
            to the international market and the ASEAN summit is the perfect
            platform to showcase our product to the world
          </div>
          <div className="flex  justify-center items-center gap-2">
            <Book />
            <Button2 />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#57E226] h-full w-full flex flex-col justify-center items-center p-10 gap-10">
            <h1 className="font-extrabold text-4xl">Purchase the Product!</h1>
           <img src={bike1} className="h-2/4 w-2/4 rounded-lg shadow-sm "/>
           <div className="flex flex-col items-center ">
            <h2 className="font-extrabold text-lg text-white mb-2">Transform Your Ride with KGV Hybrid Bike!</h2>
            <p className="text-center font-semibold">Get ready to redefine your biking experience with the KGV Hybrid Bike. This groundbreaking innovation is not just a bike, it’s the future of biking, blending the best of both petrol and electric power into one seamless, efficient, and exhilarating experience.</p>
           </div>
           <button className="md:text-[60%] sm:text-[60%] lg:text-[100%] text-black py-3 px-5 rounded-md bg-white font-inter font-semibold text-[100%]">Buy Now</button>
      </div> */}


      <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full h-screen  bg-[#55ff17db]  relative z-10 p-5 md:h-100 ">
        <img
          src={goldenwave}
          className="w-full h-full  absolute scale-110 -z-10"
          loading="lazy"
        />
        <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center md:text-center md:text-2xl">
         Components
        </div>

        <div className=" flex flex-col items-center h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
          {comp.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>
      {/* We started from the bike, and we’ll make its delivery shortly to all the commuters worldwide.

Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs.
 */}

      <div className="md:m-[5%] sm:pt-[6%] sm:pb-[6%] sm:mt-[6%] sm:mb-[6%] w-11/12 mx-auto max-w-[1204px] border-2 border-black  flex flex-col justify-center items-center gap-8 pt-7 mt-7 mb-7 pb-7 rounded-lg  ">
        <div className="uppercase font-bold text-3xl ">
          {" "}
          Comparison of motorcyles{" "}
        </div>
        <div>
          <img src={img_comp} loading="lazy" />
        </div>
      </div>

      {/* working  */}
      <div className="sm:h-[40%] sm:p-[4%]  w-full h-screen bg-black relative z-10  pt-3 flex justify-center items-center ">
        <img
          src={goldenwave}
          className="w-full blur-[4px] h-full scale-110   absolute -z-10"
          loading="lazy"
        />
        <div className="sm:h-[60%] w-11/12 flex flex-col items-center  max-w-[1204px] mx-auto pb-8  text-white  bg-white bg-opacity-25  rounded-lg   ">
          <div className="sm:text-[150%] uppercase text-3xl font-bold mt-8">working</div>
          <div className=" sm:h-[40%] sm:text-[80%] text-xl  w-[80%] pt-6 ">
            After the successful installation of the KGV Plug-in hybrid Electric
            kit. The rider is ready to go. The rider will simply input the key
            into the keyhole designated for the electric mode and can simply
            apply the throttle without engaging any gears.For switching back to
            the petrol mode, the rider just simply needs to remove the key from
            KGV-designed electric keyhole and insert into the keyhole provided
            by the respective OEM ,folloing which the rider can run the
            motorcyle in petrol mode The working mechanism of electric vehicles
            involves a driver’s input through the throttle, which is controlled
            by the controller for determining the need of power used by motors.
            The **Lithium iron phosphate (LFP) battery gives the power in form
            of electrical energy to the wheel hub motor that converts the
            electrical energy into mechanical power, for the driver to control
            the vehicle's speed and direction by the controller. Furthermore,
            the DC/DC converter regulates the voltage level for the distribution
            of electricity to the lighting system. This integrated system will
            allow the electric vehicles to move forward or in reverse direction,
            responding to the driver inputs.Distribution of weight was taken
            care by giving battery on back side and fixing the hub motor in
            front wheel to balance the weight and ensure a smooth drive.
          </div>
        </div>
      </div >

      <BusinessBook />
    </div>
  );
};




































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





