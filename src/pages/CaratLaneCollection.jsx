import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'
import Slider from "react-slick";

const CaratLaneCollection = () => {
    const collection = [
        "luna_d",
        "ombre_d",
        "butterfly_d",
        "eternity_d",
        "aaranya_d",
        "adaa_d"
    ];

    const slider = [
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/kids/01/SC_desktop.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/AppBanner/02/Desktop.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/AppBanner/02/Desktop.jpg"
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='overflow-hidden'>
            <div className="bg-gradient-to-b from-gray-200 to-white py-4">
                <p className="text-purple-950 text-center font-semibold text-3xl mb-1 pt-5">
                    CaratLane Collections
                </p>

                <div className="flex gap-4 overflow-x-auto px-5 pt-9" style={{ scrollbarWidth: "none" }}>
                    {collection.map((imgName, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[90%] sm:w-[48%] md:w-[45%] lg:w-[23%] xl:w-[23%] h-[450px] rounded-2xl overflow-hidden"
                        >
                            <img src={`https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/${imgName}.jpg`} alt="Collection" className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <div className='text-center p-6 pt-8'>
                    <button className='bg-purple-900 rounded px-4 text-center text-white text-sm font-semibold h-11 w-66'>VIEW ALL COLLECTIONS</button>
                </div>
            </div>

            {/*  */}

            <div className="flex flex-col md:flex-row p-4">
                <div className="w-1200 md:w-[800px]">
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="Main Banner" className="w-full h-auto shadow-md rounded-l-2xl"
                    />
                </div>


                <div className=" bg-gradient-to-b from-gray-400 to-gray-100  p-4  rounded-r-xl shadow-md">
                    <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center mt-10 ">
                        <div>

                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow ml-1" alt="Product 1"

                            />
                            <div className='flex ml-2'>
                                <p>₹57,163 </p>
                                <p className="text-sm m-1"> ₹ 65,024</p>
                            </div>
                            <p className='text-xs'>Twilled 22kt Gold Unise  ...</p>
                        </div>
                        <div>
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05356-RGS3SS_11_listfront.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 2"
                            />
                            <div className='flex ml-2'>
                                <p>₹57,163 </p>
                            </div>
                            <p className='text-xs'>Adoring Twist 22kt Unise...</p>
                        </div>
                        <div>

                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 3"
                            />
                            <div className='flex ml-2'>
                                <p>₹70,512 </p>
                            </div>
                            <p className='text-xs'>Twilled 22kt Gold Unise...</p>
                        </div>
                        <div>
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 4"
                            />
                            <div className='flex ml-2'>
                                <p>₹34,411 </p>
                            </div>
                            <p className='text-xs'>Knot 22kt Gold Bracelete...</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-12 ">
                        <div className="flex items-center">
                            <ArrowLeft className="rounded-full bg-violet-900 size-10 text-white ml-5" />
                            <ArrowRight className="ml-5 rounded-full bg-violet-900 size-10 text-white " />
                        </div>

                        <button className="bg-fuchsia-800 text-white px-4  text-sm py-2 rounded">
                            View Full Collection
                        </button>
                    </div>

                </div>
            </div>

            {/* carousel img */}

            <div className="" style={{ scrollbarWidth: 'none' }}>
                <div className="mt-10 px-2 sm:px-4">
                    <div className="slider-container overflow-hidden hide-scrollbar">
                        <Slider {...settings}>
                            {slider.map((src, index) => (
                                <div key={index} className="px-2 sm:px-3 md:px-5">
                                    <div className="w-[480px]">
                                        <img src={src}
                                            alt={`Banner ${index + 1}`}
                                            className="w-full h-[270px] object-cover shadow-md rounded-2xl"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CaratLaneCollection;


