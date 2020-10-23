import styled from 'styled-components';
import PropTypes from 'prop-types'
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
`

Center.propTypes = {
    children: PropTypes.node.isRequired
}