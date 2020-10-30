import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FormWrapper, Input, P } from 'shared/atoms/index';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import SVG from 'react-inlinesvg';
const Button = styled.button`
	width: 40px;
	height: 36px;
	border: none;
	background: transparent;
	text-align: center;
	color: #fff;
	border-radius: 0 5px 5px 0;
	cursor: pointer;
	outline: none;
	visibility: ${prop('visibility', 'visible')};
`;

export const SearchForm = ({ navForm }) => {
	const { register, handleSubmit, errors, getValues } = useForm();
	const history = useHistory();
	const onSubmit = ({ query }) => {
		history.push(`/search/${query}`);
	};
	const [inputLength, setLength] = useState(0);
	return (
		<>
			<FormWrapper onSubmit={handleSubmit(onSubmit)} error={errors.query ? true : null} navForm={navForm ? navForm : null}>
				<Button>
					<SVG height="22px" width="22px" src={require('shared/assets/loupe.svg')}/>
				</Button>
				<Input onChange={() => setLength(getValues('query').length)} name="query" ref={register({ required: true })} placeholder={'type text'} />
				<Button visibility={inputLength > 0 ? 'visible' : 'hidden'} type="reset" onClick={() => setLength(0)}>
					<SVG height="22px" width="22px" src={require('shared/assets/cancel.svg')}/>
				</Button>
			</FormWrapper>
			{errors.query && !navForm ? <P color="red">The field is required</P> : null}
		</>
	);
};

SearchForm.propTypes = {
	navForm: PropTypes.bool,
};
