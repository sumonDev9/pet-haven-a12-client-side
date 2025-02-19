import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth';
import { MdEmail } from 'react-icons/md';

const UserProfile = () => {
    const [userCountry, setUserCountry] = useState()
    const {user} = UseAuth();
    console.log(user)

    useEffect(() => {
    
        const currentDate = new Date();
    
        
        const timeZoneOffset = currentDate.getTimezoneOffset(); 
    
        
        const offsetInHours = -timeZoneOffset / 60;
    
        
        const countryByTimeZone = {
          '5.5': 'India',  
          '-5': 'United States (Eastern)',  
          '-4': 'United States (Atlantic)', 
          '0': 'United Kingdom',  
          '1': 'Germany',  
          '6': 'Bangladesh',
          '9': 'Japan',  
          '8': 'China',  
          '3': 'Saudi Arabia',  
          '2': 'South Africa',  
          '-8': 'United States (Pacific)',  
          '-7': 'United States (Mountain)',  
          '-6': 'United States (Central)',  
          '10': 'Australia (Eastern)',
        };
    
       
        setUserCountry(countryByTimeZone[offsetInHours] || 'Unknown Country');
      }, []);
    return (
  
        <div>
            <div className='py-10'>
                <h1 className='text-center text-3xl font-semibold'>Wellcome {user?.displayName}</h1>
            </div>
              <div className='space-y-4 mb-10 max-w-[400px] rounded-lg mx-auto text-center bg-white shadow-md border-2 p-6 border-[rgba(17, 17, 17, 0.1)]'>
                <img src={user?.photoURL} className='w-24 h-24 rounded-full mx-auto' alt="Profile img" />
                <div className='flex gap-4 items-center'>
                    <p>Name:</p>
                    <p>{user?.displayName}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>Email: </p>
                    <p>{user?.email}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>phone No: </p>
                    <p>Not Available</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>Address: </p>
                    <p>{userCountry}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>Last login: </p>
                    <p>{user?.metadata.lastSignInTime
                    }</p>
                </div>
         
            </div>
        </div>
    );
};

export default UserProfile;