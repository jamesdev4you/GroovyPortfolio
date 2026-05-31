"use client"; // needed for hooks in Next.js App Router

import { useRef } from "react";
import slimandsavory from "../../public/picture/Slim-and-savory-hero-project.png";
import shearbliss from "../../public/picture/shear-beauty-hero-project.png";
import brazilianfitness from "../../public/picture/brazilian-fitness-hero-project.png";
import slimandsavoryCollage from "../../public/picture/SlimSavory_Mockup_Combined.png";
import shearblissCollage from "../../public/picture/ShearBliss_Mockup_Combined.png";
import brazilianfitnessCollage from "../../public/picture/Edvania_PT_Mockup_Combined.png";
import Image from "next/image"


const projectHeroList = [
    {Name: "Slim & Savory", picture: slimandsavory},
    {Name: "Brazilian Fitness", picture: brazilianfitness},
    {Name: "Shear Bliss Beauty", picture: shearbliss},
]

const projectList = [
    {
        Name: "Slim & Savory",
        picture: slimandsavoryCollage, 
        descriptionOne:
            "A recipe and lifestyle brand site with a built-in shop, video tutorials, and a clean editorial feel. Built to turn weekly content into a growing audience.",
        descriptionTwo:
            "Responsive across mobile and desktop, with fast navigation and a layout that puts the food front and center.",
        href: "https://www.slimandsavory.com/",
        skills: ["NextJS","Sanity", "TS", "Tailwind", "Vercel"],
        dark: 0,
    },
    {
        Name: "Brazilian Fitness",
        picture: brazilianfitnessCollage,
        descriptionOne:
            "A bold personal-training landing page built to convert. Strong hero, clear services, and a single obvious call to action.",
        descriptionTwo:
            "Designed to feel energetic and trustworthy, with a layout that scales cleanly from phone to widescreen.",
        href: "https://www.brazilianfitness.us/",
        skills: ["NextJS","Sanity", "TS", "Tailwind", "Vercel"],
        dark: 1,
    },
    {
        Name: "Shear Bliss Beauty",
        picture: shearblissCollage,
        descriptionOne:
            "An elegant salon site with online scheduling, a team page, and a gallery. Refined, luxurious, and easy to book from.",
        descriptionTwo:
            "Marble textures and a warm neutral palette give it a high-end boutique feel on every device.",
        href: "https://www.shearblisstampa.com/",
        skills: ["NextJS","Sanity", "TS", "Tailwind", "Vercel"],
        dark: 0,
    },
];

{/* A.I. used for colors here for speed and ease. */}

const skillColorsDark = [
  "border-red-300 text-red-300",
  "border-yellow-300 text-yellow-300",
  "border-blue-300 text-blue-300",
  "border-orange-300 text-orange-300",
  "border-green-300 text-green-300",
];

const skillColorsLight = [
  "border-red-700 text-red-700",
  "border-yellow-700 text-yellow-700",
  "border-blue-800 text-blue-800",
  "border-orange-700 text-orange-700",
  "border-green-700 text-green-700",
];


export default function Projects(){

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToProject = (name: string) => {
        const index = projectList.findIndex((p) => p.Name === name);
        if (index !== -1) {
            sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (

       
        <div className=" flex flex-col   justify-center items-center w-screen h-auto bg-foreground ">

             {/* Hero page of project */}
            <div className="mt-30 flex-col items-center justify-center w-11/12 h-auto lg:h-200">
                <h1 className="text-4xl lg:text-8xl w-full text-center font-display text-background pb-10 lg:pb-30">Some Gnarly Projects</h1> 
                <div className="md:hidden lg:hidden xl:hidden flex flex-col items-center justify-center w-full h-5/6">
                    {projectHeroList.map((project) => {
                        return (
                            <div onClick={() => scrollToProject(project.Name)} key={project.Name} className="flex flex-col items-center justify-center w-full md:w-1/3 h-auto mb-10 gap-4">
                                <Image src={project.picture} alt={project.Name} className="border-background border-2 w-9/12 hover:w-10/12 aspect-square object-cover hover:shadow-[1px_0px_19px_7px_#3C1C3C] hover:cursor-pointer transition-all delay-50" />    
                                <h2 className="text-2xl font-display text-center text-background hover:cursor-pointer">{project.Name}</h2>
                            </div>
                        )
                    })}
                </div>
                <div className="hidden md:flex md:flex-row items-center justify-center w-full lg:h-120">
                    {projectHeroList.map((project) => {
                        return (
                            <div onClick={() => scrollToProject(project.Name)} key={project.Name} className="flex flex-col items-center justify-center w-full md:w-1/3 h-auto mb-10 gap-4">
                                <Image src={project.picture} alt={project.Name} className="border-background border-2 w-9/12 hover:w-10/12 aspect-square object-cover hover:shadow-[1px_0px_19px_7px_#3C1C3C] hover:cursor-pointer transition-all delay-50" />    
                                <h2 className="text-2xl lg:text-6xl font-display text-center text-background hover:cursor-pointer">{project.Name}</h2>
                            </div>
                        )
                    })}
                </div>
 
            </div>

            {/* Project description */}
            {projectList.map((project, index) => {
                    return (
                        <div ref={(el) => { sectionRefs.current[index] = el; }} key={project.Name} className={ `${project.dark ? "bg-foreground text-background" : "bg-background text-foreground"} w-screen h-auto py-10 flex-col md:flex-wrap md:flex md:flex-row items-center justify-center lg:space-between border-b-2 border-foreground`}>
                            
                            {/*image*/}
                            {project.dark ? <Image src={project.picture} alt={project.Name} className="hidden md:flex w-full md:w-1/2 aspect-auto object-cover" /> : ""}
                            
                            {/* title desc and items and buttons*/}
                            <div className={`flex flex-col items-center ${project.dark ? "lg:items-start" : "lg:items-end"} justify-center w-full md:w-1/2 lg:w-5/12 lg:justify-start h-auto gap-4 p-3`}>
                                <div className="w-full flex flex-col items-center justify-center gap-5">
                                    <h1 className="text-4xl lg:text-6xl 2xl:text-8xl font-display lg:text-center">{project.Name}</h1>
                                    <p className={`text-md lg:text-xl 2xl:text-2xl font-semibold text-inherit lg:w-10/12 xl:w-3/4`}>{project.descriptionOne}</p>  
                                    <p className="text-md lg:text-xl 2xl:text-2xl font-semibold md:hidden lg:flex lg:w-10/12 xl:w-3/4">{project.descriptionTwo}</p>
                                    <div className="w-auto height-auto flex flex-wrap items-center justify-center gap-4">
                                        {/* Skills list */}
                                        {project.skills.map((skill, index) => {
                                        const colors = project.dark ? skillColorsLight : skillColorsDark;
                                        return (
                                            <p
                                            key={skill}
                                            className={`text-md text-xs font-semibold border-2 rounded w-auto px-2 py-1 ${colors[index % colors.length]}`}
                                            >
                                            {skill}
                                            </p>
                                        );
                                        })}
                                    </div>
                                
                                    <div className="width-screen h-20 flex items-center justify-center gap-4">
                                        <a href={project.href} target="_blank" rel="noopener noreferrer">
                                            <button className=" md:flex hover:cursor-pointer font-display text-2xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                                                Website
                                            </button>
                                        </a>
                                        <button className="md:flex hover:cursor-pointer font-display text-2xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                                            Case Study
                                        </button>
                                    </div>
                                </div>
                            </div>


                            
                            {/*image*/}
                            {project.dark ? <Image src={project.picture} alt={project.Name} className="flex md:hidden w-full md:w-1/2 aspect-auto object-cover" /> : <Image src={project.picture} alt={project.Name} className="w-full md:w-1/2 aspect-auto object-cover" />}
                            

                        </div>
                    )
            })}

        </div>
    )
}