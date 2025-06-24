import { Link } from "react-router-dom"

function Header(){
    return (
        <>
        <nav className="flex justify-center items-center">
            <Link className="m-2 p-2 font-medium hover:bg-blue-200"  to="/Book-Website/">Home</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="/Book-Website/about">About</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="/Book-Website/contact">Contact</Link>
        </nav>
        </>
    )
}

export default Header;