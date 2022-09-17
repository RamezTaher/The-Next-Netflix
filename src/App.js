import { Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
