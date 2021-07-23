import Carousel from './carousel';
import react from 'react';
import { Link } from 'react-router-dom';


const Landing = (props) => {
    var name = "Cake Shop"
    function logout() {
        localStorage.removeItem("token")
        window.location.reload();
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{name}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={'/'}><li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li></Link>
                            <Link to={'/productDetails'}><li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Product Detail</a>
                            </li></Link>
                            <Link to={'/signup'}><li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">SignUp</a>
                            </li></Link>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {!props.isuserloogedin && <form class="d-flex">
                            <Link to={'/login'}> <button class="btn btn-outline-success mr-2" type="submit">Login</button></Link>
                        </form>}

                        {props.isuserloogedin && <form class="d-flex">
                            <Link to={'/'}> <button class="btn btn-outline-warning" type="submit">Cart</button></Link>
                            <Link to={'/'}> <button class="btn btn-outline-danger" onClick={logout} type="submit">Logout</button></Link>
                        </form>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Landing