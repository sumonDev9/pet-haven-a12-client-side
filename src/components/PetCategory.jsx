import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import SectionTitle from "./SectionTitle";
const PetCategory = () => {

    const axiosPublic = useAxiosPublic();

    const [categories, setCategories] = useState([]);

    // Fetch categories function
    const fetchCategories = async () => {
        try {
            const res = await axiosPublic.get('/pets');
            setCategories(res.data);
        } catch (error) {
            console.error('Error fetching categories:', error.message);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []); 

    const getUniqueCategories = (items) => {
        const uniqueCategories = {};
        items.forEach((item) => {
            if (!uniqueCategories[item.category]) {
                uniqueCategories[item.category] = item;
            }
        });
        return Object.values(uniqueCategories);
    };

    const uniqueCategories = getUniqueCategories(categories);

    return (
      <section className="py-10">
        <SectionTitle
         heading={"Explore Pet Categories"}
         subHeading={"Explore pet categories like Cats, Dogs, Rabbits, Birds, and more to find your perfect companion."}
        ></SectionTitle>
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  bg-gray-50 dark:bg-gray-900 ">
            {
                uniqueCategories.map((item, index) => (
                    <Link to={`/category/${item.category}`}>
                        <Card key={index} className="mt-6">
                            <CardBody>
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <Typography variant="h5" color="blue-gray" className="text-center">
                                    {item.category}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                              <p className="flex gap-1 items-center justify-center">  Explore More  <GoArrowRight /></p>
                            </CardFooter>
                        </Card>
                    </Link>
                )
                )
            }
        </div>
      </section>
    );
};

export default PetCategory;