import React from 'react'
import s1 from '../assets/images/services1.png'
import s2 from '../assets/images/services2.png'
import s3 from '../assets/images/services3.png'
import { intern } from './data'

const Services = () => {
  return (
    <div className="m-5 lg:m-24 pt-24 lg:pt-14">
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-8 gap-y-4'>

        {intern.map((item) => {
            const { image, name, text ,id} = item;
            return (
                <div key={id} className=" bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 ">
                    <img className="rounded-t-lg object-cover h-96 w-full" alt={name} src={image} />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
                        <button className="self-end cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-black transition duration-100 ease-in-out" >Know</button>
                    </div>
                </div>
            )
        })} 
   
        </div>
    </div>
  )
}

export default Services