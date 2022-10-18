/**
 * Author:          Kassi Bertrand
 * filename:        LoginPage.jsx
 * Date:            10-17-2022
 * Description:     This component is the Registration page
 *                  of the website. New users will use it to
 *                  create their account on the platform.
 */
import Header from "../components/Header";

function RegistrationPage() {
  return (
    <div>
      {/**Site Header */}
      <Header />

      {/**Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/**Page Header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome on the ultimate event planning platform
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
