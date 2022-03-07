// import React, { useContext } from "react";
// import UserContext from "./userContext";

// export default function MovieRow(props) {
//   const currentUser = useContext(UserContext);
//   console.log("context", currentUser);
//   return <div>{currentUser.name}</div>;
// }

//practice
import React, { useContext } from "react";
import UserContext from "./userContext";

export default function MovieRow(props) {
  const userContext = useContext(UserContext);

  return (
    <div>
      Movie Row{userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}
