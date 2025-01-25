import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Typography } from "@material-tailwind/react";
import { useSnackbar } from 'notistack';

const TABLE_HEAD = ["Sl_No","photo","Name", "Email", "Role",  "Action"];

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
     const { enqueueSnackbar } = useSnackbar();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    // // admin 
    const handleMakeAdmin = async(id) => {
        console.log(id)
        try {
            const response = await axiosSecure.patch(`/users/admin/${id}`, { role: "admin"  });
            if (response.data.modifiedCount > 0) {
                enqueueSnackbar('Adoption status updated successfully!', { variant: 'success', autoHideDuration: 1000 });
                refetch();
            } else {
                enqueueSnackbar('Failed to update adoption status.', { variant: 'error', autoHideDuration: 1000 });
            }
        } catch (error) {
            enqueueSnackbar('An error occurred while updating adoption status.', { variant: 'error', autoHideDuration: 1000 });
        }

       
    };

 

    return (
   

    <div className="container mx-auto my-10">
    <h1 className="text-2xl font-bold mb-5">User Management ({users.length})</h1>
    <div>
        <Card className="h-full overflow-x-auto w-full px-6">
            <div>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                                    <Typography variant="small" color="blue-gray" className="font-bold leading-none text-sm sm:text-base">
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(({ _id, name, email, photo, role }, index) => {
                            const isLast = index === users.length - 1;
                            const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

                            return (
                                <tr key={_id} className="hover:bg-gray-50">
                                    {/* Sl No */}
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-bold text-sm sm:text-base">
                                            {index + 1}
                                        </Typography>
                                    </td>

                                    {/* Photo */}
                                    <td className={classes}>
                                        <img src={photo} alt={name} className="w-10 h-10 object-cover rounded-full" />
                                    </td>

                                    {/* Name */}
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-bold text-sm sm:text-base">
                                            {name}
                                        </Typography>
                                    </td>

                                    {/* Email */}
                                    <td className={classes}>
                                        <Typography variant="small" className="font-normal text-gray-600 text-sm sm:text-base">
                                            {email}
                                        </Typography>
                                    </td>

                                    {/* Role */}
                                    <td className={classes}>
                                        <Typography variant="small" className="font-normal text-gray-600 text-sm sm:text-base">
                                            {role || "User"}
                                           { console.log(role)}
                                        </Typography>
                                    </td>

                                    {/* Action */}
                                    <td className={classes}>
                                    <Button onClick={() => handleMakeAdmin(_id)}>
                                                Make Admin
                                            </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    </div>
</div>
    );
};

export default AllUsers;