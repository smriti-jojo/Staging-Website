'use client'
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaCheckCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Image from "next/image";
import {React,useState} from "react";



const Page =()=> {
  const [activeTab, setActiveTab] = useState(0);

  
  
  const Jobdesc1= () => {
    return (
      <div className="text-white">
       <div className="py-5">Location: Faridabad, Haryana</div> 
        <div className="">
       <h1>Job Description:</h1> 
<li>Perform metal fabrication tasks using cutting, welding, and assembly techniques.</li>
<li>Operate CNC machines and manual tools for precision fabrication.</li> 
<li>Work on custom projects based on client specifications and technical drawings.</li> 
</div>
<div className="pt-5">
<h1>Requirements:</h1>
<li>High school diploma or equivalent.</li>
<li>Proven experience in metal fabrication, welding, or related fields.</li>
<li>Strong attention to detail and ability to read technical drawings.</li>
 
        </div>
        <div className="pt-5 animate-pulse text-blue-400">Apply Now: Contact on Mail (planthead@ksckrishna.com)</div>
    </div>
    )
  }
  const Jobdesc2= () => {
    return (
      <div className="text-white">
       <div className="py-5">Location: Faridabad, Haryana</div> 
        <div className="">
       <h1>Job Description:</h1> 
<li>Set up and operate CNC milling and turning machines.</li>
<li>Ensure high-precision and quality standards in production.</li> 
<li>Troubleshoot machine issues and optimize processes for efficiency.</li> 
</div>
<div className="pt-5">
<h1>Requirements:</h1>
<li>3+ years of experience in CNC machining.</li>
<li>Familiarity with CAD/CAM software and machine tooling.</li>
<li>Ability to work independently and in a team environment.</li>
 
        </div>
        <div className="pt-5 animate-pulse text-blue-400">Apply Now: Contact on Mail (planthead@ksckrishna.com)</div>
    </div>
    )
  }
  const Jobdesc3= () => {
    return (
      <div className="text-white">
       <div className="py-5">Location: Faridabad, Haryana</div> 
        <div className="">
       <h1>Job Description:</h1> 
<li>Supervise and improve welding processes in heavy metal fabrication projects.</li>
<li>Collaborate with the production team to ensure project quality and timelines.</li> 
<li>Develop and implement welding procedures and standards.</li> 
</div>
<div className="pt-5">
<h1>Requirements:</h1>
<li>Bachelor’s degree in Welding Engineering or a related field.</li>
<li>5+ years of experience in welding engineering or heavy fabrication.</li>
<li>Strong knowledge of welding standards and techniques.</li>
 
        </div>
        <div className="pt-5 animate-pulse text-blue-400">Apply Now: Contact on Mail (planthead@ksckrishna.com)</div>
    </div>
    )
  }
  const Jobdesc4= () => {
    return (
      <div className="text-white">
       <div className="py-5">Location: Faridabad, Haryana</div> 
        <div className="">
       <h1>Job Description:</h1> 
<li>Lead fabrication and manufacturing projects from concept to completion.</li>
<li>Coordinate with clients, vendors, and internal teams to ensure project success.</li> 
<li>Manage budgets, timelines, and resources to meet delivery goals.</li> 
</div>
<div className="pt-5">
<h1>Requirements:</h1>
<li>Bachelor&#39;s degree in Engineering, Project Management, or a related field.</li>
<li>3+ years of experience managing projects in a manufacturing or fabrication
environment.</li>
<li>Strong leadership, communication, and problem-solving skills.</li>
 
        </div>
        <div className="pt-5 animate-pulse text-blue-400">Apply Now: Contact on Mail (planthead@ksckrishna.com)</div>
    </div>
    )
  }
  
  
  

  // Tab titles with images and associated content
  const tabs = [
    { title: 'Metal Fabricator (Full-Time)', content: <Jobdesc1/>},
    { title: 'CNC Machinist (Full-Time)', content: <Jobdesc2/> },
    { title: 'Welding Engineer (Full-Time)', content: <Jobdesc3/> },
    { title: 'Project Manager (Full-Time)', content: <Jobdesc4/> },
  ];

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
        <h1 className='text-3xl pb-5 font-bold flex justify-center'> Overview</h1>
        <p className='text-xl'>At KSC Krishna Group, we believe that our people are the foundation of our success. We are
always looking for passionate, skilled individuals who are eager to contribute to the growth and
innovation of our company. Whether you&#39;re an experienced professional or just starting your
career, we offer opportunities to grow, learn, and be part of a dynamic team in the metal
fabrication and manufacturing industry.</p>
<p className='py-5 text-xl'>If you&#39;re interested in making an impact, exploring new challenges, and working with cutting-
edge technology, KSC Krishna Group is the place for you.</p>
      </section>
      
     
      <section className='flex flex-col items-center pt-5'>
        <div className='flex flex-col gap-3 w-[90%]'>
      <h2 className="text-2xl font-bold pb-2 flex justify-center">Why Work With Us?</h2>
      <li className='text-xl py-3 '> <b>Collaborative Culture: </b>   We foster a supportive work environment where teamwork and
innovation thrive. At KSC Krishna Group, every employee&#39;s input is valued, and we
believe that collective effort drives our success.</li>
      <li className='text-xl pb-3'><b>Cutting-Edge Technology:  </b>Work with the latest machinery and equipment in a high-tech
      environment that encourages innovation and problem-solving.</li>
      <li className='text-xl pb-3'><b>Competitive Benefits:  </b>We offer a competitive salary and a comprehensive benefits
package, including health insurance, retirement plans, and paid time off, to ensure that
our employees&#39; well-being is always a priority.</li>
      <li className='text-xl pb-3'><b>Safety First:  </b> Safety is our top priority. We ensure that all our facilities and projects
adhere to the highest safety standards, creating a work environment that prioritizes the
health and safety of all employees.</li>
  
      
      </div>
      </section>


     
      {/* <section className='px-[5%] flex gap-[5%] py-[1%]'>
        <div className='w-[50%]'>
        <h1 className='font-bold text-2xl pb-[3%]'>Why Work With Us?</h1>
        
        <div className='pt-5 text'>
        &#10061; <b>Collaborative Culture: </b>   We foster a supportive work environment where teamwork and
innovation thrive. At KSC Krishna Group, every employee&#39;s input is valued, and we
believe that collective effort drives our success.
        </div>
        <div className='pt-5 '>
        &#10061; <b>Cutting-Edge Technology:  </b>Work with the latest machinery and equipment in a high-tech
        environment that encourages innovation and problem-solving.
        </div>
        <div className='pt-5 '>
        &#10061; <b>Competitive Benefits:  </b>We offer a competitive salary and a comprehensive benefits
package, including health insurance, retirement plans, and paid time off, to ensure that
our employees&#39; well-being is always a priority.
        </div>
        <div className='pt-5 '>
        &#10061; <b>Safety First:  </b> Safety is our top priority. We ensure that all our facilities and projects
adhere to the highest safety standards, creating a work environment that prioritizes the
health and safety of all employees.
        </div>
     
        
</div>
<div className='border-3 border-white w-[50%]'>
  image
</div>
      </section> */}

      <section className="px-[5%] pb-[5%] pt-7">
        <h1 className="text-2xl font-bold pb-[2%] flex justify-center">Current Openings</h1>
        <p className="text-xl">We’re excited to see talented professionals join our team. Below are the current job openings
at KSC Krishna Group. If you’re ready to take the next step in your career, we encourage you to
apply!</p>
      <div className="flex pt-[1%] ">
      {/* Vertical Tabs (Image Titles) */}
      <div className="flex flex-col w-[50%] border border-gray-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${
              activeTab === index ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(index)}
          >
          
            <div className="text-center mt-2 text-xl">{tab.title}</div> 
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className=" p-4 w-full h-[26rem] border border-slate-400 ">

        <p className='h-full text-xl'>{tabs[activeTab].content}</p>
      </div>
    </div>


      </section>
     
      <section className='px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>How to Apply</h1>
        <p className="text-xl">If you’re interested in any of the positions listed above, please submit your resume and cover
letter through our online application form or send them to planthead@ksckrishna.com. In your
cover letter, tell us why you would be a great fit for the role and how your skills and experience
align with the job requirements.We review all applications carefully and will reach out to candidates whose qualifications best
match our needs. Please note that only shortlisted candidates will be contacted.</p>
      </section>

      <section className='pt-[5%] px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>Internships &amp; Apprenticeships</h1>
        <p className="text-xl">We also offer internship and apprenticeship opportunities for students and entry-level
professionals who are interested in gaining hands-on experience in the metal fabrication and
manufacturing industries. If you&#39;re looking to jumpstart your career with real-world training,
our team is here to help you build the skills necessary to succeed.</p>
      </section>

      <section className='pt-[5%] px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>Stay Connected</h1>
        <p className="text-xl">Even if you don’t see a current opening that suits your skills, we are always looking for talented
        individuals. Submit your resume to be considered for future opportunities.</p>
      </section>
      <section className='py-[5%] px-[5%]'>
        <h1 className='text-2xl flex justify-center font-bold pb-[2%]'>Contact Us</h1>
        <p className="text-xl">If you have any questions regarding careers at KSC Krishna Group, feel free to reach out to us at
        planthead@ksckrishna.com or call +91-01294031136.</p>
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
