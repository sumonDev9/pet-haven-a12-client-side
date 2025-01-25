import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { RiMenu2Fill } from 'react-icons/ri';

import UseAdmin from '../hooks/UseAdmin';
import UseAuth from '../hooks/UseAuth';
const DashBoard = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const {user} = UseAuth();
    const [isAdmin] = UseAdmin();
    return (
        // <div>
        //     {/* responsive sidebar */}
        //   <div className='bg-white sticky top-0 z-50 shadow-md'>
        //   <React.Fragment>
        //         <Button className='bg-base-100 flex md:hidden' onClick={openDrawer}><RiMenu2Fill className='text-2xl text-secondary'/></Button>
        //         <Drawer open={open} onClose={closeDrawer} className="p-4">
        //             <div className="mb-6 flex items-center justify-between">
        //                 <Typography variant="h5" color="blue-gray">
        //                     {user?.displayName}
        //                 </Typography>
        //                 <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         strokeWidth={2}
        //                         stroke="currentColor"
        //                         className="h-5 w-5"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M6 18L18 6M6 6l12 12"
        //                         />
        //                     </svg>
        //                 </IconButton>
        //             </div>
        //             <div>
        //                 <ul className='navlinks space-y-4'>
        //                 {
        //                   isAdmin ? <>

        //                   <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
        //                   <li><NavLink to='/dashboard/allPets'>All Pets</NavLink></li>
        //                   <li><NavLink to='/dashboard/allDonations'>All Donations</NavLink></li>
        //                   </> 
        //                   : 
        //                   <>
        //                   <li className='rounded-md'><NavLink  to='/dashboard/addPets'>Add a pet</NavLink></li>
        //                   <li className='rounded-md'><NavLink to='/dashboard/myAddpets'>My added pets</NavLink></li>
        //                   <li className='rounded-md'><NavLink to='/dashboard/adoptionRequests'>Adoption Request</NavLink></li>
        //                   <li className='rounded-md'><NavLink to='/dashboard/createDonation'>Create Donation Campaign</NavLink></li>
        //                   <li className='rounded-md'><NavLink to='/dashboard/myDonationCampaign'>My Donation Campaigns</NavLink></li>
        //                   <li className='rounded-md'><NavLink to='/dashboard/myDonation'>My Donations</NavLink></li>
        //                   </>
        //                }
        //                 </ul>
        //             </div>
        //         </Drawer>
        //     </React.Fragment>
        //   </div>
        //     {/* sidebar */}
        //     <div className='flex'>
        //         <div className="w-72  hidden md:block min-h-screen bg-primary">
        //         <Link to='/'>
        //         <Typography className='text-white px-5 py-5 text-2xl font-bold'>
        //                     {user?.displayName}
        //                 </Typography>
        //         </Link>
        //             <ul className='px-5 w-full text-white navlinks text-base  space-y-3'>
                       
        //                {
        //                   isAdmin ? <>

        //                   <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
        //                   <li><NavLink to='/dashboard/allPets'>All Pets</NavLink></li>
        //                   <li><NavLink to='/dashboard/allDonations'>All Donations</NavLink></li>
        //                   </> 
        //                   : 
        //                   <>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/addPets'>Add a pet</NavLink></li>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/myAddpets'>My added pets</NavLink></li>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/adoptionRequests'>Adoption Request</NavLink></li>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/createDonation'>Create Donation Campaign</NavLink></li>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/myDonationCampaign'>My Donation Campaigns</NavLink></li>
        //                   <li className='text-white rounded-md'><NavLink to='/dashboard/myDonation'>My Donations</NavLink></li>
        //                   </>
        //                }

                       
        //             </ul>
        //         </div>
        //         {/* content */}
        //         <div className="flex-1 bg-gray-200 px-10 pt-10">
        //             <Outlet></Outlet>
        //         </div>
        //     </div>
        // </div>

        <div className="h-screen grid grid-rows-[auto,1fr]">
        {/* Top Navbar */}
        <div className='bg-white sticky top-0 z-50 shadow-md px-4 py-2 flex items-center justify-between md:hidden'>
            <Button className='bg-base-100' onClick={openDrawer}>
                <RiMenu2Fill className='text-2xl text-secondary' />
            </Button>
            <Typography variant="h5" color="blue-gray">
                {user?.displayName}
            </Typography>
        </div>

        {/* Responsive Drawer */}
        <React.Fragment>
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
                        {isAdmin ? (
                            <>
                                <li><NavLink to='/dashboard/allUsers' activeClassName="font-bold text-primary">All Users</NavLink></li>
                                <li><NavLink to='/dashboard/allPets' activeClassName="font-bold text-primary">All Pets</NavLink></li>
                                <li><NavLink to='/dashboard/allDonations' activeClassName="font-bold text-primary">All Donations</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to='/dashboard/addPets' activeClassName="font-bold text-primary">Add a pet</NavLink></li>
                                <li><NavLink to='/dashboard/myAddpets' activeClassName="font-bold text-primary">My added pets</NavLink></li>
                                <li><NavLink to='/dashboard/adoptionRequests' activeClassName="font-bold text-primary">Adoption Request</NavLink></li>
                                <li><NavLink to='/dashboard/createDonation' activeClassName="font-bold text-primary">Create Donation Campaign</NavLink></li>
                                <li><NavLink to='/dashboard/myDonationCampaign' activeClassName="font-bold text-primary">My Donation Campaigns</NavLink></li>
                                <li><NavLink to='/dashboard/myDonation' activeClassName="font-bold text-primary">My Donations</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </Drawer>
        </React.Fragment>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[250px,1fr]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col bg-primary text-white h-screen sticky top-0">
                <Link to='/' className="px-6 py-5 text-2xl font-bold">
                    {user?.displayName}
                </Link>
                <ul className='px-6 space-y-4 text-base'>
                    {isAdmin ? (
                        <>
                            <li><NavLink to='/dashboard/allUsers' activeClassName="font-bold">All Users</NavLink></li>
                            <li><NavLink to='/dashboard/allPets' activeClassName="font-bold">All Pets</NavLink></li>
                            <li><NavLink to='/dashboard/allDonations' activeClassName="font-bold">All Donations</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to='/dashboard/addPets' activeClassName="font-bold">Add a pet</NavLink></li>
                            <li><NavLink to='/dashboard/myAddpets' activeClassName="font-bold">My added pets</NavLink></li>
                            <li><NavLink to='/dashboard/adoptionRequests' activeClassName="font-bold">Adoption Request</NavLink></li>
                            <li><NavLink to='/dashboard/createDonation' activeClassName="font-bold">Create Donation Campaign</NavLink></li>
                            <li><NavLink to='/dashboard/myDonationCampaign' activeClassName="font-bold">My Donation Campaigns</NavLink></li>
                            <li><NavLink to='/dashboard/myDonation' activeClassName="font-bold">My Donations</NavLink></li>
                        </>
                    )}
                </ul>
            </div>

            {/* Main Content */}
            <div className="bg-gray-100 p-6 overflow-auto">
                <Outlet />
            </div>
        </div>
    </div>

   
    );
};

export default DashBoard;