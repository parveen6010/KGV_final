import React from 'react'

export const BenefitCard = ({passed}) => {
  return (
    <div className=' p-6 pt-4 bg-opacity-75 flex flex-col  hover:text-black  h-auto w-auto   rounded-lg hover:scale-110 transition-all duration-500 box-content border-r-2 border-black'>
        <div className='font-extrabold text-2xl pb-2   text-white'>{passed.heading } </div>
        <div className='text-white'>{passed.paragraph}</div>
    </div>
  )
}
