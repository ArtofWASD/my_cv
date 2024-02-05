import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="grid justify-items-center content-evenly bg-blue-300">
      <p className="text-xs items-end text-center">Develop and Disigned by Chunl3e666</p>
      <p className="text-xs  ">Copyright {year}</p>
    </footer>
  )
}

export default Footer
