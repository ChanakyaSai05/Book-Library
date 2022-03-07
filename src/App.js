// // // import React, { Component } from "react";
// // // import Login from "./context/Login";
// // // import MoviePage from "./context/MoviePage";
// // // import UserContext from "./context/userContext";
// // // class App extends Component {
// // //   handleLoggedIn = (username) => {
// // //     console.log("Getting the user: " + username);
// // //     const user = { name: "Mosh" };
// // //     this.setState({ currentUser: user });
// // //   };
// // //   // state = { currentUser: { name: "Mosh" } };
// // //   state = { currentUser: null };
// // //   render() {
// // //     return (
// // //       // <UserContext.Provider value={this.state.currentUser}>
// // //       <UserContext.Provider
// // //         value={{
// // //           currentUser: this.state.currentUser,
// // //           onLoggedIn: this.handleLoggedIn,
// // //         }}
// // //       >
// // //         <div>
// // //           <MoviePage />
// // //           <Login />
// // //         </div>
// // //       </UserContext.Provider>
// // //     );
// // //   }
// // // }
// // // export default App;

// // import React, { Component } from "react";
// // import Login from "./context/Login";
// // import MoviePage from "./context/MoviePage";
// // import UserContext from "./context/userContext";
// // // import CartContext from "./context/cartContext";
// // class App extends Component {
// //   handleLoggedIn = (username) => {
// //     console.log("Getting the user: " + username);
// //     const user = { name: "Mosh" };
// //     this.setState({ currentUser: user });
// //   };
// //   // state = { currentUser: { name: "Mosh" } };
// //   state = { currentUser: null };
// //   render() {
// //     return (
// //       // <UserContext.Provider value={this.state.currentUser}>
// //       // <CartContext.Provider value={{ cart: [] }}>
// //       <UserContext.Provider
// //         value={{
// //           currentUser: this.state.currentUser,
// //           onLoggedIn: this.handleLoggedIn,
// //         }}
// //       >
// //         <div>
// //           <MoviePage />
// //           <Login />
// //         </div>
// //       </UserContext.Provider>
// //       // </CartContext.Provider>
// //     );
// //   }
// // }
// // export default App;

// import React from "react";
// import Provider from "./provider";
// import Context from "./context";

// function Agents() {
//   return <AgentBonds />;
// }
// function AgentBonds() {
//   return (
//     <Context.Consumer>
//       {(context) => (
//         <>
//           <h3>Agent Information</h3>
//           <p>mission Name:{context.data.mname}</p>
//           <p>Agent Name:{context.data}</p>
//           <h2>mission status:{context.data.accept}</h2>
//           <button onClick={context.isMissionAccepted}>Choose to accept</button>
//           {/* or */}
//           {/* <button
//             onClick={() => {
//               context.isMissionAccepted();
//             }}
//           >
//             Choose to accept
//           </button> */}
//         </>
//       )}
//     </Context.Consumer>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Context Api</h1>
//       <Provider>
//         <Agents />
//         {/* 100 components are also accessed */}
//       </Provider>
//     </div>
//   );
// }

// // import React, { useContext } from "react";
// // import "./App.css";
// // import { ThemeContext } from "./theme-context";

// // function App() {
// //   const [{ theme, dark }, toggle] = useContext(ThemeContext);
// //   return (
// //     <div className="app">
// //       <h1>Theme Toggler</h1>
// //       <div
// //         className="app-header"
// //         style={{
// //           backgroundColor: theme.backgroundColor,
// //           color: theme.color,
// //         }}
// //       >
// //         <h1>Context Api Theme Toggler</h1>
// //         <p>This is a message</p>
// //         <div className="button-container" onClick={toggle}>
// //           Toggle to {dark ? "white" : "dark"}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;

// import React, { useContext } from "react";
// import { ThemeContext } from "./theme-context";
// const App = () => {
//   const [{ dark, theme }, toggleFunction] = useContext(ThemeContext);
//   const style = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: theme.backgroundColor,
//     color: theme.color,
//   };
//   return (
//     <div style={style}>
//       <div style={{ color: "orangered" }} onClick={toggleFunction}>
//         toggle to {dark ? "light" : "dark"}
//       </div>
//     </div>
//   );
// };
// export default App;

// import React, { Component } from "react";
// import { Route } from "react-router-dom";
// import { Navbar } from "reactstrap";
// import Dashboard from "./components/admin/dashboard";
// import Home from "./components/home";
// import Posts from "./components/posts";
// import Products from "./components/products";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar>
//           <div className="content">
//             <Route path="/products" Component={Products} />
//             <Route path="/Posts" Component={Posts} />
//             <Route path="/admin" Component={Dashboard} />
//             <Route path="/" Component={Home} />
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";

import "./App.css";
import Navbar1 from "./Navbar1";

import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LibraryHome from "./LibraryHome";
import LoginAuth from "./LoginAuth";
import { useAuth0 } from "@auth0/auth0-react";
export default function App() {
  // const user = null;
  const { user } = useAuth0();
  return (
    <div>
      {!user ? (
        <LoginAuth />
      ) : (
        <BrowserRouter>
          <Navbar1 />

          <Routes>
            <Route path="/" element={<LibraryHome />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
