/**
 * Author:          Kassi Bertrand
 * filename:        SolutionSection.jsx
 * Date:            10-23-2022
 * Description:     This component represents the landing page solution section.
 *                  It is the second section of the landing page. It displays
 *                  the services offered by the platform
 */

function SolutionSection(){
    return(
        <section className="relative" id="solutionSection">
             {/* Section background */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pb-20">
                    
                    {/**Section Header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4 font-extrabold font-inter">Our solutions</h1>
                        <p className="text-xl text-gray-600">Our event planning platform offers a wide range of solutions to help you acheive your goals.</p>
                    </div>
                    

                    {/**Solutions */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/**Solution 1 */}
                        <div className="flex items-center text-lg p-5 rounded border">
                            <div>
                                <div className="font-bold leading-snug tracking-tight mb-3 font-inter">A complete suite of event management tools 🧰</div>
                                <div className="text-gray-600 font-inter">Take event planning to the next level with our comprehensive set of tools and administrative features built for teams.</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/**Solution 2 */}
                        <div className="flex items-center text-lg p-5 rounded border">
                            <div>
                                <div className="font-bold leading-snug tracking-tight mb-3 font-inter">Easily connect with 3rd parties 🌐</div>
                                <div className="text-gray-600 font-inter">Locate the necessary items (music, food, and venues) for your event by connecting with event planning resources in the area.</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/**Solution 3 */}
                        <div className="flex items-center text-lg p-5 rounded border">
                            <div>
                                <div className="font-bold leading-snug tracking-tight mb-3 font-inter">Built-in safety measures for your guests 👮</div>
                                <div className="text-gray-600 font-inter">Your guests' safety is a major priority for us. Discover our array of security tools to prevent threats from happening in the first place.</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default SolutionSection;