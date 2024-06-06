import React, { useEffect } from "react";
import ThemeSwitcher from "./SwitchMode";
import { useState } from "react";

export default function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-blue-200 navbar">
            <nav>
                <div className="max-w-custom-1440 mx-auto flex justify-between items-center h-20 text-blue-900">
                    <div className="ml-8">
                        <a href="/" className="font-bold">
                            PGM Platform
                        </a>
                    </div>
                    {windowWidth > 1080 ? (
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
                    ) : (
                      <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          id="menu-button"
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Menu
                          <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                
                      {isOpen && (
                        <div
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="py-1" role="none">
                            <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Home
                            </a>
                            <a href="/opleiding" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Opleiding
                            </a>
                            <a href="/programma" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Programma
                            </a>
                            <a href="/portfolio" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Portfolio
                            </a>
                            <a href="/blog" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Blog
                            </a>
                            <a href="/services" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Services
                            </a>
                            <a href="/team" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                              Team
                            </a>
                          </div>
                          <div className="py-1" role="none">
                            <ThemeSwitcher />
                          </div>
                        </div>
                      )}
                    </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
