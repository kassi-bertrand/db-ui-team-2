 import { useEffect, useState } from "react";
 import { getServicesById } from "../api/servicesApi";
 import ServiceCard from "./EventCard";
 import NewServiceForm from "./NewServiceForm";
 import PlusButton from "./PlusButton";
 
 function UserService({user}){
     const [isOpen, setIsOpen] = useState(false);
     const [services, setServices] = useState([]);
 
     //Get services created by the user and set "services" state
     useEffect(()=>{
         //getServicesById(user.id).then(response => setEvents(response));
     }, [])
     return(
         <>
             {/**First, Render Plus button */}
             <PlusButton title="New Service" setIsOpen={setIsOpen}/>
             {/**Then, Render all services */}
             {
                 services.map((aService, index) =>{
                     return(
                         <ServiceCard 
                             user_id={aService.user_id}
                             name={aService.name}
                             phone_num={aService.phone_num}
                             street={aService.street}
                             city={aService.city}
                             state={aService.state}
                             zip_code={aService.zip_code}
                             event_date={aService.event_date}
                             budget={aService.event_date}
                             guest_count={aService.guest_count}
                             occasion={aService.occasion}
                             details={aService.details}
                         />
                     );
                 })
             }
             <NewServiceForm user={user} services={services} isOpen={isOpen} setIsOpen={setIsOpen} setServices={setServices}/>
         </>
     );
 }
 
 export default UserService;