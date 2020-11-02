import React from "react";
import { SearchForm } from 'features/search/molecules/index'
import { Center, Background } from 'shared/atoms/index'
import bg from 'shared/assets/bg.jpeg'
import { Typography, Container } from 'shared/atoms/index'
export const HomePage = () => {
    return (
        <Background url={bg}>
            <Center>
                <Container>
                    <Typography variant='p' as='p' color='#fff'>The best free stock photos and videos shared by talented creators.</Typography>
                    <SearchForm />
                </Container>
            </Center>
        </Background>
    );
};
