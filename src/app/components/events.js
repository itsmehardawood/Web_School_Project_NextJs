import React from 'react';

const Events = (props) => {
  return (
  
      
     
        <div data-aos="flip-down" className="p-6 duration-300 ease-in-out bg-green-200 rounded-lg shadow-md hover:bg-green-300 hover:transition ">
          <h3 className="text-xl font-semibold sm:text-base">{props.event}</h3>
          <p>{props.description}</p>
          <p className="text-sm text-gray-500">Date: {props.month}, 2024</p>
        </div>
       
    
   
  );
};

export default Events;
