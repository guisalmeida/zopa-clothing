import styled from "styled-components"

export const ListQuantityContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin: 0 0 .5rem;

	.quantity__button {
		-webkit-tap-highlight-color: transparent;
		background: transparent;
		box-shadow: none;
		cursor: pointer;
		outline: none;
		position: relative;
		line-height: 0;
		font-weight: 600;
		padding: 0.2rem;
		border: 0.1rem solid #212529;

		&:hover {
			background-color: #212529;
			color: #fff;
			border-color: #212529;
		}
	}

	.quantity__input {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
`

