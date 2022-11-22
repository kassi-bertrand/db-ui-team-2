/**
 * Author:          Kassi Bertrand
 * filename:        HomePage.jsx
 * Date:            10-30-2022
 * Description:     This component is the Home page
 *                  of the website. Authenticated users will
 *                  will be redirected to this page.
 */

import { useEffect } from "react";
import { useState } from "react";
import HomePageContent from "../components/HomePageContent";
import HomePageHeader from "../components/HomePageHeader";
import HomePageTabs from "../components/HomePageTabs";

function HomePage(){
    const [user, setUser] = useState(undefined);
    const [activeTab, setActiveTab] = useState("Feed");

    useEffect(() => {
        let userJSON = JSON.parse(localStorage.getItem('userJSON'));
        setUser(userJSON);
    }, [])

    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/**Home Page Header */}
            <HomePageHeader user={user} setUser={setUser}/>
            
            {/**Page Main content */}
            <HomePageTabs setActiveTab={setActiveTab}/>

            <HomePageContent user={user} activeTab={activeTab}/>
        </div>
    );
}

export default HomePage;