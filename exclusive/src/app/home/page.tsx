"use client";

import Title from './components/Title';
import Advert from './components/Advert';
import TopNav from './../shared-components/TopNav/index';
import SideBar from './../shared-components/Sidebar';
import CountDown from './components/Timer';
import ProductCard from './components/ProductsCard';
import Button from './../shared-components/Button';
import Label from './components/Label';
import Categories from './components/Categories';
import MusicBanner from './components/MusicExperience';
import NavAdvert from './../shared-components/NavAdvert';

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
        <div>
            <NavAdvert />
            <div className='w-4/5 mx-auto'>


                <TopNav />
                <div className=' flex justify-between '>
                    <SideBar />
                    <Advert />
                </div>
                <div className='mt-5'>
                    <Label label="Today's" />
                    <div className='flex items-baseline-last mt-7 gap-25'>
                        <Title variant='' title="Flash Sales" />
                        <CountDown date="2025-12-31T23:59:59" />
                    </div>

                </div>

                <ProductCard products={exampleProducts} />
                
                <div className='flex flex-col items-center py-10'>
                    <Button variant='primary' buttonText="View all Products" onClickHandler={handleButtonClick} />

                </div>
                <div>
                    <Label label="Categories" />
                    <Title variant="" title="Browse By Category" />
                </div>
                <div className='w-4/5 mx-auto'>
                    <Categories />
                </div>
                <div className='mt-10'>
                    <Label label="Categories" />
                    <Title variant="" title="Browse By Category" />
                    <ProductCard products={exampleProducts} />

                </div>
                <MusicBanner />
            </div>
        </div>
    )
}