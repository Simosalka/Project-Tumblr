import React from 'react'
import BottomToolbar from '../components/bottomToolbar/index'
import TopToolbar from '../components/topToolbar/index'
import Posts from '../components/posts/index'
import FloatingButton from '../components/floating-button/index'

function Dashboard({ history }) {    
  const goToAddPostPage = () => {
    history.push('/addPost')
  }

  return (
    <div className='dashboard' style={{ background: '#001935' }}>
      <TopToolbar />
      <Posts />
      <BottomToolbar />
      <FloatingButton onClick={goToAddPostPage} />
    </div>
  )
}

export default Dashboard
