import Link from "next/link"
import { useRouter } from "next/router"

const NavBar = () => {
    const router = useRouter()

    const isActive = (r) => {
        if (r === router.pathname) {
            return "active"
        } else {
            return ""
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Yousif's Resume</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-evenly"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/skills">
                                <a
                                    className={
                                        "nav-link btn btn-info " +
                                        isActive("/skills")
                                    }
                                >
                                    Skills
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects">
                                <a
                                    className={
                                        "nav-link " + isActive("/projects")
                                    }
                                >
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a
                                    className={
                                        "nav-link " + isActive("/contact")
                                    }
                                >
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
