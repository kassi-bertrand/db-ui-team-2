/**
 * Author:          Kassi Bertrand
 * filename:        UserEvent.jsx
 * Date:            11-13-2022
 * Description:     This component is used in the
 *                  HomePageContent component and 
 *                  renders all events under the
 *                  "My Events" tab
 */

import { useState } from "react";
import EventCard from "./EventCard";
import NewEventForm from "./NewEventForm";
import PlusButton from "./PlusButton";

function UserEvent({user, events}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            {/**First, Render Plus button */}
            <PlusButton title="New Event" setIsOpen={setIsOpen}/>
            {/**Then, Render all events */}
            {
                events.map((anEvent, index) =>{
                    return(
                        <EventCard 
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
            <NewEventForm user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default UserEvent;