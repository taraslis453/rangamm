import styled from 'styled-components'
import {ifProp} from 'styled-tools'
import {variant} from 'styled-system'

export const FormWrapper = styled('form')(
  {
    transition: 'all .2s ease',
    display: 'flex',
    border: ifProp('error', '2px solid red', '2px solid transparent'),
  },
  variant({
    variants: {
      primary: {
        backgroundColor: '#fff',
        border: '2px solid transparent',
      },
      secondary: {
        backgroundColor: '#eee',
        borderRadius: '25px',
        '&:hover': {
          border: '2px solid #d1d1d1',
          backgroundColor: '#fff',
        },
      },
    },
  }),
)

FormWrapper.defaultProps = {
  variant: 'primary',
}
