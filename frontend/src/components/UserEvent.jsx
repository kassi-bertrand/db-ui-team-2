/**
 * Author:          Kassi Bertrand
 * filename:        UserEvent.jsx
 * Date:            11-13-2022
 * Description:     This component is used in the
 *                  HomePageContent component and 
 *                  renders all events under the
 *                  "My Events" tab
 */

import { useEffect, useState } from "react";
import { getEventsById } from "../api/eventsApi";
import EventCard from "./EventCard";
import NewEventForm from "./NewEventForm";
import PlusButton from "./PlusButton";

function UserEvent({user, setUserEvents}){
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([])

    //Get events created by the user and store them
    //POSSIBLE IMPROVEMENT: Every time, user tap on "My Events" an HTTP request
    //is made. But do we have do to this?
    useEffect(()=>{
        getEventsById(user.id).then(response => setEvents(response));
    }, [])
    return(
        <>
            {/**First, Render Plus button */}
            <PlusButton title="New Event" setIsOpen={setIsOpen}/>
            {/**Then, Render all events */}
            {
                events.map((anEvent, index) =>{
                    return(
                        <EventCard 
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
            <NewEventForm user={user} events={events} isOpen={isOpen} setIsOpen={setIsOpen} setEvents={setEvents}/>
        </>
    );
}

export default UserEvent;