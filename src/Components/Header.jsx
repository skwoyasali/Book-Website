import { Link } from "react-router-dom"

function Header(){
    return (
        <>
        <nav className="flex justify-center items-center">
            <Link className="m-2 p-2 font-medium hover:bg-blue-200"  to="/">Home</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="/about">About</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="/contact">Contact</Link>
        </nav>
        </>
    )
}

export default Header;