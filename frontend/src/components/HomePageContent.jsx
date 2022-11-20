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

function HomePageContent({user, activeTab}){

    //TODO: API call to get services created by the user here
    const userServices = [

    ];

    const TABS = {
        'Feed': <UserFeed user={user}/>,
        'Events': <UserEvent user={user}/>,
        'Services': <div>Service by the users</div>
    };

    return(
        <section className="font-inter">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                    {TABS[activeTab]}
                </div>
            </div>
        </section>
    );


}

export default HomePageContent;