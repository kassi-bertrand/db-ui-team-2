/**
 * Author:          Kassi Bertrand
 * filename:        HomePageTabs.jsx
 * Date:            10-31-2022
 * Description:     This component is the Home page Tabs.
 */

function HomePageTabs(){
    return(
        <section className="overflow-x-scroll font-inter">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                
                {/**Section content */}
                <div className="pt-20 pb-12">
                    <div className="">
                        
                        {/**Tabs */}
                        <ul className="flex border-b border-gray-600">

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="ml-3 text-sm font-medium text-gray-900">Feed</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="ml-3 text-sm font-medium text-gray-900">Venues</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="ml-3 text-sm font-medium text-gray-900">Performance</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="ml-3 text-sm font-medium text-gray-900 whitespace-nowrap">Food</span>
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