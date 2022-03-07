// import React, { useEffect, useState } from "react";
// const themes = {
//   dark: {
//     backgroundColor: "black",
//     color: "white",
//   },
//   light: {
//     backgroundColor: "white",
//     color: "black",
//   },
// };

// const ThemeContext = React.createContext();

// function ThemeProvider({ children }) {
//   const [dark, setDark] = useState(false);

//   const toggle = () => {
//     localStorage.setItem("dark", JSON.stringify(!dark));
//     setDark(!dark);
//   };
//   const theme = dark ? themes.dark : themes.light;
//   useEffect(function () {
//     const isdark = localStorage.getItem("dark") === "true";
//     setDark(isdark);
//   }, []);
//   return (
//     <ThemeContext.Provider value={[{ dark, theme }, toggle]}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
// export { ThemeContext, ThemeProvider };

import React, { useState } from "react";
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  let themes = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "white",
      color: "black",
    },
  };

  const toggleFunction = () => {
    setDark(!dark);
  };
  const theme = dark ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={[{ dark, theme }, toggleFunction]}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
