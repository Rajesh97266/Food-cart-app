import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
   <div>
    <h1>Food Cart</h1>
    <ul>
        <li>
            <Link to="/"> Home</Link>
        </li>
        <li>
            <Link to="/cart"> Cart</Link>
        </li>
    </ul>
   </div>
   
    </>
  )
}

export default Header