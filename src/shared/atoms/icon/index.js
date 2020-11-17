import styled from 'styled-components'
import {prop} from 'styled-tools'
import {layout, position, space} from 'styled-system'
export const Icon = styled.div`
  ${layout}
  ${position}
  ${space}
  height: ${prop('size', '22px')};
  width: ${prop('size', '22px')};
`
