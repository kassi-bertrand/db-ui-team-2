/**
 * Author:          Kassi Bertrand
 * filename:        VenueServices.jsx
 * Date:            11-22-2022
 * Description:     This component is used in the
 *                  UserService component and renders
 *                  all venue services created by the 
 *                  user.
 */

import { useContext, useEffect } from "react";
import { useState } from "react";
import { getVenueServicesById } from "../api/servicesApi";
import { MyContext } from "../pages/HomePage";
import NewVenueServiceForm from "./NewVenueServiceForm";
import PlusButton from "./PlusButton";
import VenueServiceCard from "./VenueServiceCard";

function VenueServices(){
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const {user, setUser} = useContext(MyContext);
    
    //Get all venue services created by the user and set "services" state
    useEffect(()=>{
        const fetchVenue = async() => {
            getVenueServicesById(user.id).then(response => setServices( response ));

        }

        fetchVenue()
    }, []);

    if(!services){
        return <>Loading</>;
    }

    return(
        <div>
            <div className="mt-8 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Venue 🏨</h1>
                <p className="mt-1.5 text-sm text-gray-500">
                    Below, the venue services you're offering
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/**First, Render Plus button */}
                <PlusButton title="New Venue" setIsOpen={setIsOpen}/>
                {/**TODO: Then, Render all "VenueServiceCard" here */}
                {
                    services.map((aVenueService, index) =>{
                        return(
                            <VenueServiceCard
                                key={index}
                                user_id={aVenueService.user_id}
                                venue_id={aVenueService.food_num}
                                name={aVenueService.name}
                                phone_num={aVenueService.phone_num}
                                street={aVenueService.street}
                                city={aVenueService.city}
                                state_initial={aVenueService.state_initial}
                                availability={aVenueService.availability}
                                rating={aVenueService.rating}
                                zip_code={aVenueService.zip_code}
                                details={aVenueService.details}
                            />
                        );
                    })
                }
                <NewVenueServiceForm user={user} services={services} isOpen={isOpen} setIsOpen={setIsOpen} setServices={setServices}/>
            </div>
        </div>
    );
}

export default VenueServices;