import axios from 'axios';
import { apiConfig, apiEndpoint } from './apiConfig';

/**
 * 
 * @param UserId            -> ID a registered user 
 * @returns                 -> JSON array
 * @description             -> request the set of all catering services created
 *                             by the registered user. Intented to be send
 *                             to the '/catering/userId' route
 */
 export async function getCateringServicesById(UserId){
    try{
        const response = await axios.get(`${apiEndpoint}/catering/${UserId}`);
        return response.data;
    }
    catch(error){
        alert(error);
    }
}

/**
 * 
 * @param UserId            -> ID of registered user
 * @returns                 -> JSON array
 * @description             -> request the set of all venue services created
 *                             by the registered user. Intented to be sent
 *                             to the '/venue/userId' route
 */
export async function getVenueServicesById(UserId){
    //Implement this function. Remember the try/Catch function
}

/**
 * 
 * @param UserId            -> ID of registered user
 * @returns                 -> JSON array
 * @description             -> Request the set of all performance services
 *                             created by the registered user. Intented to be
 *                             sent to the '/performance/userId' route 
 */
export async function getPerformanceServicesById(UserId){
    //Implement this function. Remember the try/Catch function
}

/**
 * @param CateringServiceJSON   -> The new Catering service to send
 *                                  to the backend. 
 * @returns                     -> JSON object
 * @description                 -> sends user input from newCateringServiceForm form to
 *                                 the backend to be registered in catering table.
 *                                 Intended to be sent to the '/catering/new' route.
 */
export async function addCateringService(CateringServiceJSON){
    try{
        const response = await axios.post(`${apiEndpoint}/catering/new`, CateringServiceJSON);
        return response.data;
    }
    catch(error){
        alert("Could not send catering service to backend");
    }
}


/**
 * 
 * @param VenueServiceJSON      -> The new Venue service to send to the
 *                                 backend
 * @returns                     -> JSON object
 * @description                 -> sends user input from newVenueServiceForm to
 *                                  the backend to be registered in the venue table
 *                                  Intented to be sent to the '/venue/new'
 */
export async function addVenueService(VenueServiceJSON){
    //Implement this function. Remember the try/Catch.
}

/**
 * 
 * @param PerformanceServiceJSON    -> The new Performance service to send to the
 *                                     backend
 * @return                          -> JSON object
 * @description                     -> send user input from newPerformanceServiceForm
 *                                     to the backend to be registered in the peformance
 *                                     table. Intented to be sent to the '/performance/new'
 *                                     route.
 */
export async function addPerformanceService(PerformanceServiceJSON){
    //Implement this function. Remember the try/Catch
}