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
import { useSnackbar } from 'notistack';


const PetDetails = () => {
  const [pet, SetPets] = useState({})
  const { user } = UseAuth();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    fetchAllPet()
  }, []);

  const fetchAllPet = async () => {
    const { data } = await axios.get(`https://pet-adoption-platform-sever-side.vercel.app/pets/${id}`)
    SetPets(data)
    console.log(data)
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);


  // request 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const address = form.address.value;
    // console.log(phone)
    const adoptionData = {
      petId: pet._id,
      petName: pet.name,
      petimage: pet.image,
      userName: user?.displayName,
      userEmail: user?.email,
      email: pet.userEmail,
      phone,
      address
    }
 console.log(pet.userEmail)
    // console.log(adoptionData )

    await axios.post('https://pet-adoption-platform-sever-side.vercel.app/adoptions', adoptionData)
      .then(res => {
        if (res.data.insertedId) {
          enqueueSnackbar(`Congratulations, ${user?.displayName}! You’ve successfully adopted ${pet.name}!`, { variant: 'success',  autoHideDuration: 1000 });
        }
      })
    setOpen(false)
  }

  const { _id, 
    userEmail,
     image, name, longDescription, shortDescription, age, location } = pet || {}
  return (
  <section className='bg-gray-50 dark:bg-blue-gray-900'>
      <div className='w-11/12 py-10  mx-auto'>
      <Card className="mt-6 dark:bg-blue-gray-800 rounded-md shadow-md max-w-3xl mx-auto">
        <CardHeader className="relative dark:bg-blue-gray-800 shadow-none m-0 p-2 md:p-6 md:h-[420px] rounded-none">
          <img
            className='rounded-md w-full  object-cover h-full'
            src={image}
            alt=''
          />
        </CardHeader>
        <CardBody className='pt-0'>
          <Typography className="mb-2 text-4xl dark:text-white text-secondary">
            {name} 
          </Typography>
          <Typography className="mb-2 text-2xl dark:text-white text-info">
            {shortDescription
            }
          </Typography>
          <Typography className='text-info dark:text-white'>
            {longDescription}
          </Typography>
          <div className='flex gap-5'>
            <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
              <MdOutlineDateRange /> {age} Year
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



      {/* modal */}
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-white shadow h-[550px] overflow-scroll"
      >

        <Card className="mx-auto w-full shadow-sm rounded-none max-w-[24rem]">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" className="text-center text-secondary">
            Adopt {name}
            </Typography>
            {/* <Typography className="-mb-2" variant="h6">
              Pet ID
            </Typography>
            <Input label="text" defaultValue={_id} disabled size="xl" />
            <Typography className="-mb-2" variant="h6">
              Pet name
            </Typography>
            <Input label="text" defaultValue={name} disabled size="xl" />
            <Typography className="-mb-2" variant="h6">
              Pet image
            </Typography>
            <Input label="text" defaultValue={image} disabled size="xl" /> */}
            <Typography className="-mb-2" variant="h6">
              User name
            </Typography>
            <Input label="text" defaultValue={user?.displayName} disabled size="xl" />
            <Typography className="-mb-2" variant="h6">
              User email
            </Typography>
            <Input label="text" defaultValue={user?.email} disabled size="xl" />
            <Typography className="-mb-2" variant="h6">
              Phone no
            </Typography>
            <Input label="number" name="phone" size="xl" required/>
            {/* <input type="text" placeholder='Your number' name="phone" /> */}
            <Typography className="-mb-2" variant="h6">
        Address
      </Typography>
      <Textarea required name="address" label="Address" />
          </CardBody>
          <CardFooter className="pt-0">
            
              <Button variant="gradient" type="submit" fullWidth>
               Submit
              </Button>
           
          </CardFooter>
          </form>
        </Card>

      </Dialog>

    </div>
  </section>
  );
};

export default PetDetails;