import styled from "styled-components"

export const TopbarContainer = styled.header`
    width: 100%;
    height: 55px;
    background:var(--white);
    border-bottom: 1px solid #e6e6e6;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    
    .container {
        width: 100%;
        max-width: var(--break-large);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .logo {
        width: 100px;
        height: auto;
        margin-top: 10px;
    }
    
    .topbar__icons {
        width: 30%;
        text-align: end;

        button {
            border: none;
            background: transparent;
            padding: 0;
            outline: none;
            margin-left: 1.5rem;
        }

        .topbar__cart {
            position: relative;
        }
    }

    .topbar__links {
        width: 30%;

        .topbar__link {
            text-decoration: none;
            color: black;
            cursor: pointer;
        }
    }
`
