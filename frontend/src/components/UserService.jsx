import CateringServices from "./CateringServices";
import PerformanceServices from "./PerformanceServices";
import VenueServices from "./VenueServices";
 
function UserService(){
    return(
        <>
            <CateringServices/>
            <VenueServices/>
            <PerformanceServices/>
        </>
    );
}
 
export default UserService;