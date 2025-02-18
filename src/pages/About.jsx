import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* About section with a dark mode compatible layout */}
            <div class="bg-gray-50 dark:bg-gray-900 py-8">
                <div class="px-6 sm:px-12 lg:px-20">

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content: Image grid */}
                        <div class=" grid grid-cols-12 gap-5">

                            <div className='col-span-12 md:col-span-6'>
                                {/* First image with custom rounded corners */}
                                <img className='h-[300px] w-full rounded-tr-[50px] rounded-bl-[50px]' src="https://i.ibb.co/pvt4JJVp/image.png" alt="" />
                            </div>

                            {/* Second image with custom rounded corners */}
                            <div className='col-span-6 hidden md:block'>
                                <img className='h-[300px] mt-[50px]  rounded-tl-[50px] rounded-br-[50px] object-contain-fit' src="https://i.ibb.co/ymzSGHjh/image.png" alt="" />
                            </div>
                        </div>

                        {/* Right Content: About Us description */}
                        <div>
                            <h2 class="text-3xl font-bold dark:text-white text-primary">
                                About Us
                            </h2>
                            <p class="mt-6 text-lg dark:text-white text-info leading-relaxed">
                                Welcome to <strong class="text-primary font-semibold">Pet Adoption Platform</strong>, where we help pets find loving homes. Our mission is to simplify the adoption process, making it a joyful experience for both pets and families.
                            </p>
                            <p class="mt-4 text-info dark:text-white leading-relaxed">
                                This platform is designed to connect pet lovers with their future companions while ensuring every adoption is handled responsibly. From playful puppies to serene cats, we’re here to make sure your pet adoption journey is seamless and trustworthy.
                            </p>
                            <p class="mt-4 text-info dark:text-white leading-relaxed">
                                Every pet listed on our platform comes from verified sources, and we prioritize transparency and care in every step of the process.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;