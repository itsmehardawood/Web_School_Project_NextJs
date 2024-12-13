"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "./components/about";
import HeroBanner from "./components/banner";
import Cards from "./components/cards";
import { PiBookOpen } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import Footer from "./components/footer";
import Faqs from "./components/faqs";
import Testimonials from "./components/testmonial"; // Fixed typo
import ContactInfo from "./components/contact";
import Events from "./components/events";
import Head from "next/head"; // For adding meta tags
import Navbar from "./components/navbar";
import Template from "./template";



function Page() {
 

  return (
  

    
    <Template>
      <Head>

        <title>Bab ul Islam</title>
        <meta name="description" content="An initiative to success" />
      </Head>
      <div className="min-h-screen text-white bg-black ">
        {/* Navbar */}
       
        <Navbar/>


        {/* Hero Section */}
        
        <HeroBanner />

        {/* About Section */}
        <section className="flex items-center justify-center min-h-screen text-black bg-white">
          <AboutSection
            imageSrc="/images/about.jpg"
            heading="About Us"
            paragraph="Our school is dedicated to nurturing the holistic development of children, blending professional skills with spiritual growth. We aim to cultivate a strong foundation in academics, while encouraging character-building, moral values, and self-awareness, preparing students to excel in both their careers and their personal lives."
          />
        </section>

        {/* Admissions Cards */}
        <section className="flex flex-col min-h-screen pt-5 bg-slate-200 space-y-9">
          <h1 className="text-center text-[40px] text-blue-800 font-serif font-bold">
            Admissions
          </h1>
          <div className="grid px-10 bg-slate-200 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 xl:gap-5 lg:gap-3">
            <Cards
              color="#151d36"
              icon={<PiBookOpen />}
              heading="Admission"
              content="We offer a comprehensive admission process, ensuring that each student's needs are met with a personalized approach."
            />
            <Cards
              color="#15362b"
              icon={<TfiAnnouncement />}
              heading="Academics"
              content="Our curriculum is designed to foster academic excellence and intellectual growth."
            />
            <Cards
              color="#8d9137"
              icon={<IoNewspaperOutline />}
              heading="Examinations"
              content="Our examination system is focused on promoting both academic and personal development."
            />
            <Cards
              color="#4f212d"
              icon={<RiCharacterRecognitionLine />}
              heading="Apply Online"
              content="Apply online through our user-friendly platform to start your journey with us."
            />
          </div>
        </section>

        {/* Events Section */}
        <section className="min-h-screen text-black bg-white">
          <h2 className="pt-3 mb-8 font-serif font-bold text-center text-blue-800 md:text-4xl lg:text-5xl sm:text-3xl">
            Upcoming Events
          </h2>
          <div className="grid gap-3 p-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <Events
              month="Dec 20"
              event="Science Festival"
              description="Join us for an exciting day of scientific exploration and interactive experiments at the Science Festival! Explore a variety of scientific exhibits, participate in hands-on activities, and watch live demonstrations from leading experts."
            />
            <Events
              month="Nov 29"
              event="Sports Gala"
              description="The Sports Gala is a celebration of athleticism and teamwork. Students from all grades will compete in a variety of sports, showcasing their skills and teamwork in friendly yet competitive events."
            />
            <Events
              month="Dec 26"
              event="Writing Competition"
              description="Our Writing Competition invites students to showcase their creativity and writing skills. Participants can choose from different themes and genres, with winners receiving exciting prizes and the chance to have their work published."
            />
            <Events
              month="Jan 15"
              event="Naat Competition"
              description="Our Naat Competition invites students to showcase their creativity and writing skills. Participants can choose from different themes and genres, with winners receiving exciting prizes and the chance to have their work published."
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="min-h-screen px-5 py-10 text-black bg-gradient-to-r from-blue-300 to-blue-950 space-y-14">
          <h2 className="mb-8 font-serif text-5xl font-bold text-center text-white ">
            What Our Students Say
          </h2>
          <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
            <Testimonials
              para="The experience at this school has been life-changing. The focus on both academic excellence and spiritual development has shaped me into a more well-rounded individual."
              name="Muhammad Talha"
              date="July, 2022"
            />
            <Testimonials
              para="This school helped me grow not only professionally but also personally. The nurturing environment provided me with the right balance of education and self-awareness."
              name="Dawood Ayub"
              date="Oct, 2024"
            />
            <Testimonials
              para="I feel more confident about my future after attending this school. The blend of rigorous academic programs and emphasis on character building made all the difference."
              name="Muhammad Umar"
              date="June, 2023"
            />
            <Testimonials
              para="Joining this school has been one of the best decisions of my life. It has instilled a sense of purpose and determination in me, both professionally and spiritually."
              name="Abdullah"
              date="Sep, 2021"
            />
            <Testimonials
              para="The holistic approach of this school has truly enhanced my academic skills and personal growth. I am proud to be part of such a supportive and inspiring community."
              name="Shaaram Ali"
              date="Jan, 2023"
            />
            <Testimonials
              para="This institution’s dedication to both education and personal growth has shaped my approach to life. I am now more focused on achieving my goals and embracing new challenges."
              name="Arfa"
              date="Jan, 2023"
            />
            <Testimonials
              para="The support from teachers and the strong moral foundation has given me the confidence to pursue my dreams. This school has been instrumental in shaping who I am today."
              name="Maryam Fatima"
              date="Jan, 2023"
            />
            <Testimonials
              para="I’ve learned not just academics but also the importance of personal integrity and kindness. The school’s environment fostered both my professional and spiritual growth."
              name="Huzaifa"
              date="Jan, 202en"
            />
            <Testimonials
              para="This school has given me a clear direction in life, both academically and spiritually. I’m grateful for the opportunity to grow in such a supportive atmosphere."
              name="Mustafa Ahmad"
              date="Jan, 2023"
            />
          </div>
        </section>

           {/* FAQs */}
           <section className="w-full min-h-screen text-black bg-white">
          <Faqs />
        </section>

        {/* Contact Info */}
        <section className="text-black bg-white">
          <ContactInfo />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Template>

  
  );
}

export default Page;
