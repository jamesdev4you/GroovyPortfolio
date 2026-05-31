"use client";



{/*
  https://simpleicons.org/?q=LinkedIn for icons 
  With turbopack, you must config your next.config.ts, and a global.d.ts. From there just load in 
  the SVG as react components. Edit SVGs with text editior on VS to change color of SVGs.

  https://medium.com/@amirnasserim/how-to-use-custom-svgs-in-your-next-js-project-94d4be65eb8a
  How to use SVGs in NextJs with turbopack.
*/}

{/* Imports for hero section */}
import Image from "next/image"
import HeroPic from "../public/picture/james138@usf.edu-d0f6cd3b.jpg"
import GithubIcon from "../public/icons/github.svg"
import LinkedInIcon from "../public/icons/linkedin.svg"
import InstagramIcon from "../public/icons/instagram.svg"
import XIcon from "../public/icons/x.svg"
import Flower from "../public/icons/flower.svg"

const SocialMedias = [
  { name: "Github", Icon: GithubIcon, href: "https://github.com/jamesdev4you"},
  { name: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/jamesboyleusf/"},
  { name: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/jamesboyle813"},
  { name: "X", Icon: XIcon, href: "https://x.com/elonmusk"},
];

{/* Imports for Skills Sections*/}
const SkillBoxes = [
  {name: "Technical", paragraphOne: (<>My expertise includes <span className="font-bold">Fullstack Development</span>, <span className="font-bold">Artificial Intelligence</span>, <span className="font-bold">AWS</span>, <span className="font-bold">DevOps</span>, and other far outtt skills! For more technical information, please check out my resume!</>), paragraphTwo: (<>Solving technilogical problems is a blast! Staying hip to the most up to date tech is how I keep it cool. Check out my <span className="font-bold">resume </span>  for a more detailed explanation, or my <span className="font-bold">projects</span> if you gotta see it to believe it! </>)},
  {name: "Design", paragraphOne: "When it comes to presentation, keeping it fresh is what I'm all about! A product and solution is only as good as it looks, and putting together a valuable asset involves making sure that it's dressed for the occassion.", paragraphTwo: (
    <>
      My modern <span className="font-bold">UX/UI design</span> principles and <span className="font-bold">Color Theory</span> knowledge allow me to excel in producing technically sound products that are appealing to see and interact with.
    </>
  )},
  {name: "Interpersonal", paragraphOne: (<> To solve problems you gotta be down with communicating! With <span className="font-bold">six years</span> of <span className="font-bold">Customer Service</span> experience you could say I have a knack for speaking</>), paragraphTwo: (<> With two of those years in customer service at an <span className="font-bold">IT Service Desk</span> for <span className="font-bold">USF</span>. Solving <span className="font-bold">OS, Networking, and IT troubleshooting</span> issues directly in person, or indirectly offline over the phone. Can you dig it? </>)},
]; 

{/* Imports for Personal Section */}
import AviMe1 from "../public/picture/meandavi.png"
import AviMe2 from "../public/picture/meandavi2.png"
import Garden from "../public/picture/gardening.png"
import Family from "../public/picture/fambam.png"

export default function Home() {
  console.log("GithubIcon:", GithubIcon, typeof GithubIcon);
  return (
    <div className=" flex flex-col w-full h-full bg-foreground ">

    {/* Hero section */}
    <div className="relative pt-40 pb-10 z-10 flex items-start justify-center bg-foreground w-full h-screen md:h-auto">
      {/* Background SVGs */}
      <Flower
        width={50}
        height={50}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-30 right-20 "
      />
      <Flower
        width={50}
        height={50}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-100 left-10 "
      />

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-3/4 md:w-full h-auto"> 
        {/* Hero Photo */}
        <div className="flex items-center justify-center w-full md:w-1/3 xl:w-1/4 h-auto mb-10">
          <Image src={HeroPic} alt="Hero Photo" className="rounded-full h-auto object-cover border-background border-2" />
        </div>
        {/* Hero Text + Links*/}
        <div className="flex flex-col items-center  justify-center w-full md:w-1/2 h-auto gap-4 text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl xl:text-8xl md:w-3/4 lg:w-full font-display text-background">A Groovy Developer Fitting Any Vibe.</h1>
          <div className="flex items-center justify-start space-x-4">
            {SocialMedias.map(({ name, Icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                <Icon
                  width={50}
                  height={50}
                  className=" text-background p-2 border-2 hover:text-foreground hover:bg-background hover:border-background rounded-2xl"
                />
              </a>
            ))}
          </div>
          <div className="flex items-center justify-start space-x-4">
            <a href="/contact">
              <button className="flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                Hire Me
              </button>
            </a>
            <a href="/contact">
              <button className="flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                Resume
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>

    {/* Skills section */}
    <div className="relative z-20 flex flex-col  items-center justify-start bg-background w-full h-screen md:h-110 xl:h-140 pt-20 2xl:h-160">      
        <h1 className="text-6xl 2xl:text-8xl font-display text-accent w-full text-center">Some Gnarly Skills</h1>
        {/* AI way to change svg colors to  my theme colors */}
        <Flower
          width={30}
          height={30}
          className="absolute z-0 left-30 top-4 [&_path]:stroke-accent! [&_circle]:stroke-accent!"
        />
        <Flower
          width={30}
          height={30}
          className="absolute z-0 right-2 bottom-30 [&_path]:stroke-accent! [&_circle]:stroke-accent!"
        />
        <div className="absolute flex-col xl:pt-10 2xl:pt-30 md:w-11/12 h-full md:h-auto flex md:flex-row items-center justify-around top-40">
          {SkillBoxes.map(({ name, paragraphOne, paragraphTwo }) => (
              <div key={name} className=" flex-col items-center justify-center w-full md:w-xs lg:w-4/16 h-60 xl:h-100 md:h-80 p-4 bg-accent rounded-lg border-2 border-background top-30">
                <h2 className="text-4xl font-display text-background text-center underline">{name}</h2>
                <p className="text-background mt-4 font-semibold">{paragraphOne}</p>
                <p className="hidden xl:block text-background mt-4 font-semibold">{paragraphTwo}</p>
              </div>
          ))}
      
        </div>
  
    </div>

    {/* Personal section */}
    <div className=" z-10 flex items-center justify-center bg-foreground w-full h-auto lg:h-auto lg:pt-20 lg:pb-10 ">
        
      <div className=" flex flex-col xl:flex-row items-center xl:items-start justify-center w-10/12 md:w-8/12 xl:w-11/12  h-auto relative pb-20">
        <Flower
          width={30}
          height={30}
          className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! bottom-5 left-0 "
        />
        <Flower
          width={30}
          height={30}
          className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-40 md:top-10 right-3 "
        />
          {/* Images */}

          <div className="flex-col items-start justify-start w-full xl:w-1/3 h-auto md:pt-20 xl:pt-10 lg:text-center pt-50">
            <h1 className="text-6xl 2xl:text-8xl font-display text-background text-center xl:text-start">peace, love, & granola</h1>
            <p className="text-background mt-4 font-bold xl:text-start ">...the essential ingredients that alongside my work bring me joy. Time with family and friends, gardening, and working with the Tampa Bay community bring me emmense pride and joy. </p>
            <p className="text-background mt-4 font-bold xl:text-start ">Here are some rad pictures of me having a blast! </p>
          </div>

          <div className=" flex-col w-full xl:w-7/12 h-auto gap-10 flex md:flex-wrap md:flex-row items-center justify-around pt-10">
            <Image src={AviMe1} alt="Me and my girlfriend Avi" className="  w-full md:w-5/12 h-auto object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
            <Image src={AviMe2} alt="Me and my girlfriend Avi again" className="   w-full md:w-5/12 h-auto object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
            <Image src={Garden} alt="Gardening" className="  w-full md:w-5/12 h-auto object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
            <Image src={Family} alt="Family" className="  w-full md:w-5/12 h-auto object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
          </div>
        </div>
    </div>
        
    </div>
  );
}
