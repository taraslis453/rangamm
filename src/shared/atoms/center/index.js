import styled from 'styled-components';
import PropTypes from 'prop-types'
export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

Center.propTypes = {
    children: PropTypes.node.isRequired
}