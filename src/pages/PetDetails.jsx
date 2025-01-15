import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PetDetails = () => {
    const [pet, SetPets] = useState({})
    const {user} = UseAuth();
    const {id} = useParams();

    useEffect(() => {
        fetchAllPet()
    }, []);

    const fetchAllPet = async () => {
        const { data } = await axios.get(`http://localhost:5000/pets/${id}`)
        console.log(data)
    }

    return (
        <div>
            this is pets
        </div>
    );
};

export default PetDetails;