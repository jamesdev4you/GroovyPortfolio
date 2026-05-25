


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
  {name: "Technical", paragraphOne: (<>My expertise includes <span className="font-bold">Fullstack Development</span>, <span className="font-bold">Artificial Intelligence</span>, <span className="font-bold">AWS</span>, <span className="font-bold">DevOps</span>, and other far outtt skills! </>), paragraphTwo: (<>Solving technilogical problems is a blast! Staying hip to the most up to date tech is how I keep it cool. Check out my <span className="font-bold">resume </span>  for a more detailed explanation, or my <span className="font-bold">projects</span> if you gotta see it to believe it! </>)},
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
    <div className="relative z-10 flex items-center justify-center bg-foreground w-full h-screen">
      {/* Background SVGs */}
      <Flower
        width={200}
        height={200}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! bottom-20 right-30 "
      />
      <Flower
        width={50}
        height={50}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-30 right-100 "
      />
      <Flower
        width={50}
        height={50}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-100 left-15 "
      />
      {/* Hero Content */}
      <div className="flex items-end justify-around w-3/4 h-auto "> 
        {/* Hero Photo */}
        <div className="flex items-center justify-center w-4/12 h-auto ">
          <Image src={HeroPic} alt="Hero Photo" className="w-11/12 h-auto object-cover rounded-lg border-background border-2" />
        </div>
        {/* Hero Text + Links*/}
        <div className="flex flex-col items-start justify-center w-7/12 h-auto gap-4 ">
          <h1 className="text-6xl font-display text-background">A Groovy Developer Fitting Any Vibe.</h1>
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
          <a href="/contact">
            <button className="hidden md:flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
              Hire Me
            </button>
          </a>
        </div>

      </div>
    </div>

    {/* Skills section */}
    <div className="relative z-20 flex flex-col items-center justify-start bg-background w-full h-150 pt-20">      
        <h1 className="text-8xl font-display text-accent">Some Gnarly Skills</h1>
        {/* AI way to change svg colors to  my theme colors */}
        <Flower
          width={100}
          height={100}
          className="absolute z-0 left-30 top-30 [&_path]:stroke-accent! [&_circle]:stroke-accent!"
        />
        <Flower
          width={60}
          height={60}
          className="absolute z-0 right-10 bottom-10 [&_path]:stroke-accent! [&_circle]:stroke-accent!"
        />
        <div className="absolute w-10/12 h-full flex items-center justify-between   top-50">
          {SkillBoxes.map(({ name, paragraphOne, paragraphTwo }) => (
              <div key={name} className=" flex-col items-center justify-center w-xs h-2/3 p-4 bg-accent rounded-lg border-2 border-background top-30">
                <h2 className="text-4xl font-display text-background text-center underline">{name}</h2>
                <p className="text-background mt-4 font-semibold">{paragraphOne}</p>
                <p className="text-background mt-4 font-semibold">{paragraphTwo}</p>
              </div>
          ))}
      
        </div>
  
    </div>

    {/* Personal section */}
    <div className=" z-10 flex items-end justify-center bg-foreground w-full h-280 ">
        
        <div className="flex items-start justify-start w-10/12 h-10/12 relative">
                <Flower
        width={100}
        height={100}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! bottom-20 left-80 "
      />
      <Flower
        width={100}
        height={100}
        className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! top-20 right-30 "
      />
          {/* Images */}
          <Image src={AviMe1} alt="Me and my girlfriend Avi" className="absolute z-0 left-125 top-30 w-70 h-70 object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
          <Image src={AviMe2} alt="Me and my girlfriend Avi again" className="absolute z-0 left-130 bottom-30 w-70 h-70 object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
          <Image src={Garden} alt="Gardening" className="absolute z-0 right-0 bottom-60 w-70 h-70 object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />
          <Image src={Family} alt="Family" className="absolute z-0 left-0 top-130 w-70 h-70 object-cover border-background border-2 shadow-[1px_0px_19px_7px_#3C1C3C]" />


          <div className="flex-col items-start justify-start w-1/3 h-auto ">
            <h1 className="text-8xl font-display text-background">peace, love, & granola</h1>
            <p className="text-background mt-4 font-bold">...the essential ingredients that alongside my work bring me joy. Time with family and friends, gardening, and working with the Tampa Bay community bring me emmense pride and joy. </p>
            <p className="text-background mt-4 font-bold">Here are some rad pictures of me having a blast! </p>
          </div>
        </div>
    </div>
        
    </div>
  );
}
