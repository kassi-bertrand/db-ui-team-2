/**
 * Author:          Kassi Bertrand
 * filename:        apiConfig.js
 * Date:            10-25-2022
 * Description:     This file is the axios config file.
 *                  It specifies a base URL to use in
 *                  every HTTP request, and some additional
 *                  details to include in the header of each
 *                  HTTP requests.
 */
 export const apiEndpoint = 'http://localhost:8000'

//Axios config
export const apiConfig = {
  headers: {},
  crossDomain: true,
};
