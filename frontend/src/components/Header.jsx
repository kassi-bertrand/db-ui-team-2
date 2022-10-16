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

    //When user scrolls past 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

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

                    {/**Site Navigation */}
                    <nav className='flex flex-grow'>
                        <ul className='flex flex-grow justify-end flex-wrap items-center'>
                            <li>
                                <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
                            </li>
                            <li>
                                <a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                                    <span>Sign up</span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>
        </header>
    );
}

export default Header;