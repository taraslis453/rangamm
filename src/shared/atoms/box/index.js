import styled from 'styled-components'
import {prop} from 'styled-tools'
import {
  background,
  border,
  bottom,
  boxShadow,
  color,
  compose,
  layout,
  left,
  position,
  right,
  space,
  top,
  typography,
} from 'styled-system'

const composedHelpers = compose(
  background,
  layout,
  border,
  space,
  color,
  typography,
  top,
  bottom,
  left,
  right,
  position,
  boxShadow,
)

export const Box = styled.div`
  ${composedHelpers}
  visibility: ${prop('visibility', null)};
  opacity: ${prop('opacity', null)};
  cursor: ${prop('cursor', null)};
  white-space: ${prop('whiteSpace', null)}
`
