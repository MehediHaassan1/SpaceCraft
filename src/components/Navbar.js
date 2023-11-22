import React from 'react';


const Navbar = () => {
    const navMenu = [
        { id: 1, path: "/home", title: "Home" },
        { id: 2, path: "/about", title: "About" },
        { id: 3, path: "/features", title: "Features" },
        { id: 4, path: "/contact", title: "Contact" },
    ];
    return (
        <div className='flex items-center justify-between md:my-4 sticky top-0 z-[100000]'>
            <div>
                <a href="/" className='flex items-center'>
                    <img src="https://i.ibb.co/5LD39Z3/main-logo.png" alt="logo" />
                    <span className='ml-2 font-semibold text-2xl'>SpaceCraft</span>
                </a>
            </div>
            <div>
                <div className='flex flex-col md:flex-row  md:items-center md:justify-between md:w-1/3'>
                    {
                        navMenu.map(nav => <div key={nav.id}
                            className='mx-2'
                        >
                            <a href={nav.path} className='font-semibold text-lg hover:border-b-2 pb-2 hover:border-brandSecondary hover:transition-all hover:duration-500 rounded'>{nav.title}</a>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar