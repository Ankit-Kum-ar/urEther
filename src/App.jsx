import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Landing from "./pages/Landing/Landing"
import Footer from "./components/Layout/Footer"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

    return (
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/dashboard" element={ <Dashboard/> } />
        </Routes>

        <Footer/>
      </div>
    )
}

export default App
