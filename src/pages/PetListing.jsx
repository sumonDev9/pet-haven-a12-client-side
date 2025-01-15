import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Input, Option, Select } from '@material-tailwind/react';
import { CiSearch } from 'react-icons/ci';


const PetListing = () => {
    return (
       <div className='bg-gray-50  py-10'>
           <div className='w-11/12 mx-auto'>
          <SectionTitle
          heading={"Find Your Furry Friend"}
          subHeading={"Explore our lovable pets waiting for a forever home. Search by name, filter by category, and discover the joy they can bring to your life!"}
          ></SectionTitle>

            {/* Filters Section */}
            <div className='flex pb-10 justify-between items-center flex-col md:flex-row gap:4 md:gap-8'>
                    {/* search */}
                    {/* <div className='bg-gray-200 dark:bg-slate-700 p-2 w-full rounded-md '>
                        
                    </div> */}
                    <div className="w-full md:w-72">
                            <Input label="search" className='bg-white  text-secondary' icon={<CiSearch />} />
                    </div>
                    {/* sort price */}
                    <div className="w-full mt-4 md:mt-0 md:w-72">
                            <Select label="category" className='bg-white'>
                                <Option>Cat</Option>
                                <Option>Dog</Option>
                                <Option>Rabbit</Option>
                                <Option>Fish</Option>
                            </Select>
                        </div>
                </div>
           </div>
       </div>
    );
};

export default PetListing;