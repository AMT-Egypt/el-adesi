
import { Navigate, Route, Routes } from 'react-router-dom'
import './assets/style/App.css'
import Login from './pages/login'
import MainPage from './pages/MainPage'
import ProtectRoutes from './pages/ProtectRoutes'

function App() {

  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Navigate to={"login"} />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectRoutes/>}>
          <Route path='/main' element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
