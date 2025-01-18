import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useSnackbar } from "notistack";
import ReactQuill from "react-quill";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


const CreateDonation = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { enqueueSnackbar } = useSnackbar();


  const formik = useFormik({
    initialValues: {
      petImage: null,
      maxDonation: "",
      lastDate: "",
      shortDescription: "",
      longDescription: "",
    },
    validationSchema: Yup.object({
      petImage: Yup.mixed().required("Please upload a pet image"),
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
      try {
        // Upload image to imgbb
        const imageFile = new FormData();
        imageFile.append("image", values.petImage);

        const res = await axiosPublic.post(imageHostingAPI, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
        }
        })

        if(res.data.success){
          // Prepare data for the database
        const plainTextDescription = values.longDescription.replace(/<[^>]+>/g, '');

        const campaignData = {
          petImage: res.data.data.display_url,
          maxDonation: values.maxDonation,
          lastDate: values.lastDate,
          shortDescription: values.shortDescription,
          longDescription: plainTextDescription,
          createdAt: new Date().toISOString(),
        };
        
        const donationRes = await axiosSecure.post('/donationCampaigns', campaignData)
        console.log(donationRes.data)
        if(donationRes.data.insertedId){
          // show success popup
          resetForm();
          enqueueSnackbar('Pets added successful!', { variant: 'success' });
        }
        }
      }
      
       catch (error) {
        console.error("Error creating donation campaign:", error);
        alert("Something went wrong. Please try again.");
      }
    },
  });
       
  
   
    return (
      // <div className="flex  pb-20 justify-end mr-[180px] items-center">
       
      // </div>
      <div className="w-full md:max-w-2xl mx-auto md:p-6 p-3 bg-white shadow-md rounded-lg">
      <Typography variant="h4" className="text-center mb-4">
        Create Donation Campaign
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* Pet Image */}
        <div className="mb-4">
          <Input
            type="file"
            name="petImage"
            onChange={(e) =>
              formik.setFieldValue("petImage", e.currentTarget.files[0])
            }
          />
          {formik.errors.petImage && (
            <p className="text-red-500 text-sm">{formik.errors.petImage}</p>
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

        {/* Last Date */}
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

        {/* Short Description */}
        <div className="mb-4">
          <Textarea
            label="Short Description"
            name="shortDescription"
            onChange={formik.handleChange}
            value={formik.values.shortDescription}
          />
          {formik.errors.shortDescription && (
            <p className="text-red-500 text-sm">{formik.errors.shortDescription}</p>
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
            <p className="text-red-500 text-sm">{formik.errors.longDescription}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" fullWidth className="bg-blue-500 text-white">
          Create Campaign
        </Button>
      </form>
    </div>
    );
};

export default CreateDonation;