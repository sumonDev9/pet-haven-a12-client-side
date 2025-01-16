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
    Dialog,
    Input,
    Textarea,
  } from "@material-tailwind/react";
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';

// import {
//   Button,
//   Dialog,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
// } from "@material-tailwind/react";

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    const {_id, image, name, longDescription, shortDescription, age, location} = pet || {}
    return (
     <section className='w-11/12 mx-auto'>
           <Card className="mt-6 shadow-md max-w-3xl mx-auto">
        <CardHeader className="relative shadow-none m-0 p-2 md:p-6 md:h-[420px] rounded-none">
          <img
             className='rounded-md w-full object-cover h-full'
            src={image}
            alt=''
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
          <Button onClick={handleOpen} className='text-base bg-primary'>Adopt</Button>
        </CardFooter>
      </Card>


      {/* modal form */}
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-white shadow  h-[550px] overflow-scroll"
      >
        <Card className="mx-auto w-full shadow-sm rounded-none  max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" className='text-center text-secondary'>
              {name}
            </Typography>
            {/* pet id */}
            <Typography className="-mb-2" variant="h6">
             Pet ID
            </Typography>
            <Input label="text" defaultValue={_id} disabled={true} size="xl" />
            {/* Pet name */}
            <Typography className="-mb-2" variant="h6">
             Pet name
            </Typography>
            <Input label="text" defaultValue={name} disabled={true} size="xl" />
            {/* Pet image */}
            <Typography className="-mb-2" variant="h6">
            Pet image
            </Typography>
            <Input label="text" defaultValue={image} disabled={true} size="xl" />
            {/* user name */}
            <Typography className="-mb-2" variant="h6">
            User name
            </Typography>
            <Input label="text" defaultValue={user?.displayName} disabled={true} size="xl" />
            {/* user Email */}
            <Typography className="-mb-2" variant="h6">
            User email
            </Typography>
            <Input label="text" defaultValue={user?.email} disabled={true} size="xl" />
            {/* phone no */}
            <Typography className="-mb-2" variant="h6">
            Phone no
            </Typography>
            <Input label="number" name='phone' size="xl" />
            {/* Address */}
            <Typography className="-mb-2" variant="h6">
              Address
            </Typography>
            {/* <Input label="text" name='address' className='w-full' size="xl" /> */}
            <Textarea label="Message" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
     </section>
    );
};

export default PetDetails;