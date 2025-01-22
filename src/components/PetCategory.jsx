import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
        <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-wrap bg-gray-50 dark:bg-gray-900 ">
            {
                uniqueCategories.map((item, index) => (
                    <Card key={index} className="mt-6 w-72">
                        <CardBody>
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                                {item.category}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Link to={`/category/${item.category}`}>Explore More</Link>
                        </CardFooter>
                    </Card>
                )
                )
            }
        </section>
    );
};

export default PetCategory;