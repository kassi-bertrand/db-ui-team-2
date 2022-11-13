/**
 * Author:          Kassi Bertrand
 * filename:        usersApi.js
 * Date:            10-25-2022
 * Description:     This file encapsulates all user-related
 *                  api calls in simple JS functions
 *                  so we, the frontend, does not have
 *                  to worry about handling promises
 *                  we can just call the function
 *                  and get data :)
 * 
 * Useful Res:      https://axios-http.com/docs/example
 */

import axios from 'axios';
import { apiConfig, apiEndpoint } from './apiConfig';

/**
 * 
 * @param signUpInfoJSON   -> Sign up form input, packaged as a JSON
 * @return                 -> JSON - newly created user
 * @description            -> Sends user input from SignUp page to the
 *                            backend, to be register as a new user.
 *                            Intented to be sent to the "newUser"
 *                            API route in the backend.
 */
export async function addUser(signUpInfoJSON){
    try{
        const response = await axios.post(`${apiEndpoint}/newUser`, signUpInfoJSON, apiConfig);
        return response.data;
    }
    catch(error){
        alert(error)
    }
}

/**
 * 
 * @param ID                -> Unique user identifier on the server 
 * @return                  -> JSON string          
 * @description             -> Requests the user account information
 *                             user ID, email, phone, and password
 *                             Intented to be sent to the ....
 *                             route in the backend                            
 */
export async function getUserById(ID){
    //TODO: IMPLEMENT THIS FUNCTION
}

/**
 * 
 * @param SignInInfoJSON    -> Sign in form input, stringified
 * @return                  -> JSON string with user account info
 * @description             -> Sends user input from SignIn page.
 *                             Intented to be sent to the "Sign In"
 *                             or "Login" route in the backend               
 */
export async function getUser(signInInfoJSON){
    try{
        const response = await axios.post(`${apiEndpoint}/session`, signInInfoJSON, apiConfig);
        return response.data
    } 
    catch(error){
        alert(error)
    }
}