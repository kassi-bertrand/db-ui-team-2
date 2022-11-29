/**
 * Author:          Giovanni Boscan & Kassi Bertrand
 * filename:        NewVenueServiceForm.jsx
 * Date:            11-22-2022
 * Description:     This component renders the form presented
 *                  to the user when creating a new performance service. This
 *                  component is rendered as a modal.
 */
 import { Fragment, useRef } from "react";
 import { Dialog, Transition } from '@headlessui/react';
 import { addPerformanceService } from "../api/servicesApi";

function NewPerformanceServiceForm({user, services, isOpen, setIsOpen, setServices}){
    {
        /**
         * The form fields are:
         * Name
         * phone number
         * details
         */
    }

    const cancelButtonRef = useRef(null);
 
     //User inputs are stored in those Refs
     const nameInput = useRef(null);
     const detailInput = useRef(null);
 
     function handleSubmit(e){
         e.preventDefault();
 
         const newPerformanceServiceJSON = {
             "user_id": user.id,
             "name": nameInput.current.value,
             "phone_num": user.phone_num,
             "availability": dateInput.current.value,
             "details": detailInput.current.value,
         }
 
         //close modal
         setIsOpen(false);
 
         //  send newServiceJSON to the backend with addVenueService
         //      then - update the user service list
         addPerformanceService(newPerformanceServiceJSON)
             .then(response => setServices([...services, response]));
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
                                                 New Performance service 📅 📝
                                             </h1>
                                             <p className="max-w-3xl px-8 -mx-3 text-left text-neutral-600 pb-8 md:pb-8">
                                                 Fill out this form to give your attendees more information
                                                 about your service.
                                             </p>
                                         </div>
 
                                         {/**The Event Form */}
                                         <div className="max-w-lg mx-auto">
                                             <form>
                                                 <div className="flex flex-wrap -mx-3 mb-4 font-inter">
                                                     <div className="w-full px-8">
                                                         <label
                                                             className="block text-gray-800 text-sm font-semibold mb-1"
                                                             htmlFor="name"
                                                         >
                                                             Your Name
                                                         </label>
                                                         <input
                                                             id="name"
                                                             type="text"
                                                             ref={nameInput}
                                                             className="form-input w-full text-gray-800 shadow-md text-sm"
                                                             placeholder="Enter your name/company"
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
                                                                 Phone number
                                                             </label>
                                                         </div>
                                                         <input
                                                             id="phone-number"
                                                             type="text"
                                                             value={user.phone_num}
                                                             className="w-full text-gray-800 form-input shadow-md text-sm"
                                                             placeholder="Enter your phone number"
                                                             disabled
                                                             required
                                                         />
                                                     </div>
                                                 </div>

                                                 <div className="flex flex-wrap -mx-3 mb-4 mt-5">
                                                     <div className="w-full px-8">
                                                         <div className="flex justify-between">
                                                             <label
                                                                 className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                 htmlFor="date"
                                                             >
                                                                When are you available?
                                                             </label>
                                                         </div>
                                                         <input
                                                             id="date"
                                                             type="date"
                                                             ref={dateInput}
                                                             className="w-full text-gray-800 form-input shadow-md text-sm"
                                                             required
                                                         />
                                                     </div>
                                                 </div>

                                                 <div className="flex flex-wrap -mx-3 mb-4">
                                                     <div className="w-full px-8">
                                                         <div className="flex justify-between">
                                                             <label
                                                                 className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                 htmlFor="details"
                                                             >
                                                                 Any Details? (optional)
                                                             </label>
                                                         </div>
                                                             <textarea id="details" name="details" rows="5" cols="50" ref={detailInput} className="w-full text-gray-800 form-input shadow-md text-sm" placeholder="Write here! ✍️✨">
                                                             </textarea>
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

export default NewPerformanceServiceForm