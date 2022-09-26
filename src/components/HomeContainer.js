import React from 'react';
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import { heroData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen' id='home'>
            <div className='py-2 gap-6 flex-1 flex flex-col items-start justify-center '>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img className='w-full h-full object-contain' src={Delivery} alt="delivery" />
                    </div>
                </div>
                <p className='lg:text-[4.5rem] text-[2.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
                <p className='md:w-[80%] text-base text-textColor text-center md:text-left'>eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc</p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img className='h-420 ml-auto w-full lg:w-auto lg:h-650' src={HeroBg} alt="Hero-Bg" />
                <div className='w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center lg:px-32 py-4 gap-4'>
                    {heroData && heroData.map(data => (
                        <div key={data.id} className='lg:w-200 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center drop-shadow-lg'>
                            <img className='w-20 lg:w-40 lg:-mt-10 -mt-20' src={data.imageSrc} alt={data.name} />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{data.name}</p>
                            <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{data.desc}</p>
                            <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{data.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;