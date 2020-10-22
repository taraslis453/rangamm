import styled from 'styled-components';
import PropTypes from 'prop-types'
export const P = styled.p`
    color: ${props => props.color ? props.color : 'white'};
    font-size: 18px;
`

P.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
}