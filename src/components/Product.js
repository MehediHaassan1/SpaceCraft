import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";


const Product = () => {
    const productsDetails = [
        {
            id: 1,
            name: "Hand Base Lamp",
            previousPrice: 55,
            offerPrice: 45,
            image: "https://i.ibb.co/6gGsyxT/products-1.png"
        },
        {
            id: 2,
            name: "Vintage Chair",
            previousPrice: 95,
            offerPrice: 65,
            image: "https://i.ibb.co/LCXTMBs/products-2.png"
        },
        {
            id: 3,
            name: "Stackable Chair",
            previousPrice: 45,
            offerPrice: 40,
            image: "https://i.ibb.co/zVx7FFc/products-3.png"
        },
        {
            id: 4,
            name: "Crystal Gold Chair",
            previousPrice: 60,
            offerPrice: 55,
            image: "https://i.ibb.co/zPFTcTw/products-4.png"
        },
        {
            id: 5,
            name: "Stylish Chair",
            previousPrice: 45,
            offerPrice: 40,
            image: " https://i.ibb.co/1bmYk1L/products-5.png"
        },
        {
            id: 6,
            name: "Lamp Tool",
            previousPrice: 55,
            offerPrice: 45,
            image: "https://i.ibb.co/GPC3qmr/products-6.png"
        },
    ]
    return (
        <div className='my-16'>
            <div className='my-10 flex justify-between items-center mx-20'>
                <h1 className='text-5xl text-brandPrimary'>Products</h1>
                <p className='flex justify-center text-xl text-brandSecondary'>
                    See All
                    <FaArrowRight className='h-6 w-6 ml-6' />
                </p>
            </div>
            <div className='my-10 mx-28 text-center flex justify-center items-center'>
                <span className='mx-6 text-xl text-black'>All</span>
                <span className='mx-6 text-xl text-brandSecondary'>Bed</span>
                <span className='mx-6 text-xl text-brandSecondary'>Sofa</span>
                <span className='mx-6 text-xl text-brandSecondary'>Chair</span>
                <span className='mx-6 text-xl text-brandSecondary'>Light</span>
            </div>
            <div className='mx-24 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:grid-gap-14'>
                {
                    productsDetails.map(product => <div
                        key={product.id}
                        className='h-80'
                    >
                        <div className='relative'>
                            <div className='bg-[#F4F6F5] h-60'>
                                <div className='ml-10'>
                                    <h1 className='text-3xl'>{product.name}</h1>
                                    <p className='my-4 text-lg font-semibold'>
                                        <span>${product.offerPrice}</span>
                                        <span className='line-through	text-brandSecondary 
                             ml-10 text-base'>${product.previousPrice}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='absolute top-12 mt-10'>
                                <img src={product.image} alt={product.name} className='h-60' />
                            </div>
                            <div className='absolute -top-4 right-4 w-8 h-8 bg-[#D6C4B8] text-white rounded-full flex justify-center items-center'>
                                <IoCartOutline className='w-5 h-5' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Product