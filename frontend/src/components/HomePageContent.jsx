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
    //TODO: API call to get events on user feed happens here
    const feedEvents = [
        {"organizer": "Giovanni Boscan", "phoneNumber":"1111111111", "address1": "Test Rd", "address2": "apt 3421", "city": "Dallas", "state": "TX", "zipCode": "56322", "guestCount": "24", "eventType": "birthday"},
        {"organizer": "Rudy Lucas", "phoneNumber":"2222222222", "address1": "304 Dancing Dove Lane", "address2": "apt 2452", "city": "New York", "state": "NY", "zipCode": "63256", "guestCount": "50", "eventType": "birthday"},
        {"organizer": "Safwan", "phoneNumber":"3333333333", "address1": "4360 Davis Street", "address2": "apt 221", "city": "Benton", "state": "GA", "zipCode": "74325", "guestCount": "15", "eventType": "birthday"}
    ];

    //TODO: API call to get services created by the user here
    const userServices = [

    ];

    const TABS = {
        'Feed': <UserFeed events={feedEvents}/>,
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