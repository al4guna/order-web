import styled from 'styled-components'

export const Page = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(242, 243, 245, 0.8);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Modal = styled.div`
	border-radius: 8px;
	background: #fff;
	height: 90%;
	width: 95%;
`

export const Header = styled.div`
	text-align: center;
	padding: 15px 0px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	position: relative;
`

export const Title = styled.p`
	font-weight: 600;
	font-size: 1.2em;
`

export const Close = styled.button`
	background: #e4e6eb;
	border: none;
	border-radius: 50px;
	height: 35px;
	width: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 6px;
`

export const Container = styled.div`
	width: 80%;
	margin-bottom: 8px;
`

export const Label = styled.label`
	font-size: 0.9em;
`

export const Input = styled.input`
	border: none;
	background: #e4e6eb;
	border-radius: 8px;
	height: 30px;
	width: 100%;
	padding: 0 20px;
`

export const Select = styled.select`
	border: none;
	background: #e4e6eb;
	border-radius: 8px;
	height: 30px;
	width: 100%;
	padding: 0 5px;
`

export const ButtonSave = styled.button`
	color: #fff;
	width: 100%;
	border-radius: 8px;
	background: #3578e5;
	font-weigth: 500;
	font-size: 1em;
	padding: 8px 0;
	margin-top: 10px;
`