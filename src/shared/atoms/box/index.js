import styled from 'styled-components';

import {
    background,
    border,
    bottom,
    boxShadow,
    color,
    compose,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
} from 'styled-system';

export const Box = styled('div')(
    compose(
        background,
        layout,
        border,
        space,
        color,
        typography,
        top,
        bottom,
        left,
        right,
        position,
        boxShadow,
    )
)