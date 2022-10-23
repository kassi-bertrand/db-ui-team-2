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
        <section className="relative">
             {/* Section background */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
        </section>
    );
}

export default SolutionSection;