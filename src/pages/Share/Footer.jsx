import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-300 dark:bg-black  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <img src="https://i.ibb.co/Pz23rXM/logo.webp" alt="logo-ct" className="w-10" />
        <ul className="flex navlink flex-wrap items-center gap-y-2 gap-x-8">
          <NavLink to='/'>
            <Typography
              className="transition-colors dark:text-white text-secondary font-medium"
            >
             Home
            </Typography>
          </NavLink>
          <NavLink to='/petListing'>
            <Typography
              className="transition-colors dark:text-white text-secondary font-medium"
            >
            Pet Listing
            </Typography>
          </NavLink>
          <NavLink to='/donationCampaigns'>
            <Typography
              className="transition-colors dark:text-white text-secondary font-medium"
            >
              Donation Campaigns
            </Typography>
          </NavLink>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography  className="text-center dark:text-white text-secondary font-normal">
      Copyright &copy;  {new Date().getFullYear()} -PetHaven All right reserved
      </Typography>
    </footer>
    );
};

export default Footer;