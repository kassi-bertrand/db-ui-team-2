/**
 * Author:          Kassi Bertrand
 * filename:        HeroSection.jsx
 * Date:            10-18-2022
 * Description:     This component represents the landing page hero section.
 *                  It is the first section page.
 */
 import { Link } from 'react-router-dom';

function HeroSection({scrollDown}) {
    return (
        <section className="relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/**Hero Content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/**Section Header */}
                    <div className="text-center pb-12 md:pb-20">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 font-inter">Build better events <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Together</span></h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8">Everything you need to create immersive, and successful experiences.</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div>
                                    <Link to="/login" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 font-inter" href="#0">Start Here 🚀</Link>
                                </div>
                                <div>
                                    <button onClick={scrollDown} className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 font-inter" href="#0">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;