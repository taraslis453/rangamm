import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ReactSVG} from 'react-svg'
import {Box, Icon} from 'shared/atoms/'
import {Title} from '../../atoms/'
import tick from './assets/tick.svg'

const Radio = styled.input`
  display: none;
`

export const FilterOption = ({label, name, id, checked, value, onChange}) => {
  return (
    <Box as='label' display='flex' htmlFor={id} cursor='pointer' ml={[1]} px={[1]} py={[2]}>
      <Radio onChange={onChange} isChecked={checked} type='radio' value={value} name={name} id={id} />
      {checked && (
        <Icon data-testid='filterIconChecked' size='10px'>
          <ReactSVG src={tick} />
        </Icon>
      )}
      <Title color={checked && 'black'} ml={[1]} textAlign='left'>
        {label}
      </Title>
    </Box>
  )
}

FilterOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
