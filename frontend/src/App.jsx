import { React } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Datebar from './components/Datebar'


const App = () => {
  return (
    <div className=''>
      <Header />
      <div className='flex'>
        <span className='flex-none'><Datebar /></span>
        <span className='flex-1'>
          <Routes >
            <Route path='/' element={<Home />} />
          </Routes>
        </span>
      </div>
    </div>
  )
}

export default App