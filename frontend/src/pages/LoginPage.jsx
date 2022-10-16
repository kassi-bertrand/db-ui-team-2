/**
 * Author:          Kassi Bertrand
 * filename:        LoginPage.jsx
 * Date:            10-14-2022
 * Description:     This component is the login page 
 *                  of the website 
 */

import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/**Site Header here */}
            <Header />

            {/**Page main content here */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/**Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 font-inter">
                                <h1 className="h1">Welcome back. We have been expecting you.</h1>
                            </div>

                            {/**Form */}
                            <div className="max-w-sm mx-auto">
                                <form>
                                    <div className="flex flex-wrap -mx-3 mb-4 font-inter">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="email">Email</label>
                                            <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <div className="flex justify-between">
                                                <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="password">Password</label>
                                                <a className="text-sm text-blue-600 hover:underline font-bold">Having trouble signing in?</a>
                                            </div>
                                            <input id="password" type="password" className="w-full text-gray-800 form-input" placeholder="Enter your password" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full font-semibold">Sign in</button>
                                        </div>
                                    </div>
                                </form>

                                <div className="flex items-center my-6">
                                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                                    <div className="text-gray-600 italic">Or</div>
                                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                                </div>

                                <div className="text-gray-600 text-center mt-6">
                                    Don't you have an account? <a className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LoginPage;