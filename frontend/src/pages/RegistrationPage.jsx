/**
 * Author:          Kassi Bertrand
 * filename:        LoginPage.jsx
 * Date:            10-17-2022
 * Description:     This component is the Registration page
 *                  of the website. New users will use it to
 *                  create their account on the platform.
 */
import Header from "../components/Header";

function RegistrationPage() {
  return (
    <div>
      {/**Site Header */}
      <Header />

      {/**Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              
              {/**Page Header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 font-inter">
                <h1 className="h1">
                  Welcome on the ultimate event planning platform
                </h1>
              </div>

              {/**Registration Form */}
              <div className="max-w-sm mx-auto">
                <form>
                    {/**Form Field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="name">Name</label>
                            <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required/>
                        </div>
                    </div>

                    {/**Form Field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email" required/>
                        </div>
                    </div>

                    {/**Form field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                        </div>
                    </div>

                    {/**Button */}
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Register</button>
                        </div>
                    </div>

                    {/**Agreement */}
                    <div className="text-sm text-gray-500 text-center mt-3">
                        By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                    </div>
                </form>

                {/**Dividing line */}
                
                {/**Other Register option "Fake" */}

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegistrationPage;
