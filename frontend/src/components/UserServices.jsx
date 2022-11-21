/**
 * Author:          Kassi Bertrand
 * filename:        ProfileForm.jsx
 * Date:            11-20-2022
 * Description:     This component renders all services
 *                  under the "My services" tab.
 */

import { useState } from "react";
import PlusButton from "./PlusButton";

function UserServices({user}){
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);

    return(
        <>
            {/**First, render Plus button */}
            <PlusButton title="New Service" setIsOpen={setIsOpen}/>
            {/**Then, render all services */}
            {/**Render Giovanni's form here*/}
        </>
    );
}

export default UserServices;