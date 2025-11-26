import {useContext, React} from 'react'
import '../styles/MainPage.css'
// import Sidebar from '../styles/Sidebar.css'
import { Context } from './Context'
import InputForm from './InputForm'
import { assets } from '../assets/assets'



const MainPage = () => {

  const {step, setStep, formData, setFormData, inputValues, setInputValues, nextStep, prevStep} = useContext(Context)


  return (
    <>

      <div className='circle-2'>
        <div className="circle-1">
          
        </div>
      </div>

      <div className='circle-4'>
        <div className="circle-3">
          
        </div>
      </div>

      <div className='mainPage'>
        
        <div id="cv" className='cvPage'>

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

            <div className="awardCert">
              {formData.awardCert[0] ? (
                <>
                <h3>Awards and Certifications</h3>
                {formData.awardCert.map((award, index) => (
                  <li
                  key={index}>
                    {award}
                  </li>
                ))}
                </>
              ) : (
                " "
              )}
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  )
  
}

export default MainPage