import React, { useContext } from "react";
import { AgentContext } from "./agent-context";
function Agent() {
  const [{ Agent }, acceptFunction] = useContext(AgentContext);

  return (
    <div>
      <div>mission name:{Agent.name}</div>
      <div>mission Id:{Agent.mid}</div>
      <div>mission Accepted:{Agent.accepted}</div>
      <button onClick={acceptFunction}>Choose to Accept</button>
    </div>
  );
}
export default Agent;
