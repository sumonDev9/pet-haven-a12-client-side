import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
const AddPets = () => {
    const categoryOptions = [
        { value: "Dog", label: "Dog" },
        { value: "Cat", label: "Cat" },
        { value: "Bird", label: "Bird" },
        { value: "Rabbit", label: "Rabbit" },
      ];
    
      const formik = useFormik({
        initialValues: {
          petImage: null,
          petName: "",
          petAge: "",
          petCategory: "",
          petLocation: "",
          shortDescription: "",
          longDescription: "",
        },
        validationSchema: Yup.object({
          petImage: Yup.mixed().required("Please select a pet image"),
          petName: Yup.string().required("Please provide the pet's name"),
          petAge: Yup.number()
            .required("Please provide the pet's age")
            .min(0, "Age must be zero or greater"),
          petCategory: Yup.string().required("Please select a pet category"),
          petLocation: Yup.string().required("Please provide a location"),
          shortDescription: Yup.string()
            .required("Please provide a short description"),
            longDescription: Yup.string().required("Please provide a detailed description"),
        }),
        onSubmit: (values, {resetForm}) => {
          const formData = {
            ...values,
            adopted: false,
            addedAt: new Date().toISOString(),
          };
          console.log("Submitted Data:", formData);
          alert("Pet added successfully!");
          resetForm();
        },
      });
    return (
      
         <div className="flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Add Pet
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <Input
              type="file"
              id="petImage"
              name="petImage"
              onChange={(e) =>
                formik.setFieldValue("petImage", e.currentTarget.files[0])
              }
              className="file-input"
            />
            {formik.errors.petImage && (
              <p className="text-red-500 text-sm">{formik.errors.petImage}</p>
            )}
          </div>

        <div className='md:flex gap-5'>
              {/* Pet Name */}
          <div className="mb-4 w-full">
            <Input
              className='w-full'
              label="Pet Name"
              name="petName"
              onChange={formik.handleChange}
              value={formik.values.petName}
            />
            {formik.errors.petName && (
              <p className="text-red-500 text-sm">{formik.errors.petName}</p>
            )}
          </div>
          {/* Pet Age */}
          <div className="mb-4 w-full">
            <Input
              type="number"
              label="Pet Age"
              name="petAge"
              onChange={formik.handleChange}
              value={formik.values.petAge}
            />
            {formik.errors.petAge && (
              <p className="text-red-500 text-sm">{formik.errors.petAge}</p>
            )}
          </div>
        </div>

        <div className='md:flex gap-5'>
              {/* Pet Category */}
          <div className="mb-4 w-full">
            <Select
              options={categoryOptions}
              placeholder="Select Pet Category"
              onChange={(option) =>
                formik.setFieldValue("petCategory", option.value)
              }
            />
            {formik.errors.petCategory && (
              <p className="text-red-500 text-sm">{formik.errors.petCategory}</p>
            )}
          </div>
          {/* Pet Location */}
          <div className="mb-4 w-full">
            <Input
              label="Pet Location"
              name="petLocation"
              onChange={formik.handleChange}
              value={formik.values.petLocation}
            />
            {formik.errors.petLocation && (
              <p className="text-red-500 text-sm">{formik.errors.petLocation}</p>
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
            Add Pet
          </Button>
        </form>
      </div>
    </div>
    
    );
};

export default AddPets;