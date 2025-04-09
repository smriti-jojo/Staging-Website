'use client'
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
import React from "react";
import { useState } from 'react';


const page = () => {

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
      

      <section className=' flex-col  pt-[10%] px-[5%]'>
        <h1 className='text-3xl pb-5 font-bold flex justify-center'>Infrastructure Overview</h1>
        <p className='text-xl '>At KSC Krishna Group, we pride ourselves on having a state-of-the-art facility equipped with the
latest technology and machinery to meet the demands of our diverse clients. Our infrastructure
is designed to support large-scale fabrication projects and provide efficient, high-quality
solutions in metalworking, ensuring we can handle projects of any size or complexity.</p>
      </section>
      
      <section className='px-[5%] flex gap-[5%] pt-[6%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Facility Size and Layout:</h1>
        <p className='text-xl '>Our manufacturing facility spans a covered area of 24,000 sq. ft., offering ample space for all
our operations. This expansive workspace allows us to carry out large-scale fabrication,
assembly, and machining tasks, providing a safe and organized environment for our highly
skilled workforce. The facility is structured to maximize operational efficiency, ensuring
seamless workflow from raw material handling to final product assembly.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] pt-[9%] pb-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Crane Capacity:</h1>
        <p className='text-xl'>To facilitate the movement of heavy materials and equipment throughout our facility, we are
equipped with three EOT (Electric Overhead Traveling) cranes, each with a lifting capacity of
8MT (8 metric tons). These cranes allow us to easily handle large and heavy components,
improving operational efficiency and reducing manual labor. With the ability to move materials
quickly and safely, our cranes play a critical role in streamlining fabrication and assembly
processes.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Machinery List:</h1>
        <p className='pt-3 text-xl'>We offer a full spectrum of services to address the diverse needs of our customers:</p>
        <div className='pt-5 text-xl'>
        &#10061; <b>CNC Milling Machines: </b>  High-precision machines that allow us to manufacture complex
        parts with intricate geometries and tight tolerances.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>CNC Turning Lathes: </b>Used for producing cylindrical parts with high accuracy, ideal for
        shafts, rods, and other turned components.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>CNC Laser Cutting Machines:  </b>Used for cutting sheet metal with utmost precision and
        accuracy.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>CNC Plasma Cutting Machines: </b> Used for cutting MS Plates of high thickness.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Welding Machines: </b> Including MIG, TIG, and ARC welding machines for a variety of
        welding applications, ensuring strong and durable joints across different materials.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Plate Rolling Machines: </b> For creating curves, rolls, and cylindrical shapes from sheet
        metal.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>CNC Bending Machines: </b>  Used for accurately bending metal sheets and plates to meet
        specific design requirements.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Punching Machines:</b>  Ideal for creating holes, slots, or other shapes in sheet metal
        quickly and efficiently.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Surface Grinding Machines: </b>  To provide smooth finishes and precise dimensions on
        components.
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Drilling and Tapping Machines: </b> For creating holes and threads in metal parts with high
        accuracy.
        </div>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>

      </section>

      

      <section className='flex flex-col items-center py-16'>
        <div className='flex flex-col gap-3 w-[90%]'>
      <h2 className="text-3xl font-bold pb-3 flex justify-center">Why Our Infrastructure Matters ?</h2>
      <li className='text-xl py-3 '>  <b>Efficiency: </b> Our spacious facility and advanced machinery ensure smooth production
processes, from raw material handling to final product delivery. The strategic layout of
our space maximizes productivity while minimizing downtime.
complex projects.</li>
      <li className='text-xl pb-3'><b>Safety: </b> The facility is designed with safety as a top priority. From the proper use of
cranes to ensuring adequate space between workstations, we ensure the health and
safety of our employees and materials.</li>
      <li className='text-xl pb-3'><b>Versatility: </b>  With our wide range of machinery and capabilities, we are able to handle
diverse projects, from heavy metal fabrication to precision machining, meeting the
requirements of a wide variety of industries.</li>
      <li className='text-xl pb-3'><b>Capacity: </b> The combination of our extensive covered area and heavy lifting cranes
ensures we can handle large-scale and complex fabrication projects with ease, providing
the support needed for projects that require heavy-duty materials and precision work.</li>
      {/* <li className='text-xl'><b> Advanced Equipment:</b>  Our shop is equipped with cutting-edge machinery and tools to
handle a wide range of metalworking processes, ensuring efficiency and consistency in
every project.</li>
<li className='text-xl'> <b> Timely Delivery: </b>  We understand the importance of deadlines and work hard to deliver
your fabricated components on time, every time.</li> */}
      
      </div>
      </section>

      {/* <section className=''>
        <div className=' '>
          <h1 className='flex justify-center text-2xl font-bold'>Why Our Infrastructure Matters:</h1>
          <div className='pt-5 flex justify-center gap-[3%] px-[5%]'>
          <div className='pt-5 border-2 border-white p-5' >
        &#10061; <b>Efficiency: </b> Our spacious facility and advanced machinery ensure smooth production
processes, from raw material handling to final product delivery. The strategic layout of
our space maximizes productivity while minimizing downtime.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Safety: </b> The facility is designed with safety as a top priority. From the proper use of
cranes to ensuring adequate space between workstations, we ensure the health and
safety of our employees and materials.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Versatility: </b>  With our wide range of machinery and capabilities, we are able to handle
diverse projects, from heavy metal fabrication to precision machining, meeting the
requirements of a wide variety of industries.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Capacity: </b> The combination of our extensive covered area and heavy lifting cranes
ensures we can handle large-scale and complex fabrication projects with ease, providing
the support needed for projects that require heavy-duty materials and precision work.
        </div>
        </div>
        </div>
      </section> */}
      <section className='pb-[5%] px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>Get in Touch</h1>
        <p className='text-xl'>At KSC Krishna Group, we are equipped to handle projects of any size and complexity. Our
expansive infrastructure and cutting-edge machinery allow us to deliver high-quality, efficient,
and precise fabrication services. Contact us today to learn more about our capabilities and how
we can support your next project.</p>
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

export default page
