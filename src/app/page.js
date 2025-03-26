
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



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     arrows: true,
    
    
  };
  const partners = [
    { name: "Partner 1", logo: "/customer/vert.png",desc:'HI mark' },
    { name: "Partner 2", logo: "/customer/CG.png" ,desc:'HI mark' },
    { name: "Partner 3", logo: "/customer/JVM.png",desc:'HI mark' },
    { name: "Partner 4", logo: "/customer/Jai.png" ,desc:'HI mark'},
    { name: "Partner 5", logo: "/customer/sietz.jpg" ,desc:'HI mark'},
    { name: "Partner 6", logo: "/customer/GD.png" ,desc:'HI mark'},
    { name: "Partner 7", logo: "/customer/isgec.png" ,desc:'HI mark'},
    { name: "Partner 8", logo: "/customer/jamna.png" ,desc:'HI mark'},
    { name: "Partner 9", logo: "/customer/qlar.png" ,desc:'HI mark'},
    { name: "Partner 10", logo: "/customer/samco.png" ,desc:'HI mark'},
    { name: "Partner 11", logo: "/customer/schen.png" ,desc:'HI mark'},
    { name: "Partner 12", logo: "/customer/talbros.png" ,desc:'HI mark'},
    { name: "Partner 13", logo: "/customer/victora.png" ,desc:'HI mark'},
  ];

  const infraProduct=[{title:"Infrastructure",content:"We have state of art manufacturing plant in Faridabad with a power backup of 250Kva DG and a covered area of 16500 Sq. Ft. Our  plant  has  machinery  like  Laser  cutting  Machine,  Plasma  machine,  CNC  Bending Machine, NC Shearing Machine,  CNC Turning machines, VMC Machines, Lathe Machines, Hydraulic & Mechanical Power Presses, Bradshaw, etc.Our Plant has two 10 MT EOT Crane.",index:1},
    {title:"Machinery & Working Capacity",content:"Machinery & Working Capacity",index:2},{
      title:"Product",content:"Our products varies from construction equipment parts, solar panel parts etc.",index:3
    }
  ]
  
  return (
    <div className="bg-[#1E1E1E] text-white font-sans">
      <Head>
        <title>KRISHNA STEEL PVT LTD.</title>
        <meta name="description" content="Expert machine fabrication, machining, and trading services." />
      </Head>
      
      {/* Navbar */}
      <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
        <Image src="/company_logo.png" className='w-[100px]' alt='image'/>
        <nav className="flex space-x-10">
         
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg">
          <h2 className="text-5xl font-extrabold">Success With Excellence.</h2>
        
          <div className="text-lg mt-4">Zero defect in everything we do</div>
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.section>
      
      {/* Services Section */}
      
        <section className="py-20 px-10 text-center">
         <h2 className="text-4xl font-bold mb-10">From Infrastructure To Products</h2>
         <div className="grid md:grid-cols-3 gap-6">
           {/* {["Heavy Metal Fabrication", "Machining", "Trading"].map((service, index) => ( */}
              {infraProduct.map((service, index) => (
             <motion.div 
               key={index}
               className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
             >
              {/* <FaCheckCircle className="text-4xl mx-auto text-blue-400" /> */}
               {/* <h3 className="text-2xl font-semibold">{service}</h3>
               <p className="text-gray-400 mt-3">High-quality {service.toLowerCase()} solutions tailored to your needs.</p> */}
           <h3 className="text-2xl font-semibold mb-3" key={index}>{service.title}</h3>
           
            {index==0?service.content:<div ><p key={index} >{service.content}</p> <Link href='/' className="text-blue-700 underline">See More...</Link></div>}
             </motion.div>
           ))}
      </div>     </section>

      
      
      {/* Why Choose Us Section */}
      
      <section className='flex flex-col items-center py-16'>
        <div className='flex flex-col gap-3'>
      <h2 className="text-5xl font-bold pb-3">Why Choose Us?</h2>
      <li className='text-lg'>Dedicated Team For each Project</li>
      <li className='text-lg'>Quality Assurance Guaranteed</li>
      <li className='text-lg'>On-Time Delivery Records</li>
      <li className='text-lg'>No-Defect Delivery Policy</li>
      </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-[#2A2A2A] text-center">
        <h2 className="text-4xl font-bold">Client Testimonials</h2>
        <div className='flex gap-[5%] px-5'>
        <div className="mt-8 max-w-xl mx-auto bg-[#3A3A3A] p-6 rounded-lg">
          <FaQuoteLeft className="text-4xl mx-auto text-gray-500" />
          <p className="mt-4 italic">&quot;Krishna Steel exceeded our expectations with their top-quality services.&quot;</p>
          <h4 className="mt-4 font-semibold">- garvit, CEO</h4>
          </div>
          <div className="mt-8 max-w-xl mx-auto bg-[#3A3A3A] p-6 rounded-lg">
          <FaQuoteLeft className="text-4xl mx-auto text-gray-500" />
          <p className="mt-4 italic">&quot;Krishna Steel exceeded our expectations with their top-quality services.&quot;</p>
          <h4 className="mt-4 font-semibold">-smriti, CEO</h4>
          </div>
          <div className="mt-8 max-w-xl mx-auto bg-[#3A3A3A] p-6 rounded-lg">
          <FaQuoteLeft className="text-4xl mx-auto text-gray-500" />
          <p className="mt-4 italic">&quot;Krishna Steel exceeded our expectations with their top-quality services.&quot;</p>
          <h4 className="mt-4 font-semibold">- jojo, CEO</h4>
          </div>
        </div>
        
      </section>
      
      {/* Partners Section */}
      {/* <section className="py-16 text-center">
        <h2 className="text-4xl font-bold">Our Partners</h2>
        <div className="mt-6 flex justify-center space-x-10">
          <div className="p-4 bg-[#3A3A3A] rounded-lg w-40">Partner 1</div>
          <div className="p-4 bg-[#3A3A3A] rounded-lg w-40">Partner 2</div>
        </div>
      </section>
       */}
        <section className="p-10 text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">Our Customer</h2>
        {/* <motion.div className="flex overflow-hidden whitespace-nowrap">
          <motion.div animate={{ x: [0, -500, 0] }} transition={{ repeat: Infinity, duration: 100 }} className="flex space-x-10">
            <img src="/partner.jpg" alt="Partner 1" className="w-24" />
            <img src="/partner.jpg" alt="Partner 2" className="w-24" />
            <img src="/partner.jpg" alt="Partner 3" className="w-24" />
          </motion.div>
        </motion.div> */}
        {/* <div className="flex gap-10 items-center justify-center  bg-slate-200 " >
       
        <div className=" relative max-w-full px-[2.5%] ">
      <Slider {...settings}>
      {partners.map((image, index) => (
         <div key={index} className="   flex items-center  justify-center w-full">
          <div key={index} className='flex justify-center p-3 mt-4'>
            <img src={image.logo} alt={`slide ${index + 1}`}   />
          </div>
          </div>
        ))}
      </Slider>
    </div>
      </div> */}
      <div className='flex  flex-wrap gap-15'>
      {partners.map((image, index) => (
         <Image src={image.logo}  className='w-[12%] h-20 bg-amber-200 rounded-md' key={index}  alt='image'/>))}
      </div>
      

      </section>
      {/* CTA Section */}
      <section className="py-16 bg-[#1E1E1E] text-center">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
          whileHover={{ scale: 1.1 }}
          
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
  );
};

export default Home;

