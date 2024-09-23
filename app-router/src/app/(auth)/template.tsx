"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "LogIn", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");

  const pathName = usePathname();

  return (
    <>
      <h1>Auth Page</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      {navLink.map((link) => {
        const isActive = pathName == link.href;

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
