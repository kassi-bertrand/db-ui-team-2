/**
 * Author:          Kassi Bertrand
 * filename:        HomePageContent.jsx
 * Date:            11-12-2022
 * Description:     This component is used in the
 *                  HomePage component and renders
 *                  a component based on the tab
 *                  the user is currently on.
 */

import UserFeed from "./UserFeed";

function HomePageContent({activeTab}){
    if(activeTab == "Feed"){
        //API call to get events on user feed happens here
        const events = [
            {"organizer": "Kassi Bertrand", "phoneNumber":"1111111111", "address1": "Test Rd", "address2": "apt 3421", "city": "Dallas", "state": "TX", "zipCode": "56322", "guestCount": "24", "eventType": "birthday"},
            {"organizer": "Rudy Lucas", "phoneNumber":"2222222222", "address1": "Test Rd", "address2": "apt 2452", "city": "Dallas", "state": "TX", "zipCode": "63256", "guestCount": "50", "eventType": "birthday"}
        ];
        return(
            <section className="font-inter">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <UserFeed events={events}/>
                    </div>
                </div>
            </section>
        );
    }
    else if(activeTab === "Events"){

    }
    else if(activeTab === "Services"){

    }
}

export default HomePageContent;