import Link from "next/link";
import Image from "next/image";

const name = "twitch logo";
const logo = "/images/logo.jpg";

export default function SearchMenu() {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow">
            <div className="container-fluid">
                <div>
                    <Link href="/">
                        <a className="btn btn-link">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </Link>
                </div>
                <form className="w-75">
                    <input type="search" className="form-control" placeholder="search ..." 
                    aria-label="search" aria-describedby="basic-addon1" />
                </form>
            </div>
        </nav>
        </>
    );  
}