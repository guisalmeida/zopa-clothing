import styled from "styled-components"

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--break-large);
    padding: 0 0 6.5rem;
    margin: 55px auto 0;
    padding: 1.6rem;

    .product__image {
        margin: 0;

        img {
            width: 100%;
            display: block;
        }
    }

    .product__content {
        width: 100%;
        padding: 0 1.6rem;
        
        .product__name {
            text-align: left;
            font-size: 2rem;
            margin: 1rem 0 0.8rem;
            letter-spacing: -0.05rem;
        }

        .product__pricing {
            display: flex;
    
            .product__price {
                font-size: 1.6rem;
                margin: 0 0 0.8rem;
                font-weight: 700;
    
                &--old {
                    color:var(--grey);
                    text-decoration: line-through;
                    margin-right: 1rem;
                }
    
                &--installments {
                    color:var(--grey);
                    margin-left: 1rem;
                }
            }
        }

        .product__sizes {
            display: block;
    
            .product__description {
                color:var(--grey);
                font-size: 1.4rem;
                margin: 1rem 0;
    
                &--warning {
                    color:var(--red);
                }
            }
    
            .product__btn-group {
                display: inline-flex;
    
                .product__filter {
                    font-size: 1.6rem;
                    font-weight: 700;
                    padding: 0.2rem;
                    border: 0.1rem solid #dfdfdf;
                    margin-right: 0.8rem;
                    background: transparent;
                    outline: none;
                    border-radius: 0.5rem;
                    width: 3.6rem;
                    height: 3.6rem;
                    line-height: 1;
                    text-align: center;
    
                    &--selected {
                        background:var(--dark);
                        color:var(--white);
                        border: none;
                    }
                }
            }
        }

        .product__actions {
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 1rem 1.6rem;
            width: 100%;
            z-index: 9;
    
            .product__add-to-cart {
                font-size: 1.6rem;
                text-align: center;
                line-height: 1;
                padding: 1.2rem;
                border: none;
                border-radius: 0.5rem;
                background:var(--dark);
                color:var(--white);
                width: 100%;
                outline: none;
                display: inline-block;
                box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.5);
            }
        }
    }
    
    @media (min-width: 992px) {
        flex-direction: row;
        padding: 1.6rem;

        .product__image {
            width: 50%;
        }

        .product__content {
            width: 50%;
            padding: 0 1.6rem;
            
            .product__name {
                margin-top: 0;
            }
    
            .product__actions {
                position: static;
                padding: 1rem 0;
    
                .product__add-to-cart {
                    width: 50%;
                    outline: none;
                    display: inline-block;
                    box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
`
