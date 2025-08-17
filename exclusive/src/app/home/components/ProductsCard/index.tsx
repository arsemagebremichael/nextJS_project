"use client";

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import NavigationArrows from '../Navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

interface ProductCardProps {
  products: Product[];
  showNavigation: boolean;
  rows?: number
}

const ProductCard = ({ products, showNavigation = true, rows = 1 }: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerRow = 3;
  const cardsPerView = cardsPerRow * rows;
  const maxIndex = Math.max(0, products.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const translateX = `calc(-${currentIndex * (100 / cardsPerView)}%)`;

  return (
    <div >
      <div className="flex justify-end mb-4">
        {showNavigation && (
          <NavigationArrows
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={currentIndex}
            maxIndex={maxIndex}


          />
        )}
      </div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out gap-6 " style={{ width: `${(cardsPerView) * (100 / cardsPerRow)}%`, transform: `translateX(${translateX})` }}>
          {products.map((product) => (

            <div key={product.id} className="group relative bg-gray-100 rounded-sm shadow-md w-64 flex-shrink-0" style={{ maxWidth: `calc(100% / ${cardsPerRow})` }}>
              <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 font-poppins rounded-xs text-sm" >
                -{product.discount}%
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <AiOutlineHeart className="text-black hover:text-red-500 cursor-pointer" />
                <AiOutlineEye className="text-black hover:text-blue-500 cursor-pointer" />
              </div>
              <div className="w-64 h-40 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <button className="w-full rounded-sm bg-black text-white py-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>

              <h3 className="font-poppins font-semibold mt-4">{product.name}</h3>
              <div className="flex items-center space-x-4 mt-3 font-poppins">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <div className="flex items-center font-poppins">
                {Array.from({ length: product.rating }, (_, i) => (
                  <span key={i} className="text-yellow-600">
                    <FaStar />
                  </span>
                ))}
                <span className="ml-2 text-gray-600">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
