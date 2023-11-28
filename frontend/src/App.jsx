import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateCatchLog from './pages/CreateCatchLog'
import ShowCatchLog from './pages/ShowCatchLog'
import EditCatchLog from './pages/EditCatchLog'
import DeleteCatchLog from './pages/DeleteCatchLog'
import Header from './components/Header'
import Datebar from './components/Datebar'

const App = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <span className='flex-none'><Datebar /></span>
        <span className='flex-1'>
          <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/catches/create' element={<CreateCatchLog />} />
          <Route path='/catches/details/:id' element={<ShowCatchLog />} />
          <Route path='/catches/edit/:id' element={<EditCatchLog />} />
          <Route path='/catches/delete/:id' element={<DeleteCatchLog />} />
          </Routes>
        </span>
      </div>
    </div>
  )
}

export default App