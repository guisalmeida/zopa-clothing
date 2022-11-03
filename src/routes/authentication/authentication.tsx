import SignUp from "../../components/signUp";
import SignIn from "../../components/signIn";

import { AuthenticationContainer } from "./styled";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
