'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';



const Home = () => {

  const handleClick = () => {
      
    router.push('/contact');
    
  };
return (
    <div className="bg-[#1E1E1E] text-white font-sans ">
      <Head>
        <title>KRISHNA STEEL PVT LTD.</title>
        <meta name="description" content="Expert machine fabrication, machining, and trading services." />
      </Head>
      
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

   
    
            <section className='px-[5%] flex gap-[5%] pt-[12%]  h-screen'>
            <div className='border-3 border-white w-[50%] h-auto '>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-3xl pb-[1%]'>Raw Material:</h1>
  
        <div className='pt-5 text-xl '>
        &#10061;  <b> CR HR Sheets – </b>  We are supplier of CR, HR sheets of Grades E250,
E350, E450, IRS Standards, Hardox, Rockstar and other grades as per
your demand
        </div>
        <div className='pt-5 text-xl '>
        &#10061;  <b>Alloy Steel – </b> All types of alloy steel including EN Grade, MnCr Grades,
        etc.,
        </div>
        <div className='pt-5 text-xl'>
        &#10061;  <b>Structural Steel – </b> Angle, Channel, Beams of all sizes
        accuracy.
        </div>
        <div className='pt-5 text-xl'>
        &#10061;  <b>Seamless Pipes </b> 
        </div>
        <div className='pt-5 text-xl '>
        &#10061;  <b>ERW Pipe </b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061;  <b>Stainless Steel Pipes and sheets</b> 
        </div>
       
</div>

      </section>
       <section className="py-16 bg-[#1E1E1E] text-center">
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <motion.button
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={handleClick}
              >
                Contact Us
              </motion.button>
            </section>
            
            {/* Footer */}
            <footer className="bg-[#141414] p-6 text-center text-gray-400">
              <p>&copy; 2025 Krishna Steel. All Rights Reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <FaPhone />
                <span>+91  9958064536
      </span>
              </div>
            </footer>
        
      </div>
      )
     }
     export default Home;