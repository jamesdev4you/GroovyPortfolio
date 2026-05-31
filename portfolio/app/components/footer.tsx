"use client";

import GithubIcon from "../../public/icons/github.svg"
import LinkedInIcon from "../../public/icons/linkedin.svg"
import InstagramIcon from "../../public/icons/instagram.svg"
import XIcon from "../../public/icons/x.svg"

const SocialMedias = [
  { name: "Github", Icon: GithubIcon, href: "https://github.com/jamesdev4you"},
  { name: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/jamesboyleusf/"},
  { name: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/jamesboyle813"},
  { name: "X", Icon: XIcon, href: "https://x.com/elonmusk"},
];

export default function Footer() {

    return (
        <footer className=" w-full h-20 bg-background flex items-center md:justify-evenly justify-center">
            <div className="flex items-center justify-between h-full w-10/12">
                <button className="hidden md:flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                    Resume
                </button>
                <div className="flex items-center justify-between w-full md:w-5/12">
                {SocialMedias.map(({ name, Icon, href }) => (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                        <Icon
                        width={45}
                        height={45}
                        className=" text-foreground p-2 border-2 hover:border-3  rounded-2xl"
                        />
                    </a>
                ))}
                </div>
          </div>
        </footer>
    );

}
