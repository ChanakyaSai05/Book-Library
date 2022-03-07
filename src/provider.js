import React, { useState } from "react";
import PackageContext from "./context";

export default function Provider(props) {
  const [mission, setMission] = useState({
    mname: "Go to Syria",
    agent: "007",
    accept: "Not accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "Accepted" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
}
