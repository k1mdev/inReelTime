import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateCatchLog from './pages/CreateCatchLog'
import ShowCatchLog from './pages/ShowCatchLog'
import EditCatchLog from './pages/EditCatchLog'
import DeleteCatchLog from './pages/DeleteCatchLog'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catches/create' element={<CreateCatchLog />} />
      <Route path='/catches/details/:id' element={<ShowCatchLog />} />
      <Route path='/catches/edit/:id' element={<EditCatchLog />} />
      <Route path='/catches/delete/:id' element={<DeleteCatchLog />} />
    </Routes>
  )
}

export default App