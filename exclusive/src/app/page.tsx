"use client";

import Title from './Home/components/Title';
import Advert from './Home/components/Advert';
import Header from './shared-components/Header/index';
import SideBar from './shared-components/Sidebar';
import CountDown from './Home/components/Timer';
import ProductCard from './Home/components/ProductsCard';
import Button from './shared-components/Button';
import Label from './Home/components/Label';
import Categories from './Home/components/Categories';
import MusicBanner from './Home/components/MusicExperience';

export default function Home() {
  const exampleProducts = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: '/images/image1.png',
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 75,
      image: '/images/image1.png',
    },
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: '/images/image1.png',
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 75,
      image: '/images/image1.png',
    },
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: '/images/image1.png',
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 75,
      image: '/images/image1.png',
    },
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: '/images/image1.png',
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 75,
      image: '/images/image1.png',
    },
  ];
  const handleButtonClick = () => {
    alert('!');
  };


  return (
    <>
      <Header />
      <div className='w-3/4 mx-auto flex justify-between '>
        <SideBar />
        <Advert />
      </div>
      <div>
        <Label label="Today's" />
        <div className='flex items-center w-3/4 mx-auto '>

          <Title title="Flash Sales" />
          <CountDown date="2025-12-31T23:59:59" />

        </div>
      </div>


      <ProductCard products={exampleProducts} />
      <div className='flex flex-col items-center py-10'>
        <Button variant='primary' butttonText="View all Products" onClickHandler={handleButtonClick} />

      </div>
      <div>
      <Label label="Categories"/>
        <Title title="Browse By Category"/>
      </div>
      <div className='w-3/4 mx-auto'>
      <Categories />
      </div>
      <MusicBanner/>

    </>
  )
}