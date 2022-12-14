/**
 * Author:          Kassi Bertrand
 * filename:        HomePage.jsx
 * Date:            10-30-2022
 * Description:     This component is the Home page
 *                  of the website. Authenticated users will
 *                  will be redirected to this page.
 */

import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomePageContent from "../components/HomePageContent";
import HomePageHeader from "../components/HomePageHeader";
import HomePageTabs from "../components/HomePageTabs";

export const MyContext = createContext(undefined);

function HomePage(){
    const [user, setUser] = useState(undefined);
    const [activeTab, setActiveTab] = useState("Feed");

    useEffect(() => {
        let userJSON = JSON.parse(localStorage.getItem('userJSON'));
        setUser(userJSON);
    }, [])

    return(
        <MyContext.Provider value={{user, setUser}}>
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/**Home Page Header */}
                <HomePageHeader/>
                
                {/**Page Main content*/}
                <HomePageTabs setActiveTab={setActiveTab}/>

                <HomePageContent activeTab={activeTab}/>
                
            </div>
        </MyContext.Provider>
    );
}

export default HomePage;