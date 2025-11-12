import {useContext, React} from 'react'
import './MainPage.css'
import Sidebar from './Sidebar'
import { Context } from './Context'
import InputForm from './InputForm'
import { assets } from '../assets/assets'


const MainPage = () => {

  const {step, setStep, formData, setFormData, inputValues, setInputValues, nextStep, prevStep} = useContext(Context)

  return (
    <div className='mainPage'>
      <div className='cvPage'>

      <div className="cvHeader">
        <div className='name'>{formData.name}</div><br/>
        <div className='email'>{formData.email}</div>
        {formData.address}

      </div>
      <div className="cvBody"></div>
        {/* <h1>{formData.name}</h1><br/>
        {formData.email}
        {formData.about}
        {formData.weblink}
        {formData.address}
        {formData.languages}
        {formData.skills} */}
        {/* <ul>
          {formData.map((item,index)=>{
            <li key={index}>{item}</li>
          })}

        </ul> */}
      
      </div>
      <button className='doneButton download'>Download<span className='icon'> <img src={assets.download} alt="" /></span></button>
      
    </div>
  )
}

export default MainPage