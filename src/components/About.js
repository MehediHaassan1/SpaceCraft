import React from 'react';
import Gallery from "react-photo-gallery";

const About = () => {
    const BasicRows = () => <Gallery photos={photos} />;

    const photos = [
        {
            src: "https://i.ibb.co/LQ61vQS/about-pic1.jpg",
            width: 5,
            height: 4
        },
        {
            src: "https://i.ibb.co/SJ7d8d0/about-pic3.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://i.ibb.co/XjV5bL1/about-pic2.jpg",
            width: 7,
            height: 4
        },
        {
            src: "https://i.ibb.co/wC8qT15/about-pic4.jpg",
            width: 6,
            height: 4
        }
    ];

    const aboutInfo = [
        { id: 1, title: "Who we are?", description: "We get a 2-weeks free trail to kick the Smarty tries. We want you to." },
        { id: 2, title: "What Do We Do?", description: "We give you a free course that guides you through the process." },
        { id: 3, title: "How Do We Help?", description: "Use our multimedia lectures, videos, and coaching sessions." },
        { id: 4, title: "Create Success Story", description: "With access to online learning resources anyone can transform." },
    ]

    return (
        <div>
            <div className='md:my-16 flex items-center justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-5xl text-brandPrimary font-semibold tracking-wider leading-relaxed '>About Us</h1>
                    <p className='text-2xl text-brandSecondary'>At Besnik Consultancy, we take pride in our values - service, integrity  and excellence</p>
                </div>
                <div>
                    <button className='px-4 py-2 text-xl text-brandPrimary font-semibold shadow-2xl bg-[#F4F6F5]'>Learn more</button>
                </div>
            </div>

            <div className='h-screen grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {
                        aboutInfo.map(info => <div id={info.id}>
                            <h1 className='text-brandPrimary text-4xl mb-4 font-bold' >{info.id}.</h1>
                            <h1 className='text-brandPrimary text-4xl mb-4 font-bold' >{info.title}</h1>
                            <p className='text-xl text-brandSecondary'>{info.description}</p>
                        </div>)
                    }
                </div>
                <div>
                    <BasicRows />
                </div>
            </div>
        </div>
    )
}

export default About;    