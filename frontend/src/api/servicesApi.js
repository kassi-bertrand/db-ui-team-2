import axios from 'axios';
import { apiConfig, apiEndpoint } from './apiConfig';

/**
 * 
 * @param UserId            -> ID a registered user 
 * @returns                 -> JSON array
 * @description             -> request the set of all services created
 *                             by the registered user.
 */
 export async function getServicesById(UserId){
    try{
        const response = await axios.get(`${apiEndpoint}/services/${UserId}`);
        return response.data;
    }
    catch(error){
        alert(error);
    }
}