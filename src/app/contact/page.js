'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import Navbar from '../components/navbar';
import Template from '../template';
import { z } from 'zod'; // Importing zod to define the validation schema

// Define the validation schema with Zod
const formSchema = z.object({
  username: z.string().min(3, "Username is too short").max(50, "Username is too long"),
  email: z.string().email("Invalid email").min(8, "Email is too short").max(50, "Email is too long"),
  phone: z.string().min(6, "Phone number is too short").max(50, "Phone number is too long"),
  message: z.string().min(10, "Message is too short").max(300, "Message is too long"),
});

const fetcher = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [response, setResponse] = useState(null); // Store server response
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const onSubmit = async (values) => {
    try {
      const result = await fetcher('http://localhost:3001/contact', values);
      setResponse(result); // Handle response from backend
      setSubmitted(true); // Set form as successfully submitted
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Template>
      <div className='min-h-screen pt-16 bg-gradient-to-r from-slate-200 to-slate-500'>
        <Navbar />

        {/* Success Message Section */}
        {submitted && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="p-20 text-center bg-white rounded-lg shadow-lg">
              <p className="text-xl font-bold text-green-600">Thank you for contacting us!</p>
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        <div className="flex flex-col items-center justify-center px-4 py-10 md:px-16">
          <h2 className='font-serif text-3xl font-bold md:text-4xl pb-7 text-blue-950'>Contact Us</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] space-y-8 p-6 md:p-10 bg-white border-blue-900 rounded-xl border shadow-md"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Message</FormLabel>
                    <FormControl>
                      <Input placeholder="Write Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full py-3 font-bold text-white bg-black rounded-md hover:bg-gray-600 active:bg-gray-500">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>

              {/* Contact Information Section */}
              <div className="flex flex-col items-center px-4 py-10 md:px-16">
          <h2 className='pb-4 font-serif text-3xl font-bold md:text-4xl text-blue-950'>Get in Touch</h2>
          <p className="max-w-2xl pb-6 text-center text-gray-700">
            We’d love to hear from you! Whether you have a question, need assistance, or just want to give us feedback, feel free to reach out.
          </p>
          <div className="grid grid-cols-1 gap-8 text-center text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p>karol war, Karol Lahore, Punjab, </p>
              <p>Lahore, Pakistan</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p>(92) 349 3198986</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p>babulislam10097@gmail.com</p>
            </div>
          </div>
        </div>
    </Template>
  );
}

export default Contact;
