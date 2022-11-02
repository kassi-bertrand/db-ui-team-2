/**
 * Author:          Kassi Bertrand
 * filename:        HomePage.jsx
 * Date:            10-30-2022
 * Description:     This component is the Home page header.
 */

import { useState } from "react";

//TODO: This component must have a "User" prop
function HomePageHeader(){
    const [menuHidden, setMenuHidden] = useState(true);

    function handleClick(){
        setMenuHidden(!menuHidden);
    }

    function handleLogout(){
        //TODO: Implement this function
        //1- Set User state to "null"
        //2- Redirect visitor to login page.
    }

    return(
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 font-inter">
                <div className="flex items-center sm:justify-between sm:gap-4">

                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">

                        <div className="flex gap-4">
                        </div>
                        
                        <div className="relative">
                            <button className="flex shrink-0 items-center rounded-lg" onClick={handleClick}>
                                {/**Random picture */}
                                <img
                                    alt="Man"
                                    src="https://picsum.photos/200"
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <p className="ml-2 text-left text-xs sm:block">
                                    <strong className="block font-medium">User name</strong>

                                    <span className="text-gray-500">user@email.com</span>
                                </p>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-4 h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >

                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/**Dropdown menu - hidden by default */}
                            <div className={`absolute ${menuHidden? 'invisible': 'visible'} right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg`}>
                                <div className="flex p-2 text-red-600">
                                    <div className="py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </div>

                                    <a onClick={handleLogout} className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
                                        Logout
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Hi, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Username!</span>
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-500">
                        Are you ready to party !? 🎉
                    </p>
                </div>
            </div>
        </header>
    );
}

export default HomePageHeader;