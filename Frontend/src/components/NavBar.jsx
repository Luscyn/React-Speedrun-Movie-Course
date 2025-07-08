import { Link } from "react-router-dom"

function NavBar() {
    return <nav class="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie Brand</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Movie App</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            
        </div>
    </nav>
}

export default NavBar