import {Link} from 'react-router-dom';

//change <Link></Link> to <Link></Link>
//change href="#" to to="/"
function Navbar(){
    return(
        <div className='container'>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prices">Prices</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/students">Students List</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Navbar;

