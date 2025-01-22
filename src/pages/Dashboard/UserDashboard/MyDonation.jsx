import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import UseAuth from '../../../hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import { Card, Typography, Button  } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Name", "Job", "Employed", ""];
const MyDonation = () => {
     const axiosSecure = useAxiosSecure();
     const {user} = UseAuth();

     const { data: payments, isLoading, error } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            console.log('Fetching payments for:', user?.email);

            if (!user?.email) return [];
            const res = await axiosSecure.get(`/payments/${user.email}`);
            console.log('API Response:', res.data);
            return res.data;
        },
    });
    console.log('Payments Data:', payments);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Failed to load donations.</div>;
    }
    
    if (!payments || payments.length === 0) {
        return <div>No donations found.</div>;
    }
 
       // Handle refund operation (DELETE request)
       const handleRefund = async (id) => {
        
        try {
            const res = await axiosSecure.delete(`/payments/${id}`);
            if (res.data.message === 'Donation removed successfully.') {
                
                console.log('Refund successful');
            } else {
                console.log('Failed to refund');
            }
        } catch (error) {
            console.error('Error during refund:', error);
        }
    };

    return (
   <section className='bg-gray-100'>
         <Card className="h-auto w-full overflow-x-scroll p-4">
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    <th className="border-b p-4 bg-primary text-white">Pet Image
                    </th>
                    <th className="border-b p-4 bg-primary text-white">Pet Name</th>
                    <th className="border-b p-4 bg-primary text-white">Donated Amount</th>
                    <th className="border-b p-4 bg-primary text-white">Refund</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment, index) => (
                    <tr key={payment._id}>
                        <td className="p-4 border-b">
                            <img src={payment.petImage} alt={payment.petName} className="h-16 w-16 object-cover rounded-full" />
                        </td>
                        <td className="p-4 border-b">
                            <Typography variant="small" className="font-normal text-secondary">
                                {payment.petName}
                            </Typography>
                        </td>
                        <td className="p-4 border-b">
                            <Typography variant="small" className="font-normal text-secondary">
                                ${payment.donationAmount}
                            </Typography>
                        </td>
                        <td className="p-4 border-b">
                            <Button
                                size="sm"
                                color="red"
                                onClick={() => handleRefund(payment._id)}
                            >
                                রিফান্ড
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Card>
   </section>
        
    );
};

export default MyDonation;