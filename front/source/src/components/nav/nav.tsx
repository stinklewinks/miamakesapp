
function NavDark() {
  return (
    <nav className="bg-red-500 nav:bar primary:md">
        <ul className="poppins text:md nav:box primary:md">
            <li>Home</li>
            <li>Recipes</li>
        </ul>
        <div className="flex row items:center text:white poppins">
          Other Stuff
        </div>
    </nav>
  )
}

export default NavDark;