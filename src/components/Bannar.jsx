import { Button, Typography } from "@material-tailwind/react";

const Bannar = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900  md:py-16 transition-all duration-300">
        <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center pt-3 md:pt-0 md:text-left space-y-6">
            <Typography variant="h1" className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-white">
              Adopt Your New Best Friend
            </Typography>
            <Typography variant="body1" className="text-base md:text-lg text-info dark:text-gray-400">
              Give a loving home to a furry friend today. Explore our pets ready for adoption and make a difference in their lives.
            </Typography>
            <Button className="md:px-6 md:py-3 px-3 py-2 bg-primary text-sm md:text-base text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              Explore Pets
            </Button>
          </div>
  
          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/Gndn6X2/image.png"
              alt="Pet Picture"
              className="w-full max-w-md bg-transparent rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    );
};

export default Bannar;