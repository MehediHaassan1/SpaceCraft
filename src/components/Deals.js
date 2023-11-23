import React from 'react'

const Deals = () => {
    const oursDeals = [
        { id: 1, title: "1.5% Cashback", description: "Online shopping for retails sales direct to consumers", image: "https://i.ibb.co/qY2jRvL/money.png" },
        { id: 2, title: "30-day terms", description: "Online shopping for retails sales direct to consumers", image: "https://i.ibb.co/vYjsSrs/calender.png" },
        { id: 3, title: "Save Money", description: "Online shopping for retails sales direct to consumers", image: "https://i.ibb.co/dr8skfc/save-money.png" },
    ]
    return (
        <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 content-center'>
            <div>
                <h1 className='text-brandPrimary text-5xl font-semibold leading-6'>
                    <span className='flex items-center'>
                        Hot <img src="https://i.ibb.co/mBj8ncG/fire.png" alt="fire" className='ml-7 w-8 h-8' /></span>
                    <br />
                    deals for you
                </h1>
                <p className='mt-6 text-brandSecondary text-lg'>Online shopping for retails sales <br /> direct to consumers</p>
            </div>

            {
                oursDeals.map(deals => <div
                    key={deals.id}
                    className='relative'
                >
                    <img src={deals.image} alt={deals.title} />
                    <h4 className='text-2xl font-semibold text-brandPrimary absolute bottom-16'>{deals.title}</h4>
                    <p className='text-brandSecondary text-lg absolute bottom-0'>{deals.description}</p>
                </div>)
            }

        </div>
    )
}

export default Deals;