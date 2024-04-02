import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages & Components
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
