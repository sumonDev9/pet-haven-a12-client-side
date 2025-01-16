import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';

const PetDetails = () => {
    const [pet, SetPets] = useState({})
    const {user} = UseAuth();
    const {id} = useParams();

    useEffect(() => {
        fetchAllPet()
    }, []);

    const fetchAllPet = async () => {
        const { data } = await axios.get(`http://localhost:5000/pets/${id}`)
        SetPets(data)
    }
    const {_id, image, name, longDescription, shortDescription, age, location} = pet || {}
    return (
     <section className='w-11/12 mx-auto'>
           <Card className="mt-6 shadow-md max-w-3xl mx-auto">
        <CardHeader className="relative shadow-none m-0 p-2 md:p-6 md:h-[420px] rounded-none">
          <img
             className='rounded-md w-full object-cover h-full'
            src={image}
            alt={name}
          />
        </CardHeader>
        <CardBody className='pt-0'>
          <Typography  className="mb-2 text-4xl text-secondary">
            {name}
          </Typography>
          <Typography  className="mb-2 text-2xl text-info">
            {shortDescription
            }
          </Typography>
          <Typography className='text-info'>
           {longDescription}
          </Typography>
          <div className='flex gap-5'>
            <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
                    <MdOutlineDateRange /> {age}
                    </Typography>
                    <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
                    <FaLocationDot /> {location}
                    </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className='text-base bg-primary'>Adopt</Button>
        </CardFooter>
      </Card>
     </section>
    );
};

export default PetDetails;