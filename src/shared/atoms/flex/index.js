import styled from 'styled-components';
import { flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'
export const Flex = styled.div`
    display: flex;
    ${flexbox}
`

Flex.propTypes = {
    ...propTypes.flexbox
}
