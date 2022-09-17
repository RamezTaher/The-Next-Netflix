import React, { useState } from "react"
import { useEffect } from "react"

const Header = () => {
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsShown(true)
      } else {
        setIsShown(false)
      }
    })
  }, [window.scrollY])

  return (
    <header
      className={`fixed top-0 w-full py-1 z-20 transition-all ease-in ${
        isShown && "bg-dark"
      }`}
    >
      <nav className="container sm:mx-auto px-4 flex justify-between items-center ">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          className="w-[80px] object-contain"
        />
        <img
          src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"
          alt="Profile Icon"
          className="w-[35px] object-contain"
        />
      </nav>
    </header>
  )
}

export default Header
