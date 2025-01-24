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
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useRef, useState } from "react";
import CardSkeleton from "./CardSkeleton";

const PetCard = ({pet}) => {
const [loading, setLoading] = useState(true);
const [inView, setInView] = useState(false); // Track if the card is in view
const cardRef = useRef(null); // Reference to the card element

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting); // Update state when the card is in view
    },
    { threshold: 0.4 } // Trigger when 20% of the card is visible
  );

  if (cardRef.current) {
    observer.observe(cardRef.current);
  }

  return () => {
    if (cardRef.current) {
      observer.unobserve(cardRef.current);
    }
  };
}, []);

useEffect(() => {
  
  // Simulate a delay for loading
  setTimeout(() => setLoading(false), 3000);

}, []);

    const {_id, image, name, age, location} = pet || {}
    return (

    //     <Card className="mt-6 dark:bg-gray-700 bg-white">
    //   <CardHeader  className="relative m-0 h-56">
    //    {
    //     loading ? <Skeleton width={500} height={300}/> :  <img
    //     className="w-full object-cover rounded-none"
    //     src={image}
    //     alt="card-image"
    //   />
    //    }
    //   </CardHeader>
    //   <CardBody>
    //    {
    //     loading ? <Skeleton width={150} count={3}/> : 
    //     <>
    //     <Typography variant="h5"  className="mb-2 text-secondary dark:text-white">
    //     {name}
    //    </Typography>
    //    <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
    //    <MdOutlineDateRange /> {age} year
    //    </Typography>
    //    <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
    //    <FaLocationDot /> {location}
    //    </Typography>
    //     </>
    //    }
    //   </CardBody>
    //   <CardFooter className="pt-0">
    // {
    //   loading ?  <Skeleton width={100} height={30}/> : <>
    //       <Link to={`/petdetails/${_id}`}>
    //     <Button className="bg-primary">Read More</Button>
    //     </Link>
    //   </>
    // }
    //   </CardFooter>
    // </Card>

    <div ref={cardRef}>
      {inView ? (
         <Card className="mt-6 dark:bg-gray-700 bg-white">
      <CardHeader  className="relative m-0 h-56">
       {
        loading ? <Skeleton width={500} height={300}/> :  <img
        className="w-full bg-white object-cover rounded-none"
        src={image}
        alt="card-image"
      />
       }
      </CardHeader>
      <CardBody>
       {
        loading ? <Skeleton width={150} count={3}/> : 
        <>
        <Typography variant="h5"  className="mb-2 text-secondary dark:text-white">
        {name}
       </Typography>
       <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
       <MdOutlineDateRange /> {age} year
       </Typography>
       <Typography className="flex items-center text-info gap-1 dark:text-white mt-1">
       <FaLocationDot /> {location}
       </Typography>
        </>
       }
      </CardBody>
      <CardFooter className="pt-0">
    {
      loading ?  <Skeleton width={100} height={30}/> : <>
          <Link to={`/petdetails/${_id}`}>
        <Button className="bg-primary">Read More</Button>
        </Link>
      </>
    }
      </CardFooter>
    </Card>
      ) : (
        <CardSkeleton /> // Render a skeleton while the card is not in view
      )}
    </div>

    )
  };
export default PetCard;