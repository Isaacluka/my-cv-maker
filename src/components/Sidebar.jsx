import React from 'react'
import './Sidebar.css'
import Button from './Reusables'
import InputForm from './InputForm'
import { Context } from './Context'


const Sidebar = () => {

  const sections = ['Personal Data', 'Experience', 'Education', 'Skills', 'Others']
  return (
    <>
      <div className='sideBar'>
        <h1>CV Data</h1>

        <div className="sideBarBody">
          <div className="navSection">
            <div className="nav">
              {sections.map((item, index) => (
              <button key={index} className='navBar'>{item}</button>
              // <Button text={item} />
              ))}
            </div>
          </div>

          <div className="formSection">
            <InputForm />
          </div>    
        </div>  
      </div>
    </>
  )
}

export default Sidebar