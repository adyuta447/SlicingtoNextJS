import Menu from "./Menu";
import Link from 'next/link';
import ButtonNavbar from "./ButtonNavbar";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container px-0">
                <Link href="/">
                <a className="navbar-brand mr-0">
                    GivMoney
                </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navigation">
                        <Menu title="Features" href="/" />
                        <Menu title="Resources" href="/" />
                        <Menu title="Contact Us" href="/" />
                        <Menu title="Career" href="/" />
                    </ul>
                    <ButtonNavbar />
                </div>
            </div>
        </nav>

    )
}
