import styled from 'styled-components'

export const Button = styled.button`
	background: #fff;
	border: none;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	-webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14);
	-moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14);
	box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14);
	position: fixed;
	bottom: 20px; 
	right: 20px;
	top: auto;
	cursor: pointer;

	&:hover {
		height: 51px;
		width: 51px;
		-webkit-box-shadow:  1px 1px 10px 1px rgba(0,0,0,0.4);
		-moz-box-shadow:  1px 1px 10px 1px rgba(0,0,0,0.4);
		box-shadow:  1px 1px 10px 1px rgba(0,0,0,0.4);
	}
`