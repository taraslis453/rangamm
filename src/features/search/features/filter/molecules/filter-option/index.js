import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Box} from 'shared/atoms/index'
import {Title} from '../../atoms/index'
import {ReactSVG} from 'react-svg'
import {Icon} from 'shared/atoms/index'
import tick from 'shared/assets/tick.svg'
//TODO: icon in props

const Radio = styled.input`
  display: none;
  &:checked + div {
    display: block;
  }
`

export const FilterOption = ({title, radioName, radioIdName}) => {
  return (
    <Box position='relative' as='li' ml={[1]} px={[1]} py={[2]}>
      <Radio type='radio' name={radioName} id={radioIdName} />
      <Icon display='none' position='absolute' top={[2]} right='100%' size='10px'>
        <ReactSVG src={tick} />
      </Icon>
      <Title ml={[1]} textAlign='left'>
        <label htmlFor={radioIdName}>{title}</label>
      </Title>
    </Box>
  )
}

FilterOption.propTypes = {
  title: PropTypes.string.isRequired,
}
