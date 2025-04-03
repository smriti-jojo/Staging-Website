
//  "use client";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { useState, useEffect, useRef } from "react";
// import Link from 'next/link';
// import { FaPhone } from 'react-icons/fa';

// import Head from 'next/head';

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import animationData from "../../animations/vision.json";
// import aboutData from "../../animations/about.json";
// import cert1 from "../../certificates/cert1.png";
// import cert2 from "../../certificates/cert2.png";


// const About = () => {
  
//   return (
//     <div>
//     <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
//     <Image src="/company_logo.png"  alt="image" width={100} height={100}/>
//         <nav className="flex space-x-6">
          
//           <Link href="/" className="hover:text-gray-400 transition text-white">Home</Link>
//           <Link href="/about" className="hover:text-gray-400 transition text-white">About</Link>
//           <Link href="/services" className="hover:text-gray-400 transition text-white">Services</Link>
//           <Link href="/contact" className="hover:text-gray-400 transition text-white">Contact</Link>
//         </nav>
//       </header>
//     <div className="pt-7 relative min-h-screen bg-[#2A2A2A] text-white overflow-hidden">
//       {/* Floating Background Elements */}
//       <motion.div 
//         className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl top-20 left-10"
//         animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl bottom-20 right-10"
//         animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
//       />
      
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto py-20 px-6 text-center">
//         <motion.h1 
//           className="text-6xl font-extrabold mb-16 mt-[3%] uppercase tracking-wide bg-clip-text  text-white drop-shadow-lg"
//           initial={{ opacity: 0, y: -50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1 }}
//         >
//           About Us
//         </motion.h1>
        
//         {/** Sections with 3D Glass Effect */}
//         <div className="space-y-20 max-w-5xl mx-auto flex flex-col items-center">
//           {sections.map((section, index) => (
//             <motion.div 
//               key={index} 
//               className="relative w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center border border-white/20 hover:scale-105 transition-transform duration-500"
//               initial={{ opacity: 0, y: 50 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <div className="flex flex-col items-center gap-4">
//                 { index===1? (
//                   <Lottie animationData={section.data} className="w-40 h-40" />
//                 ) : <h1 className="text-3xl font-bold">{section.title}</h1>}
//                 {/* <h2 className="text-3xl font-bold text-blue-400">
//                   {section.title}
//                 </h2> */}
//                 <p className="text-gray-300 text-lg font-light leading-relaxed">
//                   {section.content}
//                 </p>
//                 {section?.goal?<p className="text-gray-300 text-lg font-light leading-relaxed ">{section.goal}</p>:""}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {/* <div className="relative flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute left-10"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md " />
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//         className="absolute right-10"
//       >
//         <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div> */}
//     {/* <div className="relative w-full flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute top-1/2 left-10 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//         className="absolute top-1/2 right-10 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div> */}
   
//    <div className="flex justify-center text-3xl py-5 font-bold">Certifications</div>
//     <div className="relative w-full flex justify-center items-center h-[500px] bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
//       {/* Left Certificate Animation */}
     
//       <motion.div
      
//         initial={{ x: "-100%", opacity: 0 }}
//         whileInView={ {x: "50%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute left-10 top-1/2 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={300} className="rounded-lg shadow-md" />
//       </motion.div>

//       {/* Right Certificate Animation */}
//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         whileInView={{ x: "-50%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut"}}
//         className="absolute right-10 top-1/2 transform -translate-y-1/2"
//       >
//         <Image src={cert2} alt="Certificate 2" width={300} height={300} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div>
//   </div>
//       </div>
//       <footer className="bg-[#141414] p-6 text-center text-gray-400">
//               <p>&copy; 2025 Krishna Steel. All Rights Reserved.</p>
//               <div className="mt-2 flex justify-center space-x-4">
//                 <FaPhone />
//                 <span>+91  9958064536
//       </span>
//               </div>
//             </footer>
//     </div>
//   );
// };

// const sections = [{
//   data:aboutData,
//   content:"We have the first plant KSC KRISHNA STEEL PVT. LTD. FARIDABAD established in the year 2012 as professionally managed under the leadership of Mr. Naresh Singhal who has more than 25 years of experience in a similar field The Company uses high technology and Automatic machinery like  Hydraulic/Mechanical/Pneumatic Press machines, Butt Welding machines,  Burn  Cutting  Hydraulic  machines,  Rolling  machines,  Lathe  machines,  CNC machines, Laser Cutting, Plasma Cutting and many more… to manufacture a wide range of automotive products.",
//   goal:"Our Aim is to stands for Quality, Cost, Reliability, Customer Satisfaction"

// },
//   {
//     data:animationData,
//     content: "The Vision Of KSC Krishna Steel Pvt. Ltd. is To Become A Products Manufacturer at Global  platform,  for  this  we  are  adding  high  technology  machines  & infrastructure to cater any industry demand.",
//     goal:"Our aim is to stands for high Quality, Low Cost, Reliability & ultimate Customer delight."},
//     {
//     title: "Quality Policy",
//     content: "We are committed to meet or exceed our customer expectation by continual  improving  our  Quality  management  system,  process  & product.",
//     goal:"Our ultimate goal is Zero defect in everything we do."
//   },
//   {
//     title: "Quality Objective",
//     content: "Continual improvement to be done in each process to achieve zero defect, Continual improve conformity to process product & system requirement for defect prevention.Continual upgrade knowledge & skill of employees and promote team work.Reduction of waste in process & supplier end."
//   },
//   {
//     title: "Safety Policy",
//     content: "Health and safety is a primary concern in KSC Krishna Steel Pvt. Ltd. and our excellent safety record bears witness to this fact. We finally believe that continual emphasis on our active safety program will continue to provide a safe and healthy workplace for our personnel and those around them. Our zero incident safety philosophy is a priority and is part of our normal business.At KSC Krishna Steel Pvt. Ltd. safety and health incidents are simply notacceptable.For us safety is more than a policy manual. it’s how we do business and it’s how we live. Our people are our greatest asset and basis for our success.",goal:" Our moto is safety first Production must."
//   },
//   // {
//   //   title: "Certifications",
//   //   content: "We hold ISO 9001, ISO 14001, and other industry-recognized certifications, ensuring our commitment to excellence."
//   // }
// ];

// export default About;
export default function SiteUnderConstruction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <div className="max-w-3xl bg-gray-950 bg-opacity-80 p-10 rounded-3xl shadow-2xl text-center border border-gray-700">
        
        {/* Title with Icons in One Line */}
        <div className="flex items-center justify-center gap-3 text-5xl font-bold">
          <span>🚧</span>
          <h1 className="text-4xl font-extrabold">Site Under Maintenance</h1>
          <span>🚧</span>
        </div>

        <p className="mt-3 text-lg text-gray-300">
        We are currently making some improvements to serve you better. Stay tuned!
        
        </p>

        {/* Loader Animation */}
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-dashed rounded-full animate-spin"></div>
        </div>

      </div>
    </div>
  );
}
