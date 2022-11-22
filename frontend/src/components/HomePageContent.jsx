/**
 * Author:          Kassi Bertrand
 * filename:        HomePageContent.jsx
 * Date:            11-12-2022
 * Description:     This component is used in the
 *                  HomePage component and renders
 *                  a component based on the tab
 *                  the user is currently on.
 */


import UserEvent from "./UserEvent";
import UserFeed from "./UserFeed";
import UserService from "./UserService";

function HomePageContent({user, activeTab}){

    //TODO: API call to get services created by the user here
    const userServices = [

    ];

    const TABS = {
        'Feed': <UserFeed user={user}/>,
        'Events': <UserEvent user={user}/>,
        'Services': <UserService user={user}/>
    };

    return(
        <section className="font-inter">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                {TABS[activeTab]}
            </div>
        </section>
    );


}

export default HomePageContent;