import { React } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Datebar from './components/Datebar'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App = () => {

  const location = useLocation();
  const curRoute = location.pathname;

  return (
    <div className=''>
      <Header />
      <span className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </span>
    </div>
  )
}

export default App