import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, Input, Typography } from '@material-tailwind/react';

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const DonationDatails = () => {
    const {id} = useParams();
    const [donation, setDonation] = useState({})
    const { user } = UseAuth();
     
    const fetchAllPet = async () => {
        const { data } = await axios.get(`http://localhost:5000/donationCampaigns/${id}`)
        setDonation(data)
        console.log(data)
      }

       useEffect(() => {
          fetchAllPet()
        }, []);
      
          const [open, setOpen] = React.useState(false);
          const handleOpen = () => setOpen((cur) => !cur);

        // donation now
        const handleSubmit = (e) => {

        }



        const { _id, petImage, name, longDescription, shortDescription,  } = donation || {}
    return (
    <section>
         <Card className="mt-6 shadow-md max-w-3xl mx-auto">
        <CardHeader className="relative shadow-none m-0 p-2 md:p-6 md:h-[420px] rounded-none">
          <img
            className='rounded-md w-full object-cover h-full'
            src={petImage}
            alt=''
          />
        </CardHeader>
        <CardBody className='pt-0'>
          <Typography className="mb-2 text-4xl text-secondary">
            {name} 
          </Typography>
          <Typography className="mb-2 text-2xl text-info">
            {shortDescription
            }
          </Typography>
          <Typography className='text-info'>
            {longDescription}
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={handleOpen} className='text-base bg-primary'>Donate now</Button>
        </CardFooter>
      </Card>

      {/* donate now modal */}
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-white shadow"
      >

        <Card className="mx-auto w-full shadow-sm rounded-none max-w-[24rem]">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6">
              Pet image
            </Typography>
            <Input label="text" size="xl" />
           </CardBody>
            <CardFooter className="pt-0">
             <Button variant="gradient" type="submit" fullWidth>
             Donate Now
              </Button>
           
          </CardFooter>
          </form>
        </Card>

      </Dialog>

    </section>
    );
};

export default DonationDatails;