import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Feed from './Pages/Feed'
import NavBar from './Component/Common/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
