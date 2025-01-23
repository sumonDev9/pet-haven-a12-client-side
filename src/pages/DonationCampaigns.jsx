import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SectionTitle from '../components/SectionTitle';
import DonationCard from '../components/donationCard';

const DonationCampaigns = () => {
    const axiosPublic = useAxiosPublic();

    const {data: donationCampaigns} = useQuery({
        queryKey: ['donationCampaigns'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donationCampaigns');
            return res.data;
        }
    })

    
    const record = donationCampaigns?.filter(dCom=> (dCom.isDonationStopped !== true)) || [] ;

    return (
        <div className='py-10 dark:bg-gray-900'>
            <SectionTitle heading={'Support Our Donation Campaigns'}
                subHeading={"Join us in helping pets in need. Explore and contribute to ongoing donation campaigns. Scroll down to discover more."}
            ></SectionTitle>

            {/* card */}
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 '>
                {
                    record?.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;