import styled from 'styled-components'
import {typography, color, space, variant, compose} from 'styled-system'

export const Typography = styled('h1')(
  compose(typography, color, space),
  variant({
    variants: {
      p: {
        fontSize: 3,
      },
      span: {
        fontSize: 1,
      },
      h1: {
        fontSize: 6,
      },
    },
  }),
)
