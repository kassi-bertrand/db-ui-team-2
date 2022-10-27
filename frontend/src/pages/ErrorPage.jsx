/**
 * Author:          Rudy Lcas
 * filename:        PageNotFound.jsx
 * Date:            10-25-2022
 * Description:     This component is the 404 page
 *                  of the website. This page will
 *                  trigger if an error occurs or
 *                  a page is not found.
 */
import "../css/ErrorPage.css";

export const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
        <div className="h1-container">
          <h1>404</h1>
        </div>
        <div className="h2-container">
          <h2>Page not found</h2>
        </div>
        <div className="back-button">
            <button type="button">TEST</button>
        </div>
        <div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<lottie-player src="https://lottie.host/9e40d690-9ab0-457e-895a-7c9e8e461e9f/FgcFTM98lH.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        </div>
      </div>
    </>
  );
};
