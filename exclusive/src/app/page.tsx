"use client";

import Title from './Home/components/Title';
import Advert from './shared-components/Advert';
import Header from './shared-components/Header/index';
import SideBar from './shared-components/Sidebar';
import CountDown from './Home/components/Timer';
import ProductCard from './Home/components/ProductsCard';
import Button from './shared-components/Button';


export default function Home(){
    const targetDate = '2025-12-31T23:59:59';
    const exampleProducts = [
        {
          id: 1,
          name: 'HAVIT HV-G92 Gamepad',
          price: 120,
          originalPrice: 160,
          discount: 40,
          rating: 5,
          reviews: 88,
          image:   '/images/image1.png',
        },
        {
          id: 2,
          name: 'AK-900 Wired Keyboard',
          price: 960,
          originalPrice: 1160,
          discount: 35,
          rating: 5,
          reviews: 75,
          image:   '/images/image1.png',
        },
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image:   '/images/image1.png',
          },
          {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image:   '/images/image1.png',
          },
          {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image:   '/images/image1.png',
          },
          {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image:   '/images/image1.png',
          },
          {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image:   '/images/image1.png',
          },
          {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image:   '/images/image1.png',
          },
      ];
      const handleButtonClick = () => {
        alert('!');
      };
    return(
        <>
        <Header />
        <SideBar/>
        <Advert/>

        <CountDown date="2025-12-31T23:59:59"/>
        <ProductCard products={exampleProducts} />
<Button buttonText="View all Products" onClickHandler={handleButtonClick} />        </>
    )
}