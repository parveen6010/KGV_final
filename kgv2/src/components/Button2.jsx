import React from 'react'
import { Link } from 'react-router-dom'

export const Button2 = () => {
  return (
    <div className='mr-2'>
        <Link to={"/contactUs"}>
            <div class="mx-auto flex   items-center justify-center">
                <div class="  w-full rounded-md bg-[#57E226] p-[2px] ">
                <div class="  md:text-[70%] sm:text-[60%] text-black  py-2.5 px-4 rounded-md bg-white font-inter font-semibold  ">
                  Contact Us
                 </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
