/**
 * Author:          Kassi Bertrand
 * filename:        EventCard.jsx
 * Date:            11-13-2022
 * Description:     This component is used to display
 *                  events created by the user.
 *                  This component is used by the UserEvent
 *                  component to display elements under the
 *                  "My Events" tab.
 */

import BadgeOpen from "./BadgeOpen";
import BadgeClose from "./BadgeClose";
import VerificationBadge from "./VerfificationBadge";

function EventCard({user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count, occasion, details}){
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
                    You created a {occasion}. <br/>
                    The expected guest count is: {guest_count}
                </p>
            </div>

            <dl className="mt-6 flex">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Location</dt>
                    <dd className="text-xs text-gray-500">{city}, {state}</dd>
                </div>
            </dl>
        </a>
    );
}

export default EventCard;