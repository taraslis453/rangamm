import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Flex, Typography} from 'shared/atoms/index'
import {FormWrapper, Input} from '../../atoms/index'
import {useHistory} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {Button} from 'shared/atoms/index'
import {fetchPhotos} from '../../duck/index'
import {connect} from 'react-redux'
import cancel from 'shared/assets/cancel.svg'
import loupe from 'shared/assets/loupe.svg'
export const SearchForm = ({variant, fetchPhotos}) => {
  const {register, handleSubmit, errors, getValues} = useForm()
  const history = useHistory()
  const onSubmit = async ({query}) => {
    await fetchPhotos(query)
    history.push(`/search/${query}`)
  }
  const [inputLength, setLength] = useState(0)
  const inputOnChange = () => setLength(getValues('query').length)
  const onResetButton = () => setLength(0)
  return (
    <>
      <FormWrapper variant={variant} onSubmit={handleSubmit(onSubmit)} error={errors.query && true}>
        <Flex alignItems='center'>
          <Button size='40px'>
            <ReactSVG height='22px' width='22px' src={loupe} />
          </Button>
          <Input
            data-testid='searchInput'
            onChange={inputOnChange}
            name='query'
            ref={register({required: true})}
            placeholder={'type text'}
          />
          <Button
            size='40px'
            visibility={inputLength > 0 ? 'visible' : 'hidden'}
            type='reset'
            onClick={onResetButton}
            data-testid='resetButton'>
            <ReactSVG height='22px' width='22px' src={cancel} />
          </Button>
        </Flex>
      </FormWrapper>
      {errors.query && !variant && (
        <Typography variant='p' as='p' color='red'>
          The field is required
        </Typography>
      )}
    </>
  )
}

export default connect(null, {fetchPhotos})(SearchForm)
