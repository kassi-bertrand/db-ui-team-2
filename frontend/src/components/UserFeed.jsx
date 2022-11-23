/**
 * Author:          Kassi Bertrand
 * filename:        UserFeed.jsx
 * Date:            11-12-2022
 * Description:     This component is used in the
 *                  HomePageContent component and 
 *                  renders all events under the
 *                  Feed tab
 */

import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { getUserFeed } from '../api/eventsApi';
import { MyContext } from '../pages/HomePage';
import FeedCard from './FeedCard';
import SearchBar from './SearchBar';

function UserFeed(){
    const [feed, setFeed] = useState([])
    const {user, setUser} = useContext(MyContext);

    //Get events to display in the user feed and set the "feed" state
    useEffect(() => {
        const fetchData = async() => {
            getUserFeed(user.id).then(response => setFeed(response));
        }

        fetchData()
    },[user]);

    if(!user){
        return <div>Loading</div>;
    }

    return(
        <>
            <SearchBar/>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {
                    feed.map((anEvent, index) =>{
                        return(
                                <FeedCard 
                                    user_id={anEvent.user_id}
                                    event_id={anEvent.form_num}
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
            </div>
        </>
    );
}

export default UserFeed;