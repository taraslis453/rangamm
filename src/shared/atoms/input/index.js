import styled from 'styled-components';
import PropTypes from 'prop-types'
export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 5px;
    font-size: 20px;
    outline: none;
    background: inherit;
`

Input.propTypes = {
    placeholder: PropTypes.string.isRequired
}