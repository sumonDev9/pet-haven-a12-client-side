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
          image: null,
          name: "",
          age: "",
          category: "",
          location: "",
          shortDescription: "",
          longDescription: "",
        },
        validationSchema: Yup.object({
          image: Yup.mixed().required("Please select a pet image"),
          name: Yup.string().required("Please provide the pet's name"),
          age: Yup.number()
            .required("Please provide the pet's age")
            .min(0, "Age must be zero or greater"),
            category: Yup.string().required("Please select a pet category"),
            location: Yup.string().required("Please provide a location"),
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
      
         <div className="flex  pb-20 justify-end mr-[180px] items-center">
      <div className="w-full  max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Add Pet
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <Input
              type="file"
              id="image"
              name="image"
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
          {/* Pet Age */}
          <div className="mb-4 w-full">
            <Input
              type="number"
              label="Pet Age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age && (
              <p className="text-red-500 text-sm">{formik.errors.age}</p>
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
                formik.setFieldValue("category", option.value)
              }
            />
            {formik.errors.category && (
              <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}
          </div>
          {/* Pet Location */}
          <div className="mb-4 w-full">
            <Input
              label="Pet Location"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
            {formik.errors.location && (
              <p className="text-red-500 text-sm">{formik.errors.location}</p>
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