import React, { useState } from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'

import { ChevronLeft, ChevronRight } from 'lucide-react';
const deals = [
    {
        img: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01929-2Y0000_11_listfront.jpg",
        designs: "5901+ Designs",
        title: "Up to 20% off on MRP",
    },
    {
        img: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04221-YGP900_11_listfront.jpg",
        designs: "1336+ Designs",
        title: "CaratLane Best Seller J...",
    },
    {
        img: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
        designs: "18+ Designs",
        title: "Aaranya Collection",
    },
    {
        img: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
        designs: "437+ Designs",
        title: "Latest Engagement Rings",
    },
];

const Videodesign = () => {
    const [slide, setSlide] = useState(1);

    const handleNext = () => {
        setSlide(prev => (prev < 3 ? prev + 1 : 1));
    };

    const handlePrev = () => {
        setSlide(prev => (prev > 1 ? prev - 1 : 3));
    };

    return <>
        {/* video call.... */}
        <div className='overflow-hidden'>
            <div className='flex pt-15 p-6'>
                <div>
                    <video
                        className="w-200 h-120 object-cover rounded-l-2xl   mb-10"
                        src="https://assets.cltstatic.com/images/responsive/hp/Nearby-Store-Video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>

                <div className='bg-amber-100 w-200 h-120 rounded-r-2xl text-center items-center'>
                    <div className='mt-20'>
                        <p className='font-bold text-pink-950 text-3xl '>Find Your Favourite Design</p>
                        <p className='font-bold text-pink-950 text-3xl'>at a Store Nearby</p>

                        <div className="relative w-full max-w-xs mx-auto mt-10 right-20 border-b-green-600">
                            <FaLocationCrosshairs className="absolute left-3 top-4 text-gray-500 text-sm" />
                            <input type="text" placeholder="Enter pincode"
                                className="w-[500px] border border-orange-300 right-14 bg-white mr-50 rounded-md py-3.5 pl-10  text-sm"
                            />
                            <span className="absolute left-105 top-3.5 font-bold text-sm text-pink-300 cursor-pointer">
                                CHANGE
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div>
                <div className='flex gap-5 p-5 '>
                    <div className='relative w-[800px]'>
                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/static/images/web/HOME-PAGE-TRYATHOME.png" alt="" />

                        <div className='absolute top-8 pt-20 left-6 z-10'>
                            <p className='text-3xl text-white font-bold'>Unsure About</p>
                            <p className='text-3xl text-white font-bold'>What Design to Pick?</p>
                            <button className='bg-gray-500 w-75 h-12 mt-10 text-white font-semibold rounded-xl'>BOOK A TRIAL AT HOME</button>
                        </div>
                    </div>

                    <div className='relative w-[800px]'>
                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/static/images/web/Homepagetryathome-1.png" alt="" />

                        <div className='absolute pt-20 top-8 left-6 z-10'>
                            <p className='text-3xl text-white font-bold'>Unsure About</p>
                            <p className='text-3xl text-white font-bold'>What Design to Pick?</p>
                            <button className='bg-gray-500 w-75 h-12 mt-10 text-white font-semibold rounded-xl'>BOOK A TRIAL AT HOME</button>
                        </div>
                    </div>
                </div>



            </div>

            {/*   */}
            <div className="bg-[#edecfc] rounded-2xl p-10 mx-5">
                <div className="text-center mb-8">
                    <h2 className="text-lg text-gray-600">Exclusive deals</h2>
                    <h1 className="text-2xl font-semibold text-purple-900">
                        Curated only for you
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {deals.map((deal, index) => (
                        <div key={index} className="relative flex flex-col items-center ">
                            <div className="bg-white p-4 rounded-2xl shadow-md w-40 h-40 border-[#d7cbdf] border flex items-center justify-center">
                                <img src={deal.img} alt="Deal" className="max-h-24 " />
                            </div>

                            <div className="mt-2 bg-[#ded6fc] text-sm px-3 py-1 rounded-full text-purple-800 font-medium shadow">
                                {deal.designs}
                            </div>

                            <div className="mt-2 bg-[#442259] text-white px-4 py-2 rounded-md font-semibold text-sm shadow">
                                {deal.title}
                            </div>
                        </div>
                    ))}

                </div>
            </div>



            <div>
                <div className="relative w-full mx-auto p-4 pt-10">
                    <div className="flex transition-transform gap-3 duration-500 ease-in-out" style={{ transform: `translateX(-${(slide - 1) * 100}%)`, width: '50%' }}>

                        {/* imgage 1... */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-green-500 to-green-300 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Now you can invest & redeem anytime</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Buy Digital Gold</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 2.. */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Get your 10th installment FREE</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Enroll Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 3.. */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-teal-700 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Flat 20% Off on Jewelry</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Shop Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 4.. */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Get your 10th installment FREE</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Enroll Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex justify-end gap-2 pr-10 py-3">
                            <button onClick={handlePrev} className="bg-purple-800 p-2 text-white rounded-full shadow hover:bg-gray-200">
                                <ChevronLeft />
                            </button>
                            <button onClick={handleNext} className="bg-purple-800 p-2 text-white rounded-full shadow hover:bg-gray-200">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Form.. */}
            <div className='mx-5'>
                <div className="w-full p-15 rounded-xl bg-gradient-to-b from-black to-purple-700 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4 pl-30">
                        <img src="https://assets.cltstatic.com/images/responsive/purple-gift-icon.png" alt="Gift"
                            className="w-16 h-16"
                        />
                        <div className=''>
                            <h2 className="text-xl md:text-2xl font-bold">Join CaratLane Insider</h2>
                            <p className="text-sm md:text-base">
                                To discover enticing deals, latest arrivals, & more
                            </p>
                        </div>
                    </div>


                    <form className="flex flex-col items-center gap-4 w-full max-w-lg left-24 pr-30">
                        <input type="email" placeholder="Enter Email"
                            className="w-full px-4 py-2 rounded-xl text-black bg-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl"
                        >
                            submit
                        </button>
                        <div className="flex gap-6 text-sm">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="female" className="accent-pink-500" />
                                Female
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="male" className="accent-pink-500" />
                                Male
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="other" className="accent-pink-500" />
                                Other
                            </label>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </>
}

export default Videodesign




