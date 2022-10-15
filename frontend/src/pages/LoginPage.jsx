/**
 * Author:          Kassi Bertrand
 * filename:        LoginPage.jsx
 * Date:            10-14-2022
 * Description:     This component is the login page 
 *                  of the website 
 */

function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/**Site Header here */}

            {/**Page main content here */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/**Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 font-inter">
                                <h1 className="h1">Welcome back! We have been expecting you 🚀</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LoginPage;