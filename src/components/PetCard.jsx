import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

const PetCard = ({pet}) => {
    const {_id, image, name, age, location} = pet || {}
    return (
        <Card className="mt-6 dark:bg-gray-700 ">
      <CardHeader color="blue-gray" className="relative m-0 h-56">
        <img
          className="w-full object-cover rounded-none"
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5"  className="mb-2 text-secondary dark:text-white">
         {name}
        </Typography>
        <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
        <MdOutlineDateRange /> {age}
        </Typography>
        <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
        <FaLocationDot /> {location}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-primary">Read More</Button>
      </CardFooter>
    </Card>
    );
};

export default PetCard;