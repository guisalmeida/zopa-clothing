import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartContext } from "../../contexts/cartContext";

import BottomBar from "../bottomBar";
import CartIcon from "../cartIcon";
import MiniCart from "../miniCart";

import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo-zopa.svg";
import { TopbarContainer } from "./styled";

const Topbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isShowCart, setIsShowCart } = useContext(CartContext);

  const handleShowCart = () => {
    //@ts-ignore
    setIsShowCart(!isShowCart);
  };

  return (
    <>
      <MiniCart showCart={isShowCart} />

      <TopbarContainer>
        <div className="container">
          <div className="topbar__links">
            <Link to="/shop" className="topbar__link">
              Shop
            </Link>
          </div>

          <Link to="/">
            <Logo className="logo" />
          </Link>

          <div className="topbar__icons">
            {currentUser ? (
              <span onClick={signOutUser} className="topbar__link">
                {
                  //@ts-ignore
                `Olá ${currentUser.displayName}, sair`}
              </span>
            ) : (
              <Link to="/auth" className="topbar__link">
                Sign In
              </Link>
            )}

            <button
              type="button"
              className="topbar__search"
              //   onClick={() => handleShowSearch(!showSearch)}
            >
              <SearchIcon />
            </button>

            <button
              type="button"
              className="topbar__cart"
              onClick={handleShowCart}
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </TopbarContainer>
      <Outlet />
      <BottomBar />
    </>
  );
};

export default Topbar;
