import { menuSpanish } from "../../utils/constants/menu";
import '../../styles/styles.css';

const Header = () => {

    return (
    <>
        <header className="w-100 d-flex justify-content-end header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#a">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menuSpanish.map(item => (
                            <li className="nav-item" key={item.id}>
                                <a className="nav-link" aria-current="page" href="#b">{ item.text }</a>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </nav>
        </header>       
    </>
    )
}

export default Header
