/**
 * Author:          Kassi Bertrand
 * filename:        BadgeClose.jsx
 * Date:            11-13-2022
 * Description:     This component is used to display the status
 *                  of an event. Is it closed or open.
 *                  That's it.
 *                  This component is displayed in the
 *                  FeedCard, EventCard, and ServiceCard
 *                  components
 */

function BadgeClose(){
    return(
        <>
            <span class="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
                <p class="whitespace-nowrap text-sm font-inter">Closed</p>
            </span>
        </>
    );
}
export default BadgeClose;