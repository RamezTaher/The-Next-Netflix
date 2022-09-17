import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="">Netflix</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
