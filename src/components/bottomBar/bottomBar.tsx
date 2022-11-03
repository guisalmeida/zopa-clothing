import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo-zopa.svg";

import { Footer } from "./styled";

const BottomBar = () => {
  return (
    <Footer>
      <div className="footer__content container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <p>
          © 2022 zopa clothing. Powered by{" "}
          <a href="https://guisalmeida.com" target="_blank" rel="noreferrer">
            guisalmeida
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default BottomBar;
