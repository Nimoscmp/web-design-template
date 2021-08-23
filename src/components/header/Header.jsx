import { menuSpanish , menuEnglish } from "../../utils/constants/menu";
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
                            {menuEnglish.map(item => (
                                <li className="nav-item d-flex align-items-center" key={item.id}>
                                    <a className="nav-link font-montserrat" aria-current="page" href="#b">{ item.text }</a>
                                </li>
                            ))}
                        </ul>
                        <div class="btn-group p-0 m-1">
                            <button class="btn btn-secondary max-h50" type="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-language fa-2x m-0 p-0"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguage">
                                <li><a class="dropdown-item" href="#eng">English</a></li>
                                <li><a class="dropdown-item" href="#esp">Español</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>       
    </>
    )
}

export default Header
