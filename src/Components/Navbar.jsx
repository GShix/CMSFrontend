import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
            <a className="logo" href="#">DambarGM</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div className="content">
        {/* <!-- Your e-commerce content goes here --> */}
    </div>
    </div>
  )
}

export default Navbar