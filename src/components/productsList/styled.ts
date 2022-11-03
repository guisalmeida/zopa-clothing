import styled from "styled-components";

export const ProductsContainer = styled.div`
    margin: 55px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    width: 100%;
    max-width: var(--break-large);
`
