/**
 * Author:          Kassi Bertrand
 * filename:        ProfileForm.jsx
 * Date:            11-19-2022
 * Description:     This component renders the form presented
 *                  to users when updating their profile. This
 *                  component is rendered as a modal
 */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { addEvent } from '../api/usersApi';

function ProfileForm({isOpen, setIsOpen}){
    const cancelButtonRef = useRef(null);

    //Refs to store user inputs
    const nameInput = useRef(null);
    const phoneInput = useRef(null);
    const emailInput = useRef(null);

    //Read userJSON from localstorage, in a JSON object
    let user = JSON.parse(localStorage.getItem('userJSON'));

    function handleSubmit(){
        //form new userJSON
        const newUserJSON = {
            "user_id": user.user_id,
            "name": nameInput.current.value,
            "phone_num": phoneInput.current.value,
            "email": emailInput.current.value,
        }

        //compare new userJSON with user
        //If different
            //update current userJSON in local storage
            //Have an API function call to update the data base, if they are
        
        //close the modal
        setIsOpen(false);
    }

    return(
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto font-inter">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="mx-auto px-4 sm:px-6">
                                    
                                    <div className="pt-10 pb-0 md:pt-10">
                                        {/**Modal Header */}
                                        <div>
                                            <h1 className="max-w-3xl px-8 -mx-3 pb-0 text-left font-bold md:pb-0 text-lg">
                                                Your Profile 🔏
                                            </h1>
                                            <p className="max-w-3xl px-8 -mx-3 text-left text-neutral-600 pb-8 md:pb-8">
                                                Below are the information you entered when registering, feel free to update them
                                                😊
                                            </p>
                                        </div>

                                        {/**The Profile form Form */}
                                        <div className="max-w-lg mx-auto">
                                            <form>
                                                <div className="flex flex-wrap -mx-3 mb-4 font-inter">
                                                    <div className="w-full px-8">
                                                        <label
                                                            className="block text-gray-800 text-sm font-semibold mb-1"
                                                            htmlFor="name"
                                                        >
                                                            Your current name
                                                        </label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            value={user.name}
                                                            ref={nameInput}
                                                            className="form-input w-full text-gray-800 shadow-md text-sm"
                                                            placeholder="Enter a new name"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap -mx-3 mb-4">
                                                    <div className="w-full px-8">
                                                        <div className="flex justify-between">
                                                            <label
                                                            className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                            htmlFor="phone-number"
                                                            >
                                                                Your current phone number
                                                            </label>
                                                        </div>
                                                        <input
                                                            id="phone-number"
                                                            type="text"
                                                            value={user.phone_num}
                                                            ref={phoneInput}
                                                            className="w-full text-gray-800 form-input shadow-md text-sm"
                                                            placeholder="Enter your new phone number"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap -mx-3 mb-4 mt-5">
                                                    <div className="w-full px-8">
                                                        <div className="flex justify-between">
                                                            <label
                                                                className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                htmlFor="email"
                                                            >
                                                                Your current email
                                                            </label>
                                                        </div>
                                                        <input
                                                            id="email"
                                                            type="text"
                                                            value={user.email}
                                                            ref={emailInput}
                                                            className="w-full text-gray-800 form-input shadow-md text-sm"
                                                            placeholder="Enter your new email"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/**Submit and Cancel button */}
                                                <div className="flex flex-wrap -mx-3 mt-12 mb-8">
                                                    <div className="w-full px-8">
                                                        <button
                                                            className="btn text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg"
                                                            onClick={handleSubmit}
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ProfileForm;