/**
 * Author:          Kassi Bertrand
 * filename:        LoginPage.jsx
 * Date:            10-17-2022
 * Description:     This component is the Registration page
 *                  of the website. New users will use it to
 *                  create their account on the platform.
 */
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";

function RegistrationPage() {
  const [disable, setDisable] = useState(true);

  //UseRefs to grab form inputs' content. For more info check: https://dev.to/sobhandash/react-forms-and-useref-hook-4p1l
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const passwordInput = useRef(null);
  const passwordCheckInput = useRef(null);

  //When the value of a form input changes, the following function will runs.
  function handleChange(e){
    e.preventDefault();
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nameInput.current.value.length < 5) setDisable(true);
    else if(emailRegEx.test(emailInput.current.value) == false) setDisable(true);
    else if(phoneInput.current.value.length != 10) setDisable(true);
    else if(passwordInput.current.value.length < 5) setDisable(true);
    else if(passwordInput.current.value != passwordCheckInput.current.value) setDisable(true);
    else{
      setDisable(false);
    }
  }

  //Package and send user input to the backend.
  //NOTE: It does not perform input verification.
  function handleRegister(e){
    //0- We do not want the page to refresh
    e.preventDefault();
    
    //1- Package user inputs in a JSON object
    const signUpInfo = {
      "name": nameInput.current.value,
      "phone_num": phoneInput.current.value,
      "email": emailInput.current.value,
      "password": passwordInput.current.value,
    }
    //2- Send signUpInfo using api function
    //3- On success, add user ID to JSON, then set the user state
    //4- Re-direct user to home page
  }

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
                            <label className="block text-gray-800 text-sm font-semibold mb-1 font-inter" htmlFor="name">Name</label>
                            <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" ref={nameInput} onChange={handleChange} required/>
                        </div>
                    </div>

                    {/**Form Field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1 font-inter" htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email" ref={emailInput} onChange={handleChange} required/>
                        </div>
                    </div>

                    {/**Form Field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1 font-inter" htmlFor="phone">Phone Number 📱 🇺🇸</label>
                            <input id="phone" type="text" className="form-input w-full text-gray-800" placeholder="Enter your phone number" ref={phoneInput} onChange={handleChange} required/>
                        </div>
                    </div>

                    {/**Form field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1 font-inter" htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" ref={passwordInput} onChange={handleChange} required />
                        </div>
                    </div>

                    {/**Form field */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-semibold mb-1 font-inter" htmlFor="password-check">Re-enter password</label>
                            <input id="password-check" type="password" className="form-input w-full text-gray-800" placeholder="Retype your password" ref={passwordCheckInput} onChange={handleChange} required />
                        </div>
                    </div>

                    {/**Button */}
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                            <button className={`btn ${disable? 'bg-blue-400 cursor-not-allowed': 'bg-blue-600 hover:bg-blue-700'} text-white w-full font-semibold font-inter"`} onClick={handleRegister} disabled={disable}>Register 🚀</button>
                        </div>
                    </div>

                    {/**Agreement */}
                    <div className="text-sm text-gray-500 text-center mt-3">
                        By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                    </div>
                </form>

                {/**Dividing line */}
                <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>

                {/**Other Register option "Fake: Just for the look" */}
                {/** 
                <form>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center" onClick={handleContinueWithGoogle}>
                                <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                                </svg>
                                <span className="flex-auto pl-16 pr-8 -ml-16 font-inter">Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </form>
                */}

                <div className="text-gray-600 text-center mt-6">
                  Already have an account? <Link to="/login" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegistrationPage;
