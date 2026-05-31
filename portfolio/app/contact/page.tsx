import GithubIcon from "../../public/icons/github.svg"
import LinkedInIcon from "../../public/icons/linkedin.svg"
import InstagramIcon from "../../public/icons/instagram.svg"
import XIcon from "../../public/icons/x.svg"
import Flower from "../../public/icons/flower.svg"


const SocialMedias = [
  { name: "Github", Icon: GithubIcon, href: "https://github.com/jamesdev4you"},
  { name: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/jamesboyleusf/"},
  { name: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/jamesboyle813"},
  { name: "X", Icon: XIcon, href: "https://x.com/elonmusk"},
];

export default function Contact() {
    return(
            <div className="relative justify-center items-center w-screen h-auto mt-8 bg-foreground ">
            <Flower
                width={40}
                height={40}
                className="absolute z-0 [&_path]:stroke-background! [&_circle]:stroke-background! bottom-3 right-10 "
            />
                <div className="w-full h-auto flex flex-col md:flex md:flex-row md:p-8 md:pt-20 items-center justify-center gap-20 pt-20">
                    {/* Form */}
                    <div className="w-11/12 rounded border-background border-4 flex-col bg-background items-center justify-center h-full p-4">
                        <form action="https://api.web3forms.com/submit" method="POST" className=" flex flex-col gap-4 h-full items-center justify-center" >
                            <h1 className="text-6xl font-display text-foreground text-center ">Reachin&apos; out?</h1>
                            <p className="text-foreground mt-4 font-semibold text-center">Just jot down a message real quick, and I&apos;ll get back to you as soon as I can!</p>
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
                            <input type="text" name="name" className=" rounded w-full h-12 bg-foreground p-2 text-foreground placeholder:text-gray-500 border border-background focus:accent-accent focus:border-accent" placeholder="Your Name" required/>
                            <input type="email" name="email" className=" rounded w-full h-12 p-2 bg-foreground text-foreground placeholder:text-gray-500 border border-background focus:accent-accent focus:border-accent" placeholder="Your Email" required/>
                            <textarea name="message" className="rounded w-full h-40 p-2 bg-foreground text-foreground placeholder:text-gray-500 border border-background focus:accent-accent focus:border-accent" placeholder="Your Message" required></textarea>
                            <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                            <button type="submit" className=" flex align-center justify-center hover:cursor-pointer w-full font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground py-2 px-4 border-background rounded" >Submit Form</button>
                        </form>
                    </div>

                    {/* Contact info */}
                    <div className="mb-10 md:mb-auto h-full w-11/12 flex flex-col items-center justify-center">
                        <h2 className="text-6xl mr-auto font-display text-background">Get in Touch</h2>
                        <p className=" w-full text-background mt-4 font-semibold text-start">Hey there, beautiful souls! The name&apos;s.. uhh well hopefully you&apos;ve seen it at least once by now. I&apos;m just a far-out cat riding the cosmic wave of computer science, ya dig? I&apos;m out here in the Tampa scene, soaking up all the good vibes while hustling at the IT service desk by day and building gnarly web apps by night. I&apos;m on this wild spiritual journey through the digital universe — weaving together Next.js, data structures, and all kinds of heavy code magic, man. The establishment may try to keep a brother down, but this cat&apos;s got his eyes on graduating spring of &apos;27 and sticking it to the man with a righteous career in software engineering!</p>
                        <h2 className="hidden lg:flex mt-40 w-full text-4xl font-display text-background">Socials</h2>
                        <div className="hidden lg:flex w-full items-center justify-start space-x-4">
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
    )
}
