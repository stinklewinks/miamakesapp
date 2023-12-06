import React from 'react'

function NavDark() {
  return (
    <nav className="h:8 w:full bg-red-500 flex center items:center">
        <ul className="poppins text:md list:none flex row around text:white">
            <li>Home</li>
            <li>Recipes</li>
        </ul>
    </nav>
  )
}

export default NavDark;