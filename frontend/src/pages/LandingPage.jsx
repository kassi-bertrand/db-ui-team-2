/**
 * Author:          Kassi Bertrand
 * filename:        LandingPage.jsx
 * Date:            10-18-2022
 * Description:     This component is the Landing page
 *                  of the website. This page is the first
 *                  new users encounter. It presents the
 *                  company and its services
 */
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SolutionSection from "../components/SolutionSection";

function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/** Site header */}
            <Header />

            {/** Page content */}
            <main className="flex-grow">

                {/**Page sections */}
                <HeroSection />
                <SolutionSection/>

            </main>

        </div>
    );
}

export default LandingPage;