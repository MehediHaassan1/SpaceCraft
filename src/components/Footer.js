import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <footer class="bg-gray-800 text-white p-4">
                <div class="container mx-auto">
                    <div class="flex flex-wrap justify-between">
                        <div class="mb-4 md:mb-0">
                            <h3 class="text-lg font-semibold">Contact Us</h3>
                            <p>Email: info@example.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                        <div class="mb-4 md:mb-0">
                            <h3 class="text-lg font-semibold">Follow Us</h3>
                            <a href="/" class="mr-4">Facebook</a>
                            <a href="/">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer