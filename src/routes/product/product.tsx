import { useContext, useState, Key } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ProductsContext } from "../../contexts/productsContext";

import { ProductContainer } from "./styled";

type Prod = {
  code_color: String;
  selectedSize?: String;
  quantity?: Number;
  image: String;
};

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { cartItems, addItemToCart } = useContext(CartContext);

  const productId = window.location.pathname.split("/")[2];
  const product = products.find(
    (product: Prod) => product.code_color === productId
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  const handleSize = (sku: String) => {
    if (sku === selectedSize) {
      setSelectedSize(null);
      return;
    }
    //@ts-ignore
    setSelectedSize(sku);
    setSizeError(false);
  };

  const addToCart = () => {
    if (selectedSize === null) return setSizeError(true);
    //@ts-ignore
    if (!cartItems.includes(product)) {
      //@ts-ignore
      Object.assign(product, {
        quantity: 1,
        selectedSize: selectedSize,
      });
      //@ts-ignore
      return addItemToCart(product);
    }

    //@ts-ignore
    product.quantity = product.quantity + 1;
    //@ts-ignore
    return addItemToCart(product);
  };

  return (
    <ProductContainer>
      <figure className="product__image">
        <img
          src={
            //@ts-ignore
            product?.image ||
            "https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found"
          }
          //@ts-ignore
          alt={product?.name}
          //@ts-ignore
          title={product?.name}
        />
      </figure>

      <div className="product__content">
        <h3 className="product__name">
          {
            //@ts-ignore
            product?.name
          }
        </h3>
        <div className="product__pricing">
          {
            //@ts-ignore
            product?.on_sale && (
              <span className="product__price product__price--old">
                {
                  //@ts-ignore
                  product?.regular_price
                }
              </span>
            )
          }
          <span className="product__price">
            {
              //@ts-ignore
              product?.actual_price
            }
          </span>
          {/* <span className="product__price product__price--installments">
            or in up to {product?.installments}
          </span> */}
        </div>
        <div className="product__sizes">
          <p className="product__description">Choose a size</p>

          {sizeError && (
            <p className="product__description product__description--warning">
              You need to choose a size
            </p>
          )}

          <div className="product__btn-group">
            {
              //@ts-ignore
              product?.sizes.map(
                //@ts-ignore
                (
                  productSize: {
                    available: boolean;
                    sku: String;
                    size: String;
                  },
                  index: Key
                ) =>
                  //@ts-ignore
                  productSize.available === true && (
                    <button
                      key={index}
                      type="button"
                      className={`product__filter ${
                        //@ts-ignore
                        selectedSize === productSize.sku
                          ? "product__filter--selected"
                          : ""
                      }`}
                      onClick={() => handleSize(productSize.sku)}
                    >
                      {productSize.size}
                    </button>
                  )
              )
            }
          </div>
        </div>
        <div className="product__actions">
          <button
            type="button"
            className="product__add-to-cart"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
