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
  
   
  return (
    
    <div className="bg-[#1E1E1E] text-white font-sans ">
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
<div className="pt-[10%] px-[5%]">
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <a href="/" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <span className="text-gray-300 font-bold">&gt;</span>
        </li>
        
        <li>
          <span className="text-gray-300">Machining Services</span>
        </li>
      </ol>
    </nav>
  </div>
  
      <section className=' flex-col items-center pt-[3%]  px-[5%]  w-full '>
        <h1 className='text-3xl pb-5 font-bold flex justify-center'>Machine Shop Description</h1>
        <p className='text-xl '>Welcome to the <b>Machine Shop</b> at <b>KSC Krishna Group</b> , where precision, quality, and
craftsmanship come together to deliver superior results. Our advanced machine shop is
equipped with state-of-the-art machinery and operated by a skilled team of engineers and
machinists who are dedicated to meeting the highest industry standards.</p>
<p className='text-xl mt-5'>Whether you&#39;re looking for custom parts, prototypes, or large production runs, our machine
shop is designed to handle a wide variety of machining needs, from simple to complex projects.</p>
      </section>
      
      

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[1%]'>Our Capabilities:</h1>
      
        <div className='pt-5 text-xl '>
        &#10061; <b>CNC Milling:  </b>  Our CNC (Computer Numerical Control) milling machines offer precision
cutting, drilling, and shaping of metal components. With multi-axis capabilities, we can
create intricate parts with tight tolerances and complex geometries.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>CNC Turning:</b> Our CNC lathes are capable of producing high-quality cylindrical parts with
accuracy and repeatability. Ideal for creating shafts, rods, and other cylindrical
components, we ensure consistency and excellent surface finishes in every part.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Grinding:  </b>We offer surface grinding and cylindrical grinding services to achieve fine
finishes and precise dimensions on parts that require tight tolerances. This process is
used to refine and improve the surface quality of components.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Drilling &amp; Boring: </b>  Equipped with the latest machinery, we can handle precision drilling
and boring operations for creating holes, slots, and other critical features on a variety of
metal components.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Prototyping &amp; Small Batch Production:</b>  Whether you&#39;re in the design phase or need
low-volume production, we specialize in prototyping and small batch runs, ensuring
that you get high-quality, functional parts quickly and cost-effectively.
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b> Assembly &amp; Inspection: </b>After machining, we provide assembly services for parts that
require integration with other components. Our experienced team also conducts
rigorous quality inspections to ensure every part meets your specifications and quality
standards.
        </div>
      
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='flex flex-col items-center py-16'>
        <div className='flex flex-col gap-3 w-[90%]'>
      <h2 className="text-3xl font-bold pb-3 flex justify-center">Why Choose Our Machine Shop?</h2>
      <li className='text-xl py-3 '><b>Advanced Technology:  </b> We invest in the latest CNC machines, tooling, and technology to
      deliver precise and efficient machining solutions.</li>
      <li className='text-xl pb-3'><b>Skilled Workforce:</b>  Our team of experienced machinists, engineers, and technicians is
      committed to quality and delivering results that exceed your expectations.</li>
      <li className='text-xl pb-3'><b>Customization: </b> Whether you need a one-off custom part or a large production run, our
machine shop can accommodate a wide range of projects, providing tailored solutions
to fit your exact needs.</li>
      <li className='text-xl pb-3'><b>Precision and Accuracy:</b>  Our commitment to maintaining tight tolerances ensures that
      each part is made to your specifications, with the highest level of detail and quality.</li>
      <li className='text-xl'><b> Fast Turnaround: </b> We understand the importance of deadlines and work diligently to
      provide quick turnarounds without compromising on quality.</li>
      
      </div>
      </section>
     
      {/* <section className=''>
        <div className=' '>
          <h1 className='flex justify-center text-2xl font-bold'>Why Choose Our Machine Shop?</h1>
          <div className='pt-5 flex justify-center gap-[3%] px-[5%]'>
                
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b> Fast Turnaround: </b> We understand the importance of deadlines and work diligently to
        provide quick turnarounds without compromising on quality.
        </div>
        </div>
        </div>
      </section> */}
      <section className='px-[5%] flex gap-[15%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-3xl pb-[1%]'>Industries We Serve:</h1>
        <p className='pt-3 text-xl'>We serve a diverse range of industries, including:</p>
        <div className='pt-5 text-xl'>
        &#10061; <b>Automotive </b>  
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Aerospace </b>
        </div>
        <div className='pt-5 text-xl '>
        &#10061; <b>Defense  </b>
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Medical Devices </b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Construction</b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Industrial Equipment </b> 
        </div>
        <div className='pt-5 text-xl'>
        &#10061; <b>Consumer Products </b> 
        </div>
        
</div>

      </section>
      <section className='py-[3%] px-[5%]'>
        <h1 className='text-3xl flex justify-center font-bold pb-[2%]'>Get in Touch</h1>
        <p className='text-xl'>If you’re looking for high-precision machining services, KSC Krishna Group is here to help. Our
machine shop is equipped to handle any challenge, from prototype development to large-scale
production runs. Contact us today to learn more about our capabilities or to discuss your next
machining project.</p>
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
