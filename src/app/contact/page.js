// import Head from 'next/head';

// export default function Contact() {
//   return (
//     <div>
//       <Head>
//         <title>Contact Us | ABC Fabrication</title>
//         <meta name="description" content="Get in touch with ABC Fabrication for your machine fabrication needs." />
//       </Head>

//       <h1 className="text-3xl font-bold text-center mt-10">Contact Us</h1>
//       <p className="text-center p-10">
//         📧 Email: contact@abcfabrication.com <br />
//         📞 Phone: +1 234 567 890
//       </p>
//     </div>
//   );
// }

"use client";

import Head from 'next/head';
import { easeInOut, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";


const Contact = () => {
  return (
    <div className="bg-[#2A2A2A] text-white min-h-screen flex flex-col justify-center items-center px-6 py-[1rem]">
      {/* HEADER SECTION */}
      {/* <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-orange-500">Get in Touch</h1>
        <p className="text-lg mt-3 text-gray-300">We’re here to help! Contact us for any inquiries.</p>
      </motion.div> */}

{/* <motion.div 
        className="text-center mb-12"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }} 
        transition={{ duration: 1.5 ,ease:"easeInOut"}}
      > */}
      <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      <Image src="/company_logo.png" width={100} height={100} alt='image'/>
              <nav className="flex space-x-6">
               
              <Link href="/" className="hover:text-gray-400 transition">Home</Link>
                <Link href="/about" className="hover:text-gray-400 transition">About</Link>
                <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
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
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56182.31879448437!2d77.27190392187677!3d28.34690750106614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%208%2C%20Street%20No.-1%2C%20Nagar%20Chowk%2C%20Saroorpur%2C%20Ballabgarh-121005%2C%20Haryana!5e0!3m2!1sen!2sin!4v1742220301155!5m2!1sen!2sin" 
          allowFullScreen="" loading="lazy"></iframe>
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
