
import { Navigate, Route, Routes } from 'react-router-dom'
import './assets/style/App.css'
import Login from './pages/login'
import Main from './pages/Main'
import ProtectRoutes from './pages/ProtectRoutes'
import Register from './pages/Register'
import GlobalRoute from './pages/GlobalRoute'

function App() {
  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Navigate to={"login"} />} />
        <Route element={<GlobalRoute/>}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<ProtectRoutes />}>
          <Route path='/main/*' element={<Main />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
