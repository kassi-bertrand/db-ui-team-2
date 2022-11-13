/**
 * Author:          Kassi Bertrand
 * filename:        UserFeed.jsx
 * Date:            11-12-2022
 * Description:     This component is used in the
 *                  HomePageContent component and 
 *                  renders all events under the
 *                  Feed tab
 */

import FeedCard from './FeedCard';

function UserFeed({events}){
    return(
        <>
            {
                events.map((anEvent, index) =>{
                    return(
                            <FeedCard 
                                organizer={anEvent.organizer}
                                phoneNumber={anEvent.phoneNumber}
                                address1={anEvent.address1}
                                address2={anEvent.address2}
                                city={anEvent.city}
                                state={anEvent.state}
                                zipCode={anEvent.zipCode}
                                guestCount={anEvent.guestCount}
                                eventType={anEvent.eventType}
                            />
                    );
                })
            }
        </>
    );
}

export default UserFeed;