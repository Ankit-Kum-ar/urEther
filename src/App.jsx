import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Landing from "./pages/Landing/Landing"
import Footer from "./components/Layout/Footer"

function App() {

    return (
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>

        <Footer/>
      </div>
    )
}

export default App
