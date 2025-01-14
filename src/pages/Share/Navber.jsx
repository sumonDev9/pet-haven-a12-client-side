import { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Avatar
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";


const Navber = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dark, setDark] = useState(false);

  const handleNavToggle = () => setOpenNav(!openNav);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

       // toggle
       const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
      }

  return (
    <div className="w-full dark:bg-gray-900 bg-white shadow-md">
      <Navbar className="rounded-none dark:bg-gray-900 border-none w-11/12 mx-auto px-0 shadow-none">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-bold flex items-center gap-2"
          >
            {/* logo */}
            <img src="https://i.ibb.co/Pz23rXM/logo.webp" alt="Logo" className="h-8 w-8 rounded-full" />
            {/* <span className="text-2xl text-secondary">Pet Adoption</span> */}
          </Typography>

          {/* nav menu*/}
          <div className="hidden  lg:flex text-secondary dark:text-white items-center space-x-4">
            
            <Link to='/'>
            <Typography className="cursor-pointer">
             Home
            </Typography>
            </Link>
            <Link to='/petListing'>
            <Typography className="cursor-pointer">
            Pet Listing
            </Typography>
            </Link>
            <Link to='/donationCampaigns'>
            <Typography className="cursor-pointer">
            Donation Campaigns
            </Typography>
            </Link>
          
          </div>

          {/* প্রোফাইল পিকচার ও ড্রপডাউন মেনু */}
          <div className="flex items-center gap-4">
            {/* login and Register button*/}
            <Link to='/login'>
            <Button variant="outlined" className="border-primary border-2 dark:text-white text-secondary"> Login</Button>
            </Link>
           <Link to='/register'><Button className="bg-primary">Register</Button></Link>

            {/* profile */}
            {/* <IconButton variant="text" onClick={toggleDropdown}>
            <Avatar src="https://via.placeholder.com/40" alt="Profile" />
          </IconButton>
          {openDropdown && (
            <Dropdown open={openDropdown}>
              <DropdownToggle>Profile</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )} */}


              {/* toggle theme */}
            <button onClick={() => darkModeHandler()}>
              {

                dark && <IoSunny className="text-white text-xl" />
              }
              {
                !dark && <IoMoon className="text-black text-xl" />
              }
            </button>

          </div>

          {/* menu toggle icon */}
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={handleNavToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </IconButton>
        </div>

        {/* samll seceen dropdown menu*/}
        <Collapse open={openNav}>
          <div className="flex flex-col text-secondary dark:text-white items-start gap-2 mt-4">
          <Link to='/'>
            <Typography className="cursor-pointer">
             Home
            </Typography>
            </Link>
            <Link to='/petListing'>
            <Typography className="cursor-pointer">
            Pet Listing
            </Typography>
            </Link>
            <Link to='/donationCampaigns'>
            <Typography className="cursor-pointer">
            Donation Campaigns
            </Typography>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;