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
    {Name: "Shear Bliss Beauty Bar", picture: shearbliss},
]

const projectList = [
    {
        Name: "Slim & Savory",
        picture: slimandsavoryCollage,
        descriptionOne:
            "A recipe and lifestyle brand site with a built-in shop, video tutorials, and a clean editorial feel. Built to turn weekly content into a growing audience.",
        descriptionTwo:
            "Responsive across mobile and desktop, with fast navigation and a layout that puts the food front and center.",
        href: "https://www.shearblisstampa.com/",
    },
    {
        Name: "Brazilian Fitness",
        picture: brazilianfitnessCollage,
        descriptionOne:
            "A bold personal-training landing page built to convert. Strong hero, clear services, and a single obvious call to action.",
        descriptionTwo:
            "Designed to feel energetic and trustworthy, with a layout that scales cleanly from phone to widescreen.",
        href: "https://www.brazilianfitness.us/",
    },
    {
        Name: "Shear Bliss Beauty Bar",
        picture: shearblissCollage,
        descriptionOne:
            "An elegant salon site with online scheduling, a team page, and a gallery. Refined, luxurious, and easy to book from.",
        descriptionTwo:
            "Marble textures and a warm neutral palette give it a high-end boutique feel on every device.",
        href: "https://www.shearblisstampa.com/",
    },
];


export default function Projects(){
    return (

       
        <div className=" flex justify-center items-center w-full h-full bg-foreground ">

             {/* Hero page of project */}
            <div className="mt-30 flex-col items-start justify-center bg-foreground w-11/12 h-screen">
                <h1 className="text-8xl w-full text-center font-display text-background">Some Gnarly Projects</h1> 
                <div className="flex items-center justify-center w-full h-5/6">
                    {projectHeroList.map((project) => {
                        return (
                            <div key={project.Name} className="flex flex-col items-center justify-center w-full h-1/3 gap-4">
                                <Image src={project.picture} alt={project.Name} className="w-9/12 hover:w-10/12 aspect-square object-cover hover:shadow-[1px_0px_19px_7px_#3C1C3C] hover:cursor-pointer transition-all delay-50" />    
                                <h2 className="text-4xl font-display text-background hover:cursor-pointer">{project.Name}</h2>
                            </div>
                        )
                    }) }
                </div>
            </div>

            {/* Project description */}
            

        </div>
    )
}