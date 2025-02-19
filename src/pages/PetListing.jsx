import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Input, Option, Select } from '@material-tailwind/react';
import { CiSearch } from 'react-icons/ci';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PetCard from '../components/PetCard';
import { ScrollRestoration } from 'react-router-dom';


const PetListing = () => {
  
    const [pet, setPet] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState("asc");

   const {data: pets, isPending} = useQuery({
    queryKey: ['pets', filter, search],
    queryFn: async () => {
        const res = await axios.get(`https://pet-adoption-platform-sever-side.vercel.app/pets?filter=${filter}&search=${search}&adopted=false `);
        return res.data;
    }
})
   
  const handleSortChange = (e) => {
    const order = e.target.value; 
    setSortOrder(order);
}


if(isPending){
    <span>Loading...</span>
}

 return (
       <div className='bg-gray-50 dark:bg-gray-900  py-10'>
        <ScrollRestoration></ScrollRestoration>
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
                  <div className='flex flex-col md:flex-row w-full md:gap-5 items-center'>
                      {/* sort price */}
                      <div className="w-full mt-4 md:mt-0 lg:w-72">
                            <select 
                            onChange={(e) => setFilter(e.target.value)}
                            className='border p-2 w-full  rounded-lg'
                            name="category">
                                <option value="">Filter By Category</option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Bird">Bird</option>
                            </select>
                        </div>
                      {/* sort price */}
                      <div className="w-full mt-4 md:mt-0 lg:w-72">
                            <select 
                            id="sort"
                            value={sortOrder}
                            onChange={handleSortChange}
                            className='border p-2 w-full rounded-lg'
                            name="category">
                                <option value="">pet year</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                  </div>
                </div>
               {
                pets?.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    pets?.slice() 
                    .sort((a, b) => (sortOrder === "asc" ? a.age - b.age : b.age - a.age)).map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                }
            </div> :  
           <div className="flex  my-5 min-h-80  rounded-lg justify-center items-center gap-2 flex-col">
            <img src='https://i.ibb.co/fNHCKcb/error.webp' className="w-32" alt="" />
            <h1 className="text-primary dark:text-white font-bold text-3xl">No Data Found</h1>
            </div>
               }
           </div>
       </div>
    );
};
export default PetListing;