export default function ButtonNavbar() {
    return (
                    <ul className="navbar-nav ml-auto authentication">
                        <li className="nav-item my-auto text-center login">
                            <a className="nav-link cl-white mb-3 mb-md-0" aria-current="page" href="#">Log in</a>
                        </li>
                        <li className="nav-item mr-0 text-center">
                            <a className="nav-link signup" href="#">
                                Sign up <span className="ml-2"><img src="./images/dark-mode/arrow-right.png"
                                        alt="arrow" className="img-fluid" /></span>
                            </a>
                        </li>
                    </ul>

    )
}
