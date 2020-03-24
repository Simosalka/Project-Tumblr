import React from 'react'
import styled from 'styled-components'
import Toolbar from '../toolbar/indexAdd'
import TextFieldsIcon from '@material-ui/icons/TextFields';
import LinkIcon from '@material-ui/icons/Link';
import GifIcon from '@material-ui/icons/Gif';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideocamIcon from '@material-ui/icons/Videocam';
import HeadsetIcon from '@material-ui/icons/Headset';
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';

function BottomAdd() {
  return (
    <Toolbar>
      <BtmToolbarStyledLi active={false}>
        <TextFieldsIcon fontSize='large' />
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <LinkIcon   fontSize='large'/>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <GifIcon  fontSize='large'/>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <CameraAltIcon  fontSize='large'/>
      </BtmToolbarStyledLi>
      <BtmToolbarStyledLi active={false}>
        <VideocamIcon  fontSize='large'/>
      </BtmToolbarStyledLi>
      <BtmToolbarStyledLi active={false}>
        <HeadsetIcon  fontSize='large'/>
      </BtmToolbarStyledLi>
      <BtmToolbarStyledLi active={false}>
        <FullscreenExitOutlinedIcon  fontSize='large'/>
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
    color: Black;
  }
`

export default BottomAdd
