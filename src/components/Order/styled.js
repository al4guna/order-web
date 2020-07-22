import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";

export const Item = styled.li`
	background: #fff;
	border-radius: 8px;
	padding: 10px;
	position: relative;
	margin: 10px 0;

	@media (min-width: 390px) {
		padding: 15px;
    }

`	

export const RouterLink = styled(LinkR)`
	text-decoration: none;
	text-styled: none;
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
`

export const Title = styled.p`
	font-weight: 500;
	color: #000;

	@media (min-width: 390px) {
		font-size: 1.1em;
    }

`

export const Icon = styled.button`
	background: #e4e6eb;
	position: absolute;
	top: 0;
	right: 0;
	padding: 15px;
	border-none;
	z-index: 500;
	border-top-right-radius: 8px;
	cursor: pointer;
	&:hover {
		background: #d4d5d7;
	}
`

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`

export const Text = styled.p`
	font-size: 0.8em;
	color: #000;
	@media (min-width: 390px) {
		font-size: 0.9em;
    }
`

export const Span = styled.span`
	color: #828282;
`

export const Link = styled.span`
	color: #3578e5;
	font-weight: 600;
	font-size: 0.8em;
`