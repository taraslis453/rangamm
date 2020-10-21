import React from 'react'
import { Icon } from 'shared/atoms/index'
import styled from 'styled-components'
const Button = styled.button`
    width: 40px;
    height: 36px;
    border: none;
    background: transparent;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`

export const SearchButton = () => {
    return (
        <Button>
            <Icon iconName="search" />
        </Button>
    )
}