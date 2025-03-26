'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
  
const services = [
  { title: 'Custom Fabrication', description: 'Precision metal and machine fabrication tailored to your needs.' },
  { title: 'CNC Machining', description: 'High-quality CNC machining for precision engineering.' },
  { title: 'Welding & Assembly', description: 'Expert welding and assembly services ensuring durability.' },
  { title: 'Equipment Trading', description: 'Trusted trading of industrial machines and equipment.' }
];

const Services = () => {
  return (
    <div>
      <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
    <Image src="/company_logo.png" width={100} height={100} alt='image'/>
        <nav className="flex space-x-6">
          
          <Link href="/" className="hover:text-gray-400 transition text-white">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition text-white">About</Link>
          <Link href="/services" className="hover:text-gray-400 transition text-white">Services</Link>
          <Link href="/contact" className="hover:text-gray-400 transition text-white">Contact</Link>
        </nav>
      </header>
      

      {/* Hero Section */}
      {/* <motion.section
        className="h-80 flex flex-col justify-center items-center text-center bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/services-hero.jpg)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-extrabold">Our Services</h1>
        <p className="mt-4 text-lg">Providing top-quality solutions for your fabrication and machining needs.</p>
      </motion.section> */}

      {/* Services Section */}
      {/* <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Why Choose Us Section */}
      {/* <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">With years of experience and cutting-edge technology, we deliver precision and reliability in every project.</p>
      </div> */}

      {/* Call to Action */}
      {/* <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 mb-6">Contact us today to discuss your project needs.</p>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </Link>
      </div> */}
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

export default Services;
