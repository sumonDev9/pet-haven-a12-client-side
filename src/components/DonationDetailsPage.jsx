import React from 'react';
import DonationDatails from '../pages/donationDatails';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const DonationDetailsPage = () => {
    return (
        <Elements stripe={stripePromise}>
         <DonationDatails></DonationDatails>
        </Elements>
    );
};

export default DonationDetailsPage;