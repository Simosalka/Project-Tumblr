import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import SendIcon from '@material-ui/icons/Send'
import CachedIcon from '@material-ui/icons/Cached'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function Post2() {
  return (
    <StyledDivContainer type='none' >
      <PostTopBar type='none'>
        <StyledLi>
          <Account />
        </StyledLi>

        <StyledLi>
          <Username>SimoSalka</Username>
          <Subscribe href='/'>S'abonner</Subscribe>
        </StyledLi>

        <StyledMoreIcon >
          <MoreHorizIcon ></MoreHorizIcon> 
        </StyledMoreIcon>
      </PostTopBar>

      <PostCover>
      <span>
    <img src="https://st2.depositphotos.com/6573348/9872/i/950/depositphotos_98726664-stock-photo-pink-flowers-on-a-background.jpg" width='100%'></img>
    </span>
      </PostCover>
      

      <Description>
        <SearchIcon style={{ fill: 'rgb(76, 175, 80)', fontSize: 25 }} />
        <span>
          <span style={{ color: 'rgb(76, 175, 80)' }}>road trip&nbsp;</span>
          <span>
            #Flower #sea #Story #Travel
          </span>
        </span>
      </Description>

      <PostBottomBar type='none'>
        <Notes>20 notes</Notes>

        <BtmStyledMoreIcon>
          <SendIcon />
          <CachedIcon />
          <FavoriteBorderIcon />
        </BtmStyledMoreIcon>
      </PostBottomBar>
    </StyledDivContainer>
  )
}

const StyledDivContainer = styled.ul`
  background-color: white;
  margin: 0 0 20px 0;
  padding: 10px 0 0 0;
`
const StyledLi = styled.li`
  padding: 5px 5px;
  display: flex;
`

const StyledMoreIcon = styled(StyledLi)`
  margin-left: auto;
  > * {
    padding: 0 5px;
  }
`

const Notes = styled(StyledLi)`
  font-weight: bold;
  color: #3e3e3e;
`

const BtmStyledMoreIcon = styled(StyledMoreIcon)`
  font-weight: bold;
  color: #3e3e3e;
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
  padding: 10px 0 0 0;
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

const PostCover = styled.div`
  padding: 0;
  width: 100%;
  height: 200px;
  background-color: lightgray;
`

const Username = styled.span`
  font-size: 16px;
  color: black;
  font-weight: bold;
`

const Subscribe = styled.a`
  font-size: 16px;
  color: #00b8ff;
  text-decoration: none;
  font-weight: bold;
  margin-left: 15px;
`

const Description = styled.p`
  padding: 2px 10px;
  display: flex;
`

export default Post2
