/**
 * Author:          Kassi Bertrand
 * filename:        UserEvent.jsx
 * Date:            11-13-2022
 * Description:     This component is used in the
 *                  HomePageContent component and 
 *                  renders all events under the
 *                  "My Events" tab
 */

import { useContext } from "react";
import { useEffect, useState } from "react";
import { getEventsById } from "../api/eventsApi";
import { MyContext } from "../pages/HomePage";
import EventCard from "./EventCard";
import NewEventForm from "./NewEventForm";
import PlusButton from "./PlusButton";

function UserEvent(){
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([])
    const {user, setUser} = useContext(MyContext);

    //Get events created by the user and set "events" state
    useEffect(()=>{
        const fetchData = async() => {
            getEventsById(user.id).then(response => setEvents(response));
        }

        fetchData();
    }, [user])
    return(
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/**First, Render Plus button */}
                <PlusButton title="New Event" setIsOpen={setIsOpen}/>
                {/**Then, Render all events */}
                {
                    events.map((anEvent, index) =>{
                        return(
                            <EventCard 
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
                <NewEventForm user={user} events={events} isOpen={isOpen} setIsOpen={setIsOpen} setEvents={setEvents}/>
            </div>
        </>
    );
}

export default UserEvent;