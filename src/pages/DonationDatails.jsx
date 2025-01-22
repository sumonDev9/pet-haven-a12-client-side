import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import DonationModal from '../components/DonationModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { MdCurrencyRupee } from 'react-icons/md';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const DonationDatails = () => {
    const {id} = useParams();
    const [donation, setDonation] = useState({})
   
     
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

     



        const { _id, petImage, name, donatedAmount, maxDonation, longDescription, shortDescription,  } = donation || {}
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
          <Typography className="flex items-center text-info  dark:text-white mt-1">
                     <span className="text-secondary dark:text-white">Maximum Donation:</span><MdCurrencyRupee /> {maxDonation}
                    </Typography>
                    <Typography className="flex items-center text-info  dark:text-white mt-1">
                     <span className="text-secondary dark:text-white">Total Donation:</span><MdCurrencyRupee /> {donatedAmount}
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
      <Elements stripe={stripePromise}>
      <DonationModal open={open} setOpen={setOpen} name={name} petImage={petImage} _id={_id} ></DonationModal>
      </Elements>

    </section>
    );
};

export default DonationDatails;