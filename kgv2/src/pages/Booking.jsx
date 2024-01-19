import { useState } from "react";
import React from "react";
import wave from "../resource/wave_final.png";
import { BusinessBook } from "../components/BusinessBook";
import { ContactCompany } from "../components/ContactCompany";
import { CiUser } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import Card from "./Card.jsx"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Booking = () => {
  // student or instructor

 
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber:""
  })

  const { firstname, lastname, email, address, phonenumber } = formData

  // Handle input fields, when some value changes


  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    if (!firstname || !lastname || !email || !address || !phonenumber) {
      return;
    }
    e.preventDefault()

    try {
      const  response =  await axios.post("http://localhost:5000/vistuser" ,{
      firstname,
      lastname,
      email,
      address,
      phonenumber
   }
);
   
if (response.status === 200) {
  console.log("booking detail submitted successfully!");
} else {
  console.error("Failed to submit booking detail.");
}

    } catch (error) {
      console.error("Error submitting booking detail:", error);
    }
   
   
  }

  const checkoutHandler = async (amount) => {

     const {data:{key}} = await axios.get("http://localhost:5000/api/getkey")
    const { data:{order}} = await axios.post("http://localhost:5000/api/checkout", {amount
    })

  const options = {
    key,
    amount: order.amount, 
    currency: "INR",
    name: "XXXXXXXXXXX",
    description: "Test Transaction",
    image: "",
    order_id: order.id, 
    callback_url: "http://localhost:5000/api/paymentverification",
    notes: {
      "email": email,
      "firstname" :firstname,
       "lastname": lastname,
        "email":email, 
       "address":address,
      "phonenumber" : phonenumber

  },
  
    theme: {
        "color": "#3399cc"
    }
};

  const razor  = new window.Razorpay(options);
  
  // razor.on('payment.failed', function (response){
  // alert(response.error.code);
  // alert(response.error.description); 
  // alert(response.error.source);
  // alert(response.error.step);
  // alert(response.error.reason);
  // alert(response.error.eetadata.order_10);
  //  alert(response.error.metadata.payment_id);
  // });

  razor.on('payment.failed', function (response) {
    toast.error(`Error Code: ${response.error.code}`);
    toast.error(`Error Description: ${response.error.description}`);
    toast.error(`Error Source: ${response.error.source}`);
    toast.error(`Error Step: ${response.error.step}`);
    toast.error(`Error Reason: ${response.error.reason}`);
    toast.error(`Error Metadata Order_10: ${response.error.eetadata.order_10}`);
    toast.error(`Error Metadata Payment_ID: ${response.error.metadata.payment_id}`);
  });

  // document.getElementById('rzp-button1").onclick = function(e){
      razor.open();
  // e.preventDefault();
    // } 
    //  Reset
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: "",
    })
  }
  

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="w-full overflow-hidden relative">
      <img src={wave} className="absolute -z-10 " loading="lazy"/>

      <div className="flex-col  items-center  mx-auto max-w-[1204px] w-11/12">
        <div class="flex   items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-[90%]  mx-auto mt-14  px-20  ">
          {/* Form */}
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col h-full  gap-y-4 w-full  font-inter  "
          >
            <div className="flex w-full justify-center gap-9    ">
              <div className="flex flex-col">
                <div className="flex gap-x-4">
                  <label className="mb-[1rem]">
                    <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
                      First Name <sup className="text-pink-200">*</sup>
                    </p>
                    <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
                    <FaUser className="text-black mr-2" />
                    <input
  required
  type="text"
  name="firstname"  // Change this to "firstname"
  value={firstname}
  onChange={handleOnChange}
  placeholder="Enter first name"
  style={{
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
  }}
  className="w-full rounded-[0.5rem] p-1 outline-none "
/>
                    </div>
                  </label>
                  <label>
                    <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Last Name <sup className="text-pink-200">*</sup>
                    </p>
                    <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
                    <FaUser className="text-black mr-2" />
                    
<input
  required
  type="text"
  name="lastname"  // Change this to "lastname"
  value={lastname}
  onChange={handleOnChange}
  placeholder="Enter last name"
  style={{
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
  }}
  className="w-full rounded-[0.5rem] p-1 outline-none "
/>
                    </div>
                  </label>
                  
                </div>
                <label className="w-full mb-[1rem]">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Email Address <sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                  <MdEmail className="text-black mr-2" />
                  <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email address"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem]  p-1 outline-none"
                  />
                  </div>
                </label>

                <label className="relative mb-2">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Address<sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                    <FaLocationDot className="text-black mr-2" />
                    <input
                      required
                      type="text"
                      name="address"
                      value={address}
                      onChange={handleOnChange}
                      placeholder="Enter address"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem]   p-1 pr-10 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className=" h-full ">
                <label className=" h-full">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Phone No. <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                required
                type="text"
                  name="phonenumber"  // Change this to "phonenumber"
                 value={phonenumber}
                 onChange={handleOnChange}
                 placeholder="Phone No."
    style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
    }}
    className="w-full h-56 rounded-[0.5rem] p-[12px] text-black outline-none"
/>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              {" "}
              <button
                type="submit"
                className="mt-6  rounded-[8px] bg-[#3EC70B] p-1 py-[12px] px-[14px] font-medium text-white"
                onClick={handleOnSubmit}
              >
                   < Card amount={100} checkoutHandler ={checkoutHandler} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-14 ">
        <BusinessBook />
      </div>

      <ContactCompany />
    </div>
  );
};
