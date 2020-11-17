import {prop} from 'styled-tools'
import styled from 'styled-components'
import {layout, color, space, compose, typography} from 'styled-system'

const composedHelpers = compose(layout, color, space, typography)
export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  visibility: ${prop('visibility', 'visible')};
  ${composedHelpers}
`
