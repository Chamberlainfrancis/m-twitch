import Link from "next/link";
import Image from "next/image";

const name = "twitch logo";
const logo = "/images/logo.jpg";

export default function Menubar() {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand navbar-light bg-white shadow">
            <div className="container-fluid ">
                <div>
                    <Link href="/">
                        <a className="navbar-brand me-0">
                            <span className="d-inline-block align-text-top">
                                <Image
                                    priority
                                    src={logo}
                                    height={30}
                                    width={30}
                                    alt={name}
                                />
                            </span>
                        </a>
                    </Link>

                    <Link href="/explore">
                        <button type="button" className="btn btn-link text-dark ms-2 pb-0">
                            <i className="material-icons">content_copy</i>
                        </button>
                    </Link>
                </div>

                <div className="d-flex align-items-center">
                    <button type="button" className="btn bg-twitch text-white btn-sm me-1 pt-0">
                        Open in App
                    </button>
                    <Link href="/search">
                        <button type="button" className="btn btn-link text-dark pb-0">
                            <i className="material-icons">search</i>
                        </button>
                    </Link>

                    <div className="dropdown">
                        <button type="button" className="btn btn-link text-dark pb-0" 
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="material-icons">more_horiz</i>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Privacy policy</a></li>
                            <li><a className="dropdown-item" href="#">Cookie policy</a></li>
                            <li><a className="dropdown-item" href="#">Terms of Service</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Toggle Dark Theme</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item text-wrap text-small" href="#">
                                    <span className="badge bg-danger">New</span> Install the web app for faster fun!
                                </a>
                            </li>

                            <li className="text-muted dropdown-item mt-2 text-small">Built by: @freesou_l</li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
        </>
    );  
}