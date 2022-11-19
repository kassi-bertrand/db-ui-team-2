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
                                user_id={anEvent.user_id}
                                name={anEvent.name}
                                phone_num={anEvent.phone_num}
                                street={anEvent.street}
                                city={anEvent.city}
                                state={anEvent.state}
                                zip_code={anEvent.zip_code}
                                event_date={anEvent.event_date}
                                budget={anEvent.event_date}
                                guest_count={anEvent.guest_count}
                                occasion={anEvent.occasion}
                                details={anEvent.details}
                            />
                    );
                })
            }
        </>
    );
}

export default UserFeed;