"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    /*Finish creating the navbar by flex box three sections: Title, NavList, Button for contact. Make logo */
    return (
        <nav className="fixed z-50 top-0 w-full h-20 bg-background flex items-center md:justify-evenly justify-between md:pl-0 md:pr-0 pl-4 pr-16">
            {/* This is for medium screens */}
            <div className="hidden md:flex text-3xl font-display text-foreground">James Boyle</div>
            <ul className="space-x-4 gap-10 hidden md:flex">
                {NavList.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`hover:underline font-display text-3xl text-foreground hover:text-primary ${pathname === item.href ? "font-bold" : ""}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* From https://v1.tailwindcss.com/components/buttons with slight modifications*/}
            <a href="/contact" target="_blank" rel="noopener noreferrer">
                <button className="hidden md:flex hover:cursor-pointer font-display text-3xl bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground hover:border-foreground border-2 py-2 px-4 border-background  rounded">
                Hire Me
                </button>
            </a>

            {/* This is for small and below screens */}
            <button
                className="md:hidden hover:cursor-pointer font-body bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground py-2 px-4 border border-background  rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
            </button>

            {/* Box that opens on isOpenm*/}
            {isOpen && (
                <ul className="absolute top-20 left-0 w-full bg-foreground flex flex-col items-center space-y-4 py-4">
                    {NavList.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`hover:underline font-display text-3xl text-background hover:text-primary ${pathname === item.href ? "font-bold" : ""}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {/* Should be looked at for DRY method, used earlier */}
            <div className="md:hidden flex text-3xl font-display text-background">James Boyle</div>
        </nav>
        
    );

}