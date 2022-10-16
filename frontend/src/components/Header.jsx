/**
 * Author:          Kassi Bertrand
 * filename:        Header.jsx
 * Date:            10-15-2022
 * Description:     This component represent the website header.
 *                  It is used in the Login, Registration, and
 *                  Landing pages to display the platform logo,
 *                  and the "Sign In"/"Sign Out" buttons
 */
import { NavLink, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Header() {
    const [top, setTop] = useState(true);

    return (
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/**Branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/**Logo */}
                        <a>
                            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                                        <stop stopColor="#4FD1C5" offset="0%" />
                                        <stop stopColor="#81E6D9" offset="25.871%" />
                                        <stop stopColor="#338CF5" offset="100%" />
                                    </radialGradient>
                                    <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;