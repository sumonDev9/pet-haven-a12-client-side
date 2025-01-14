import { Button, Typography } from '@material-tailwind/react';
import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-16 px-6  bg-gray-100 dark:bg-gray-900 ">
            <div className='text-center'>
                <Typography variant="h2" className="text-4xl lg:text-5xl font-bold mb-6">
                Give Love, Adopt a Pet
                </Typography>
                <Typography variant="body1" className="max-w-3xl mx-auto text-lg mb-8">
                    Every pet deserves a loving home. You can make a difference in their life by adopting. Let’s create a better world for them, one adoption at a time.
                </Typography>
            </div>
        <div className="w-11/12 mx-auto bg-white p-6 rounded-lg  flex flex-col lg:flex-row items-center justify-between">
       
          {/* Left Content (Title, Description, Button) */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <Typography variant="h2" className="text-3xl lg:text-5xl font-bold leading-tight">
              Give a Pet a Second Chance
            </Typography>
            <Typography variant="body1" className="text-lg lg:text-xl opacity-80">
              By adopting a pet, you provide them with a loving home and a better life. Make a difference today and help create a world full of love, happiness, and wagging tails.
            </Typography>
            
            <Button
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Adopt a Pet
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://i.ibb.co/k1JKWVB/image.png" // Replace with a real image
              alt="Happy Pet Adoption"
              className="w-full h-auto  object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    );
};

export default CallToAction;