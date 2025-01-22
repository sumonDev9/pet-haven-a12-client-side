import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Input, Option, Select } from '@material-tailwind/react';
import { CiSearch } from 'react-icons/ci';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PetCard from '../components/PetCard';


const PetListing = () => {
  

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');


   const {data: pets, isPending} = useQuery({
    queryKey: ['pets', filter, search],
    queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/pets?filter=${filter}&search=${search}&adopted=false `);
        return res.data;
    }
})
   



if(isPending){
    <span>Loading...</span>
}

 return (
       <div className='bg-gray-50 dark:bg-gray-900  py-10'>
           <div className='w-11/12 mx-auto'>
          <SectionTitle
          heading={"Find Your Furry Friend"}
          subHeading={"Explore our lovable pets waiting for a forever home. Search by name, filter by category, and discover the joy they can bring to your life!"}
          ></SectionTitle>

            {/* Filters Section */}
            <div className='flex pb-10 justify-between items-center flex-col md:flex-row gap:4 md:gap-8'>
                    {/* search */}
                    <div className="w-full  md:w-72">
                            <Input
                            onChange={e => setSearch(e.target.value)}
                            label="search"
                            className='bg-white  text-secondary' icon={<CiSearch />} />
                    </div>
                    {/* sort price */}
                    <div className="w-full mt-4 md:mt-0 md:w-72">
                            <select 
                            onChange={(e) => setFilter(e.target.value)}
                            className='border p-2 w-72 rounded-lg'
                            name="category">
                                <option value="">Filter By Category</option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Bird">Bird</option>
                            </select>
                        </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        pets?.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                    }
                </div>
           </div>
       </div>
    );
};
export default PetListing;