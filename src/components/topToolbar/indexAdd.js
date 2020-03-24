import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function TopToolbar() {
  return (
    <StyledToolbar>
      <StyledLi>
        <ArrowBackIcon  fontSize='large' />
      </StyledLi>

      <StyledPage>Nouveau billet</StyledPage>
      <StyledSave href="/">Publier</StyledSave>
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


const StyledSave = styled(StyledLi)`
position: absolute;
  Left: 88%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  Color: #00b8ff;
`

const StyledPage = styled(StyledLi)`

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`

export default TopToolbar
