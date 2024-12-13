'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Spinner from '../components/spinners';
import Navbar from '../components/navbar';
import Template from '../template';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <Template>
      <Navbar />
      <div className="min-h-screen text-gray-800 bg-gray-100">
        {/* Hero Section */}
        <div
          className="relative text-center text-white bg-center bg-cover h-[600px] shadow-lg"
          style={{ backgroundImage: "url('/images/school.jpg')" }}
        >
          {/* Background Fade */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>

          {/* Content */}
          <div className="relative z-10 px-6 pt-40">
            <h1 className="font-serif text-5xl font-extrabold text-shadow-md sm:text-6xl">
              Welcome to Bab ul Islam School System
            </h1>
            <p className="mt-4 text-lg font-light sm:text-2xl">
              Fostering both professional excellence and spiritual growth in children.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="p-10 mx-4 mt-10 mb-10 bg-white rounded-lg shadow-lg sm:mx-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="font-serif text-4xl font-semibold text-blue-950">About Us</h2>
            <p className="text-lg font-light leading-relaxed">
              At Bab ul Islam School System, we believe in nurturing the intellectual and spiritual growth of every child. Our mission is to provide a balanced education that fosters creativity, academic excellence, and moral values.
            </p>

            <div className="flex justify-center mb-8">
              <Image
                src="/images/about.jpg"
                alt="About Us Image"
                width={500}
                height={300}
                className="transition-all duration-300 shadow-md rounded-xl hover:shadow-2xl"
              />
            </div>

            <p className="text-lg font-light leading-relaxed text-gray-600">
              Our journey started with a simple yet powerful idea: to create a space where children are not only educated but also inspired to become leaders with integrity. Through modern teaching methods and a focus on personal growth, we aim to shape students who will contribute positively to society.
            </p>

            <div className="mt-8 space-y-4 text-left">
              <h3 className="text-xl font-semibold text-blue-950">Our Core Values</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li className="text-lg">Integrity and Honesty</li>
                <li className="text-lg">Respect for Diversity</li>
                <li className="text-lg">Commitment to Excellence</li>
                <li className="text-lg">Empathy and Compassion</li>
                <li className="text-lg">Community and Collaboration</li>
              </ul>
            </div>
          </div>

          {/* Fee Structure Section */}
          <div className="mt-16">
            <h2 className="mb-8 font-serif text-3xl font-bold text-center text-blue-950">
              Fee Structure
            </h2>
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-center">
              {/* Table 1 */}
              <div className="w-full sm:w-1/2">
                <h3 className="mb-4 text-lg font-semibold text-center text-blue-950">
                  PlayGroup to 7th Grade
                </h3>
                <table className="w-full border border-collapse border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border border-gray-300">Category</th>
                      <th className="px-4 py-2 border border-gray-300">Fee (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Admission & Registration Fee</td>
                      <td className="px-4 py-2 border border-gray-300">5,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Monthly Fee</td>
                      <td className="px-4 py-2 border border-gray-300">3,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Annual Charges</td>
                      <td className="px-4 py-2 border border-gray-300">3,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2 */}
              <div className="w-full sm:w-1/2">
                <h3 className="mb-4 text-lg font-semibold text-center text-blue-950">
                8th to 10th Grade
                </h3>
                <table className="w-full border border-collapse border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border border-gray-300">Category</th>
                      <th className="px-4 py-2 border border-gray-300">Fee (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Admission & Registration Fee</td>
                      <td className="px-4 py-2 border border-gray-300">5,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Monthly Fee</td>
                      <td className="px-4 py-2 border border-gray-300">4,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Annual Charges</td>
                      <td className="px-4 py-2 border border-gray-300">3,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="py-6 mt-10 text-center text-white shadow-lg bg-blue-950">
          <p className="text-sm">&copy; 2024 Bab ul Islam School System. All Rights Reserved.</p>
        </div>
      </div>
    </Template>
  );
};

export default About;
