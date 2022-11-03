import styled from "styled-components";

export const CheckoutContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 105px auto 0;
    width: 100%;
    max-width: var(--break-large);

    .checkout__header {
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgrey;

        .checkout__header--block {
            text-transform: capitalize;
            width: 20%;
            text-align: center;
        }
    }

    .checkout__total {
        margin-top: 30px;
        margin-left: auto;
        font-size: 2.4rem;
    }
`
