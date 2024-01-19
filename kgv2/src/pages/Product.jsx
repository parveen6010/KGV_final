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

export const Product = () => {
  return (
    <div className="w-full overflow-x-hidden    ">
      {/* hero page */}
      <div
        className="flex flex-col items-center justify-center  h-screen w-screen bg-gradient-radial from-[rgba(0,0,0,0.75)] via-gray-400 to-[rgba(0,0,0,0.75)]"
        style={{
          background:
            "radial-gradient(ellipse at center, #D3D3D3, rgb(0 0 0 / 86%))",
        }}
      >
        <h1 className="text-4xl font-extrabold absolute top-40 font-serif" style={{ fontFamily: 'Anybody' }}>Experience the power of future..</h1>
        <img
          src={SplendorBike}
          className="absolute top-[4%] left-[25%] scale-75 hover:scale-100 transition-all duration-500     "
        />
        <div
          className="uppercase  font-extrabold text-transparent  text-[17rem] tracking-widest  bg-clip-text  bg-gradient-to-r from-[#56e422c4] via-[#56e422c4] to-[#56e422c4] bg-opacity-20 text_properties"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "green",
          }}
        >
          ENERGY
        </div>
      </div>


      <div className="w-full h-screen flex flex-col    justify-center relative items-center   z-10 ">
        <img
          src={wave}
          className="w-full absolute h-full blur-[1px] top-0 -z-10"
          loading="lazy"
        />
        <div className="flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5    ">
          <div className="text-4xl font-bold text-center    ">PRODUCT </div>
          <div className="text-center max-w-[50%] text-2xl ">
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


      <div className="w-full h-screen bg-[#55ff17db] relative z-10 p-5  ">
        <img
          src={goldenwave}
          className="w-full h-full  absolute scale-110 -z-10"
          loading="lazy"
        />
        <div className="font-extrabold text-5xl mb-10 text-black text-center ">
          Components
        </div>
        <div className="grid grid-rows-2 h-[80%] pb-5    grid-flow-col gap-10  mx-auto max-w-[1204px] w-11/12       ">
          {comp.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>
      {/* We started from the bike, and we’ll make its delivery shortly to all the commuters worldwide.

Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs.
 */}

      <div className="w-11/12 mx-auto max-w-[1204px] border-2 border-black  flex flex-col justify-center items-center gap-8 pt-7 mt-7 mb-7 pb-7 rounded-lg  ">
        <div className="uppercase font-bold text-3xl ">
          {" "}
          Comparison of motorcyles{" "}
        </div>
        <div>
          <img src={img_comp} loading="lazy" />
        </div>
      </div>

      {/* working  */}
      <div className="w-full h-screen bg-black relative z-10  pt-3 flex justify-center items-center ">
        <img
          src={goldenwave}
          className="w-full blur-[4px] h-full scale-110   absolute -z-10"
          loading="lazy"
        />
        <div className="w-11/12 flex flex-col items-center  max-w-[1204px] mx-auto pb-8  text-white  bg-white bg-opacity-25  rounded-lg   ">
          <div className="uppercase text-3xl font-bold mt-8">working</div>
          <div className="text-xl  w-[80%] pt-6 ">
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
      </div>

      <BusinessBook />
    </div>
  );
};
