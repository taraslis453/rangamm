import React from 'react';
import { Link } from 'react-router-dom';
import icon from 'shared/assets/react-icon.png'
import { Box, Flex, Typography } from '../../atoms/index'
export const Logo = () => {
    return (
        <Flex alignItems='center'>
            <Link to='/'>
                <img src={icon} alt="" height='40px' />
            </Link>
            <Box display={['none', 'block']} >
                <Typography variant='span' as='span'>Free photos for everyone</Typography>
            </Box>
        </Flex >
    )
}