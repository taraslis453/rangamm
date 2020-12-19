import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ifProp} from 'styled-tools'
import {Box} from 'shared/atoms/index'
import {Title} from '../../atoms/index'
import {ReactSVG} from 'react-svg'
import {Icon} from 'shared/atoms/index'
import tick from 'shared/assets/tick.svg'
//TODO: icon in props

const Radio = styled.input`
  display: none;
  & + div {
    display: ${ifProp('isChecked', 'block')};
  }
`

export const FilterOption = ({label, name, id, checked, value, onChange}) => {
  return (
    <Box as='label' display='flex' htmlFor={id} position='relative' ml={[1]} px={[1]} py={[2]}>
      <Radio onChange={onChange} isChecked={checked} type='radio' value={value} name={name} id={id} />
      <Icon display='none' position='absolute' top={[2]} right='100%' size='10px'>
        <ReactSVG src={tick} />
      </Icon>
      <Title ml={[1]} textAlign='left'>
        {label}
      </Title>
    </Box>
  )
}

FilterOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
