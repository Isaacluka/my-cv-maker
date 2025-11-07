import React, { useState } from 'react'
import './InputForm.css'

const InputForm = () => {
  // [firstName, surName, email, aboutMe, webLink, phone, residence, experience, education, skills, language, interest, certificates ] 
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className='inputForm'>
      <form action="" className=''>
        <div>
          <label>Name</label>
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your Firstname' />
        </div>
      </form>
  
  
  
    </div>
  )
}

export default InputForm