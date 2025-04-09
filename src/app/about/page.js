
  "use client";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { useState, useEffect, useRef } from "react";
// import Link from 'next/link';
// import { FaPhone } from 'react-icons/fa';

// import Head from 'next/head';

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import animationData from "../../animations/vision.json";
// import aboutData from "../../animations/about.json";
// import cert1 from "../../certificates/cert1.png";
// import cert2 from "../../certificates/cert2.png";


// const About = () => {
  
//   return (
//     <div>
//     <header className="bg-[#141414] p-5 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
//     <Image src="/company_logo.png"  alt="image" width={100} height={100}/>
//         <nav className="flex space-x-6">
          
//           <Link href="/" className="hover:text-gray-400 transition text-white">Home</Link>
//           <Link href="/about" className="hover:text-gray-400 transition text-white">About</Link>
//           <Link href="/services" className="hover:text-gray-400 transition text-white">Services</Link>
//           <Link href="/contact" className="hover:text-gray-400 transition text-white">Contact</Link>
//         </nav>
//       </header>
//     <div className="pt-7 relative min-h-screen bg-[#2A2A2A] text-white overflow-hidden">
//       {/* Floating Background Elements */}
//       <motion.div 
//         className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl top-20 left-10"
//         animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl bottom-20 right-10"
//         animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
//       />
      
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto py-20 px-6 text-center">
//         <motion.h1 
//           className="text-6xl font-extrabold mb-16 mt-[3%] uppercase tracking-wide bg-clip-text  text-white drop-shadow-lg"
//           initial={{ opacity: 0, y: -50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1 }}
//         >
//           About Us
//         </motion.h1>
        
//         {/** Sections with 3D Glass Effect */}
//         <div className="space-y-20 max-w-5xl mx-auto flex flex-col items-center">
//           {sections.map((section, index) => (
//             <motion.div 
//               key={index} 
//               className="relative w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center border border-white/20 hover:scale-105 transition-transform duration-500"
//               initial={{ opacity: 0, y: 50 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <div className="flex flex-col items-center gap-4">
//                 { index===1? (
//                   <Lottie animationData={section.data} className="w-40 h-40" />
//                 ) : <h1 className="text-3xl font-bold">{section.title}</h1>}
//                 {/* <h2 className="text-3xl font-bold text-blue-400">
//                   {section.title}
//                 </h2> */}
//                 <p className="text-gray-300 text-lg font-light leading-relaxed">
//                   {section.content}
//                 </p>
//                 {section?.goal?<p className="text-gray-300 text-lg font-light leading-relaxed ">{section.goal}</p>:""}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {/* <div className="relative flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute left-10"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md " />
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//         className="absolute right-10"
//       >
//         <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div> */}
//     {/* <div className="relative w-full flex justify-center items-center h-80 bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
      
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute top-1/2 left-10 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: "0%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//         className="absolute top-1/2 right-10 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 2" width={300} height={200} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div> */}
   
//    <div className="flex justify-center text-3xl py-5 font-bold">Certifications</div>
//     <div className="relative w-full flex justify-center items-center h-[500px] bg-gray-100 rounded-3xl p-6 shadow-lg overflow-hidden">
//       {/* Left Certificate Animation */}
     
//       <motion.div
      
//         initial={{ x: "-100%", opacity: 0 }}
//         whileInView={ {x: "50%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className="absolute left-10 top-1/2 transform -translate-y-1/2"
//       >
//         <Image src={cert1} alt="Certificate 1" width={300} height={300} className="rounded-lg shadow-md" />
//       </motion.div>

//       {/* Right Certificate Animation */}
//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         whileInView={{ x: "-50%", opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut"}}
//         className="absolute right-10 top-1/2 transform -translate-y-1/2"
//       >
//         <Image src={cert2} alt="Certificate 2" width={300} height={300} className="rounded-lg shadow-md" />
//       </motion.div>
//     </div>
//   </div>
//       </div>
//       <footer className="bg-[#141414] p-6 text-center text-gray-400">
//               <p>&copy; 2025 Krishna Steel. All Rights Reserved.</p>
//               <div className="mt-2 flex justify-center space-x-4">
//                 <FaPhone />
//                 <span>+91  9958064536
//       </span>
//               </div>
//             </footer>
//     </div>
//   );
// };

// const sections = [{
//   data:aboutData,
//   content:"We have the first plant KSC KRISHNA STEEL PVT. LTD. FARIDABAD established in the year 2012 as professionally managed under the leadership of Mr. Naresh Singhal who has more than 25 years of experience in a similar field The Company uses high technology and Automatic machinery like  Hydraulic/Mechanical/Pneumatic Press machines, Butt Welding machines,  Burn  Cutting  Hydraulic  machines,  Rolling  machines,  Lathe  machines,  CNC machines, Laser Cutting, Plasma Cutting and many more… to manufacture a wide range of automotive products.",
//   goal:"Our Aim is to stands for Quality, Cost, Reliability, Customer Satisfaction"

// },
//   {
//     data:animationData,
//     content: "The Vision Of KSC Krishna Steel Pvt. Ltd. is To Become A Products Manufacturer at Global  platform,  for  this  we  are  adding  high  technology  machines  & infrastructure to cater any industry demand.",
//     goal:"Our aim is to stands for high Quality, Low Cost, Reliability & ultimate Customer delight."},
//     {
//     title: "Quality Policy",
//     content: "We are committed to meet or exceed our customer expectation by continual  improving  our  Quality  management  system,  process  & product.",
//     goal:"Our ultimate goal is Zero defect in everything we do."
//   },
//   {
//     title: "Quality Objective",
//     content: "Continual improvement to be done in each process to achieve zero defect, Continual improve conformity to process product & system requirement for defect prevention.Continual upgrade knowledge & skill of employees and promote team work.Reduction of waste in process & supplier end."
//   },
//   {
//     title: "Safety Policy",
//     content: "Health and safety is a primary concern in KSC Krishna Steel Pvt. Ltd. and our excellent safety record bears witness to this fact. We finally believe that continual emphasis on our active safety program will continue to provide a safe and healthy workplace for our personnel and those around them. Our zero incident safety philosophy is a priority and is part of our normal business.At KSC Krishna Steel Pvt. Ltd. safety and health incidents are simply notacceptable.For us safety is more than a policy manual. it’s how we do business and it’s how we live. Our people are our greatest asset and basis for our success.",goal:" Our moto is safety first Production must."
//   },
//   // {
//   //   title: "Certifications",
//   //   content: "We hold ISO 9001, ISO 14001, and other industry-recognized certifications, ensuring our commitment to excellence."
//   // }
// ];

// export default About;


{/**Site Under Construction */}

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


{/**New About Us Section */}



import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
import React from "react";
import { useState } from 'react';



const Home = () => {
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
    logo:'/services_home/CNC_Milling_Machines',
     desc:'High-precision machines that allow us to manufacture complex parts with intricate geometries and tight tolerances'
  },
  {
    title:'CNC Turning Lathes',
    logo:'/services_home/Lathes',
     desc:'Used for producing cylindrical parts with high accuracy, ideal for shafts, rods, and other turned components.'
  },
  {
    title:'CNC Laser Cutting Machines',
    logo:'/services_home/Lathes',
     desc:'Used for cutting sheet metal with utmost precision and accuracy.'
  },
  {
    title:'CNC Plasma Cutting Machines',
    logo:'/services_home/Lathes',
     desc:'Used for cutting MS Plates of high thickness.'
  },
  {
    title:'Welding Machines',
    logo:'/services_home/Lathes',
     desc:'Including MIG, TIG, and ARC welding machines for a variety of welding applications, ensuring strong and durable joints across different materials.'
  },
  {
    title:'Plate Rolling Machines',
    logo:'/services_home/Lathes',
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
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
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
      {/* <motion.section 
        className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
     
      </motion.section> */}
      {/* <section className='mt-[5%]'>
        <h1 className='flex justify-center  text-3xl'>About KSC Krishna Group</h1>
        <div className='flex justify-center '>
          <p className='w-[60%] py-4'>
We are a comprehensive metal solutions provider specializing in raw
material supply machining, tooling, and fabrication services. With years of experience
in the industry, we take pride in delivering innovative and high-quality solutions that
meet the unique demands of our clients across a variety of industries.
</p>
</div>
      </section> */}

      <section className='pt-[10%] pb-[5%]'>
        <h1 className='flex justify-center text-4xl font-bold'>Our Story</h1>
        <div className='flex justify-center '>
        <p className='w-[80%] py-4 text-2xl'>
        Since our inception in 2003, KSC Krishna Group has been a driving force in the metalworking
industry. Our commitment to quality, efficiency, and customer satisfaction has earned us a
reputation as a reliable and versatile provider of metal solutions. Our expertise spans across
every stage of the manufacturing process, from supplying raw materials to producing finished
parts and components that meet precise specifications.</p>
</div>
      </section>
      <section className='px-[5%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-3xl '>What We Do</h1>
        <p className='pt-3 text-xl'>We offer a full spectrum of services to address the diverse needs of our customers:</p>
        <div className='pt-5 text-xl'>
        &#10004; <b>Raw Material Supply:  </b> We provide an extensive range of high-quality metals, including
steel, aluminum, brass, and more. Whether you&#39;re looking for sheets, rods, bars, or
custom cuts, we have the materials you need for your project.
        </div>
        <div className='pt-5 text-xl'>
        &#10004; <b>Machining:</b>Our state-of-the-art machining services include CNC milling, turning,
grinding, and drilling, offering precision and quality for both small and large-scale
projects. We ensure tight tolerances and superior finishes for every part.
        </div>
        <div className='pt-5 text-xl '>
        &#10004; <b>Tooling: </b>Our tooling capabilities are designed to create the necessary molds, dies, and
jigs that are critical for efficient and accurate production. We offer custom tool designs
and modifications to suit specific needs, reducing downtime and enhancing productivity.
        </div>
        <div className='pt-5 text-xl'>
        &#10004; <b>Fabrication:</b>From simple cuts to complex assemblies, our metal fabrication services
cover everything from welding and cutting to bending, punching, and assembly. We
provide tailored solutions for a wide variety of industries including automotive,
aerospace, construction, and more.
        </div>
        </div>
      </section>

      <section className='py-[5%] px-[5%] '>
        <div className='flex-col items-center justify-center '>
        <h1 className='font-bold text-3xl flex justify-center py-3'> Our Vision</h1>
        <p className='flex justify-center text-xl'>At KSC Krishna Group, we aim to be your one-stop shop for all metalworking needs, offering a
seamless and efficient process from raw material supply to finished product. We focus on providing customized, high-quality metal solutions that enhance your operations, streamline
production, and drive business success.</p>
        </div>
        </section>

        <section className='px-[5%] flex gap-[5%] py-[5%]'>
          <div className='w-[50%]'>
          Add  photo
          </div>
        <div className='w-[50%]'>
        <h1 className='font-bold text-3xl '>Why Choose Us?</h1>
        <p className='pt-3 text-xl'>We offer a full spectrum of services to address the diverse needs of our customers:</p>
        <div className='pt-5 text-xl '>
        &#10102; <b>Comprehensive Services: </b> From raw materials to finished components, we offer end-to-
end solutions that save you time and reduce the complexity of managing multiple
suppliers.
        </div>
      
      
        <div className='pt-5 text-xl'>
        &#10103; <b>Expertise Across Multiple Disciplines: </b>  With a team of skilled engineers, fabricators, and
machinists, we offer a wide range of specialized services tailored to your project’s
unique requirements.
        </div>
        <div className='pt-5 text-xl '>
        &#10104; <b>Precision and Quality: </b> Our focus on quality control and attention to detail ensures that
        all products meet the highest standards of craftsmanship and accuracy.
suppliers.
        </div>
        <div className='pt-5 text-xl'>
       &#10105; <b> Innovation &amp; Technology:  </b>We invest in the latest technologies and equipment to ensure
        efficiency, reduce lead times, and provide innovative solutions for every project.
        </div>
        <div className='pt-5 text-xl'>
        &#10106; <b> Customer-Centric Approach:  </b>We prioritize understanding your needs and work closely
        with you to deliver results that align with your goals, ensuring complete satisfaction.
        </div>
        </div>
        </section>

        <section className='py-[5%] px-[5%] '>
        <div className='flex-col items-center justify-center '>
        <h1 className='font-bold text-3xl flex justify-center py-3'> Our Commitment to Excellence</h1>
        <p className='flex justify-center text-xl'>We are dedicated to delivering exceptional results on every project. By combining the right
materials, advanced machinery, and skilled craftsmanship,we provide solutions that meet the
highest standards of quality and performance.</p>
        </div>
        </section>
        

        <section className='pb-[2%] px-[5%] '>
        <div className='flex-col items-center justify-center '>
        <h1 className='font-bold text-3xl flex justify-center py-3'> Get in Touch</h1>
        <p className='flex justify-center text-xl'>Explore the full range of multi-dimensional metal solutions we offer and learn how KSC Krishna
Group can help with your next project. Whether you need raw materials, precision machining,
tooling, or complex fabrication, we are here to provide the support and expertise you need.
</p>
<p className='flex justify-center text-xl text-blue-400 mt-7 animate-pulse'>Thank you for considering KSC Krishna Group. We look forward to partnering with you for your
metalworking needs.</p>
        </div>
        </section>
      
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

    

      
      
      {/* Why Choose Us Section */}
      
     
      
      {/* Testimonials */}
     
    
        {/* <section className="p-10 text-center">
        <h2 className="text-4xl font-bold text-gold mb-6">Our Customer</h2> */}
        
     
      <div className='flex justify-center '>
      <div className=" relative max-w-[70rem] px-[2.5%] bg-[#3A3A3A] ">
      {/* <Slider {...settings} >
        
      {partners.map((image, index) => (
         <div key={index} className="w-full pt-5 px-3">
          <div key={index}>
             <img src={image.logo} alt={`slide ${index + 1}`} style={{ width: '100%', height: 'auto'}} className='rounded-md bg-amber-200' /> 
           
          </div>
          </div>
        ))}
      
      </Slider> */}
    </div>
</div>
      
      {/* CTA Section */}
      {/* <section className="py-16 bg-[#1E1E1E] text-center">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
          whileHover={{ scale: 1.1 }}
          
        >
          Contact Us
        </motion.button>
      </section> */}
      
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


