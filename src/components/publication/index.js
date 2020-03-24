import React, { useState } from 'react'
import styled from 'styled-components'

function Publication({ search }){
return (
  <StyledDivContainer type='none' >
  <PostTopBar type='none'>
    <StyledLi>
      <Account />
    </StyledLi>

    <StyledLi>
      <Username>User1</Username>
    </StyledLi>

 
  </PostTopBar>
  <StyledTextArea value={search} placeholder="ajoutez quelque chose, si vous voulez"></StyledTextArea>
</StyledDivContainer>
)
}

const StyledDivContainer = styled.ul`
background-color: white;
margin: 0 0 20px 0;
padding: 10px 0 0 0;
padding: 50px 0 0;
`
const StyledLi = styled.li`
padding: 10px 5px;
display: flex;
`
const StyledTextArea = styled.textarea`
width: 411px;
background-color: white;
border: none;
outline: 0;
border-top: 1px solid lightgray;
padding: 10px;
` 

const Account = styled.span`
width: 30px;
height: 30px;
background-color: black;
`
const PostTopBar = styled.ul`
width: 100%;
display: flex;
flex-direction: columns;
align-items: center;
padding: 5px 0 0 0;
margin: 0;
`
const PostBottomBar = styled.ul`
width: 100%;
display: flex;
flex-direction: columns;
align-items: center;
padding: 0;
margin: 0;
`


const Username = styled.span`
font-size: 16px;
color: black;
`

export default Publication