import React, { useState } from "react";
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

const Navber = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
  
    const handleNavToggle = () => setOpenNav(!openNav);
  
    const toggleDropdown = () => setOpenDropdown(!openDropdown);

    return (
        <div>
            <Navbar className="">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* লোগো */}
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-bold flex items-center gap-2"
        >
          {/* এখানে লোগো আইকন বা টেক্সট রাখতে পারেন */}
          {/* <img src="https://via.placeholder.com/30" alt="Logo" className="h-8 w-8 rounded-full" /> */}
          <span>Pet Adoption</span>
        </Typography>

        {/* বড় স্ক্রিনের জন্য মেনু */}
        <div className="hidden lg:flex items-center space-x-4">
          <Typography as="a" href="#" className="cursor-pointer">
            হোম
          </Typography>
          <Typography as="a" href="#pet-listing" className="cursor-pointer">
            Pet Listing
          </Typography>
          <Typography as="a" href="#donation-campaigns" className="cursor-pointer">
            Donation Campaigns
          </Typography>

          {/* লগইন/রেজিস্টার বাটন */}
          <Button variant="gradient" size="sm">
            লগইন / রেজিস্টার
          </Button>
        </div>

        {/* প্রোফাইল পিকচার ও ড্রপডাউন মেনু */}
        <div className="hidden lg:flex items-center gap-4">
          <IconButton variant="text" onClick={toggleDropdown}>
            <Avatar src="https://via.placeholder.com/40" alt="Profile" />
          </IconButton>
          {openDropdown && (
            <Dropdown open={openDropdown}>
              <DropdownToggle>Profile</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#dashboard">Dashboard</DropdownItem>
                <DropdownItem href="#logout" onClick={() => alert("Logging out...")}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>

        {/* ছোট স্ক্রিনের জন্য হ্যামবার্গার মেনু */}
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
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </IconButton>
      </div>

      {/* ছোট স্ক্রিনের জন্য ড্রপডাউন মেনু */}
      <Collapse open={openNav}>
        <div className="flex flex-col items-start gap-2 mt-4">
          <Typography as="a" href="#home" className="cursor-pointer">
            হোম
          </Typography>
          <Typography as="a" href="#pet-listing" className="cursor-pointer">
            Pet Listing
          </Typography>
          <Typography as="a" href="#donation-campaigns" className="cursor-pointer">
            Donation Campaigns
          </Typography>
          <Button variant="gradient" size="sm" fullWidth>
            লগইন / রেজিস্টার
          </Button>
        </div>
      </Collapse>
    </Navbar>
        </div>
    );
};

export default Navber;