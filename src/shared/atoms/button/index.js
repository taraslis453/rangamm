import { prop } from 'styled-tools';
import styled from 'styled-components';
import { layout, color, compose, } from 'styled-system'

const composedHelpers = compose(
	layout,
	color,
)
export const Button = styled.button`
    ${composedHelpers}
	border: none;
	background: transparent;
	text-align: center;
	cursor: pointer;
	outline: none;
	visibility: ${prop('visibility', 'visible')};
`;