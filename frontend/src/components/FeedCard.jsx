/**
 * Author:          Kassi Bertrand
 * filename:        FeedCard.jsx
 * Date:            11-12-2022
 * Description:     This component is used to display
 *                  event information at a glance.
 *                  This component is displayed in the
 *                  HomePage, under the Feed tab.
 */

import BadgeOpen from "./BadgeOpen";
import BadgeClose from "./BadgeClose";
import VerificationBadge from "./VerfificationBadge";

function FeedCard({organizer, phoneNumber, address1, address2, city, state, zipCode, date, guestCount, eventType}){
    return(
        <a href="#" className="relative block overflow-hidden rounded-lg border border-secondary p-8 font-inter transform motion-safe:hover:scale-110">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 to-blue-500"></span>

            <div className="justify-between sm:flex">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">
                        {eventType}! 🥳
                    </h3>
                    <div className="flex text-gray-600 content-center space-x-2">
                        <p className="mt-1 text-xs font-medium inline-block align-middle">By {organizer} <span className="inline-block align-middle"> <VerificationBadge/></span></p>
                    </div>
                </div>

                <div className="ml-3 hidden flex-shrink-0 sm:block">
                    <BadgeOpen/>
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    {organizer} is organizing a {eventType} at {address1} {address2}, {zipCode}!
                </p>
            </div>

            <dl className="mt-6 flex">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Location</dt>
                    <dd className="text-xs text-gray-500">{city}, {state}</dd>
                </div>

                <div className="ml-3 flex flex-col-reverse sm:ml-6">
                    <dt className="text-sm font-medium text-gray-600">Guests</dt>
                    <dd className="text-xs text-gray-500">{guestCount}</dd>
                </div>
            </dl>
        </a>

    );
}

export default FeedCard;