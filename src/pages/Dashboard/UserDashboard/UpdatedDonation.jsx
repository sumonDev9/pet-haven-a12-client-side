import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
// import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useSnackbar } from 'notistack';
import UseAuth from '../../../hooks/UseAuth';



const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
import { useLoaderData } from 'react-router-dom';

const UpdatedDonation = () => {

    const { _id, petImage, name, maxDonation, lastDate, longDescription, shortDescription, } = useLoaderData();
    console.log(name)
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { enqueueSnackbar } = useSnackbar();
    const { user } = UseAuth();

    //   const categoryOptions = [
    //       { value: "Dog", label: "Dog" },
    //       { value: "Cat", label: "Cat" },
    //       { value: "Bird", label: "Bird" },
    //       { value: "Rabbit", label: "Rabbit" },
    //     ];

    const formik = useFormik({
        initialValues: {
            petImage: petImage || null,
            name: name || "",
            maxDonation: maxDonation || "",
            lastDate: lastDate || "",
            shortDescription: shortDescription || "",
            longDescription: longDescription || "",
        },
        validationSchema: Yup.object({
            petImage: Yup.mixed().required("Please upload a pet image"),
            name: Yup.string().required("Please provide the pet's name"),
            maxDonation: Yup.number()
                .required("Please specify the maximum donation amount")
                .min(1, "Donation amount must be at least 1"),
            lastDate: Yup.date().required("Please select the last date for donations"),
            shortDescription: Yup.string()
                .required("Please provide a short description"),
            // .max(100, "Short description must be 100 characters or less"),
            longDescription: Yup.string()
                .required("Please provide a detailed description")
                .min(50, "Long description must be at least 50 characters"),
        }),
        onSubmit: async (values, { resetForm }) => {
            // image upload to imgbb and then get an url
            const imageFile = new FormData();
            imageFile.append("image", values.petImage);

            const res = await axiosPublic.post(imageHostingAPI, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })

            if (res.data.success) {
                // now send the menu item data to the server with the image url
                const plainTextDescription = values.longDescription.replace(/<[^>]+>/g, '');

                const DonationData = {
                    ...values,
                    longDescription: plainTextDescription,
                    image: res.data.data.display_url,
                    userEmail: user.email
                };

                const donationRes = await axiosSecure.patch(`/donationCampaigns/${_id}`, DonationData)
                console.log(donationRes.data)
                if (donationRes.data.modifiedCount > 0) {
                    // show success popup
                    resetForm();
                    enqueueSnackbar(`${name} Donation campigan updated successful!`, { variant: 'success', autoHideDuration: 1000 });
                }
            }
        },
    });

    return (

        <div className="flex  pb-20 justify-end mr-[180px] items-center">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                <Typography variant="h4" color="blue-gray" className="text-center mb-4">
                    Updated Donation Campaigns
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    {/* Image Upload */}
                    <div className="mb-4">
                        <Input
                            type="file"
                            id="image"
                            name="petImage"
                            onChange={(e) =>
                                formik.setFieldValue("image", e.currentTarget.files[0])
                            }
                            className="file-input"
                        />
                        {formik.errors.image && (
                            <p className="text-red-500 text-sm">{formik.errors.petImage}</p>
                        )}
                    </div>

                    <div className='md:flex gap-5'>
                        {/* Pet Name */}
                        <div className="mb-4 w-full">
                            <Input
                                className='w-full'
                                label="Pet Name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name && (
                                <p className="text-red-500 text-sm">{formik.errors.name}</p>
                            )}
                        </div>
                       {/* Maximum Donation */}
                               <div className="mb-4">
                                 <Input
                                   type="number"
                                   label="Maximum Donation Amount"
                                   name="maxDonation"
                                   onChange={formik.handleChange}
                                   value={formik.values.maxDonation}
                                 />
                                 {formik.errors.maxDonation && (
                                   <p className="text-red-500 text-sm">{formik.errors.maxDonation}</p>
                                 )}
                               </div>
                        <div className="mb-4">
                            <Input
                                type="date"
                                label="Last Date of Donation"
                                name="lastDate"
                                onChange={formik.handleChange}
                                value={formik.values.lastDate}
                            />
                            {formik.errors.lastDate && (
                                <p className="text-red-500 text-sm">{formik.errors.lastDate}</p>
                            )}
                        </div>
                    </div>
                    {/* Short Description */}
                    <div className="mb-4">
                        <Textarea
                            label="Short Description"
                            name="shortDescription"
                            onChange={formik.handleChange}
                            value={formik.values.shortDescription}
                        />
                        {formik.errors.shortDescription && (
                            <p className="text-red-500 text-sm">
                                {formik.errors.shortDescription}
                            </p>
                        )}
                    </div>
                    {/* Long Description */}
                    <div className="mb-4">
                        <ReactQuill
                            theme="snow"
                            value={formik.values.longDescription}

                            onChange={(value) => formik.setFieldValue("longDescription", value)}
                        />
                        {formik.errors.longDescription && (
                            <p className="text-red-500 text-sm">
                                {formik.errors.longDescription}
                            </p>
                        )}
                    </div>
                    {/* Submit Button */}
                    <Button type="submit" fullWidth className="bg-primary text-white">
                        updated donation
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdatedDonation;