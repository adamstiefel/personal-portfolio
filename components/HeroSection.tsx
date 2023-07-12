"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import TypeWriter from "components/TypeWriter.js"
const hats = [
  {
    prep: 'a',
    suffix: 'Software Engineer'
  },
  {
    prep: 'a',
    suffix: 'Web Developer'
  },
  {
    prep: 'a',
    suffix: 'Full Stack Developer'
  },
];



const HeroSection = () => {
  return (
    <>
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl animate-typing">Hi, I&#39;m Adam!</h1>
         
          <TypeWriter 
              hats={hats}
              prefix="I am" appendClass={undefined}          
          
          />
        

          <Link
                to="projects"
                target="_blank"
                className="relative px-5 py-3 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-blue-700 group-hover:skew-x-12 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-teal-600 group-hover:bg-teal-600 group-hover:-skew-x-12 rounded-xl"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-teal-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-teal-600 -rotate-12"></span>
                <span className="relative">Portfolio</span>
              </Link>
        </div>
        
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
    </>
  )
}

export default HeroSection
