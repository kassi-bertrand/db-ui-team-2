/**
 * Author:          Kassi Bertrand
 * filename:        eventsApi.js
 * Date:            11-27-2022
 * Description:     This file encapsulates all event-related
 *                  api calls in simple JS functions
 *                  so we, the frontend, does not have
 *                  to worry about handling promises
 *                  we can just call the function
 *                  and get data :)
 */

import axios from 'axios';
import { apiConfig, apiEndpoint } from './apiConfig';

/**
 * 
 * @param newEventJSON      -> Event form input packaged as a JSON object 
 * @returns                 -> JSON - newly created event
 * @description             -> sends user input from event form to
 *                             the backend to be register a new event.
 *                             Intended to be sent to the 'form/new' route.     
 */
export async function addEvent(newEventJSON){
    try{
        const response = await axios.post(`${apiEndpoint}/events/new`, newEventJSON);
        return response.data;
    }
    catch(error){
        alert(error);
    }
}

/**
 * 
 * @param UserId            -> ID a registered user 
 * @returns                 -> JSON array
 * @description             -> request the set of all events created
 *                             by the registered user.
 */
export async function getEventsById(UserId){
    try{
        const response = await axios.get(`${apiEndpoint}/events?user_id=${UserId}`);
        return response.data;
    }
    catch(error){
        alert(error);
    }
}