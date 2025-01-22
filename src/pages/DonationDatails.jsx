import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import DonationModal from '../components/DonationModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { MdCurrencyRupee } from 'react-icons/md';
import useAxiosPublic from '../hooks/useAxiosPublic';
import DonationCard from '../components/donationCard';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const DonationDatails = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState({})
  const [recommendedDonations, setRecommendedDonations] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const fetchAllPet = async () => {
    const { data } = await axios.get(`http://localhost:5000/donationCampaigns/${id}`)
    setDonation(data)
  }
  useEffect(() => {
    fetchAllPet()
  }, []);

// recommended donation
const fetchRandomDonations = async () => {
    const { data } = await axiosPublic.get('/donationCampaigns/recommended');
    setRecommendedDonations(data);
}

useEffect(() => {
  fetchRandomDonations();
}, []);

 const { _id, petImage, name, donatedAmount, maxDonation, longDescription, shortDescription, } = donation || {}

  return (
    <section className='bg-gray-200 dark:bg-gray-900 py-10'>
      <div className='w-11/12 mx-auto'>
      <p className='text-3xl text-secondary dark:text-white text-center pb-6 font-semibold'>{`${name} Donation details`}</p>
      </div>
      <Card className="rounded-xl bg-white dark:bg-gray-800 shadow-md max-w-3xl mx-auto">
        <CardHeader className="relative dark:bg-gray-800  shadow-none m-0 p-2 md:p-6 md:h-[420px]">
          <img
            className='rounded-md w-full object-cover h-full'
            src={petImage}
            alt=''
          />
        </CardHeader>
        <CardBody className='pt-0 space-y-2'>
          <Typography className="mb-2 text-4xl dark:text-white text-secondary">
            {name}
          </Typography>
          <Typography className="flex items-center text-info  dark:text-white mt-1">
            <span className="text-secondary dark:text-white font-semibold">Maximum Donation: </span><MdCurrencyRupee /> {maxDonation}
          </Typography>
          <Typography className="flex items-center text-info  dark:text-white mt-1">
            <span className="text-secondary dark:text-white font-semibold">Total Donation:</span><MdCurrencyRupee /> {donatedAmount}
          </Typography>
          <Typography className="mb-2 text-xl dark:text-white text-info">
            {shortDescription
            }
          </Typography>
          <Typography className='text-info dark:text-white text-lg'>
            {longDescription}
          </Typography>

        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={handleOpen} disabled={donation.isDonationStopped} className='text-base bg-primary'>Donate now</Button>
        </CardFooter>
      </Card>

      {/* donate now modal */}
      <Elements stripe={stripePromise}>
        <DonationModal open={open} fetchAllPet={fetchAllPet} setOpen={setOpen} name={name} petImage={petImage} _id={_id} ></DonationModal>
      </Elements>

      {/* recommended Donations */}
      <div className='py-10 md:py-20 '>
        {/* heading */}
        <div>
          <p className='text-xl lg:text-3xl md:text-2xl dark:text-white text-center font-semibold text-secondary'>Recommended Donation</p>
          <p className='text-lg md:text-xl lg:text-xl dark:text-white text-info max-w-3xl mx-auto text-center'>This section displays 3 active donation campaigns, showing the latest ones that need support.</p>
        </div>
        {/* card */}
        <div className='w-11/12 mx-auto pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              recommendedDonations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
            }
        </div>
      </div>

    </section>
  );
};

export default DonationDatails;