


import React, { useState } from "react";
import { FaHeart, FaRegCopy, FaVideo } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const ProductCard = () => {
    const [proImages, setProImages] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const data = [
        {
            id: 1,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 2,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 3,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 4,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 5,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 6,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },

        {
            id: 7,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 8,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        }, {
            id: 9,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 10,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            id: 11,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            id: 12,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ], latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            id: 13,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            id: 14,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 15,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 16,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 17,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 18,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 19,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 20,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 21,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 22,
            img: ["https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            id: 23,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            id: 24,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10211-YGS3P0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ]
            ,
            latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            id: 25,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            id: 26,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹95,760",
            text: "Check delivery date",
            title: "Life of Hearts Diamond Band",
        },
        {
            id: 27,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 28,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 29,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/M/S/MS00083-PTP900_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/M/S/MS00083-PTP900_2_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg"
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 30,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06462-8YP9RS_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/S/N/SN00003-YGP900_4_lar.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/J/P/JP06462-8YP9RS_3_lar.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 31,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 32,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 33,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 34,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 35,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 36,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 37,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 38,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },

        {
            id: 39,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 40,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        }, {
            id: 41,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 42,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            id: 43,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            id: 44,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ], latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            id: 45,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            id: 46,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 47,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 48,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 49,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 50,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 51,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 52,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 53,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 54,
            img: ["https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            id: 55,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            id: 56,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10211-YGS3P0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ]
            ,
            latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            id: 57,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            id: 58,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹95,760",
            text: "Check delivery date",
            title: "Life of Hearts Diamond Band",
        },
        {
            id: 59,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 60,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 61,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/M/S/MS00083-PTP900_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/M/S/MS00083-PTP900_2_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg"
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 62,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06462-8YP9RS_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/S/N/SN00003-YGP900_4_lar.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/J/P/JP06462-8YP9RS_3_lar.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 63,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 64,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            id: 65,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 66,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/M/S/MS00083-PTP900_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/M/S/MS00083-PTP900_2_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg"
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            id: 67,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06462-8YP9RS_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/S/N/SN00003-YGP900_4_lar.jpg",
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            id: 68,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            id: 69,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        }

    ];

    const itemsPerPage = 20;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevImage = (id, imgLength) => {
        setProImages((prev) => {
            const currentIndex = prev[id] ?? 0;
            return {
                ...prev,
                [id]: currentIndex === 0 ? imgLength - 1 : currentIndex - 1,
            };
        });
    };

    const handleNextImage = (id, imgLength) => {
        setProImages((prev) => {
            const currentIndex = prev[id] ?? 0;
            return {
                ...prev,
                [id]: currentIndex === imgLength - 1 ? 0 : currentIndex + 1,
            };
        });
    };

    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 m-35">
                {currentItems.map((item, index) => {
                    const currentImageIndex = proImages[item.id] ?? 0;
                    return (
                        <div
                            key={item.id}
                            className="max-w-xs bg-white rounded-md border border-gray-200 shadow-md p-4 relative transition-transform duration-300 hover:scale-105 group"
                        >
                            <div className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md">
                                {item.latest}
                            </div>

                            <div className="absolute top-4 right-4 text-gray-500 hidden group-hover:flex">
                                <FaHeart className="text-xl" />
                            </div>

                            <div className="flex items-center justify-center py-6 relative">
                                <img src={item.img[currentImageIndex]} alt="Product" className="h-40 object-contain" />

                                <button onClick={() => handlePrevImage(item.id, item.img.length)} className="absolute left-2 bottom-2 bg-white rounded-full p-1 shadow">
                                    <IoChevronBack className="text-gray-500 text-sm" />
                                </button>
                                <button
                                    onClick={() => handleNextImage(item.id, item.img.length)}
                                    className="absolute left-8 bottom-2 bg-white rounded-full p-1 shadow" >
                                    <IoChevronForward className="text-gray-500 text-sm" />
                                </button>

                                <div className="absolute right-2 bottom-2 bg-white rounded-full p-1 shadow"> <FaRegCopy className="text-pink-500 text-sm" /> </div>
                            </div>

                            <div className="text-gray-900 font-semibold text-lg">{item.price}</div>
                            <div className="text-pink-400 text-xm font-medium mt-1">{item.text}</div>
                            <div className="text-gray-400 text-sm mt-1">{item.title}</div>

                            <div className="mt-4 hidden group-hover:flex items-center justify-between border border-purple-500 rounded-xl px-4 py-2 transition-all duration-300">
                                <span className="text-purple-700 text-sm font-medium">TRY AT HOME</span>
                                <div className="bg-green-100 p-1 rounded-full">
                                    <FaVideo className="text-green-600 text-sm" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Paginationss.... */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    disabled={currentPage === 1}>
                    Prev
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${currentPage === i + 1
                            ? "bg-purple-500 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`} >
                        {i + 1}
                    </button>
                ))}

                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" disabled={currentPage === totalPages} >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductCard