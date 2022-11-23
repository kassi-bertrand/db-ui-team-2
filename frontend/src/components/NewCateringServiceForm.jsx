 import { Fragment, useRef, useState } from "react";
 import { Dialog, Transition } from '@headlessui/react';
 import { addEvent } from '../api/eventsApi';
import { addCateringService } from "../api/servicesApi";
 
 function NewCateringServiceForm({user, services, isOpen, setIsOpen, setServices}){
     const cancelButtonRef = useRef(null);
 
     //User inputs are stored in those Refs
     const nameInput = useRef(null);
     const streetInput = useRef(null);
     const cityInput = useRef(null);
     const stateInput = useRef(null);
     const zipCodeInput = useRef(null);
     const dateInput = useRef(null);
     const priceInput = useRef(null);
     const detailInput = useRef(null);
 
     function handleSubmit(e){
         e.preventDefault();
 
         const newCateringServiceJSON = {
             "user_id": user.id,
             "name": nameInput.current.value,
             "phone_num": user.phone_num,
             "street": streetInput.current.value,
             "city": cityInput.current.value,
             "state_initial": stateInput.current.value,
             "availability": dateInput.current.value,
             "price": Number(priceInput.current.value),
             "zip_code": Number(zipCodeInput.current.value),
             "details": detailInput.current.value,
         }
 
         //close modal
         setIsOpen(false);
 
         //  send newServiceJSON to the backend with addCateringService
         //      then - update the user service list
         addCateringService(newCateringServiceJSON)
             .then(response => setServices([...services, response]))        
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
                                                 New Catering service 📅 📝
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
                                                             htmlFor="street-address"
                                                             >
                                                                 Street address
                                                             </label>
                                                         </div>
                                                         <input
                                                             id="street-address-1"
                                                             type="text"
                                                             ref={streetInput}
                                                             className="w-full text-gray-800 form-input shadow-md text-sm"
                                                             placeholder="Enter your company street"
                                                             required
                                                         />
                                                     </div>
                                                 </div>
 
                                                 <div className="grid grid-cols-2">
                                                     <div className="flex flex-wrap -mx-3 mb-4">
                                                         <div className="w-full px-8">
                                                             <div className="flex justify-between">
                                                                 <label
                                                                     className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                     htmlFor="city"
                                                                 >
                                                                     City
                                                                 </label>
                                                             </div>
                                                             <input
                                                                 id="city"
                                                                 type="text"
                                                                 ref={cityInput}
                                                                 className="w-full text-gray-800 form-input shadow-md text-sm"
                                                                 placeholder="Enter the name of the city"
                                                                 required
                                                             />
                                                         </div>
                                                     </div>
 
                                                     <div className="flex flex-wrap -mx-3 mb-4">
                                                         <div className="w-full px-8">
                                                             <div className="flex justify-between">
                                                                 <label
                                                                     className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                     htmlFor="state"
                                                                 >
                                                                     State
                                                                 </label>
                                                             </div>
                                                             <select id="state" ref={stateInput} className="w-full text-gray-800 form-input shadow-md text-sm" required defaultValue={""}>
                                                                 <option value="" disabled>
                                                                     Your State?
                                                                 </option>
                                                                 <option value="AL">Alabama</option>
                                                                 <option value="AK">Alaska</option>
                                                                 <option value="AZ">Arizona</option>
                                                                 <option value="AR">Arkansas</option>
                                                                 <option value="CA">California</option>
                                                                 <option value="CO">Colorado</option>
                                                                 <option value="CT">Connecticut</option>
                                                                 <option value="DE">Delaware</option>
                                                                 <option value="DC">District Of Columbia</option>
                                                                 <option value="FL">Florida</option>
                                                                 <option value="GA">Georgia</option>
                                                                 <option value="HI">Hawaii</option>
                                                                 <option value="ID">Idaho</option>
                                                                 <option value="IL">Illinois</option>
                                                                 <option value="IN">Indiana</option>
                                                                 <option value="IA">Iowa</option>
                                                                 <option value="KS">Kansas</option>
                                                                 <option value="KY">Kentucky</option>
                                                                 <option value="LA">Louisiana</option>
                                                                 <option value="ME">Maine</option>
                                                                 <option value="MD">Maryland</option>
                                                                 <option value="MA">Massachusetts</option>
                                                                 <option value="MI">Michigan</option>
                                                                 <option value="MN">Minnesota</option>
                                                                 <option value="MS">Mississippi</option>
                                                                 <option value="MO">Missouri</option>
                                                                 <option value="MT">Montana</option>
                                                                 <option value="NE">Nebraska</option>
                                                                 <option value="NV">Nevada</option>
                                                                 <option value="NH">New Hampshire</option>
                                                                 <option value="NJ">New Jersey</option>
                                                                 <option value="NM">New Mexico</option>
                                                                 <option value="NY">New York</option>
                                                                 <option value="NC">North Carolina</option>
                                                                 <option value="ND">North Dakota</option>
                                                                 <option value="OH">Ohio</option>
                                                                 <option value="OK">Oklahoma</option>
                                                                 <option value="OR">Oregon</option>
                                                                 <option value="PA">Pennsylvania</option>
                                                                 <option value="RI">Rhode Island</option>
                                                                 <option value="SC">South Carolina</option>
                                                                 <option value="SD">South Dakota</option>
                                                                 <option value="TN">Tennessee</option>
                                                                 <option value="TX">Texas</option>
                                                                 <option value="UT">Utah</option>
                                                                 <option value="VT">Vermont</option>
                                                                 <option value="VA">Virginia</option>
                                                                 <option value="WA">Washington</option>
                                                                 <option value="WV">West Virginia</option>
                                                                 <option value="WI">Wisconsin</option>
                                                                 <option value="WY">Wyoming</option>
                                                             </select>
                                                         </div>
                                                     </div>
 
                                                     <div className="flex flex-wrap -mx-3 mb-4">
                                                         <div className="w-full px-8">
                                                             <div className="flex justify-between">
                                                                 <label
                                                                     className="block text-gray-800 text-sm font-semibold mb-1 font-inter"
                                                                     htmlFor="zip-code"
                                                                 >
                                                                     ZIP Code
                                                                 </label>
                                                             </div>
                                                             <input
                                                                 id="zip-code"
                                                                 type="text"
                                                                 ref={zipCodeInput}
                                                                 className="w-full text-gray-800 form-input shadow-md text-sm"
                                                                 placeholder="Enter the ZIP Code"
                                                                 required
                                                             />
                                                         </div>
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
                                                                 htmlFor="price"
                                                             >
                                                                 Price
                                                             </label>
                                                         </div>
                                                         <input
                                                             id="price"
                                                             type="text"
                                                             ref={priceInput}
                                                             className="w-full text-gray-800 form-input shadow-md text-sm"
                                                             placeholder="Enter an integer ammount in US Dollars (optional)"
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
 
 export default NewCateringServiceForm;