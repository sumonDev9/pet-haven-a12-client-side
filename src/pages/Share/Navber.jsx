import { useState } from "react";
import React from "react";
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
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import UseAuth from "../../hooks/UseAuth";


const Navber = () => {
  const [openNav, setOpenNav] = useState(false);
  const [dark, setDark] = useState(false);
  const { user, userLogout } = UseAuth();

  const handleNavToggle = () => setOpenNav(!openNav);

  // const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  // toggle
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  const profileMenuItems = [
    {
      label: "Sign Out",
    },
  ];


  return (
    <div className="w-full dark:bg-gray-900 bg-white bg-opacity-60 sticky top-0 z-50">
      <Navbar className="rounded-none dark:bg-gray-900 border-none w-11/12 mx-auto px-0 py-2 shadow-none">
        <div className="flex navlink items-center justify-between">
          {/* logo */}
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-bold flex items-center gap-2"
          >
            {/* logo */}
            <img src="https://i.ibb.co/Pz23rXM/logo.webp" alt="Logo" className="h-8 w-8 rounded-full" /> 
           
            <span className="text-2xl text-secondary dark:text-white">PetHaven</span>
          </Typography>

          {/* nav menu*/}
          <div className="hidden  lg:flex text-secondary dark:text-white items-center space-x-6">

            <NavLink to='/'>
              <Typography className="cursor-pointer text-sm">
                Home
              </Typography>
            </NavLink>
            <NavLink to='/petListing'>
              <Typography className="cursor-pointer text-sm">
                Pet Listing
              </Typography>
            </NavLink>
            <NavLink to='/donationCampaigns'>
              <Typography className="cursor-pointer text-sm">
                Donation Campaigns
              </Typography>
            </NavLink>

          </div>

          {/* proile pic and dropDown menu */}
          <div className="flex items-center gap-2 md:gap-4">
            {
              user && user?.email ? <>
                {/* profile */}
                <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                  <MenuHandler>
                    <Button
                      variant="text"
                      color="blue-gray"
                      className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="User Profile"
                        className="border border-gray-900 p-0.5"
                        src={user?.photoURL || "https://via.placeholder.com/40"}
                      />
                    </Button>
                  </MenuHandler>

                  <MenuList className="p-1">
                    <Link to='/dashboard'>
                      <Typography className="cursor-pointer ml-3 pb-1 text-secondary">
                        Dashboard
                      </Typography>
                    </Link>
                    {profileMenuItems.map(({ label }, key) => {
                      const isLastItem = key === profileMenuItems.length - 1;
                      return (
                        <MenuItem
                          key={label}
                          onClick={() => {
                            closeMenu();
                            if (isLastItem) {
                              userLogout();
                            }
                          }}
                          className={`flex items-center gap-2 rounded ${isLastItem
                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                            : ""
                            }`}
                        >
                          <Typography
                            as="span"
                            variant="small"
                            className={`font-normal ${isLastItem ? "text-red-500" : "text-gray-900"
                              }`}
                          >
                            {label}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>

              </> : <>
                {/* login and Register button*/}
                <Link to='/login'>
                  <Button variant="outlined" className="border-primary border-2 dark:text-white text-secondary"> Login</Button>
                </Link>
                <Link to='/register'><Button className="bg-primary">Register</Button></Link>
              </>
            }
            {/* toggle theme */}
            <button onClick={() => darkModeHandler()}>
              {

                dark && <IoSunny className="text-white text-xl" />
              }
              {
                !dark && <IoMoon className="text-black text-xl" />
              }
            </button>
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
        </div>

        {/* samll seceen dropdown menu*/}
        <Collapse open={openNav}>
          <div className="flex navlinks flex-col text-secondary dark:text-white items-start gap-2 mt-4">
            <NavLink to='/'>
              <Typography className="cursor-pointer">
                Home
              </Typography>
            </NavLink>
            <NavLink to='/petListing'>
              <Typography className="cursor-pointer">
                Pet Listing
              </Typography>
            </NavLink>
            <NavLink to='/donationCampaigns'>
              <Typography className="cursor-pointer">
                Donation Campaigns
              </Typography>
            </NavLink>
          </div>
        </Collapse>

      </Navbar>
    </div>
  );
};

export default Navber;
