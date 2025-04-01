import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'

function logout() {
  localStorage.clear();
  return <Login/>
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register/>
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<logout/>}/>
          <Route path="/registerAndLogout" element={<RegisterAndLogout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
