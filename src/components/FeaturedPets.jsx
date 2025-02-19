import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';

const FeaturedPets = () => {
    const [pets, setpets] = useState([]);
    useEffect(() => {
        fetch('https://pet-adoption-platform-sever-side.vercel.app/pets')
            .then(res => res.json())
            .then(data => {
                setpets(data.slice(0, 8))
            })
    }, [])

    return (
     <div className='py-10 bg-gray-50 dark:bg-gray-900'>
         <SectionTitle
          heading={"Adorable Pets Ready for Adoption"}
          subHeading={"Find your perfect companion! These lovable pets are looking for a forever home. Adopt today and give them the love they deserve!"}
          ></SectionTitle>
           <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                pets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
            }
        </div>
        <div className='flex justify-center py-10' data-aos="fade-in">
                <Link to='/petListing'>
                    <button className='bg-primary py-2 px-3 text-white text-xl font-bold rounded-lg transform transition duration-300 ease-in-out  hover:scale-105'>
                        All Pets
                    </button>
                </Link>
            </div>
     </div>
    );
};

export default FeaturedPets;