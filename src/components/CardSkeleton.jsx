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
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
    return (
        <Card className="mt-6 dark:bg-gray-700 ">
        <CardHeader className="relative m-0 h-56">
        
          <Skeleton width={500} height={300} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5"  className="mb-2 text-secondary dark:text-white">
            <Skeleton count={3}/>
          </Typography>
        
          
        </CardBody>
        <CardFooter className="pt-0">
           
          
        <Skeleton width={100} height={30} />
     
        </CardFooter>
      </Card>
    );
};

export default CardSkeleton;