# Overview

Welcome in the frontend side of the event planner project. This `README.md` is to help my
teammates, and any potential visitors understand the work being done on the frontend, and
how it is organized. This side of the project was was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The Frontend team 🥷🥷🥷

- [Kassi Bertrand](https://github.com/kassi-bertrand) (Team lead)
- [Rudy Lucas](https://github.com/rudycito23)
- [Giovanni Boscan](https://github.com/giovabos11)

# Dependencies, tools, or frameworks 🛠️

- [ReactJS](https://reactjs.org/): Component-based JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/): For CSS Utility classes that can be composed and used directly in our markup.

# Directory Structure 📁

Most of development happens in the `src` folder. Here is a basic directory structure:

```
src/
├── App.js
├── App.test.js
├── components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   └── SolutionSection.jsx
├── css
│   └── utility-pattern.css
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   └── RegistrationPage.jsx
├── reportWebVitals.js
└── setupTests.js
```

- `App.js`: Root component.

- `index.js`: Project entry point, renders the `App` component.

- `index.css`: global `CSS` file. Imports the site's font from Google fonts, and

- `components`: This folder is the home of stand-alone components, they may be used in one, or several pages of the site.

- `pages`: The different pages of the website. Each page is defined as its own component. Pages may use components defined in the `components` folder. For instance, both the **Login** and **Register** use the `Header` component, to render the "Sign In" and "Sign Up" buttons at the top.

- `css`: folder used to store additional `CSS` files used to provide additional, and consistent styling across the entire site. `utility-pattern.css` for instance, is used to style basic HTML tags (`h1...h4`) or create custom CSS classes to apply later. At the moment, all `CSS` defined here are imported into `index.css`.

## How to run the frontend?

In this directory, you can either run:

### `npm start`

This command will runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment 🚀

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
