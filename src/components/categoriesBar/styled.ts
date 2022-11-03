import styled from "styled-components";

export const ProductsCategories = styled.nav`
    width: 100%;
    height: 55px;
    background: white;
    margin: 55px 0 0;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1280px;

        a {
            text-decoration: none;
            color:var(--main-color);

            &.selected {
                text-decoration: underline;
            }
        }
    }
`
