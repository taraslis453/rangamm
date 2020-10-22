import { getPhotos } from 'features/search/api';
import React from 'react';
import { Form, Input } from 'shared/atoms/index'
import { SearchButton } from '../../atoms/index'
export const SearchForm = ({ navForm }) => {
    return (
        <Form navForm={navForm ? navForm : null}>
            <SearchButton onClick={() => console.log(getPhotos)} />
            <Input placeholder='type text' />
        </Form >
    )
}