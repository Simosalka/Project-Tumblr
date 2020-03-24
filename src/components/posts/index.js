import React from 'react'
import styled from 'styled-components'
import Post from '../post/index'
import Post2 from '../post/index1'

function Posts() {
  return (
    <StyledContainer>
      <Post />
      <Post2 />
      <Post />
    </StyledContainer>
  )
}

const StyledContainer = styled.ul`
  padding: 50px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

export default Posts
