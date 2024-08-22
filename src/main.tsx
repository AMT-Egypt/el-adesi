import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './assets/style/index.css'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</StrictMode>
)
