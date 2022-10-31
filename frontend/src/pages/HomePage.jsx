/**
 * Author:          Kassi Bertrand
 * filename:        HomePage.jsx
 * Date:            10-30-2022
 * Description:     This component is the Home page
 *                  of the website. Authenticated users will
 *                  will be redirected to this page.
 */

import HomePageHeader from "../components/HomePageHeader";
import HomePageTabs from "../components/HomePageTabs";

//TODO: This component must have a "User" prop
function HomePage(){
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/**Home Page Header */}
            <HomePageHeader/>
            
            {/**Page Main content */}
            <HomePageTabs/>
        </div>
    );
}

export default HomePage;