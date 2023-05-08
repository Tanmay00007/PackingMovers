import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react'
import { photo } from './data';
import { useState } from 'react';
import s1 from '../assets/images/services1.png'
import s2 from '../assets/images/services2.png'
import './login.css'

const Home = () => {
  const [index,setIndex] = useState(0)
    const {id,image} = photo[index];
    const checkNumber = (number) =>{
        if(number>photo.length-1){
          return 0;
        }
        if(number<0){
          return photo.length-1;
        }
        return number;
      }
      const random = () =>{
        let newNumber = Math.floor(Math.random()*photo.length);
        setIndex(newNumber);
      }
      const nextImage = () =>{
        setIndex((index)=>{
          let newIndex = index +1;
          return checkNumber(newIndex);
        });
      }
      const prevImage = () =>{
        setIndex((index)=>{
          let newIndex = index -1;
          return checkNumber(newIndex);
        });
      }
  return (
    <>
    <article className='mx-auto'>
    <div className='items-center'>
      <img src={image} alt="MSD" className='w-96 h-96 mt-32 items mx-auto'></img>
    </div>
    <div className='button-container buttons'>
    <button className='b1' onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <button className='b2' onClick={nextImage}>
       <FaChevronRight />
      </button>
    </div>
  </article>
  <h2 className='text-center mt-12 text-3xl'>WELCOME TO Logistic PACKERS AND MOVER TRUSTED & PROFESSIONAL</h2>
  <div className='mt-8'>
        <div className='lg:grid grid-cols-2 mb-8 '>
        <img src={s1} alt='first' className='h-48 ml-44 second'></img>
        <p className='mr-44 first'>Moveway Shifting Packers and Movers is bound to provide hassle-free and reliable car and bike transportation in any part of the country. We employ the best transportation system, which is why we are conquering the logistics industry. We have started using sustainable mobility to provide car and bike transportation effectively. We understand that you cannot trust everyone to take care of your vehicle.Therefore, we have adapted the best engineering and operating philosophy to make you feel extra assured. We have carried out our services in the most transparent manner. Therefore, we can assure you of the successful damage-free transportation of your bike and car to your required destination. We also provide insurance so that you do not have to bear the extra cost of damage.</p>
        </div>
        <div className='grid grid-cols-2 mb-8'>
        <p className='ml-44'>At Moveway Shifting Packers and Movers, the commitment to provide hassle and trouble-free shifting is backed up by a simple, flexible, customized, and innovative approach. To achieve the highest customer satisfaction, we customize our shifting process according to the customer's needs and requirements. Our relocation and shifting process comes as a surprise for the customers.When you hire our packers and movers for the job, we ensure that we provide you with the best services. We cover all kinds of services from top to bottom, whether packing or unloading. We do not ignore the importance of packaging material, which is why we use high-quality packaging material. This is important to avoid any damage to your beloved and precious belongings</p>
        <img src={s2} alt='first' className='h-60 mr-44'></img>
        </div>
        </div>

  </>
  )
}

export default Home