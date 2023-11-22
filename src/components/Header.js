import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='relative'>
                <div className='flex justify-end'>
                    <img src="https://i.ibb.co/28Wd5Yc/header-banner.jpg" alt="header-banner" className='w-[80%]' />
                </div>
                <div className='backdrop-opacity-20 backdrop-invert bg-white/30 absolute top-64 left-32 w-2/5 h-3/6'>
                    <div className='flex flex-col px-4 '>
                        <h1 className='text-5xl pt-2 tracking-wide leading-snug font-semibold text-brandPrimary'>We Help You <br /> Make Mordern <br /> Interior</h1>
                        <p className='pt-2 tracking-wide leading-snug text-brandPrimary'>We will help you to make an elegant <br /> and luxurios interior designed by <br /> professional interior designer.</p>
                    </div>
                </div>
                <div className='absolute top-20 z-[-111111]'>
                    <img src="https://i.ibb.co/WxfmFx2/dotted-image.png" alt="dotted_image" />
                </div>
            </div>
        </div>
    )
}

export default Header