import React from 'react';

const Testimonials = (props) => {
  return (
   
  
   
        <div data-aos="flip-right" className="p-6 bg-white rounded-lg shadow-md ">
          <p className="text-gray-700">{props.para}</p>
          <h4 className="mt-4 font-semibold text-blue-800 hover:text-orange-500">{props.name}</h4>
          <p className="text-gray-500">Alumni, {props.date}</p>
        </div>
     
     
   
  );
};

export default Testimonials;
