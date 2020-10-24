import React from 'react';
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { FormWrapper, Input, P } from 'shared/atoms/index'
import { SearchButton } from '../../atoms/index';
export const SearchForm = ({ navForm, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormWrapper error={errors.query ? true : null} navForm={navForm ? navForm : null}>
                    <SearchButton type='submit' />
                    <Input name='query' ref={register({ required: true })} placeholder='type text' />
                </FormWrapper>
            </form>
            {errors.query ? <P color="red">The field is required</P> : null}
        </>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    navForm: PropTypes.bool
}
