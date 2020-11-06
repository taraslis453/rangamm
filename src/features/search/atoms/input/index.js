import styled from 'styled-components';
import PropTypes from 'prop-types'
import { typography, space, compose } from 'styled-system'

const composedHelpers = compose(
  typography,
  space,
)

export const Input = styled.input`
    ${composedHelpers}
    border: none;
    background: inherit;
    width: 100%;
`
Input.defaultProps = {
  fontSize: 3,
  p: 1
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}
