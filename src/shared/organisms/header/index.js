import React from 'react';
import styled from 'styled-components';
import { SearchForm } from 'features/search/molecules/'
import { Logo } from 'shared/molecules/index'
const HeaderWrapper = styled.div`
    border-bottom: 1px solid silver;
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    height: 65px;
`

const HeaderInner = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <Logo />
                <SearchForm navForm />
            </HeaderInner>
        </HeaderWrapper>
    )
}