/**
 * Author:          Kassi Bertrand
 * filename:        HomePage.jsx
 * Date:            10-30-2022
 * Description:     This component is the Home page header.
 */

//TODO: This component must have a "User" prop
function HomePageHeader(){
    return(
        <header className="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 font-inter">
                <div class="flex items-center sm:justify-between sm:gap-4">

                    <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">

                        <div class="flex gap-4">
                        </div>

                        <button class="flex shrink-0 items-center rounded-lg transition">
                            {/**Random picture */}
                            <img
                                alt="Man"
                                src="https://picsum.photos/200"
                                class="h-10 w-10 rounded-full object-cover"
                            />

                            <p class="ml-2 text-left text-xs sm:block">
                                <strong class="block font-medium">User name</strong>

                                <span class="text-gray-500">user@email.com</span>
                            </p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="ml-4 h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
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
                    </div>
                </div>

                <div class="mt-8">
                    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
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