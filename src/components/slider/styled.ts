import styled from "styled-components"

export const SliderContainer = styled.div`
    background:var(--light-grey);
    height: 100%;
    width: 100%;
    max-width: 375px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    overflow: auto;
    box-shadow: 10px 0px 30px var(--main-color);

    ${
    //@ts-ignore
    props => props.show && `
        transform: translateX(0);
    `}

    .slider__header {
        background:var(--main-color);
        color:var(--white);
        width: 100%;
        height: 55px;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
        padding: 0 1.6rem;
        display: flex;
        align-items: center;

        .slider__back {
            padding: 0;
            margin-right: 1.6rem;
            font-size: 1.8rem;
            height: 20px;
            display: flex;
            align-items: center;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .slider__title {
            font-size: 1.4rem;
            font-weight: 700;
            margin: 0;
            width: 100%;
            text-align: center;
            transform: translateX(-18px);
        }
    }

    .slider__content {
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        height: calc(100% - 55px);
        align-items: center;

        .button__container {
            position: absolute;
            bottom: 1.6rem;
            width: calc(100% - 3.2rem);
        }
    }
`

