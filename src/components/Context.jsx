import { createContext, useState }from 'react'


export const Context = createContext();

const ContextProvider = (props) => {

  const [step, setStep] = useState(1);
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    about: "",
    weblink: "",
    phone: "",
    address: "",
    languages: [],
    skills: [],
  });
  
  const [inputValues, setInputValues] = useState({
    languages: "",
    skills: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);


  const contextValue = {
    nextStep,
    prevStep,
    setInputValues,
    inputValues,
    step,
    setStep,
    formData,
    setFormData
  }


  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )

}

export default ContextProvider;