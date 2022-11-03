import styled from 'styled-components'

export const Footer = styled.footer`
    border-top: 1px solid #e6e6e6;
    height: 45px;
    width: 100%;
    font-size: .8em;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    z-index: 1;
    display: flex;
    align-items: center;

    .footer__content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.container {
            margin: 0 auto;
        }

        p {
            font-size: 1.2rem;
        }

        a {
            cursor: pointer;
            text-decoration: none;
            color:var(--main-color);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .logo {
        width: 70px;
        height: auto;
        margin-top: 10px;
    }
`
