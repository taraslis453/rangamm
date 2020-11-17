import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Flex, Typography, Button, Icon, Box} from 'shared/atoms/index'
import {useHistory} from 'react-router-dom'
import {FormWrapper, Input} from '../../atoms'
import {ReactSVG} from 'react-svg'
import cancel from 'shared/assets/cancel.svg'
import loupe from 'shared/assets/loupe.svg'
export const SearchForm = ({variant}) => {
  const {register, handleSubmit, errors, getValues} = useForm()
  const history = useHistory()
  const onSubmit = ({query}) => {
    history.push(`/search/${query}`)
  }
  const [inputLength, setLength] = useState(0)
  const inputOnChange = () => setLength(getValues('query').length)
  const onResetButton = () => setLength(0)
  return (
    <>
      <FormWrapper variant={variant} onSubmit={handleSubmit(onSubmit)} error={errors.query && true}>
        <Box width='100%'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Box width='100%'>
              <Flex>
                <Button data-testid='submitButton'>
                  <Icon>
                    <ReactSVG src={loupe} />
                  </Icon>
                </Button>
                <Input
                  data-testid='searchInput'
                  onChange={inputOnChange}
                  name='query'
                  ref={register({required: true})}
                  placeholder={'type text'}
                />
              </Flex>
            </Box>
            <div>
              <Button
                size='40px'
                visibility={inputLength > 0 ? 'visible' : 'hidden'}
                type='reset'
                onClick={onResetButton}
                data-testid='resetButton'>
                <Icon>
                  <ReactSVG src={cancel} />
                </Icon>
              </Button>
            </div>
          </Flex>
        </Box>
      </FormWrapper>
      {errors.query && !variant && (
        <Typography variant='p' as='p' color='red'>
          The field is required
        </Typography>
      )}
    </>
  )
}
