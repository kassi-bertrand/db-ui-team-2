/**
 * Author:          Kassi Bertrand
 * filename:        BadgeOpen.jsx
 * Date:            11-13-2022
 * Description:     This component is used to display the status
 *                  of an event. Is it closed or open.
 *                  That's it.
 *                  This component is displayed in the
 *                  FeedCard, EventCard, and ServiceCard
 *                  components
 */

function BadgeOpen(){
    return(
        <>
            <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                <p class="whitespace-nowrap text-sm font-inter">Open</p>
            </span>
        </>
    );
}

export default BadgeOpen;