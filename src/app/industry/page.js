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
      
      <section className=' flex-col  pt-[10%] px-[5%]'>
        <h1 className='text-3xl pb-5 font-bold flex justify-center'>Industries Served</h1>
        <p className='text-xl'>At KSC Krishna Group, we specialize in providing high-quality metal fabrication, machining, and
custom solutions to a broad range of industries. With our expertise, advanced infrastructure,
and commitment to precision, we are equipped to handle complex projects across diverse
sectors. Below are the industries we proudly serve, where our solutions play a critical role in
meeting the evolving needs of businesses worldwide.</p>
      </section>
      
      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>1. Power Generation &amp; Distribution:</h1>
        <p className='text-xl'>We provide specialized metal fabrication and custom solutions for the power generation and
distribution industries. From switch yard structures to heavy metal fabrication, we create the
essential components needed for power plants, substations, and electrical transmission lines.
Our solutions are designed to withstand high electrical loads and harsh environments, ensuring
reliable and efficient energy systems.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>2. Oil &amp; Gas:</h1>
        <p className='text-xl'>The oil and gas industry demands high-strength, durable, and precise components for both
upstream and downstream operations. We specialize in fabricating complex oil rig structures,
pipeline supports, storage tanks, offshore platforms, and other essential components. Our
team works closely with clients to deliver solutions that meet industry standards for safety,
performance, and environmental impact.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>3. Construction &amp; Infrastructure</h1>
        <p className='text-xl'>In the construction and infrastructure industry, we provide custom steel fabrication, structural
components, and metalworking solutions for commercial, residential, and industrial projects.
Our work includes the fabrication of structural beams, reinforced supports, pre-fabricated
modules, and construction tools, ensuring the strength and stability of large-scale building
projects.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>4. Mining &amp; Heavy Equipment</h1>
        <p className='text-xl'>We serve the mining and heavy equipment industries with robust metal structures designed to
handle extreme conditions. From mining rigs to equipment frames and support structures, we
fabricate heavy-duty components that can withstand high levels of stress and pressure. Our
expertise in precision machining ensures that every part meets the demanding specifications of
the mining industry.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>5. Manufacturing &amp; Industrial Facilities</h1>
        <p className='text-xl'>Our metal fabrication services cater to the manufacturing and industrial sectors, providing
customized components for assembly lines, factory setups, and industrial machinery. Whether

it&#39;s custom tooling, machine parts, or assembly line structures, our solutions are designed to
optimize productivity, increase efficiency, and reduce downtime for manufacturers.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>6. Transportation &amp; Logistics</h1>
        <p className='text-xl'>We support the transportation and logistics industry with steel fabrication and machined
components for vehicles, infrastructure, and logistics systems. Our work includes truck frames,
railway components, aircraft support structures, and logistics equipment, ensuring durability,
safety, and performance across transportation networks.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>7. Agriculture &amp; Food Processing</h1>
        <p className='text-xl'>In the agriculture and food processing industries, we provide high-quality stainless steel
fabrication solutions that are corrosion-resistant and meet food safety standards. From
machinery parts to processing equipment, our services support the efficient and hygienic
operation of agricultural and food production systems.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>8. Aerospace &amp; Defense</h1>
        <p className='text-xl'>The aerospace and defense industries require precision, strength, and reliability in every
component. We provide metal fabrication services for aircraft frames, defense systems,
components for military vehicles, and other high-performance parts. Our solutions meet the
rigorous safety, quality, and regulatory standards of the aerospace and defense sectors.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>9. Marine &amp; Offshore</h1>
        <p className='text-xl'>Our metal fabrication services also cater to the marine and offshore industry, providing
essential components for ships, boats, and offshore oil rigs. From ship hulls to marine
structures, our solutions are built to withstand the harshest marine environments, offering
both strength and durability.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>10. Telecommunications</h1>
        <p className='text-xl'>We support the telecommunications industry by fabricating communication towers, antenna
supports, base station components, and more. Our products are designed to meet the
structural integrity and reliability needs of telecom infrastructure, ensuring safe and efficient
connectivity solutions.</p>
</div>

      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>11. Automotive</h1>
        <p className='text-xl'>We serve the automotive industry with precision metal fabrication and machining for
automobile parts, chassis components, and customized tooling. Our expertise helps
manufacturers produce components that meet the highest standards for safety, performance,
and efficiency.</p>
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section>

      <section className='px-[5%] flex gap-[5%] py-[5%]'>
      <div className='border-3 border-white w-[50%]'>
  image
</div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>12. Energy &amp; Utilities</h1>
        <p className='text-xl'>Our services also extend to the energy and utilities sectors, where we provide robust and
reliable metal structures for infrastructure such as wind turbine frames, solar panel supports,
and water treatment plants. We help companies ensure that their energy infrastructure is
strong, sustainable, and capable of handling complex energy demands.</p>
</div>

      </section>


      <section className='flex flex-col items-center py-16'>
        <div className='flex flex-col gap-3 w-[90%]'>
      <h2 className="text-3xl font-bold pb-3 flex justify-center">Why Choose Us?</h2>
      <li className='text-xl py-3 '>  <b>  Expertise Across Multiple Industries: </b>We have extensive experience in delivering
customized solutions to a wide range of industries, adapting to their specific needs and
requirements.
complex projects.</li>
      <li className='text-xl pb-3'><b>Custom Fabrication: </b> Whether you need a standard part or a completely customized
      design, we offer tailored solutions to meet your project’s specifications.</li>
      <li className='text-xl pb-3'><b>Precision &amp; Quality: </b> We combine advanced technology with expert craftsmanship to
provide high-precision components that ensure the long-lasting reliability of your
equipment.</li>
      <li className='text-xl pb-3'><b>Timely Delivery: </b> Our efficient production process and strong project management
      capabilities ensure that your components are delivered on time, every time.</li>
      {/* <li className='text-xl'><b> Advanced Equipment:</b>  Our shop is equipped with cutting-edge machinery and tools to
handle a wide range of metalworking processes, ensuring efficiency and consistency in
every project.</li>
<li className='text-xl'> <b> Timely Delivery: </b>  We understand the importance of deadlines and work hard to deliver
your fabricated components on time, every time.</li> */}
      
      </div>
      </section>


      {/* <section className=''>
        <div className=' '>
          <h1 className='flex justify-center text-2xl font-bold'>Why Choose Us?</h1>
          <div className='pt-5 flex justify-center gap-[3%] px-[5%]'>
          <div className='pt-5 border-2 border-white p-5 ' >
          &#10061; <b>  Expertise Across Multiple Industries: </b>We have extensive experience in delivering
customized solutions to a wide range of industries, adapting to their specific needs and
requirements.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Custom Fabrication: </b> Whether you need a standard part or a completely customized
        design, we offer tailored solutions to meet your project’s specifications.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Precision &amp; Quality: </b> We combine advanced technology with expert craftsmanship to
provide high-precision components that ensure the long-lasting reliability of your
equipment.
        </div>
        <div className='pt-5 border-2 border-white p-5'>
        &#10061; <b>Timely Delivery: </b> Our efficient production process and strong project management
        capabilities ensure that your components are delivered on time, every time.
        </div>
        </div>
        </div>
      </section> */}
      <section className='pb-[5%] px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>Get in Touch</h1>
        <p className='text-xl'>No matter the industry, KSC Krishna Group is committed to delivering high-quality, reliable, and
cost-effective metal fabrication solutions. If you have a specific need or project in mind, don’t
hesitate to contact us. Our team is ready to collaborate with you on your next venture.</p>
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
