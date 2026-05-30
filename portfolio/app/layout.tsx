import type { Metadata } from "next";

/* How to grab fonts with NextJS. Easy to plug and play with boilerplate on npm */ 
import { Chicle, Roboto } from "next/font/google";

import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
})

const chicle = Chicle({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-chicle',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "James' Groovy Portfolio",
  description: "Built with Next.js, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chicle.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>{children}<Footer/>
      </body>
    </html>
  );
}
