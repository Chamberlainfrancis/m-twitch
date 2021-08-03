import Link from "next/link";
import Image from "next/image";

const name = "twitch logo";
const logo = "/images/logo.jpg";

export default function Menubar() {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <div className="container-fluid ">
                
                <div>
                    <Link href="#">
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

                    <Link href="#">
                        <button type="button" className="btn btn-link text-dark ms-2">
                            <i className="bi bi-collection"></i>
                        </button>
                    </Link>
                </div>

                <div>
                    <button type="button" className="btn btn-primary btn-sm me-1">
                        Open in App
                    </button>

                    <Link href="#">
                        <button type="button" className="btn btn-link text-dark">
                            <i className="bi bi-search"></i>
                        </button>
                    </Link>
                    <Link href="#">
                        <button type="button" className="btn btn-link text-dark">
                            <i className="bi bi-three-dots"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );  
}