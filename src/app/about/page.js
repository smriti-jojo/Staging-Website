
// "use client";

// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <motion.section
//         className="h-80 flex flex-col items-center justify-center bg-cover bg-center text-center"
//         style={{ backgroundImage: "url(/about-banner.jpg)" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h1 className="text-5xl font-extrabold">About Us</h1>
//         <p className="text-lg mt-2 max-w-2xl">
//         We have the first plant KSC KRISHNA STEEL PVT. LTD. FARIDABAD established in the year 2012 as
//          professionally managed under the leadership of Mr. Naresh Singhal who has more than 25 years of
//           experience in a similar field The Company uses high technology and Automatic machinery like  
//           Hydraulic/Mechanical/Pneumatic Press machines, Butt Welding machines,  Burn  Cutting  Hydraulic 
//            machines,  Rolling  machines,  Lathe  machines,  CNC machines, Laser Cutting, Plasma Cutting and 
           
//            many more… to manufacture a wide range of automotive products.


//         </p>
//         <p>Our Aim is to stands for Quality, Cost, Reliability, Customer Satisfaction.
//         </p>
//       </motion.section>

//       {/* Mission & Vision */}
//       <motion.section
//         className="py-16 px-8 text-center"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold text-orange-500">Our Mission & Vision</h2>
//         <p className="mt-4 text-lg max-w-3xl mx-auto">
//         The Vision Of KSC Krishna Steel Pvt. Ltd. is To Become A Products Manufacturer at Global  platform,  for  this  we  are  adding  high  technology  machines  & infrastructure to cater any industry demand.



//         </p>
//         <p>Our aim is to stands for high Quality, Low Cost, Reliability & ultimate Customer delight.</p>
//       </motion.section>

//       {/* Our Story */}
//       <motion.section
//         className="bg-gray-800 py-16 px-8 text-center"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold text-orange-500">Our Story</h2>
//         <p className="mt-4 text-lg max-w-3xl mx-auto">
//           Founded with a vision to redefine excellence, our journey began with a small team of
//           passionate individuals who believed in quality craftsmanship and relentless innovation.
//         </p>
//       </motion.section>

//       {/* Core Values */}
//       <motion.section
//         className="py-16 px-8 text-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold text-orange-500">Our Core Values</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
//           <div className="p-6 bg-gray-700 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold">Integrity</h3>
//             <p className="mt-2">We uphold the highest standards of honesty and transparency.</p>
//           </div>
//           <div className="p-6 bg-gray-700 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold">Customer Focus</h3>
//             <p className="mt-2">We prioritize our clients' needs and work tirelessly to exceed expectations.</p>
//           </div>
//           <div className="p-6 bg-gray-700 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold">Excellence</h3>
//             <p className="mt-2">We strive for perfection in every project we undertake.</p>
//           </div>
//         </div>
//       </motion.section>

//       {/* Optional Team Section */}
//       <motion.section
//         className="bg-gray-800 py-16 px-8 text-center"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold text-orange-500">Meet Our Team</h2>
//         <p className="mt-4 text-lg max-w-3xl mx-auto">
//           A team of dedicated professionals bringing experience, expertise, and passion to every
//           project.
//         </p>
//         {/* Add images and names here */}
//       </motion.section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-center py-6">
//         <p className="text-gray-400">© 2025 ABC Fabrication & Trading. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default About;
"use client";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import Image from "next/image";

// const About = () => {
//   return (
//     <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 w-full h-full">
//         <motion.div 
//           className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl top-10 left-10"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute w-80 h-80 bg-indigo-500 opacity-30 rounded-full blur-3xl bottom-10 right-10"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
//         />
//       </div>
      
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto py-20 px-6">
//         <motion.h1 
//           className="text-6xl font-extrabold text-center mb-16 uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
//           initial={{ opacity: 0, y: -50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1 }}
//         >
//           About Us
//         </motion.h1>
        
//         {/** Sections */}
//         <div className="space-y-20 max-w-4xl mx-auto">
//           {sections.map((section, index) => (
//             <motion.div 
//               key={index} 
//               className="relative bg-gray-800 shadow-2xl p-10 rounded-3xl border-l-8 border-blue-500 overflow-hidden group hover:scale-105 transition-transform duration-500" 
//               initial={{ opacity: 0, y: 50 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <motion.div 
//                 className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
//               />
//               <h2 className="text-4xl font-bold mb-6 text-blue-400 flex items-center">
//                 <FaCheckCircle className="text-blue-500 mr-3" /> {section.title}
//               </h2>
//               <p className="text-gray-300 leading-relaxed text-lg font-light">{section.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const sections = [
//   {title:"About Us",
//     content:"We have the first plant KSC KRISHNA STEEL PVT. LTD. FARIDABAD established in the year 2012 as professionally managed under the leadership of Mr. Naresh Singhal who has more than 25 years of experience in a similar field The Company uses high technology and Automatic machinery like Hydraulic/Mechanical/Pneumatic Press machines, Butt Welding machines,  Burn  Cutting  Hydraulic machines,  Rolling  machines,  Lathe  machines,  CNC machines, Laser Cutting, Plasma Cutting and many more… to manufacture a wide range of automotive products.Our Aim is to stands for Quality, Cost, Reliability, Customer Satisfaction."

//   },
//   {
//     title: "Our Vision",
//     content: "To be a global leader in delivering high-quality products while ensuring sustainability and customer satisfaction."
//   },
//   {
//     title: "Quality Policy",
//     content: "We are committed to consistently providing products that meet and exceed customer expectations through continual improvement and innovation."
//   },
//   {
//     title: "Quality Objective",
//     content: "Our goal is to maintain high standards by reducing defects, improving efficiency, and ensuring customer delight."
//   },
//   {
//     title: "Safety Policy",
//     content: "Safety is our top priority. We ensure a secure working environment by adhering to stringent safety protocols."
//   },
//   {
//     title: "Certifications",
//     content: "We hold ISO 9001, ISO 14001, and other industry-recognized certifications, ensuring our commitment to excellence."
//   }
// ];

// export default About;
 "use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

import Head from 'next/head';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../../animations/vision.json";
import aboutData from "../../animations/about.json";
import cert1 from "../../certificates/cert1.png";
import cert2 from "../../certificates/cert2.png";


const About = () => {
  
  return (
    <div>
    <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
    <Image src="/company_logo.png"  alt="image" width={100} height={100}/>
        <nav className="flex space-x-6">
          
          <Link href="/" className="hover:text-gray-400 transition text-white">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition text-white">About</Link>
          <Link href="/services" className="hover:text-gray-400 transition text-white">Services</Link>
          <Link href="/contact" className="hover:text-gray-400 transition text-white">Contact</Link>
        </nav>
      </header>
    <div className="pt-7 relative min-h-screen bg-[#2A2A2A] text-white overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl top-20 left-10"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl bottom-20 right-10"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-20 px-6 text-center">
        <motion.h1 
          className="text-6xl font-extrabold mb-16 mt-[3%] uppercase tracking-wide bg-clip-text  text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        
        {/** Sections with 3D Glass Effect */}
        <div className="space-y-20 max-w-5xl mx-auto flex flex-col items-center">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className="relative w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center border border-white/20 hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center gap-4">
                { index===1? (
                  <Lottie animationData={section.data} className="w-40 h-40" />
                ) : <h1 className="text-3xl font-bold">{section.title}</h1>}
                {/* <h2 className="text-3xl font-bold text-blue-400">
                  {section.title}
                </h2> */}
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  {section.content}
                </p>
                {section?.goal?<p className="text-gray-300 text-lg font-light leading-relaxed ">{section.goal}</p>:""}
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="relative flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-10"
      >
        <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md " />
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-10"
      >
        <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
      </motion.div>
    </div> */}
    {/* <div className="relative w-full flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-10 transform -translate-y-1/2"
      >
        <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md" />
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 right-10 transform -translate-y-1/2"
      >
        <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
      </motion.div>
    </div> */}
   
   <div className="flex justify-center text-3xl py-5 font-bold">Certifications</div>
    <div className="relative w-full flex justify-center items-center h-[500px] bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      {/* Left Certificate Animation */}
     
      <motion.div
      
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={ {x: "50%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-10 top-1/2 transform -translate-y-1/2"
      >
        <Image src={cert1} alt="Certificate 1" width={300} height={300} className="rounded-lg shadow-md" />
      </motion.div>

      {/* Right Certificate Animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: "-50%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut"}}
        className="absolute right-10 top-1/2 transform -translate-y-1/2"
      >
        <Image src={cert2} alt="Certificate 2" width={300} height={300} className="rounded-lg shadow-md" />
      </motion.div>
    </div>
  </div>
      </div>
      <footer className="bg-[#141414] p-6 text-center text-gray-400">
              <p>&copy; 2025 Krishna Steel. All Rights Reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <FaPhone />
                <span>+91  9958064536
      </span>
              </div>
            </footer>
    </div>
  );
};

const sections = [{
  data:aboutData,
  content:"We have the first plant KSC KRISHNA STEEL PVT. LTD. FARIDABAD established in the year 2012 as professionally managed under the leadership of Mr. Naresh Singhal who has more than 25 years of experience in a similar field The Company uses high technology and Automatic machinery like  Hydraulic/Mechanical/Pneumatic Press machines, Butt Welding machines,  Burn  Cutting  Hydraulic  machines,  Rolling  machines,  Lathe  machines,  CNC machines, Laser Cutting, Plasma Cutting and many more… to manufacture a wide range of automotive products.",
  goal:"Our Aim is to stands for Quality, Cost, Reliability, Customer Satisfaction"

},
  {
    data:animationData,
    content: "The Vision Of KSC Krishna Steel Pvt. Ltd. is To Become A Products Manufacturer at Global  platform,  for  this  we  are  adding  high  technology  machines  & infrastructure to cater any industry demand.",
    goal:"Our aim is to stands for high Quality, Low Cost, Reliability & ultimate Customer delight."},
    {
    title: "Quality Policy",
    content: "We are committed to meet or exceed our customer expectation by continual  improving  our  Quality  management  system,  process  & product.",
    goal:"Our ultimate goal is Zero defect in everything we do."
  },
  {
    title: "Quality Objective",
    content: "Continual improvement to be done in each process to achieve zero defect, Continual improve conformity to process product & system requirement for defect prevention.Continual upgrade knowledge & skill of employees and promote team work.Reduction of waste in process & supplier end."
  },
  {
    title: "Safety Policy",
    content: "Health and safety is a primary concern in KSC Krishna Steel Pvt. Ltd. and our excellent safety record bears witness to this fact. We finally believe that continual emphasis on our active safety program will continue to provide a safe and healthy workplace for our personnel and those around them. Our zero incident safety philosophy is a priority and is part of our normal business.At KSC Krishna Steel Pvt. Ltd. safety and health incidents are simply notacceptable.For us safety is more than a policy manual. it’s how we do business and it’s how we live. Our people are our greatest asset and basis for our success.",goal:" Our moto is safety first Production must."
  },
  // {
  //   title: "Certifications",
  //   content: "We hold ISO 9001, ISO 14001, and other industry-recognized certifications, ensuring our commitment to excellence."
  // }
];

export default About;
