


{/*
  https://simpleicons.org/?q=LinkedIn for icons 
  With turbopack, configuration for social media icons were kinda weird.
  Revisit docs for a breifing in next.config.ts   

  https://medium.com/@amirnasserim/how-to-use-custom-svgs-in-your-next-js-project-94d4be65eb8a
  How to use SVGs in NextJs with turbopack.
*/}


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
      <div className="flex items-center justify-center w-2/3 h-full "> 
        {/* Hero Text + Links*/}
        <div className="flex flex-col items-start justify-center w-1/2 h-full ">
          <h1 className="text-6xl font-display text-background">A Groovy Developer Fitting Any Vibe.</h1>
          <div className="flex items-center justify-start space-x-4 mt-6">
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
        </div>
      </div>
    </div>

    {/* Skills section */}
    <div className="flex items-center justify-center bg-background w-full h-150">
        
    </div>
        
    </div>
  );
}
