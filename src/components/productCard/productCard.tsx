// import { useContext } from "react";
// import { CartContext } from "../../contexts/cartContext";
// import Button from "../button";
import { Link } from "react-router-dom";

import { ProductCardContainer } from "./styled";

//@ts-ignore
const ProductCard = ({ product }) => {
  // const { addItemToCart } = useContext(CartContext);
  //@ts-ignore
  // const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Link to={`/product/${product.code_color}`}>
        <figure className="product-card__image">
          {product.on_sale && (
            <span className="product-card__discount">{`-${product.discount_percentage}`}</span>
          )}
          <img
            src={
              product.image ||
              "https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found"
            }
            alt={`Produto ${product.name}`}
            title={product.name}
          />
        </figure>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__pricing">
          {product.on_sale && (
            <span className="product-card__price product-card__price--old">
              {product.regular_price}
            </span>
          )}
          <span className="product-card__price">{product.actual_price}</span>
        </div>
        {/* <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button> */}
      </Link>
    </ProductCardContainer>
  );
};

export default ProductCard;
