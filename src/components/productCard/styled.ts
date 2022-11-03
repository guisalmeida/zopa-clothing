import styled from "styled-components"

export const ProductCardContainer = styled.div`
  background:var(--white);
  border-radius: .5rem;
  box-shadow: 0 .1rem .5rem rgba(0, 0, 0, 0.1);
  text-align: center;

  a {
    text-decoration: none;
  }

  .product-card__image {
    position: relative;
    margin: 0;

    img {
      width: 100%;
      display: block;
    }

    .product-card__discount {
      background:var(--dark);
      color:var(--white);
      padding: 0.2rem;
      font-size: 1.2rem;
      line-height: 1;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .product-card__name {
    color:var(--dark);
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    margin: 1rem 0 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 0.5rem;
  }

  .product-card__pricing {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 1.6rem;

    .product-card__price {
      font-size: 1.4rem;
      color:var(--dark);

      &--old {
        font-size: 1.2rem;
        color:var(--grey);
        text-decoration: line-through;
        margin-right: 1rem;
      }
    }
  }
`

