

import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild, } from '@headlessui/react'
import { FaArrowTrendUp, FaChevronLeft, FaChevronRight, } from 'react-icons/fa6'

const trendingItems = [
    { label: 'Summer styles', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/others/searchbar/01/mother.jpg' },
    { label: '22KT Chains', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/others/searchbar/01/engagement.jpg' },
    { label: 'Trendy Mangalsutras', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/searchbar/01/goldchains.jpg' },
    { label: 'Engagement Rings', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/searchbar/01/goldchains.jpg' },
    { label: 'Workwear Bracelets', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/searchbar/01/mangalsutra.jpg' },
    { label: 'Earrings under 40K', image: 'https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/searchbar/01/earrings.jpg' },
]

const recentlyViewed = [
    'https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/searchbar/01/earrings.jpg',
    'https://cdn.caratlane.com/media/catalog/product/J/P/JP03871-YGP900_1_lar.jpg',
    'https://cdn.caratlane.com/media/catalog/product/K/U/KU01769-2Y0000_1_lar.jpg',
    'https://cdn.caratlane.com/media/catalog/product/J/E/JE11130-1YS300_1_lar.jpg',
    'https://cdn.caratlane.com/media/catalog/product/J/E/JE11130-1YS300_1_lar.jpg',
    'https://cdn.caratlane.com/media/catalog/product/J/E/JE11130-1YS300_1_lar.jpg',

]

const Drawer = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />

            <div className="fixed inset-0 flex justify-end"  >
                <DialogPanel className="w-full max-w-3xl bg-white shadow-xl flex flex-col">
                    {/* Close Button.... */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>


                    <div className="px-6 pb-6 text-[#5f5f71]" >

                        <h2 className="text-xl font-semibold mb-4 text-[#3d2c5a]">
                            Trending Searches
                        </h2>
                        <div className="grid grid-cols-2 gap-y-4 border-b pb-6">
                            {trendingItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between pr-6"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaArrowTrendUp className="text-purple-500" />
                                        <span>{item.label}</span>
                                    </div>
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/*  Viewed Section... */}
                        <h2 className="text-xl font-semibold mt-6 mb-4 text-[#3d2c5a]">
                            Recently Viewed
                        </h2>
                        <div className="relative " style={{ scrollbarWidth: 'none' }} >
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400 text-white p-2 rounded-full shadow">
                                <FaChevronLeft />
                            </button>
                            <div className="flex  gap-4 px-10 py-2 scrollbar-hide">
                                {recentlyViewed.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="min-w-[120px] rounded-xl overflow-hidden shadow-sm"
                                    >
                                        <img
                                            src={src}
                                            alt={`Recently viewed ${idx}`}
                                            className="w-full h-[140px] object-cover"
                                        />

                                    </div>
                                ))}
                            </div>
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3d2c5a] text-white p-2 rounded-full shadow">
                                <FaChevronRight />
                            </button>

                            <div className='mt-3'>
                                <p className='text-xl mb-5 text-black'>Continue Your Browsing </p>
                                <div className='flex gap-6'>
                                    <div className='bg-amber-200 w-80 h-30 rounded-2xl '>
                                        <p className='p-2 text-black'>The Summer Edits</p>
                                        <div className='flex h-12 rounded-xl gap-3 mx-5 '>
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE03954-YGP600_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE07084-1YS300_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR07691-YGS300_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07691-YGS300_11_listfront.jpg" width={60} alt="" />
                                        </div>
                                    </div>
                                    <div className='bg-amber-200 w-80 h-30 rounded-2xl '>
                                        <p className='p-2 text-black'>The Summer Edits</p>
                                        <div className='flex h-12 rounded-xl gap-3 mx-5 '>
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE03954-YGP600_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE07084-1YS300_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR07691-YGS300_1_lar.jpg" width={70} alt="" />
                                            <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07691-YGS300_11_listfront.jpg" width={60} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-amber-200 w-80 h-30 rounded-2xl mt-6 '>
                                    <p className='p-2 text-black'>The Summer Edits</p>
                                    <div className='flex h-12 rounded-xl gap-3 mx-5 '>
                                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE03954-YGP600_1_lar.jpg" width={70} alt="" />
                                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/E/JE07084-1YS300_1_lar.jpg" width={70} alt="" />
                                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR07691-YGS300_1_lar.jpg" width={70} alt="" />
                                        <img className='rounded-2xl' src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07691-YGS300_11_listfront.jpg" width={60} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div >
        </Dialog >
    )
}

export default Drawer
