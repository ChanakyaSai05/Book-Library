import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";

function LoginAuth() {
  console.log(useAuth0);

  //   const a=useAuth0();
  //   a.loginWithRedirect();
  //destructuring
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div>Login here</div>
      <Button onClick={() => loginWithRedirect()}>Login </Button>
    </div>
  );
}

export default LoginAuth;
