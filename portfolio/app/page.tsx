


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
  {name: "Technical", },
  {name: "Design", },
  {name: "Soft Skills", },
]; 


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
          <button className="hidden md:flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
            Hire Me
          </button>
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
          {SkillBoxes.map(({ name }) => (
              <div key={name} className=" flex items-start justify-center w-xs h-2/3 p-4 bg-accent
               rounded-lg border-2 border-background top-30">
                <h2 className="text-4xl font-display text-background">{name}</h2>
              </div>
          ))}
      
        </div>
  
    </div>

    {/* Hero section */}
    <div className=" z-10 flex items-center justify-center bg-foreground w-full h-screen">

    </div>
        
    </div>
  );
}
