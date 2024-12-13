'use client';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Template from '../template';

export default function Admission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    grade: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitted(false);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server Error:', errorData); // Log server error response
        throw new Error(errorData.message || 'Error submitting form');
      }

      const data = await response.json();
      console.log('Success:', data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        grade: '',
      });
      setIsSubmitted(true); // Show success message
    } catch (error) {
      console.error('Error submitting form:', error); // Detailed error logs
      setError('Failed to submit form. Please try again later.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <Template>
      <Navbar />

      <div className="min-h-screen px-4 py-8 mt-20 bg-zinc-200">
        <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-center text-slate-600">
            School Admission Process
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Admission Process Steps</h2>
            <ol className="pl-5 mt-4 text-gray-700 list-decimal">
              <li>Fill out the Admission Form.</li>
              <li>Submit necessary documents (birth certificate, previous school records, etc.).</li>
              <li>Pay the admission fee.</li>
              <li>Complete an interview (if required).</li>
              <li>Receive confirmation and enrollment details.</li>
            </ol>
          </div>

          {isSubmitted ? (
            <div className="mt-8 text-center">
              <p className="text-lg text-green-500">Your admission form has been submitted successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Child's Full Name</label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade Applying For</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded-md bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                Submit Application
              </button>
            </form>
          )}

          {loading && (
            <div className="mt-4 text-center">
              <p className="text-lg text-blue-500">Submitting your form, please wait...</p>
            </div>
          )}

          {error && (
            <div className="mt-4 text-center">
              <p className="text-lg text-red-500">{error}</p>
            </div>
          )}
        </div>
      </div>
    </Template>
  );
}
