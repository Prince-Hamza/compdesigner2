import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './screens/Main/Main'
import { AppContext, AppInfo } from './Context'
import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  const [appData, setAppData] = useState(AppInfo)

  return (
    <AppContext.Provider value={{ appInfo: appData, setAppInfo: setAppData }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;

