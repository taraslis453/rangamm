import React from 'react';
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { FormWrapper, Input, P } from 'shared/atoms/index'
import { SearchButton } from '../../atoms/index';
import { connect } from "react-redux";
import { fetchPhotos } from '../../duck/index'
export const SearchForm = ({ navForm, fetchPhotos }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = ({ query }) => fetchPhotos(query);
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
    fetchPhotos: PropTypes.func.isRequired,
    navForm: PropTypes.bool
}

export default connect(null, { fetchPhotos })(SearchForm)