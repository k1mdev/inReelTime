import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateCatch from './pages/CreateCatch'
import ShowCatch from './pages/ShowCatch'
import EditCatch from './pages/EditCatch'
import DeleteCatch from './pages/DeleteCatch'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catches/create' element={<CreateCatch />} />
      <Route path='/catches/details/:id' element={<ShowCatch />} />
      <Route path='/catches/edit/:id' element={<EditCatch />} />
      <Route path='/catches/delete/:id' element={<DeleteCatch />} />
    </Routes>
  )
}

export default App