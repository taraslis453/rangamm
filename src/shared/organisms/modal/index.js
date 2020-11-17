import React from 'react'
import {Box} from 'shared/atoms'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AriaModal from 'react-aria-modal'
import {ReactSVG} from 'react-svg'
import cancel from 'shared/assets/cancel.svg'
const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  width: 80%;
  height: 95%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
`

export const ModalWindow = ({children, closeCallback}) => {
  return (
    <div>
      <div>
        <AriaModal titleText='modal' onExit={closeCallback} initialFocus='#root'>
          <Box
            position='fixed'
            height='22px'
            width='22px'
            left='10px'
            top='10px'
            zIndex='99'
            onClick={closeCallback}
            cursor='pointer'>
            <ReactSVG style={{fill: '#fff'}} src={cancel} />
          </Box>
          <ModalBody>{children}</ModalBody>
        </AriaModal>
      </div>
    </div>
  )
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  closeCallback: PropTypes.func.isRequired,
}
