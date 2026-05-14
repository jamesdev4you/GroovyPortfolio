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
    return (
        <nav className="w-full h-16 bg-background">
            yo
        </nav>
    );

}