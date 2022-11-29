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

function HomePageContent({activeTab}){

    const TABS = {
        'Feed': <UserFeed/>,
        'Events': <UserEvent/>,
        'Services': <UserService/>
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