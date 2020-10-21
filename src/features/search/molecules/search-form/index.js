import React from 'react';
import { Form, Input } from 'shared/atoms/index'
import { SearchButton } from '../../atoms/index'
export const SearchForm = () => {
    return (
        <Form>
            <SearchButton />
            <Input placeholder='type text' />
        </Form >
    )
}