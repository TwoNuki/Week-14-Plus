//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import TopBar from './TopBar.tsx'
import PageBody from './PageBody.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

createRoot(document.getElementById('root')!).render(
  
    <PageBody />
)
