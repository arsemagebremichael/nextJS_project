// import React, {useState, useEffect} from 'react';
// import { ArrowRightIcon } from '../Icons';
// const products = [
//     '/images/image1.png',
//     '/images/image2.png',
//     '/images/image3.png',
//     '/images/image4.png'

// ]

// const Advert = () =>{
//     const [currentIndex, setCurrentIndex] = useState(0);
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCurrentIndex((prevIndex) => 
//         prevIndex === products.length - 1 ? 0 : prevIndex + 1
//       );
//         }, 6000)
//         return () => clearInterval(interval)
//     }, []);
//    return(
//     <div className='bg-black  text-white flex items-cente justify-between w-2/3 h-1/6 p-10 '>
//         <div className=''>
//             <h2 className='text-l'>iPhone X Series</h2>
//             <p className='w-2/3 text-5xl py-8'>Up to 10% off Vorcher</p>
//             <button className='underline flex  justify-between items-center cursor-pointer select-none py-8'>Shop Now <ArrowRightIcon className='w-4 h-4' /> </button>
//         </div>
//         <div>
//             <img src={products[currentIndex]} alt="products" className='w-50' />
//         </div>
//     </div>
//    )
// }

// export default Advert;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppleIcon } from '../Icons';

const products = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image4.png'
];

const Advert = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 bg-black relative flex items-center px-10 h-72 w-1/2">
      
      <div className="flex-1 text-white">
        <div className="flex items-center gap-7 mb-5">
          <span className=" w-10 h-10  flex items-center justify-center">
            <AppleIcon className=''/>
          </span>
          <span className="font-poppins">iPhone 14 Series</span>
        </div>
        <h2 className="text-5xl font-bold mb-4 leading-tight">
          Up to 10%<br />
          off Voucher
        </h2>
        <button className="underline text-white flex items-center gap-1 font-poppins text-lg cursor-pointer select-none py-2">
          Shop Now <span className="ml-1">&#8594;</span>
        </button>
      </div>
      <div className="flex-1 flex justify-end items-center h-full">
        <Image
          src={products[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          width={200}
          height={220}
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Advert;
