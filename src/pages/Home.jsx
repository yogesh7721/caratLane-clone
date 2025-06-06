import React, { useEffect, useState } from 'react'
import { MdOutlineStorefront } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { ImHome } from "react-icons/im";
import Flag from 'react-world-flags';
import { MdAccountBox } from "react-icons/md";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import Rings from '../component/HomePage/Rings';
import Earrings from '../component/HomePage/Earrings';
import Braceletes_Bangles from '../component/HomePage/Braceletes_Bangles';
import Solitaires from '../component/HomePage/Solitaires';
import Mangalsutras from '../component/HomePage/Mangalsutras';
import Necklaces_Pendants from '../component/HomePage/Necklaces_Pendants';
import More_Jwellery from '../component/HomePage/More_Jwellery';
import Silverby_Shaya from '../component/HomePage/Silverby_Shaya';
import Gifting from '../component/HomePage/Gifting';
import Trending from '../component/HomePage/Trending';
import Collections from '../component/HomePage/Collections';
import Drawer from './Drawer';


const rotatingIcons = [
    { icon: <FaStore size={120} className="text-blue-500" />, label: "Nearest Store", textColor: "text-blue-500" },
    { icon: <FaStore size={120} className="text-orange-400" />, label: "In Store Design", textColor: "text-orange-400" },
    { icon: <TbTruckDelivery size={120} className="text-pink-400" />, label: "Fastest Delivery Date", textColor: "text-pink-400" },
    { icon: <ImHome size={120} className="text-indigo-500" />, label: "Try at Home Availability", textColor: "text-indigo-400" },
];

const Home = () => {
    const navigate = useNavigate()

    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState();

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingIcons.length);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const current = rotatingIcons[index]

    return (
        <div>
            <Drawer open={open} setOpen={setOpen} />

            <div className="w-full px-4 py-4 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-6">

                    <img
                        className="w-10 flex-shrink-0"
                        src="https://media.istockphoto.com/id/1408777900/photo/gold-letter-c.jpg?s=612x612&w=0&k=20&c=U1MNQPlxODwsOytlLr3cOP7GLpzSkOuVsJuEJ5r4Ino="
                        alt="Logo"
                    />


                    <div className="relative flex-grow min-w-[200px] sm:min-w-[300px] lg:min-w-[500px]">
                        <input
                            onClick={() => setOpen(!open)}
                            name="myInput"
                            placeholder="Search"
                            className="w-full px-4 py-2 pr-12 border border-pink-400 text-black rounded-lg"
                        />
                        <div className="absolute right-0 rounded-r-md top-1/2 transform -translate-y-1/2 bg-purple-800 w-10 h-10 flex items-center justify-center">
                            <FaSearch className="text-white" />
                        </div>
                    </div>


                    <div className="border border-pink-400 rounded-xl h-10 w-16 flex-shrink-0 flex items-center justify-center">
                        <img className="h-6" src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/discovery/responsive-hamburger-menu/products-and-services/pop-1x.png" alt="icon" />
                    </div>

                    <div className="flex items-center gap-1 border border-red-400 rounded-xl h-10 px-4 flex-shrink-0 whitespace-nowrap">
                        <MdOutlineStorefront size={20} className="text-red-500" />
                        <p className="text-sm">Store Locator</p>
                    </div>

                    <div className="flex items-center gap-2 border border-pink-400 bg-amber-100 rounded-xl h-10 px-2 flex-shrink-0">
                        <img className="h-6" src="https://cdn.caratlane.com/static/images/discovery/responsive-hamburger-menu/egold-1x.png" alt="" />
                    </div>

                    <div className="relative group min-w-[140px] flex-shrink-0">
                        <p className="text-sm text-center">Delivery & Store</p>
                        <p className="text-pink-400 text-sm font-semibold cursor-pointer text-center">Enter Pincode</p>

                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl p-6 shadow-2xl opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-in-out z-50">
                            <p className="text-lg text-center font-medium text-gray-700">Your PinCode Unblock</p>
                            <p className="mt-2 text-xs text-center">
                                Fastest delivery date, Try-at-Home availability,
                                <br />
                                Nearest store and In-store design!
                            </p>
                            <div className="flex justify-center mt-4">
                                <div className="flex flex-col items-center text-center p-2">
                                    {current.icon}
                                    <p className={`font-semibold ${current.textColor}`}>{current.label}</p>
                                </div>
                            </div>
                            <div className="relative w-full max-w-xs mx-auto mt-4">
                                <FaLocationCrosshairs className="absolute left-3 top-4 text-gray-500 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Enter pincode"
                                    className="w-full border border-gray-300 rounded-md py-3.5 pl-10 pr-10 text-sm"
                                />
                                <span className="absolute right-3 top-3.5 font-bold text-sm text-pink-300 cursor-pointer">CHANGE</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2 md:mt-0 ml-auto">
                        <Flag code="IN" style={{ width: 32, height: 20 }} className="rounded ml-2" />
                        <MdAccountBox size={25} className="text-violet-900 ml-2" />
                        <FaHeart size={22} className="text-violet-900 ml-2" />
                        <FaCartPlus size={22} className="text-violet-900 ml-2" />
                    </div>
                </div>
            </div>

            {/* Navbar.... */}
            <div className="bg-purple-950 flex flex-wrap items-center gap-2 px-2 py-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white w-full flex-wrap">


                    <div className='flex flex-wrap'>
                        <p onClick={() => navigate("/")} className="px-2 sm:px-5 cursor-pointer font-semibold text-xs hover:text-purple-300 hover:underline hover:decoration-purple-500 hover:decoration-4 hover:underline-offset-6">Home</p>
                        <p onClick={() => navigate("/filterhome")} className="px-2 sm:px-5 cursor-pointer font-semibold text-xs hover:text-purple-300 hover:underline hover:decoration-purple-500 hover:decoration-4 hover:underline-offset-6">Filter Page</p>
                        <p onClick={() => navigate("/detailHome")} className="px-2 sm:px-5 cursor-pointer font-semibold text-xs hover:text-purple-300 hover:underline hover:decoration-purple-500 hover:decoration-4 hover:underline-offset-6">Detail Page</p>
                    </div>

                    {[
                        "ring", "earring", "braceletes", "solitaires", "mangalsutras",
                        "necklaces", "jwellery", "silverbyshaya", "gifting", "trending", "collection"
                    ].map((item) => (
                        <div
                            key={item}
                            className="relative"
                            onMouseEnter={() => setIsOpen(item)}
                            onMouseLeave={() => setIsOpen("")}
                        >
                            <p className="px-2 sm:px-5 cursor-pointer font-semibold text-xs hover:text-purple-300 hover:underline hover:decoration-purple-500 hover:decoration-4 hover:underline-offset-6 capitalize">{item}</p>
                            {isOpen === item && (
                                <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                    {item === "ring" && <Rings />}
                                    {item === "earring" && <Earrings />}
                                    {item === "braceletes" && <Braceletes_Bangles />}
                                    {item === "solitaires" && <Solitaires />}
                                    {item === "mangalsutras" && <Mangalsutras />}
                                    {item === "necklaces" && <Necklaces_Pendants />}
                                    {item === "jwellery" && <More_Jwellery />}
                                    {item === "silverbyshaya" && <Silverby_Shaya />}
                                    {item === "gifting" && <Gifting />}
                                    {item === "trending" && <Trending />}
                                    {item === "collection" && <Collections />}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Dropdown */}
                    <select className='border rounded-sm ml-auto text-black bg-white  w-full sm:w-40 md:w-48 px-3 py-2 mt-2 md:mt-0'>
                        <option className='text-black'>Services</option>
                        <option className='text-black'>Try at Home</option>
                        <option className='text-black'>Video Call</option>
                    </select>
                </div>
            </div>

            <Carousels />
        </div>

    )
}



const Carousels = () => {
    return <>
        <div>
            {/* Carousel... */}
            <div className=''>
                <div className="p-6 rounded">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={2000}
                    >
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[530px] overflow-hidden rounded-2xl">
                            <img className="w-full h-full object-cover rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/Oceanic/02/Desktop_1740x850_1.jpg"
                                alt="Jewelry Store"
                            />
                        </div>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[530px] overflow-hidden rounded-2xl">
                            <img className="w-full h-full object-cover rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/harvest/02/Userbased_desktop.jpg"
                                alt="Jewelry Store"
                            />
                        </div>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[530px] overflow-hidden rounded-2xl">
                            <img className="w-full h-full object-cover rounded-2xl" src="https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?fm=jpg&q=60&w=3000"
                                alt="Jewelry"
                            />
                        </div>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[530px] overflow-hidden rounded-2xl">
                            <img className="w-full h-full object-cover rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/harvest/02/Userbased_desktop.jpg"
                                alt="Jewelry"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>

    </>
}

export default Home

