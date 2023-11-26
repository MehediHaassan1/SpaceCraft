import React from 'react';
import { PiFolderStarBold } from "react-icons/pi";

const Testimonials = () => {
    return (
        <div className='h-screen bg-[#F4F6F5]'>
            <div className='relative overflow-hidden'>
                <div className='absolute -top-60 -left-60 '>
                    <img src="https://i.ibb.co/5MwQXXC/corner-circle.png" alt="corner-circle" />
                </div>
                <div className='text-center'>
                    <h1 className='w-[500px] mx-auto text-6xl mt-10 text-brandPrimary'>What our happy client say</h1>
                    <p className='mt-10 w-[500px] mx-auto text-xl'>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>
                </div>
                <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center absolute right-16'>
                    <PiFolderStarBold className='w-8 h-8 text-red-400' />
                </div>
            </div>
            <div className=' bg-[#F4F6F5] mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 
             md:gap-12 mx-40 '>
                <div>
                    <h3 className='text-3xl text-brandPrimary my-10 font-semibold'>SpaceCraft</h3>
                    <p className='text-xl w-96 font-semibold text-brandSecondary my-10'>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>
                    <div className='my-10'>
                        <h4 className='text-brandPrimary text-2xl font-semibold my-4'>Larry Diamond</h4>
                        <p className='text-lg text-brandSecondary'>Chief Executive Officer</p>
                    </div>
                </div>
                <div className='w-80 order-last md:order-first'>
                    <img src="https://i.ibb.co/t2fQBw7/spacecraft-ceo.png" alt="ceo" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials