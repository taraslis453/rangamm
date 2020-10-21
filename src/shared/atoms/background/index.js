import styled from 'styled-components';
import PropTypes from 'prop-types'
export const Background = styled.div`
    background-image: url(${props => props.url});
    background-size: cover;
    height: 100vh;
`

Background.propTypes = {
    url: PropTypes.string.isRequired
}