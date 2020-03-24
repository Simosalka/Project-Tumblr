import React from 'react'
import TopToolbar from '../components/topToolbar/indexAdd'
import Publication from '../components/publication/index'
import BottomAdd from '../components/bottomToolbar/indexAdd'
function Dashboard({ history }) {    
  const save = () => {
    history.push('/dashboard')
    
  }
  return (
    <div className='AddPost' style={{ background: '#001935' }}>
      <TopToolbar />
      <Publication/>
      <BottomAdd/>

    </div>
  )
  
}

export default Dashboard
