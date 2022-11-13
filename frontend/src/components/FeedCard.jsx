/**
 * Author:          Kassi Bertrand
 * filename:        FeedCard.jsx
 * Date:            11-06-2022
 * Description:     This component is used to display
 *                  event information at a glance.
 *                  This component is displayed in the
 *                  HomePage, under the Feed tab.
 */

function FeedCard({organizer, phoneNumber, address1, address2, city, state, zipCode, date, guestCount, eventType}){
    return(
        <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 font-inter">
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="justify-between sm:flex">
                <div>
                    <h3 class="text-xl font-bold text-gray-900">
                        {organizer} is organizing a {eventType}! 🥳
                    </h3>
                    <p class="mt-1 text-xs font-medium text-gray-600">By {organizer}</p>
                </div>

                <div class="ml-3 hidden flex-shrink-0 sm:block">
                    {/**Render chip component here */}
                </div>
            </div>

            <div class="mt-4 sm:pr-8">
                <p class="text-sm text-gray-500">
                    {organizer} is organizing a {eventType} at {address1} {address2} {zipCode}!
                </p>
            </div>

            <dl class="mt-6 flex">
                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">Location</dt>
                    <dd class="text-xs text-gray-500">{city}, {state}</dd>
                </div>

                <div class="ml-3 flex flex-col-reverse sm:ml-6">
                    <dt class="text-sm font-medium text-gray-600">Guests</dt>
                    <dd class="text-xs text-gray-500">{guestCount}</dd>
                </div>
            </dl>
        </a>

    );
}

export default FeedCard;