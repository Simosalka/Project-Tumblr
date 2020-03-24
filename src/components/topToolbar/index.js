import React from 'react'
import styled from 'styled-components'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

function TopToolbar() {
  return (
    <StyledToolbar>
      <StyledLi>
        <CameraAltIcon fontSize='large' />
      </StyledLi>

      <StyledLogo>tumblr</StyledLogo>

      <StyledDiv>
        <StyledLi>
          <QuestionAnswerIcon fontSize='large' />
        </StyledLi>
      </StyledDiv>
    </StyledToolbar>
  )
}

const StyledToolbar = styled.ul`
  box-shadow: 2px 2px 3px black;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #001935;
  color: white;
  display: flex;
  items-align: center;
  padding: 0;
  margin: 0 auto;
`

const StyledLi = styled.li`
  padding: 10px 10px;
  display: flex;
  align-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  margin-left: auto;
`

const StyledLogo = styled(StyledLi)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: bold;
`

export default TopToolbar
