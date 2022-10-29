/**
 * Author:          Kassi Bertrand
 * filename:        apiConfig.js
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
 * @param signUpInfoJSON   -> Sign up form input, stringified
 * @return                 -> JSON string with user ID.
 * @description            -> Sends user input from SignUp page.
 *                            Intented to be sent to the "Sign Up"
 *                            route in the backend
 */
export async function addUser(signUpInfoJSON){
    //TODO: IMPLEMENT THIS FUNCTION
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
 * @return                  -> JSON string with user ID
 * @description             -> Sends user input from SignIn page.
 *                             Intented to be sent to the "Sign In"
 *                             or "Login" route in the backend               
 */
export async function getUser(SignInInfoJSON){
    //TODO: IMPLEMENT THIS FUNCTION
}