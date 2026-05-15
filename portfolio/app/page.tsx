"use client";

{/*
  https://simpleicons.org/?q=LinkedIn for icons 
  With turbopack, configuration for social media icons were kinda weird.
  Revisit docs for a breifing in next.config.ts   
*/}


import GithubIcon from "@/icons/github.svg"
import LinkedinIcon from "@/icons/linkedin.svg"
import InstagramIcon from "@/icons/instagram.svg"
import TwitterIcon from "@/icons/twitter.svg"


const SocialMedias = [
  { name: "Github",icon: GithubIcon, href: "https://github.com/jamesdev4you"},
  { name: "LinkedIn",icon: LinkedinIcon, href: "https://www.linkedin.com/in/jamesboyleusf/"},
  { name: "Instagram",icon: InstagramIcon, href: "https://www.instagram.com/jamesboyle813"},
  { name: "X",icon: TwitterIcon, href: "https://x.com/elonmusk"},
];

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-foreground">

    {/* Hero section */}
    <div className="flex items-center justify-center bg-foreground w-full h-180">
      {/* Hero Content */}
      <div className="flex items-center justify-center w-2/3 h-full bg-red-500"> 
        {/* Hero Text + Links*/}
        <div className="flex flex-col items-start justify-center w-1/2 h-full bg-green-500">
          <h1 className="text-6xl font-display text-background">A Groovy Developer Fitting Any Vibe.</h1>
          <div className="w-1/3">
          
          </div>
        </div>
      </div>
    </div>

    {/* Skills section */}
    <div className="flex items-center justify-center bg-background w-full h-150">
        
    </div>
        
    </div>
  );
}
