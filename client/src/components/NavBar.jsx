import React from "react";
import ThemeSwitcher from "./SwitchMode";

export default function NavBar() {
  return (
    <div className="bg-blue-200">
      <div className="max-w-custom-1440 mx-auto flex justify-between items-center h-20 text-blue-900">
        <div className="ml-8">
          <a href="/" className="font-bold">
            PGM Platform
          </a>
          
        </div>
        <div className="mr-8">
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/opleiding">Opleiding</a>
            </li>
            <li>
              <a href="/programma">Programma</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}
