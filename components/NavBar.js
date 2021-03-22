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
                            <Link href="/">
                                <button className={"nav-link " + isActive("/")}>
                                    About Me
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/skills">
                                <button
                                    className={
                                        "nav-link " + isActive("/skills")
                                    }
                                >
                                    Skills
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects">
                                <button
                                    className={
                                        "nav-link " + isActive("/projects")
                                    }
                                >
                                    Projects
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <button
                                    className={
                                        "nav-link " + isActive("/contact")
                                    }
                                >
                                    Contact
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
