import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 2.0rem;
    align-items: center;

    .checkout-item__name,
    .checkout-item__quantity,
    .checkout-item__price {
        width: 20%;
        font-size: 1.6rem;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .checkout-item__price {
        flex-direction: column;

        s {
            color:var(--grey);
        }
    }

    .checkout-item__remove {
        width: 20%;
        padding-left: 12px;
        cursor: pointer;
        font-size: 2.0rem;
        font-weight: bold;
    }
`

export const CheckoutItemFigure = styled.figure`
    width: 20%;
    padding-right: 15px;
    margin: 0;

    img {
        width: 100%;
        height: 100%;
    }
`
