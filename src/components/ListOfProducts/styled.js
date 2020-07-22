import styled from 'styled-components'

export const List = styled.ul`
	height: 100vh;
	overflow-y: scroll;
	padding: 60px 20px 20px 20px;

	display: grid;
	grid-template-colums: 1fr;
	grid-auto-rows: min-content;

	@media (min-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
    }

	@media (min-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
    }
`