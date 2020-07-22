import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
	width: 100%;
	-webkit-box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75);
	box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75);
	text-align: center;
	background: #fff;
	position: absolute;
	top;0 
	right:0;
	left: 0;
	z-index: 300;
`

export const Title = styled.h1`
	color: #3578e5;
	font-size: 0.9em;
	padding:  20px 0;
	font-weight: 600;
`

export const ContainerBack = styled(Link)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 15px;
`