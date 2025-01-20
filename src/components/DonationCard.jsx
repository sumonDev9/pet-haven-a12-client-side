import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
    console.log(donation)
    const {petImage, maxDonation, name, _id} = donation || {}
    return (
        <Card className="mt-6 dark:bg-gray-800 ">
        <CardHeader color="blue-gray" className="relative m-0 h-56">
          <img
            className="w-full object-cover rounded-none"
            src={petImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5"  className="mb-2 text-secondary dark:text-white">
          Name: {name}
          </Typography>
          <Typography className="flex items-center text-info  dark:text-white mt-1">
           <span className="text-secondary dark:text-white">Maximum Donation:</span><MdCurrencyRupee /> {maxDonation}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/donation/${_id}`}>
          <Button className="bg-primary">view details</Button>
          </Link>
        </CardFooter>
      </Card>
    );
};

export default DonationCard;