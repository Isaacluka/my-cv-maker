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
        <div className="contact">
          <div className='email'>
            {formData.email ? (
              <>
                <img src={assets.envelope} alt="" />
                {formData.email}
              </>
            ) : (
              " "
            )}
          </div>
          <div className='telephone'>
              {formData.phone ? (
                <>
                  <img src={assets.telephone} alt="" />
                  {formData.phone}
                </>
              ) : (
                " "
              )}
          </div>
          <div className="address">
            {formData.address ? (
              <>
              <img src={assets.location} alt="" />
              {formData.address}
              </>
            ) : (
              " "
            )}
          </div>
        </div>

      </div>
      <div className="cvBody">
        <div className="about">
            {formData.about ? (
              <>
              <h3>Summary</h3>
              <div className="aboutText">{formData.about}</div>
              </>
            ) : (
              " "
            )}
        </div>

        <div className="education experience">
          {formData.experience[0] ? (
            <>
            <h3>Work Experience</h3>
            {formData.experience.map((entry, index) => (        
                <div
                className="edEntry">
                  <div className="position">
                    {entry.position} <span className='dates'>{entry.startDate.slice(0, 4)} - {entry.endDate.slice(0, 4)}</span>
                  </div>
                  <div className="company">
                    {entry.company}
                  </div>
                  <div className="jobDescription">
                    {entry.jobDescription}
                  </div>
                  
                </div>
              ))}
            </>
          ) : ( 
            " "
          )}
        </div>

        <div className="education">
          {formData.education[0] ? (
            <>
            <h3>Education</h3>
            {formData.education.map((entry, index) => (        
                <div
                className="edEntry">
                  <div className="institution">
                    {entry.institution} <span className='dates'>{entry.startDate.slice(0, 4)} - {entry.endDate.slice(0, 4)}</span>
                  </div>
                  <div className="degree">
                    {entry.degree}
                  </div>
                </div>
              ))}
            </>
          ) : ( 
            " "
          )}
        </div>

        <div className='flexDiv'>

          <div className="skills">
            {formData.skills[0] ? (
              <>
              <h3>Skills</h3>
              {formData.skills.map((skill,index) => (
                <li
                key={index}>
                  {skill}
                </li>
              ))}
              </>
            ) : (
              " "
            )}
          </div>

          <div className="languages">
            {formData.languages[0] ? (
              <>
              <h3>Languages</h3>
              {formData.languages.map((lang,index) => (
                <li
                key={index}>
                  {lang}
                </li>
              ))}
              </>
            ) : (
              " "
            )}
          </div>


        </div>

      </div>

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
      <button className='doneButton download'>Download<span className='icon'> <img className='downloadImg' src={assets.download} alt="" /></span></button>
      
    </div>
  )
}

export default MainPage