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
        <section className="relative max-w">
             {/* Section background */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-full max-auto px-4 sm:px-6">
                <div className="pt-12 md:pb-20">
                    
                    {/**Section Header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4 font-extrabold font-inter">Our solutions</h1>
                        <p className="text-xl text-gray-600">Our event planning platform offers a wide range of solutions to help you acheive your goals.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default SolutionSection;