/**
 * Author:          Kassi Bertrand
 * filename:        HomePageTabs.jsx
 * Date:            10-31-2022
 * Description:     This component is the Home page Tabs.
 */

function HomePageTabs(){
    return(
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                {/**Section content */}
                <div className="pt-20 pb-12">
                    <div className="text-center">
                        
                        {/**Tabs */}
                        <ul className="flex border-b border-gray-100">

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="">Feed</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="">Venues</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="">Performance</span>
                                    </div>
                                </a>
                            </li>

                            {/**A tab */}
                            <li className="flex-1">
                                <a className="relative block p-4" href="#">
                                    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                                    <div className="flex items-center justify-center">
                                        {/**An SVG here */}
                                        <span className="">Food Service</span>
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