import {React, useContext }from 'react'
import '../styles/Sidebar.css';
import Button from './Reusables'
import InputForm from './InputForm'
import { Context } from './Context'
import { assets } from '../assets/assets';


const Sidebar = () => {

  const sections = ['Personal Data', 'Experience', 'Education', 'Skills', 'Others']

  const {step, setStep, formData, setFormData, inputValues, setInputValues, nextStep, prevStep, open, setOpen, downloadCV} = useContext(Context)


  return (
    <>
      <div className={!open ? 'sideBar' : "sideBar open"}>
        <h1>CV Data</h1>

        {!open? (
          <div className= "sideBarBody">
            <div className="navSection">
              <div className="nav">
                {sections.map((item, index) => (
                <button key={index} onClick={() => setStep(index + 1)} className={step === index + 1? 'navBar active' : "navBar"}>{item}</button>
                // <Button text={item} />
                ))}
              </div>
            </div>

            <div className="formSection">
              <InputForm />
            </div>    
          </div>  
        ) : (
              <>
                <button className='button' onClick={() => setOpen(!open)}>Edit<span className='icon'> <img className='downloadImg' src={assets.download} alt="" /></span></button>

                <button className='doneButton download' onClick={downloadCV}>Download<span className='icon'> <img className='downloadImg' src={assets.download} alt="" /></span></button>
              </>
          
        ) }
      </div>
    </>
  )
}

export default Sidebar