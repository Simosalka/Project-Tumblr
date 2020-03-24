import React from 'react'
import styled from 'styled-components'
import Toolbar from '../toolbar/index'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import PersonIcon from '@material-ui/icons/Person'

function BottomDashboard() {
  return (
    <Toolbar>
      <BtmToolbarStyledLi active={true}>
        <HomeIcon fontSize='large' />
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <SearchIcon fontSize='large'  />
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <EmojiEmotionsIcon fontSize='large' />
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <PersonIcon fontSize='large' />
      </BtmToolbarStyledLi>
    </Toolbar>
  )
}

const StyledLi = styled.li`
  padding: 10px 0;
  text-align: center;
`
const BtmToolbarStyledLi = styled(StyledLi)`
  color: ${props => (props.active ? 'white' : 'gray')};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  cursor: pointer;

  :hover {
    color: white;
  }
`

export default BottomDashboard
