import styled from 'styled-components';
import { prop } from 'styled-tools'
import PropTypes from 'prop-types'
export const Background = styled.div`
    background-image: url(${prop('url')});
    background-size: cover;
    height: 100vh;
`

Background.propTypes = {
    url: PropTypes.string.isRequired
}