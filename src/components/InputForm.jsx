import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { Context } from './Context';
// import './InputForm.css'

const InputForm = () => {
  // [firstName, surName, email, aboutMe, webLink, phone, residence, experience, education, skills, language, interest, certificates ] 
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [about, setAbout] = useState("");
  // const [link, setLink] = useState("");

  const {step, setStep, formData, setFormData, inputValues, setInputValues, nextStep, prevStep} = useContext(Context)

  // const [step, setStep] = useState(1);
  // const [ formData, setFormData ] = useState({
  //   name: "",
  //   email: "",
  //   about: "",
  //   weblink: "",
  //   phone: "",
  //   address: "",
  //   languages: [],
  //   skills: [],
  // });

  // const [inputValues, setInputValues] = useState({
  //   languages: "",
  //   skills: "",
  // });

  const handleAdd = (field) => {
    const value = inputValues[field].trim();
    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], value],
    }));

    setInputValues((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleRemove = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]:prev[field].filter((_, i) => i !== index),
    }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  };

  // const nextStep = () => setStep((prev) => prev + 1);
  // const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Sumbitted", formData);
    <Context data={formData} />
    //Create a funtion that arranges the formdata unto the cv page
  };


  return (
    <div className='inputForm'>
      <form action="" className=''>
        {step === 1 && (
          <div>
            <h3>Personal Data</h3>
            <div className='inputDiv'>
              <label>Name</label>
              <input 
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your full name' />
            </div>

            <div className='inputDiv'>
              <label>Email</label>
              <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your Email Address' />
            </div>

            <div className='inputDiv'>
              <label>Phone Number</label>
              <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter your Phone Number' />
            </div>

            <div className='inputDiv'>
              <label>About Me</label>
              <textarea 
              name='about'
              value={formData.about}
              onChange={handleChange}
              placeholder='' />
            </div>

            <div className='inputDiv'>
              <label>Link to your website</label>
              <input 
              name='link'
              value={formData.link}
              onChange={handleChange}
              placeholder='https://' />
            </div>

            <div className='inputDiv'>
              <label>Address (City)</label>
              <input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder='' />
            </div>
          </div>
        )}

        

        {step === 2 && (
          <div>
            <h3>Work Experience</h3>
            <button className="button">Add a position</button>
            <div className='inputDiv'>
              <label>Position</label>
              <input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder='' />
            </div>
            
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Education</h3>
            
          </div>
        )}

        {step === 4 && (
          <div>
            <h3>Skills</h3>
            
          </div>
        )}

        {step === 5 && (
          <>
            <div>
              <h3>Others</h3>
              <div className='inputDiv'>
                <label>Languages</label>
                <div className="langAdd">
                  <input 
                  type="text"
                  name='languages'
                  value={inputValues.languages}
                  onChange={(e) =>
                    setInputValues((prev) => ({
                      ...prev,
                      languages: e.target.value,
                    }))
                  }
                  placeholder='Add a language' />
                
                  <button 
                  className="addSubButton"
                  type='button'
                  onClick={() => handleAdd("languages")}>
                    <img src={assets.add} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <ul>
              {formData.languages.map((lang, index) => (
                <li
                key={index}>{lang}
                <button 
              className="addSubButton"
              type='button'
              onClick={() => handleRemove("languages", index)}>
                <img src={assets.remove} alt="" />
              </button></li>
              ))}
            </ul>

          </>        
        )}

        <div className="navButtons">
          {step > 1 && (
            <button
            type='button'
            onClick={prevStep} 
            className="button">
              <img src={assets.back} alt="" /> <span> Back </span>
            </button>
          )}

          {step < 5 && (
            <button
            type='button'
            onClick={nextStep} 
            className="button">
              Next <img src={assets.next} alt="" />
            </button>
          )}

          {step === 5 && (
            <div>
              {/* <button
            type='button'
            onClick={nextStep} 
            className="button">
              R
            </button> */}

            <button
            type='button'
            onClick={handleSubmit} 
            className="doneButton">
              Done
            </button>
            </div>
          )}
        </div>
      </form>
  
  
  
    </div>
  )
}

export default InputForm