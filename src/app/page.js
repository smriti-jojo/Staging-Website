
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
import { useRouter } from 'next/navigation';



const Home = () => {
  
  const router=useRouter();
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //    arrows: true,
    
    
  // };
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: true,
    

  };

  const MachineSetting = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: true // Ensure arrows are enabled
  };
  const partners = [
    { name: "Partner 1", logo: "/customer/vert.png",desc:'HI mark' },
    { name: "Partner 2", logo: "/customer/CG.png" ,desc:'HI mark' },
    { name: "Partner 3", logo: "/customer/JVM.png",desc:'HI mark' },
    { name: "Partner 4", logo: "/customer/Jai.png" ,desc:'HI mark'},
    { name: "Partner 5", logo: "/customer/sietz.jpg" ,desc:'HI mark'},
    { name: "Partner 6", logo: "/customer/GD.png" ,desc:'HI mark'},
   
    { name: "Partner 7", logo: "/customer/jamna.png" ,desc:'HI mark'},
    { name: "Partner 8", logo: "/customer/qlar.png" ,desc:'HI mark'},
    { name: "Partner 9", logo: "/customer/samco.png" ,desc:'HI mark'},
    { name: "Partner 10", logo: "/customer/schen.png" ,desc:'HI mark'},
    { name: "Partner 11", logo: "/customer/talbros.png" ,desc:'HI mark'},

  ];

  const services=[{
    title:'CNC Milling Machines',
    logo:'/services-home/CNC_Milling_Machines.jpg',
     desc:'High-precision machines that allow us to manufacture complex parts with intricate geometries and tight tolerances'
  },
  {
    title:'CNC Turning Lathes',
    logo:'/services-home/Lathes.jpg',
     desc:'Used for producing cylindrical parts with high accuracy, ideal for shafts, rods, and other turned components.'
  },
  {
    title:'CNC Laser Cutting Machines',
    logo:'/services-home/Laser_Cutting.jpg',
     desc:'Used for cutting sheet metal with utmost precision and accuracy.'
  },
  {
    title:'CNC Plasma Cutting Machines',
    logo:'/services-home/Plasma_Cutting.jpg',
     desc:'Used for cutting MS Plates of high thickness.'
  },
  {
    title:'Welding Machines',
    logo:'/services-home/Welding_Machine',
     desc:'Including MIG, TIG, and ARC welding machines for a variety of welding applications, ensuring strong and durable joints across different materials.'
  },
  {
    title:'Plate Rolling Machines',
    logo:'/services-home/Plate_Rolling',
     desc:'For creating curves, rolls, and cylindrical shapes from sheet metal.'
  },
  {
    title:'CNC Bending Machines',
    logo:'/services_home/Lathes',
     desc:'Used for accurately bending metal sheets and plates to meet specific design requirements.'
  },
  {
    title:'Punching Machines',
    logo:'/services_home/Lathes',
     desc:'Ideal for creating holes, slots, or other shapes in sheet metal quickly and efficiently.'
  },
  {
    title:'Surface Grinding Machines',
    logo:'/services_home/Lathes',
     desc:'To provide smooth finishes and precise dimensions on components.'
  },
  {
    title:'Drilling and Tapping Machines',
    logo:'/services_home/Lathes',
     desc:'For creating holes and threads in metal parts with high accuracy.'
  }
]

  const infraProduct=[{title:"Infrastructure",content:"We have state of art manufacturing plant in Faridabad with a power backup of 250Kva DG and a covered area of 16500 Sq. Ft. Our  plant  has  machinery  like  Laser  cutting  Machine,  Plasma  machine,  CNC  Bending Machine, NC Shearing Machine,  CNC Turning machines, VMC Machines, Lathe Machines, Hydraulic & Mechanical Power Presses, Bradshaw, etc.Our Plant has two 10 MT EOT Crane.",index:1},
    {title:"Machinery & Working Capacity",content:"Machinery & Working Capacity",index:2},{
      title:"Product",content:"Our products varies from construction equipment parts, solar panel parts etc.",index:3
    }
  ]
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
   
    const handleClick = () => {
      
      router.push('/contact');
      
    };
  
  return (
    <div className="bg-[#1E1E1E] text-white font-sans">
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
      
      
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        {/*<div className="bg-black bg-opacity-60 p-10 rounded-lg">
          <h2 className="text-5xl font-extrabold">Success With Excellence.</h2>
        
          <div className="text-lg mt-4">Zero defect in everything we do</div>
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            Get a Quote
          </motion.button>
        </div>*/}
      </motion.section>
      
      {/* Services Section */}
      
        {/* <section className="py-20 px-10 text-center">
         <h2 className="text-4xl font-bold mb-10">From Infrastructure To Products</h2>
         <div className="grid md:grid-cols-3 gap-6">
           
              {infraProduct.map((service, index) => (
             <motion.div 
               key={index}
               className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
             >
              
           <h3 className="text-2xl font-semibold mb-3" key={index}>{service.title}</h3>
           
            {index==0?service.content:<div ><p key={index} >{service.content}</p> <Link href='/' className="text-blue-700 underline">See More...</Link></div>}
             </motion.div>
           ))}
      </div>     </section> */}

      <section >
        <div className='flex  justify-around px-[5%] py-[5%]'>
        <div className='w-[45%] text-lg font-semibold '>
        <h1 className='pb-[1rem] text-2xl'>Welcome to KSC Krishna Group</h1>
        <p className='text-4xl font-semibold'>Your trusted partner for multi-dimensional metal
solutions. </p>
</div>
<div className='w-[50%] text-2xl '>

We are a comprehensive metal solutions provider specializing in raw
material supply , <b className='text-slate-300'>machining , tooling, and fabrication </b>services. With years of experience
in the industry, we take pride in delivering innovative and high-quality solutions that
meet the unique demands of our clients across a variety of industries.
</div>
</div>
<div className='flex w-full justify-center flex-wrap gap-[40px] px-[1rem]'>
  {services.map((item,index)=>(
    <motion.div 
                  key={index} 
                  className="relative  bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center border border-white/20 hover:scale-105 transition-transform duration-500"
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
    <div className='w-[550px] h-[450px]  border-2 border-white flex-col justify-between  '>
    <div className='flex justify-center py-[1rem] '>
    <img src={item.logo} alt="img" width={'70%'} height={'40%'} />
    </div>
    <h1 className='flex justify-center font-bold '>{item.title}</h1>
    <p className='px-[2rem] pb-[1rem]'>{item.desc}</p>
    
  </div>
  </motion.div>
  ))}
  
</div>
      </section>

      
      
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
      {/* <section className="py-16 bg-[#2A2A2A] text-center">
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
        
      </section> */}
      
    
        <section className="p-10 text-center">
        <h2 className="text-4xl font-bold text-gold mb-6 flex justify-center">Our Customer</h2>
        
      {/* <div className='flex  flex-wrap gap-15'>
      {partners.map((image, index) => (
         <Image src={image.logo} width={150} height={30} className=' bg-amber-200 rounded-md' key={index}  alt='image'/>))}
      </div> */}
      <div className='flex justify-center '>
      <div className=" relative max-w-full px-[2.5%] bg-[#3A3A3A] ">
      <Slider {...settings} >
        
      {partners.map((image, index) => (
         <div key={index} className="w-full pt-5 px-3">
          <div key={index}>
             <img src={image.logo} alt={`slide ${index + 1}`} style={{ width: '100%', height: 'auto'}} className='rounded-md bg-amber-200' /> 
           
          </div>
          </div>
        ))}
      
      </Slider>
    </div>
</div>
      </section>

<section  className='p-10'>
  <h1 className='font-bold text-4xl  flex justify-center'>Inhouse Manufacturing Facilities</h1>
<div className=" relative max-w-full px-[2.5%] bg-[#3A3A3A] mt-7">
  <Slider  {...MachineSetting}>
    
      {services.map((item,index)=>(
    <div key={index} className=" w-full  px-5">
     <div key={index} className='flex-col items-center justify-center w-full '>
       <img src={item.logo} alt={`slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
    
      <h1 className='font-bold flex justify-center text-lg'>{item.title}</h1>
   <p className=' pb-[1rem] flex justify-center text-lg'>{item.desc}</p>
   </div>
     </div>
   
  
  ))}

  </Slider>
  </div>
  </section>
      {/* CTA Section */}
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
  );
};

export default Home;

// "use client";

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
