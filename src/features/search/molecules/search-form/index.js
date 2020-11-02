import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Flex, Typography } from 'shared/atoms/index';
import { FormWrapper, Input } from '../../atoms/index';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { Button } from 'shared/atoms/index'

export const SearchForm = ({ variant }) => {
	const { register, handleSubmit, errors, getValues } = useForm();
	const history = useHistory();
	const onSubmit = ({ query }) => {
		history.push(`/search/${query}`);
	};
	const [inputLength, setLength] = useState(0);
	return (
		<>
			<FormWrapper variant={variant} onSubmit={handleSubmit(onSubmit)} error={errors.query && true} >
				<Flex alignItems='center'>
					<Button size='40px'>
						<SVG height="22px" width="22px" src={require('shared/assets/loupe.svg')} />
					</Button>
					<Input onChange={() => setLength(getValues('query').length)} name="query" ref={register({ required: true })} placeholder={'type text'} />
					<Button size='40px' visibility={inputLength > 0 ? 'visible' : 'hidden'} type="reset" onClick={() => setLength(0)}>
						<SVG height="22px" width="22px" src={require('shared/assets/cancel.svg')} />
					</Button>
				</Flex>
			</FormWrapper>
			{errors.query && !variant && <Typography variant='p' as='p' color="red">The field is required</Typography>}
		</>
	);
};