import type { Metadata } from "next";
import { Creepster, VT323 } from "next/font/google";
import "./globals.css";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "NecroCoder | Horror Portfolio",
  description: "A spine-chilling portfolio showcasing my work in software development.",
  keywords: ["portfolio", "software developer", "web development", "react", "nextjs", "horror"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${creepster.variable} ${vt323.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
