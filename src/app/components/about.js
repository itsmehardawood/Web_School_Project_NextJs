'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const AboutSection = ({ heading = "Default Heading", paragraph = "Default paragraph" }) => {
  const initialImages = [
    "/images/image1.jpg", 
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
  ];

  const [images, setImages] = useState(initialImages);
  const [isShuffling, setIsShuffling] = useState(false);

  // Shuffle the images every 2 seconds
  const shuffleImages = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setImages((prevImages) => {
        const shuffled = [...prevImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Shuffle the array
        }
        return shuffled;
      });
      setIsShuffling(false);
    }, 500); // Match the animation duration for smooth transition
  };


  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      easing: 'ease-out-back',
      once: true, // Animation happens only once
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(shuffleImages, 2000);
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div data-aos="zoom-in-right" className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white w-[80%] mx-auto">
      {/* Left Section */}
      <div className="flex flex-col items-center font-serif">
        <h2 className="mb-5 text-3xl font-bold text-blue-800">{heading}</h2>
        <p className="mb-8 text-lg text-center text-gray-700">{paragraph}</p>
        <Link href="/about">
          <button className="px-7 py-2 transition duration-200 ease-in-out text-blue-900 border-[1px] mt-10 font-normal border-blue-900 hover:bg-blue-900 hover:text-white rounded-sm hover:animate-pulse">
            Learn More
          </button>
        </Link>
      </div>

      {/* Right Section (Image Grid with Animation) */}
      <div data-aos="zoom-in-left" className="grid w-full max-w-lg grid-cols-3 gap-3 mx-auto">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-square rounded-3xl">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200} 
              onError={(e) => e.target.src = '/images/default.jpg'}
              className={`object-cover w-full h-full transition-all duration-500 ease-in-out rounded-xl transform ${
                isShuffling ? "scale-90 rotate-6 opacity-50" : "scale-100 rotate-0 opacity-100"
              }`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
