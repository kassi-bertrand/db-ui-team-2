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
        const response = await axios.get(`${apiEndpoint}/events/${UserId}`);
        return response.data;
    }
    catch(error){
        alert(error);
    }
}


/**
 * 
 * @param UserId            -> ID of a registered user
 * @returns                 -> JSON array
 * @description             -> request the set of all events to be
 *                             displayed in the user feed. In other words,
 *                             we request events created  by everyone, but
 *                             this user. 
 */
export async function getUserFeed(UserId){
    try{
        const response = await axios.get(`${apiEndpoint}/events/feed/${UserId}`)
        return response.data;
    }
    catch(error){
        alert(error);
    }
}

/**
 * 
 * @param type                  -> the type of event we interested in
 * @param filterInput           -> the value we want to match
 * @returns                     -> All events matching the type, and the filter input.
 * @description                 -> Request all event of type "type" and value "value"
 */
export async function getEventByFilter(type, filterInput){
    try{
        const response = await axios.get(`${apiEndpoint}/events/search/${type}/${filterInput}`);
        return response.data;
    }
    catch(error){
        alert("No result");
    }
}