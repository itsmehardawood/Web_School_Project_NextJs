'use client';

import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl px-6 py-16 rounded-lg bg-gray-50">
        {/* Page Title */}
        <h2 className="mb-10 font-serif text-4xl font-extrabold text-center text-blue-800 md:text-5xl">
          Contact Us
        </h2>

        {/* Main Section with Map & Address */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Address Section */}
          <div className="w-full space-y-4 text-center lg:w-1/2 lg:text-left">
            <h3 className="text-2xl font-semibold text-blue-600">Our Address</h3>
            <p className="text-gray-700">J9M8+FR5, Karol War, Karol Lahore, Punjab, Pakistan</p>
            <p className="text-gray-700">Phone: (92) 349 3198986</p>
            <p className="text-gray-700">Email: babulislam10097@gmail.com</p>
          </div>

          {/* Map Section */}
          <div className="w-full h-auto lg:w-1/2">
            <div className="relative w-full pb-[75%] md:pb-[60%] lg:pb-[50%] bg-gray-200 shadow-md rounded-md overflow-hidden">
              {/* Google Maps iFrame */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0078574999493!2d74.364536276219!3d31.633635241536272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bab1eb08ab9%3A0x32095aff6cbb78ea!2sBab-ul-islam%20School%20System!5e0!3m2!1sen!2s!4v1731358382188!5m2!1sen!2s"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
