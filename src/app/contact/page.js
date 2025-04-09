


"use client";

import Head from 'next/head';
import { easeInOut, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const Contact = () => {
  return (
    <div className="bg-[#2A2A2A] text-white min-h-screen flex flex-col justify-center items-center px-6 py-[1rem]">
    
        
      {/* Navbar */}
      <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      <Image src="/company_logo.png" alt="image" width={100} height={100} />
      
      <nav className="flex space-x-10">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-400 transition">About</Link>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button className="hover:text-gray-400 transition">
            Services
          </button>

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-50 bg-[#141414] border border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
            <Link
              href="/raw-material-supply"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition"
            >
             Raw Material Supply
            </Link>
            <Link
              href="/machining-services"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition"
            >
             Machining Services
            </Link>
            <Link
              href="/fabrication-services"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition"
            >
              Fabrication Services
            </Link>
          </div>
        </div>

        <Link href="/infraStructure" className="hover:text-gray-400 transition">Infrastructure</Link>
        <Link href="/industry" className="hover:text-gray-400 transition">Industries Served</Link>
        <Link href="/gallery" className="hover:text-gray-400 transition">Gallery</Link>
        <Link href="/career" className="hover:text-gray-400 transition">Career</Link>
        <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </nav>
    </header>
        <h1 className="text-5xl font-bold text-slate-300 mt-[8%] ">Get in Touch</h1>
        <p className="text-lg mt-3 text-gray-300 mb-[2%]">We’re here to help! Contact us for any inquiries.</p>
      {/* </motion.div> */}
      {/* CONTACT FORM & INFO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl py-[1rem]">
        {/* CONTACT INFO */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4 ">
            <FaPhone className="text-blue-700 text-2xl" />
            <p className="text-lg text-gray-300">+91  9958064536
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-700 text-2xl" />
            <p className="text-lg text-gray-300">planthead@ksckrishna.com
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-700 text-2xl" />
            <p className="text-lg text-gray-300">Plot No. 8, Street No.-1, Nagar Chowk, Saroorpur, Ballabgarh-121005-Haryana
            </p>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          {/* <div className="flex space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaTwitter size={30} />
            </a>
          </div> */}
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form 
          className="bg-gray-700 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        
          action="https://formsubmit.co/smritiasha30@gmail.com"
  method="POST"
        >
          <div className="relative">
            <input type="text" name="name" className="w-full bg-transparent border-b-2 border-gray-600 outline-none text-white text-lg py-2 focus:border-orange-500 transition peer" required placeholder="Full Name"/>
            {/* <label htmlFor="name" className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:-top-5 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-orange-500">Full Name</label> */}
          </div>

          <div className="relative">
            <input type="email" name="email" className="w-full bg-transparent border-b-2 border-gray-600 outline-none text-white text-lg py-2 focus:border-orange-500 transition" required  placeholder="Email Address"/>
          
          </div>

          <div className="relative">
            <textarea name="message" className="w-full bg-transparent border-b-2 border-gray-600 outline-none text-white text-lg py-2 focus:border-orange-500 transition resize-none" required placeholder="Your Message"></textarea>
           
          </div>
          <input type="hidden" name="_captcha" value="false" />
          {/* <input type="hidden" name="_next" value="http://localhost:3000/thank-you" /> */}
          <button className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-900 transition cursor-pointer">Send Message</button>
        </motion.form>
      </div>

      {/* MAP SECTION */}
      <motion.div 
        className="w-full max-w-5xl mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <iframe 
          className="w-full h-72 rounded-lg shadow-lg"
          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.122841802731!2d77.26930337428162!3d28.355135496625692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdfd8687b3edf%3A0x45a529e33ebc5059!2sKSC%20KRISHNA%20STEEL%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1744011876017!5m2!1sen!2sin" 
          allowFullScreen="" loading="lazy"></iframe>

{/*  */}
      </motion.div>
      {/* <footer className="bg-[#141414] p-6 text-center text-gray-400 w-full">
              <p>&copy; 2025 Krishna Steel. All Rights Reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <FaPhone />
                <span>+91  9958064536
      </span>
              </div>
            </footer> */}
    </div>
    
  );
};

export default Contact;
// export default function SiteUnderConstruction() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
//       <div className="max-w-3xl bg-gray-950 bg-opacity-80 p-10 rounded-3xl shadow-2xl text-center border border-gray-700">
        
//         {/* Title with Icons in One Line */}
//         <div className="flex items-center justify-center gap-3 text-5xl font-bold">
//           <span>🚧</span>
//           <h1 className="text-4xl font-extrabold">Site Under Maintenance</h1>
//           <span>🚧</span>
//         </div>

//         <p className="mt-3 text-lg text-gray-300">
//         We are currently making some improvements to serve you better. Stay tuned!
        
//         </p>

//         {/* Loader Animation */}
//         <div className="mt-6 flex justify-center">
//           <div className="w-12 h-12 border-4 border-gray-300 border-dashed rounded-full animate-spin"></div>
//         </div>

//       </div>
//     </div>
//   );
// }
