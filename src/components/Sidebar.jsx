import React from 'react'
import './Sidebar.css'
import Button from './Reusables'

const Sidebar = () => {

  const sections = ['Personal Data', 'Experience', 'Education', 'Skills', 'Others']
  return (
    <>
    <div className='sideBar agadisima-regular'>
      <h1>CV Data</h1>

      {sections.map((item, index) => (
        <button key={index} className='button'>{item}</button>
        // <Button text={item} />
      ))}
      
    </div>
    
    </>
  )
}

export default Sidebar