/**
 * Author:          Kassi Bertrand
 * filename:        PerformanceServiceCard.jsx
 * Date:            11-22-2022
 * Description:     This component is used to display
 *                  performance services created by the user.
 *                  This component is used by the CateringServices component.
 */
 import BadgeOpen from './BadgeOpen';
 import VerificationBadge from './VerfificationBadge';

 function PerformanceServiceCard({user_id, name, phone_num, street, city, state_initial, availability, rating, price, zip_code, details}){
    return(
        <a href="#" className="relative block overflow-hidden rounded-lg border border-gray-200 p-8 font-inter">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 to-blue-500"></span>

            <div className="justify-between sm:flex">
                <div>
                    <div className="flex text-gray-600 content-center space-x-2">
                        <p className="mt-1 text-xs font-medium inline-block align-middle">By you <span className="inline-block align-middle"> <VerificationBadge/></span></p>
                    </div>
                </div>

                <div className="ml-3 hidden flex-shrink-0 sm:block">
                    <BadgeOpen/>
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    You created a <strong>Performance</strong> service. It is available on: {availability}<br/>
                    {details}
                </p>
            </div>

            <dl class="mt-4 text-xs font-medium flex items-center">
                <dt class="sr-only">Reviews</dt>
                <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                    <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>{rating}</span>
                </dd>
                <dt class="sr-only">Location</dt>
            </dl>
        </a>
    );
}

export default PerformanceServiceCard;