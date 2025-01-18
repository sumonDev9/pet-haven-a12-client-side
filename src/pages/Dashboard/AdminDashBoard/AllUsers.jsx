import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Sl_No","photo","Name", "Email", "Role",  "Action"];

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: user = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    // admin 
    const hadlemakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                alert('admin');
            }
        })
    }

    return (
        <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5">User Management {user.length}</h1>
        {/* <div>
                <Card className="h-full w-full px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold leading-none text-sm sm:text-base"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {user?.map(({ Sl_No, name, photo ,role, email,  }, index) => {
                                    const isLast = index === user.length - 1;
                                    const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

                                    return (
                                        <tr key={name} className="hover:bg-gray-50">
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold text-sm sm:text-base"
                                                >
                                                    {index + 1}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold text-sm sm:text-base"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold text-sm sm:text-base"
                                                >
                                                    <img src={photo} alt="" />
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-600 text-sm sm:text-base"
                                                >
                                                    {role}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-600 text-sm sm:text-base"
                                                >
                                                    {email}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-600 text-sm sm:text-base"
                                                >
                                                    {location}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div> */}
             <div>
                <Card className="h-full overflow-x w-full px-6">
                    <div className="">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold leading-none text-sm sm:text-base"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {user?.map(({ Sl_No, photo, name, email, role, location }, index) => {
                                    const isLast = index === user.length - 1;
                                    const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

                                    return (
                                        <tr key={name} className="hover:bg-gray-50">
                                            {/* sl no */}
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold text-sm sm:text-base"
                                                >
                                                    {index + 1}
                                                </Typography>
                                            </td>
                                            {/* photo */}
                                            <td className={classes}>
                                                    <img
                                                        src={photo}
                                                        alt={name}
                                                        className="w-10 h-10 object-cover rounded-full"
                                                    />
                                            </td>
                                            {/* name */}
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold text-sm sm:text-base"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                          
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-600 text-sm sm:text-base"
                                                >
                                                    {email}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-600 text-sm sm:text-base"
                                                >
                                                    {role || "user"}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                             {
                                                user.role === 'admin' ? 'Admin' :  <Button
                                                onClick={() => hadlemakeAdmin(user)}
                                               >Make Admin</Button>
                                             }
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