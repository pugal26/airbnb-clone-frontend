import { Route, Routes } from 'react-router-dom'
import './App.css'
import { IndexPage } from './Components/Pages/IndexPage'
import { LoginPage } from './Components/Pages/LoginPage'
import { Layout } from './Components/Layout'
import { RegisterPage } from './Components/Pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './Components/UserContext'
import { useEffect } from 'react'
import { AccountPage } from './Components/Pages/AccountPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;



function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/account/:subpage/:action' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  )
}

export default App
