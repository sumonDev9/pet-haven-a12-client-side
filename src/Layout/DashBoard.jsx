import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { RiMenu2Fill } from 'react-icons/ri';
import UseAuth from '../hooks/UseAuth';
const DashBoard = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const {user} = UseAuth();
    const isAdmin= true;
    return (
        <div>
            {/* responsive sidebar */}
          <div className='bg-white shadow-md'>
          <React.Fragment>
                <Button className='bg-base-100 flex md:hidden' onClick={openDrawer}><RiMenu2Fill className='text-2xl text-secondary'/></Button>
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            {user?.displayName}
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <div>
                        <ul className='navlinks space-y-4'>
                            <li><Link to='/dashboard/addPets'>Add a pet</Link></li>
                            <li><Link>My added pets</Link></li>
                            <li><Link>Adoption Request</Link></li>
                            <li><Link to='/dashboard/createDonation'>Create Donation Campaign</Link></li>
                            <li><Link>My Donation Campaigns</Link></li>
                            <li><Link>My Donations</Link></li>
                        </ul>
                    </div>
                </Drawer>
            </React.Fragment>
          </div>
            {/* sidebar */}
            <div className='flex'>
                <div className="w-72  hidden md:block min-h-screen bg-primary">
                <Link to='/'>
                <Typography className='text-white px-5 py-5 text-2xl font-bold'>
                            {user?.displayName}
                        </Typography>
                </Link>
                    <ul className='px-5 w-full text-white navlinks text-base space-y-2'>
                        <li className='text-white rounded-md'><NavLink  to='/dashboard/addPets'>Add a pet</NavLink></li>
                        <li className='text-white rounded-md'><NavLink to='/dashboard/myAddpets'>My added pets</NavLink></li>
                        <li className='text-white rounded-md'><NavLink>Adoption Request</NavLink></li>
                        <li className='text-white rounded-md'><NavLink to='/dashboard/createDonation'>Create Donation Campaign</NavLink></li>
                        <li className='text-white rounded-md'><NavLink>My Donation Campaigns</NavLink></li>
                        <li className='text-white rounded-md'><NavLink>My Donations</NavLink></li>
                        
                        {/* // isAdmin ? <>
                        // <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
                        // <li><NavLink to='/dashboard/allPets'>All Pets</NavLink></li>
                        // <li><NavLink to='/dashboard/allDonations'>All Donations</NavLink></li>
                        // </> 
                        // : 
                        // <>
                        //  <li className='text-white rounded-md'><NavLink>My added pets</NavLink></li>
                        // <li className='text-white rounded-md'><NavLink  to='/dashboard/addPets'>Add a pet</NavLink></li>
                        // <li className='text-white rounded-md'><NavLink>Adoption Request</NavLink></li>
                        // <li className='text-white rounded-md'><NavLink to='/dashboard/createDonation'>Create Donation Campaign</NavLink></li>
                        // <li className='text-white rounded-md'><NavLink>My Donation Campaigns</NavLink></li>
                        // <li className='text-white rounded-md'><NavLink>My Donations</NavLink></li>
                        // </> */}

                       
                    </ul>
                </div>
                {/* content */}
                <div className="flex-1 bg-gray-200 px-10 pt-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

   
    );
};

export default DashBoard;