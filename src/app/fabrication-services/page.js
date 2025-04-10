'use client'
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
import React from "react";
import { useState } from 'react';


const Page = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  return (
    
    <div className="bg-[#1E1E1E] text-white font-sans">
      <Head>
        <title>KRISHNA STEEL PVT LTD.</title>
        <meta name="description" content="Expert machine fabrication, machining, and trading services." />
      </Head>
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
      
      
      {/* Hero Section */}
      {/* <motion.section 
        className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
        style={{ backgroundImage: 'url(/hero.jpg)',height:420 }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
     
      </motion.section> */}




      <section className=' flex-col pt-[10%] pb-[5%] px-[5%]'>
        <h1 className=' pb-5 font-bold text-3xl flex justify-center'>Fabrication Services</h1>
        <p className='text-xl w-full'>At <b>KSC Krishna Group</b>, we specialize in providing high-quality <b>heavy metal fabrication</b> and
custom metal solutions that meet the demands of industries requiring robust, durable, and
precise structures. Our expertise spans a wide range of applications, including the fabrication of
<b>switch yard structures, watch towers, weighing bridges, rolling mill assembly lines,</b> and many
other custom metal components. With decades of experience and a team of skilled fabricators,
we are committed to delivering exceptional products that meet the highest industry standards.</p>

      </section>
      
      

      <section className='px-[5%] flex gap-[5%] pb-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Our Fabrication Capabilities:</h1>
      
        <div className=' text-xl'>
        &#10061; <b>Heavy Metal Fabrication: </b>  
We excel in heavy metal fabrication, utilizing advanced machinery and proven
techniques to create large, heavy-duty metal structures. Our team works with various
materials, including steel, stainless steel, and alloy metals, to deliver custom fabrications
for projects requiring strength, durability, and precision.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Switch Yard Structure Fabrication:</b> 
We provide specialized fabrication services for switch yard structures, including
platforms, supports, ISO, Beams, CT, PT, electrical enclosures. Our structures are built to
withstand the most demanding environments, ensuring long-term performance and
reliability in power generation and transmission settings.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Watch Towers:</b>
We manufacture durable watch towers for security, surveillance, and monitoring
applications. Whether for industrial sites, construction areas, or public infrastructure,
our watch towers are designed for maximum stability and ease of access, with custom
features tailored to your project’s specifications.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Weighing Bridges &amp; Related Components:</b>  
Our fabrication services extend to the design and production of weighing bridges,
including heavy-duty truck and vehicle scales. We provide high-precision, custom-made
weighing bridges that are durable, accurate, and built to meet industry standards for
load-bearing capacity. We also manufacture related components such as load cells,
support frames, and accessories for a complete weighing system.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Rolling Mill Assembly Line Fabrication:</b>  
We have extensive experience in the fabrication and assembly of components for rolling
mill assembly lines. From structural components to intricate machinery, we design and
fabricate parts that ensure the smooth operation of rolling mills. Our team works closely
with clients to deliver solutions that optimize performance, minimize downtime, and
enhance productivity.
        </div>
        <div className='pt-5  text-xl'>
        &#10061; <b> Custom Fabrication of Industrial Components:</b>
In addition to our specialized services, we provide custom fabrication of a wide range of
industrial components, including frames, supports, brackets, and specialized parts
designed to meet the unique needs of your project. We focus on delivering quality
products that are engineered for long-lasting performance in demanding industrial
environments.
        </div>
      
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>
      <section className='flex flex-col items-center py-16'>
        <div className='flex flex-col gap-3 w-[90%]'>
      <h2 className="text-3xl font-bold pb-3 flex justify-center">Why Choose Our Fabrication Services?</h2>
      <li className='text-xl py-3 '><b>Expertise in Heavy Fabrication: </b>  With years of experience in fabricating large, heavy-duty
structures, we have the knowledge and capability to handle the toughest and most
complex projects.</li>
      <li className='text-xl pb-3'><b>Custom Solutions:</b>   We provide tailor-made solutions that meet your specific
requirements, whether for large-scale infrastructure projects or specialized industrial
components.</li>
      <li className='text-xl pb-3'><b>High-Quality Materials:</b>  We use only the highest quality materials, ensuring that every
      component we fabricate meets the necessary durability and strength standards.
to fit your exact needs.</li>
      <li className='text-xl pb-3'><b>Precision &amp; Accuracy: </b> Our fabrication process is driven by precision, ensuring that every
      piece is crafted to exact specifications, with attention to detail in every step.</li>
      <li className='text-xl'><b> Advanced Equipment:</b>  Our shop is equipped with cutting-edge machinery and tools to
handle a wide range of metalworking processes, ensuring efficiency and consistency in
every project.</li>
<li className='text-xl'> <b> Timely Delivery: </b>  We understand the importance of deadlines and work hard to deliver
your fabricated components on time, every time.</li>
      
      </div>
      </section>
     
      {/* <section className=''>
        <div className=' '>
          <h1 className='flex justify-center text-2xl font-bold'>Why Choose Our Fabrication Services?</h1>
          <div className='pt-5 flex justify-center gap-[2%] px-[2%]'>
          <div className='pt-5 border-2 border-white p-5' >
        &#10061; <b>Expertise in Heavy Fabrication: </b>  With years of experience in fabricating large, heavy-duty
structures, we have the knowledge and capability to handle the toughest and most
complex projects.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Custom Solutions:</b>   We provide tailor-made solutions that meet your specific
requirements, whether for large-scale infrastructure projects or specialized industrial
components.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>High-Quality Materials:</b>  We use only the highest quality materials, ensuring that every
        component we fabricate meets the necessary durability and strength standards.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Precision &amp; Accuracy: </b> Our fabrication process is driven by precision, ensuring that every
        piece is crafted to exact specifications, with attention to detail in every step.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b> Advanced Equipment:</b>  Our shop is equipped with cutting-edge machinery and tools to
handle a wide range of metalworking processes, ensuring efficiency and consistency in
every project.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b> Timely Delivery: </b>  We understand the importance of deadlines and work hard to deliver
        your fabricated components on time, every time.
        </div>
        </div>
        </div>
      </section> */}
      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Industries We Serve:</h1>
        <p className='pt-3 text-xl'>Our fabrication services support a wide range of industries, including:</p>
        <div className='pt-5 text-xl '>
        &#10061; <b>Power Generation &amp; Distribution</b>  
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Construction &amp; Infrastructure</b>
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Mining &amp; Heavy Equipment  </b>
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Manufacturing &amp; Industrial Facilities</b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Transportation &amp; Logistics</b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Oil &amp; Gas </b> 
        </div>
        
        
</div>

      </section>
      <section className='py-[2%] px-[5%]'>
        <h1 className='text-3xl flex justify-center font-bold pb-[2%]'>Get in Touch</h1>
        <p className='text-xl'>At KSC Krishna Group, we are dedicated to delivering superior metal fabrication solutions that
meet your specific needs. Whether you require heavy metal fabrication, switch yard
structures, watch towers, weighing bridges, or rolling mill components, we have the expertise
and equipment to deliver reliable, high-quality results.</p>
<p className='mt-[5%] flex justify-center text-blue-400 animate-bounce text-xl'>Contact us today to learn more about how our fabrication services can support your next
project.</p>
      </section>

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

export default Page
