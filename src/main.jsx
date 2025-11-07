import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar'
import InputForm from './components/InputForm'
import CvPage from './components/CvPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <InputForm />
    <CvPage />
  </StrictMode>,
)
