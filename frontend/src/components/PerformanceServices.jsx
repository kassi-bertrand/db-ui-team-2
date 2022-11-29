/**
 * Author:          Kassi Bertrand
 * filename:        VenueServices.jsx
 * Date:            11-22-2022
 * Description:     This component is used in the
 *                  UserService component and renders
 *                  all performance services created by the 
 *                  user.
 */

import { useContext, useEffect } from "react";
import { useState } from "react";
import { getPerformanceServicesById } from "../api/servicesApi";
import { MyContext } from "../pages/HomePage";
import NewPerformanceServiceForm from "./NewPerformanceServiceForm";
import PerformanceServiceCard from "./PerformanceServiceCard";
import PlusButton from "./PlusButton";

function PerformanceServices(){

    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const {user, setUser} = useContext(MyContext);

    //Get all performance services created by the user and set "services" state
    useEffect(()=>{
        const fetchPeformance = async() => {
            getPerformanceServicesById(user.id).then(response => setServices( response ));
        }

        fetchPeformance()
    }, []);

    if(!services){
        return <>Loading</>;
    }

    return(
        <div>
            <div className="mt-8 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Performance 💃🕺</h1>
                <p className="mt-1.5 text-sm text-gray-500">
                    Below, the performance services you're offering
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/**First, Render Plus button */}
                <PlusButton title="New Performace" setIsOpen={setIsOpen}/>
                {/**TODO: Then, Render all "PerformanceServiceCard" components here */}
                {
                    services.map((aPerformanceService, index) =>{
                        return(
                            <PerformanceServiceCard
                                key={index}
                                user_id={aPerformanceService.user_id}
                                performance_id={aPerformanceService.food_num}
                                name={aPerformanceService.name}
                                phone_num={aPerformanceService.phone_num}
                                street={aPerformanceService.street}
                                city={aPerformanceService.city}
                                state_initial={aPerformanceService.state_initial}
                                availability={aPerformanceService.availability}
                                rating={aPerformanceService.rating}
                                zip_code={aPerformanceService.zip_code}
                                details={aPerformanceService.details}
                            />
                        );
                    })
                }
                <NewPerformanceServiceForm user={user} services={services} isOpen={isOpen} setIsOpen={setIsOpen} setServices={setServices}/>
            </div>
        </div>
    );
}

export default PerformanceServices;