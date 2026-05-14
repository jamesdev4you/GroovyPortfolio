"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function NavBar() {

    const pathname = usePathname();
    /*Finish creating the navbar by flex box three sections: Title, NavList, Button for contact. Make logo */
    return (
        <nav className="w-full h-20 bg-foreground flex items-center justify-evenly">
            <div className="text-3xl font-display text-background">James Boyle</div>
            <ul className="flex space-x-4 gap-10">
                {NavList.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`font-display text-3xl text-background hover:text-primary ${pathname === item.href ? "font-bold" : ""}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* From https://v1.tailwindcss.com/components/buttons */}
            <button className="hover:cursor-pointer font-body bg-foreground hover:bg-background  text-background font-semibold hover:text-foreground py-2 px-4 border border-background  rounded">
            Hire Me (:
            </button>
        </nav>
    );

}