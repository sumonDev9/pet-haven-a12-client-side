import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaThumbsUp, FaCommentDots, FaStar } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
            // data get
          fetch('/review.json')
          .then(res => res.json())
          .then(data => setReview(data))
          
      },[])
    return (
        <section className=" py-10">
        <div className="w-11/12 bg-gray-50 dark:bg-slate-900 p-4 rounded-lg mx-auto text-center">
            <SectionTitle
            heading={"What Our Clients Say"}
            subHeading={"Discover how our services have made a positive impact on our clients. Read their experiences and see why they trust us for their needs."}
            ></SectionTitle>
          {/* Marquee  Review */}
          <Marquee pauseOnHover={true} speed={50}>
            {review.map((review) => (
         <div key={review.id} 
         className="flex flex-col   lg:flex-row items-center dark:bg-slate-700 mx-5  p-5 rounded-lg shadow-md max-w-xs lg:max-w-lg">
       
         {/* Review Image */}
         <img src={review.photo} alt={review.name} className="w-24 h-24 rounded-full mb-4 lg:mb-0 lg:mr-4 object-cover" />
         
         {/* Review Content */}
         <div className="text-center lg:text-left">
           {/* Review Title */}
           <h3 className="text-xl font-semibold text-secondary dark:text-white mb-2">{review.title}</h3>
           
           {/* Review Comment */}
           <p className="text-info dark:text-white text-sm mb-4">{review.comment}</p>
           
           {/* Reviewer's Name */}
           <p className="mt-2 text-secondary dark:text-white font-semibold">{review.name}</p>
           
           {/* Rating with Stars */}
           <div className="flex justify-center lg:justify-start items-center mt-3">
             <FaStar className="text-yellow-500 mr-1" />
             <FaStar className="text-yellow-500 mr-1" />
             <FaStar className="text-yellow-500 mr-1" />
             <FaStar className="text-yellow-500 mr-1" />
             <FaStar className="text-gray-400" />
           </div>
         </div>
       </div>
       
            ))}
          </Marquee>
          
        </div>
      </section>
    );
};

export default Review;