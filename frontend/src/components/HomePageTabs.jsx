/**
 * Author:          Kassi Bertrand
 * filename:        HomePageTabs.jsx
 * Date:            10-31-2022
 * Description:     This component is the Home page Tabs.
 */

function HomePageTabs({setActiveTab}){
    return(
        <section className="overflow-x-scroll font-inter">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                
                {/**Section content */}
                <div className="pt-20 pb-12">
                    <div className="">
                        
                        {/**Tabs */}
                        <ul className="flex">

                            {/**A tab */}
                            <li className="flex-1 hover:bg-gray-200 hover:rounded-md" onClick={() => setActiveTab("Feed")}>
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <span className="ml-3 text-sm font-medium text-gray-900">My Feed</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1 hover:bg-gray-200 hover:rounded-md" onClick={() => setActiveTab("Events")}>
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        <span className="ml-3 text-sm font-medium text-gray-900">My events</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1 hover:bg-gray-200 hover:rounded-md" onClick={() => setActiveTab("Services")}>
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                        </svg>
                                        <span className="ml-3 text-sm font-medium text-gray-900">My services</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePageTabs;