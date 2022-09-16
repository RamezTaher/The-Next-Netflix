import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <h1>header</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
