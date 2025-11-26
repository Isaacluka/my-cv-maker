import { createContext, useState }from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


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
    awardCert: [],
    skills: [],
    education: [],
    experience: []
  });
  
  const [inputValues, setInputValues] = useState({
    languages: "",
    awardCert: "",
    skills: "",
    education: { institution: "", degree: "", startDate: "", endDate: "" },
    experience: { company: "", position: "", jobDescription: "", startDate: "", endDate: "" },
  });

  const [open, setOpen] = useState(false);
  

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const downloadCV = async () => {
    const cvDiv = document.getElementById("cv");

    const canvas = await html2canvas(cvDiv, { scale: 4, useCORS: true, });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
    pdf.save("my-cv.pdf");
  };


  const contextValue = {
    nextStep,
    prevStep,
    setInputValues,
    inputValues,
    step,
    setStep,
    formData,
    setFormData,
    open,
    setOpen,
    downloadCV
  }


  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )

}

export default ContextProvider;