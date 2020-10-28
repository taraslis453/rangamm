import React from 'react';
import styled from 'styled-components';
import { SearchForm } from 'features/search/molecules/'
const HeaderWrapper = styled.div`
    border-bottom: 1px solid silver;
    padding: 10px;
    height: 55px;
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <SearchForm navForm />
        </HeaderWrapper>
    )
}