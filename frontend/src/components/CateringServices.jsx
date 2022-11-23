/**
 * Author:          Giovanni Boscan  & Kassi Bertrand
 * filename:        HomePageContent.jsx
 * Date:            11-22-2022
 * Description:     This component is used in the
 *                  UserService component and renders
 *                  all catering services created by the 
 *                  user.
 */

import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../pages/HomePage";
import CateringServiceCard from "./CateringServiceCard";
import NewCateringServiceForm from "./NewCateringServiceForm";
import PlusButton from "./PlusButton";

function CateringServices(){
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const {user, setUser} = useContext(MyContext);

    //Get all catering services created by the user and set "services" state
    //TODO: Complete This useEffect function
    useEffect(()=>{
        const fetchCatering = async() => {
            //getCateringServicesById(user.id).then(response => ...);
        }

        fetchCatering()
    }, [user]);
    
    return(
        <div>
            <div className="mt-8 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Catering 🍲🍸</h1>
                <p className="mt-1.5 text-sm text-gray-500">
                    Below, the catering services you're offering
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/**First, Render Plus button */}
                <PlusButton title="New Catering" setIsOpen={setIsOpen}/>
                {/**TODO: Then, Render all "CateringServiceCard" component here */}
                {
                    services.map((aCateringService, index) =>{
                        return(
                            <CateringServiceCard
                                user_id={aCateringService.user_id}
                                catering_id={aCateringService.food_num}
                                name={aCateringService.name}
                                phone_num={aCateringService.phone_num}
                                street={aCateringService.street}
                                city={aCateringService.city}
                                state_initial={aCateringService.state_initial}
                                availability={aCateringService.availability}
                                rating={aCateringService.rating}
                                zip_code={aCateringService.zip_code}
                                details={aCateringService.details}
                            />
                        );
                    })
                }
                <NewCateringServiceForm user={user} services={services} isOpen={isOpen} setIsOpen={setIsOpen} setServices={setServices}/>
            </div>
        </div>
    );
}

export default CateringServices;