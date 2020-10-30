import React from 'react';
import { Link } from 'react-router-dom';
import icon from 'shared/assets/react-icon.png'
import styled from 'styled-components'
import { device } from 'theme';
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const MobileL = styled.div`
    display: none;
    @media ${device.mobileL} {
        display: block;
    }
`

export const Logo = () => {
    return (
        <LogoWrapper>
            <Link to='/'>
                <img src={icon} alt="" height='40px' />
            </Link>
            <MobileL>Free photos for everyone</MobileL>
        </LogoWrapper >
    )
}