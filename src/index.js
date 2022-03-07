// import React from "react";
// import ReactDOM from "react-dom";
// //import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import { ThemeProvider } from "./theme-context";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Auth0Provider } from "@auth0/auth0-react";

import allReducers from "./reducers";
const store = createStore(allReducers, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-jumx3eyq.us.auth0.com"
        clientId="rW8GyCmKLjS3lc5HGtzCkNXy5Z4D8p36"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<Ecom />, document.getElementById("root"));
// {
//   /* <ThemeProvider> */
// }
// {
//   /* <App /> */
// }

// {
//   /* </ThemeProvider> */
// }
