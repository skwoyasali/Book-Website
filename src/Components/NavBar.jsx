import { Link } from "react-router-dom"

function NavBar(){
    return (
        <>
        <nav className="flex justify-center items-center">
            <Link className="m-2 p-5 font-medium hover:bg-blue-200"  to="">Home</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="browsebook">Browse Book</Link>
            <Link className="m-2 p-2 font-medium hover:bg-blue-200" to="addbook">Add Book</Link>
        </nav>
        </>
    )
}

export default NavBar;