import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EditIcon from '@material-ui/icons/Edit'

const FloatingButton = ({ onClick }) => {
  return (
    <StyledForm onClick={onClick}>
      <EditIcon style={{ color: 'white', fontSize: '28px' }} />
    </StyledForm>
  )
}

FloatingButton.propTypes = {
}

const StyledForm = styled.div`
  position: fixed;
  z-index: 999999;
  bottom: 70px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #00b8ff;
  border-radius: 50%;
  box-shadow: 2px 2px 6px #5d5b5b;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default FloatingButton
