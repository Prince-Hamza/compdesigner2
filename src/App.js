import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './screens/Main/Main'
import { AppContext, AppInfo } from './Context'
import { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

