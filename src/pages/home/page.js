import React from "react";
import { SearchForm } from 'features/search/molecules/index'
import { P } from 'shared/atoms/index';
import { Center, Background } from 'shared/atoms/index'
import { useHistory } from 'react-router-dom';
export const HomePage = () => {
    const history = useHistory();
    const onSubmit = ({ query }) => {
        history.push(`/search/${query}`)
    };
    return (
        <Background url={'https://images.unsplash.com/photo-1582322384982-92cf41ed4dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'}>
            <Center>
                <P>The best free stock photos and videos shared by talented creators.</P>
                <SearchForm onSubmit={onSubmit} />
            </Center>
        </Background>
    );
};
