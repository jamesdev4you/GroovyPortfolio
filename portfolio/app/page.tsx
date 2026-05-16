


{/*
  https://simpleicons.org/?q=LinkedIn for icons 
  With turbopack, you must config your next.config.ts, and a global.d.ts. From there just load in 
  the SVG as react components. Edit SVGs with text editior on VS to change color of SVGs.

  https://medium.com/@amirnasserim/how-to-use-custom-svgs-in-your-next-js-project-94d4be65eb8a
  How to use SVGs in NextJs with turbopack.
*/}

import Image from "next/image"
import HeroPic from "../public/picture/james138@usf.edu-d0f6cd3b.jpg"

import GithubIcon from "../public/icons/github.svg"
import LinkedInIcon from "../public/icons/linkedin.svg"
import InstagramIcon from "../public/icons/instagram.svg"
import XIcon from "../public/icons/x.svg"

const SocialMedias = [
  { name: "Github", Icon: GithubIcon, href: "https://github.com/jamesdev4you"},
  { name: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/jamesboyleusf/"},
  { name: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/jamesboyle813"},
  { name: "X", Icon: XIcon, href: "https://x.com/elonmusk"},
];

export default function Home() {
  console.log("GithubIcon:", GithubIcon, typeof GithubIcon);
  return (
    <div className="flex flex-col w-full h-full bg-foreground">

    {/* Hero section */}
    <div className="flex items-center justify-center bg-foreground w-full h-180">
      {/* Hero Content */}
      <div className="flex items-end justify-between w-2/3 h-auto "> 
        {/* Hero Photo */}
        <div className="flex items-center justify-center w-1/3 h-auto ">
          <Image src={HeroPic} alt="Hero Photo" className="w-11/12 h-auto object-cover rounded-lg border-background border-2" />
        </div>
        {/* Hero Text + Links*/}
        <div className="flex flex-col items-start justify-center w-2/3 h-auto gap-4 ">
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
    <div className="flex items-center justify-center bg-background w-full h-150">
        
    </div>
        
    </div>
  );
}
