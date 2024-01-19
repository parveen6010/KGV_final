// import React from "react";
// import logo from "../resource/kgvLogo.png";
// import bike from "../resource/bike_main.png";
// import { Footer } from "../components/Footer";
// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import bikeleft from "../resource/bike_left.jpeg";
// import bikeright from "../resource/bike_right.jpeg";
// import bikeback from "../resource/bike_back.jpeg";
// import biketop from "../resource/bike_top.jpeg";
// import news from "../resource/news_clipping.jpeg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import qrcode from "../resource/qr.png";
// import SplendorBike from "../resource/splendor.png";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// export const Home = () => {
//   return (
//     <div className="w-screen min-w-fit overflow-x-hidden overflow-y-auto    ">
//       {/* hero page */}
//        <div
//         className="flex flex-col items-center justify-center  mx-auto max-w-screen h-screen w-full bg-gradient-radial from-[rgba(0,0,0,0.75)] via-gray-400 to-[rgba(0,0,0,0.75)]"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, #D3D3D3, rgb(0 0 0 / 86%))",
//         }}
//       >
//          <h1 className="text-4xl font-extrabold absolute top-40 font-serif" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
//         <img
//           src={SplendorBike}
//           className="absolute top-[4%] left-[25%] scale-75 hover:scale-100 transition-all duration-500 z-10"
//         />
//         <div
//           className="relative uppercase  font-extrabold text-transparent  text-[15rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#89df5dae] via-[#55ff17db] to-[#89df5dae] bg-opacity-20 scale-75"
//           style={{
//             textShadow: "0px 3px 0px #89df5dae, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)",
//             WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "4px",
//             WebkitTextStrokeColor: "#49ff04",
            
//           }}
//         >
//           ENERGY
//         </div>
//         <div
//           className="relative uppercase  font-extrabold text-transparent  text-[15rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#89df5dae] via-[#55ff17db] to-[#89df5dae] bg-opacity-20 scale-75"
//           style={{
//             textShadow: "0px 3px 0px #89df5dae, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)",
//             WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "4px",
//             WebkitTextStrokeColor: "#49ff04",
            
//           }}
//         >
//           INNOVATE
//         </div>
//       </div>
//       <div className="w-full h-screen flex flex-col    justify-center relative items-center   z-10 ">
//         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
//         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4       w-[80%] min-w-[300px] items-center  gap-y-5   ">
//           <div className="text-4xl font-bold text-center    ">About us </div>
//           <div className="border-2 w-12 border-green-500 inline-block mb-5"></div>
//           <div className="text-center max-w-[50%] text-2xl ">
//             KGV is a smart e-mobility solution provider that aims to cater to
//             the society as it reduces the immense burden on the middle and lower
//             segment of the community by reducing the cost of commuting by more
//             than 90%.{" "}
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div> 

//       <div className="w-screen h-screen bg-[#236c23] relative z-10 p-5  ">
//         <img src={goldenwave} className="w-screen h-screen scale-110  absolute -z-10" loading="lazy"/>
//         <div className="font-extrabold text-5xl mb-10 text-yellow-500 text-center">
//           Key Benefits
//         </div>
//         <div className="grid grid-rows-2 h-[70%] grid-flow-col gap-10  mx-auto max-w-[1204px] w-11/12">
//           {keyBenefits.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* We started from the bike, and we’ll make its delivery shortly to all the commuters worldwide.

// Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs.
//  */}

//       <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col justify-center items-center ">
//         <div className="flex flex-col  justify-center rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px] items-center  gap-y-5    ">
//           <div className="text-2xl font-bold uppercase mt-5 "> Vison </div>
         
//           <div>
//             {" "}
//             We started from the bike and we’ll make its delivery shortly to
//           </div>
//           <div> all the commuters worldwide.</div>
//           <div>
//             Our team of engineering excellence is also working on bringing up
//             the system to each and every mode of transportation
//           </div>
//           <div>including 3-wheelers, cars, LMVs, LCVs, and even HCVs.</div>
//         </div>
//         <div className="flex flex-col  justify-center rounded-lg h-[70%] p-4 w-[90%] min-w-[300px] items-center  gap-y-5    ">
//           <div className="text-2xl font-bold uppercase mt-5 "> Mission </div>
//           <div>
//             To empower every common man in the world to save his/her hard earned
//             moneyspent on fossil fuels
//           </div>
//           <div>
//             To save mother Earth from air and noise pollutionas well as a green
//             and cleaner environment for saving life and humanity
//           </div>
//           <div>
//             To ensure trouble free and tension free drive to each and every
//             rider reducing the anxiety of being stuckanywhere in the middle of
//             his/her journey
//           </div>
//           <div>
//             To reduce the traveling cost of companies, corporate and enterprizes
//             by more than 90% and add to their profits
//           </div>
//           <div>
//             Our plug-in hybrid was designed to get to the battery fit our and
//             can be charged inside the home
//           </div>
//         </div>
//       </div>

//       {/* gallery  */}
//       <div className="w-full h-screen bg-[#236c23] relative z-10 pb-7 ">
//         <img src={goldenwave} className="w-full h-full scale-110  absolute -z-10" loading="lazy"/>
//         <div className="flex flex-col justify-evenly gap-12 max-w-[1204px] mx-auto pt-20 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center">
//             {" "}
//             #KGVPhotoWall{" "}
//           </div>
//           <div className="flex justify-around w-full gap-10">
//           <div className="w-[85%] h-[95%] rounded-md opacity-90">
//             <img src={bikeleft} className=" w-full h-full mx-auto mt-1  rounded-md hover:scale-110 transition-all duration-500" loading="lazy"/>
//           </div>

//           <div className="  w-[85%] h-[95%] rounded-md opacity-90">
//             <img src={bikeright} className=" w-full h-full mx-auto mt-1  rounded-md hover:scale-110 transition-all duration-500" loading="lazy"/>
//           </div>

//           <div className="w-[85%] h-[95%] rounded-md opacity-90">
//             <img src={biketop} className=" w-full h-full mx-auto mt-1  rounded-md  hover:scale-110 transition-all duration-500" loading="lazy"/>
//           </div>
//           </div>
          
//         </div>
//       </div>

//       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
//         <div className="uppercase text-3xl font-semibold pb-5">
//           {" "}
//           Our Recent achievements...
//         </div>
//         <div className="border-2 w-48 border-green-500 inline-block mb-10"></div>
//         <Link
//           className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
//           to={
//             "https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"
//           }
//         >
//           <img src={news} className="w-[70%]  border-black border-2 rounded-md" loading="lazy"/>
//         </Link>
//       </div>
//       <div></div>
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
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";
import bikeleft from "../resource/bike_left.jpeg";
import bikeright from "../resource/bike_right.jpeg";
import bikeback from "../resource/bike_back.jpeg";
import biketop from "../resource/bike_top.jpeg";
import news from "../resource/news_clipping.jpeg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import qrcode from "../resource/qr.png";
import SplendorBike from "../resource/splendor.png";

export const Home = () => {
  return (
    <div className="w-screen min-w-fit overflow-hidden ">
      {/* Hero section */}
      <div className="flex flex-col h-screen justify-center items-center border-b-4 border-gray-500"  >
      <h1 className="text-4xl font-extrabold absolute top-32 font-serif" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
         <img src={SplendorBike} className="scale-75 absolute top-32 z-30  "/>

         <div className=" h-full w-full  flex flex-col justify-center items-center">
            <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
           <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
           <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "green",
            }} >INNOVATE</h1>
           <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
           <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
         </div>
      </div>
      {/* About Us */}
      <div className="w-full h-screen flex flex-col    justify-center relative items-center   z-10 ">
         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4       w-[80%] min-w-[300px] items-center  gap-y-5   ">
           <div className="text-4xl font-bold text-center    ">About us </div>
           <div className="text-center max-w-[50%] text-2xl ">
             KGV is a smart e-mobility solution provider that aims to cater to
             the society as it reduces the immense burden on the middle and lower
             segment of the community by reducing the cost of commuting by more
             than 90%.{" "}
           </div>
           <div className="flex  justify-center items-center gap-2">
             <Book />
             <Button2 />
           </div>
         </div>
       </div>      
       {/* Key benefits sections */}
       <div className="flex flex-col bg-[#55ff17db] h-screen w-screen justify-around items-center">
       <div className="font-extrabold text-5xl text-black text-center">
           Key Benefits
         </div>
         <div className="grid grid-rows-2 h-[70%] grid-flow-col gap-10  mx-auto max-w-[1204px] w-11/12">
           {keyBenefits.map((benefits, index) => {
             return <BenefitCard key={index} passed={benefits} />;
           })}
         </div>
        </div> 
        {/* Vision and mission */}
      <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col justify-center items-center ">
         <div className="flex flex-col  justify-center rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px] items-center  gap-y-5    ">
           <div className="text-2xl font-bold uppercase mt-5 "> Vision </div>
       
           <div>
             {" "}
             We started from the bike and we’ll make its delivery shortly to
           </div>
           <div> all the commuters worldwide.</div>
           <div>
             Our team of engineering excellence is also working on bringing up
             the system to each and every mode of transportation
           </div>
           <div>including 3-wheelers, cars, LMVs, LCVs, and even HCVs.</div>
         </div>
         <div className="flex flex-col  justify-center rounded-lg h-[70%] p-4 w-[90%] min-w-[300px] items-center  gap-y-5    ">
           <div className="text-2xl font-bold uppercase mt-5 "> Mission </div>
           <div>
             To empower every common man in the world to save his/her hard earned
             moneyspent on fossil fuels
           </div>
           <div>
             To save mother Earth from air and noise pollutionas well as a green
             and cleaner environment for saving life and humanity
           </div>
           <div>
             To ensure trouble free and tension free drive to each and every
             rider reducing the anxiety of being stuckanywhere in the middle of
             his/her journey
           </div>
           <div>
             To reduce the traveling cost of companies, corporate and enterprizes
             by more than 90% and add to their profits
           </div>
           <div>
             Our plug-in hybrid was designed to get to the battery fit our and
             can be charged inside the home
           </div>
         </div>
       </div>
       {/* photo gallery */}
       <div className="w-full h-screen bg-black relative z-10 pb-7 ">
         <img src={goldenwave} className="w-full h-full scale-110  absolute -z-10" loading="lazy"/>
         <div className="flex flex-col justify-evenly gap-12 max-w-[1204px] mx-auto pt-20 h-full  ">
           <div className="text-yellow-500 text-5xl  font-extrabold text-center">
             {" "}
             #KGVPhotoWall{" "}
           </div>
           <div className="flex justify-around w-full gap-10">
           <div className="w-[85%] h-[95%] rounded-md opacity-90">
             <img src={bikeleft} className=" w-full h-full mx-auto mt-1  rounded-md hover:scale-110 transition-all duration-500" loading="lazy"/>
           </div>
           <div className="  w-[85%] h-[95%] rounded-md opacity-90">
             <img src={bikeright} className=" w-full h-full mx-auto mt-1  rounded-md hover:scale-110 transition-all duration-500" loading="lazy"/>
           </div>
           <div className="w-[85%] h-[95%] rounded-md opacity-90">
             <img src={biketop} className=" w-full h-full mx-auto mt-1  rounded-md  hover:scale-110 transition-all duration-500" loading="lazy"/>
           </div>
           </div>
        
         </div>
       </div>
       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
        <div className="uppercase text-3xl font-semibold pb-5">
          {" "}
          Our Recent achievements...
        </div>
        <Link
          className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
          to={
            "https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"
          }
        >
          <img src={news} className="w-[70%]  border-black border-2 rounded-md" loading="lazy"/>
        </Link>
      </div>
      <div></div>
      <BusinessBook />

    </div>
  )
}
