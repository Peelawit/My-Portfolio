import Spline from '@splinetool/react-spline';
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";

import sky from './img/profile.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Skills, SocialLinks } from './data';

import {AnimatePresence, motion} from 'framer-motion';

function App() {

  const [isActive, setIsActive] = useState(false)
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Nav Bar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center ">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2x1 flex items-center rounded-lg">
          <p className='text-lg  text-textBase font-medium'>Peelawit Chan.</p>

          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Home
            </a>

            <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              About
            </a>

            <a href='#skills' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Skills
            </a>

            <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Contact
            </a>
          </div>

          <motion.div
            whileTap={{scale:0.5}}
            className='block md:hidden ml-auto cursor-pointer'
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className='text-2x1 text-textBase ' />
          </motion.div>


          {isActive && (
            <motion.div 
            initial={{opacity:0,scale : 0.5}}
            animate={{opacity:1, scale :1.1}}
            exit={{opacity:0, scale :0.5}}
            transition={{delay:'0.1s',type:"spring"}}
            className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16
            flex flex-col items-center justify-evenly gap-6'>


              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}

              >
                Home
              </a>

              <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}

              >
                About
              </a>

              <a href='#skills' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}

              >
                Project
              </a>

              <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}

              >
                Contact
              </a>

            </motion.div>

          )}
        </div>
      </nav>
      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/LKHfDZMQwerAcv09/scene.spline" />
      </div>

      {/* main section */}
      <main className='w-[80%] mt-5'>
        {/* About section */}
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24'
          id='about'>
          {/* img box */}
          <div className='w-full h-420 flex items-center justify-center'>
            <div className='w-275 h-340 bg bg-orange-600 rounded-md relative'>
              <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg'
                src={sky}
                alt=''></img>
            </div>
          </div>

          {/* content box */}
          <div className='w-full h-420 flex flex-col items-center justify-center'>
          <p className='text-4lg text-orange-400 text-center'>
            Hi ,I AM
          </p>
          <p className='text-4lg text-orange-400 text-left'>
            PEELAWIT
            CHANTANAVICHEAN
          </p>
          <p className='text-2lg text-textContent text-left'>
          Full-Stack Developer
          </p>
            <p className='text-lg text-textContent text-center'>
            I am a Full-Stack Developer with holistic knowledge of developing and design Website. 
            I am also experienced in a project about programming.
            I always loved to learn technology. and I love creative, 
            design, problem analysis.
            </p>

          </div>
        </section>
        {/* About timeline */}
        <section className='w-full flex items-center justify-center'>
          <VerticalTimeline>
            {
              Experience && Experience.map(n => (
                <VerticalTimelineElement
                  key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "RGB(245, 68, 31)", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "7px solid  RGB(245, 68, 31)" }}
                  date={n.date}
                  iconStyle={{ background: "RGB(245, 68, 31)", color: "#000000" }}
                  icon={n.iconsScr}
                >
                  <h3 className="vertical-timeline-element-title">{n.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                  <p>
                    {n.description}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </section>
        {/* Project Section */}
        <div className='flex justify-center items-center my-24 'id='skills'>
          <p className='text-4xl text-textContent font-medium '>
            My Skills
          </p>
        </div>
        <section className='flex flex-wrap items-center justify-evenly my-24 gap-4' >
          {Skills && Skills.map(n => (
            <div key={n.id} className='border border-orange-600 rounded-md p-2 
                            min-w-[27px] md:max-w-[275px] hover:border-orange-800 duration-100 ease-in-out'>
              <img
                className='w-full h-full object-cover rounded-md my-4'
                src={n.imgSrc}
                alt=''
              />


              <div className='flex flex-1 items-center justify-between'>
                <p className='text-lg text-textContent ' >{n.position}
                  <span className='block text-sm text-orange-400'>
                    {n.subject}
                  </span>
                </p>
              </div>
            </div>

          ))}
        </section>

        {/* Contact */}
        <section id='contact' className='flex flex-col items-center justify-center w-full my-24'>
          <p className='text-4xl text-textContent  my-24 capitalize'>Contact Me</p>
          <div className='flex items-center justify-center w-full  flex-wrap
            gap-4'>
              {
                SocialLinks && SocialLinks.map(n => (
                  <motion.a whileTap={{scale : 0.8}}
                  key={n.id}
                  href={n.link} className='w-full md:w-auto px-3 md:px-8 py-5 border
                  border-orange-600 rounded-2xl hover:border-orange-800 duration-100
                  ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                  {n.iconsScr}
                  <p className='text-lg text-textContent'>{n.name}</p>
                </motion.a>
                ))
              }

          </div>
        </section>



      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
