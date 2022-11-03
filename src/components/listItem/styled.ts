import styled from "styled-components";

export const ListItemContainer = styled.div`
	padding: 1.6rem;
	border-bottom: 1px solid var(--grey);
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
`

export const ListItemFigure = styled.figure`
	margin: 0;
	flex: 1;
	
	img {
		width: 100%;
		height: auto;
	}
`

export const ListItemInfo = styled.div`
	width: 50%;
	padding-left: 1rem;
	padding-right: 1rem;
	
	.list__title {
		margin: 0;
		flex: 2;
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 .5rem;
		text-decoration: none;
		color:var(--dark);
	}
	
	.list__size {
		font-size: 1.2rem;
		color:var(--grey);
		margin: 0 0 .5rem;
	}
`

export const ListItemPrices = styled.div`
	flex: 1;
	text-align: right;
	
	.list__price {
		font-size: 1.4rem;
		font-weight: 700;
		margin: 0 0 0.5rem;
		color:var(--dark);
		
		&--old {
			color:var(--grey);
			text-decoration: line-through;
		}
		
		&--installments {
			color:var(--grey);
			font-size: 1.2rem;
			font-weight: 400;
		}
	}
`

export const RemoveButton = styled.button`
	background:var(--red);
	color:var(--white);
	padding: .1rem .5rem;
	border-radius: 5px;
	font-weight: 700;
	text-transform: uppercase;
`