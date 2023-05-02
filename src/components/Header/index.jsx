import { useNavigate, useLocation } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <header>
      {location.pathname !== "/" ? <button className="back-button" onClick={() => navigate(-1)}><FaChevronLeft/></button> : <button className="back-button" disabled></button>}
      <div className="logo">
        <img src='images/wzdmz_recipes.svg' />
      </div>
      {location.pathname !== "/settings" ?
        <button className="navlink" onClick={() => navigate('/settings')}><MdSettings/></button>
      : <button className="navlink" disabled></button>}
      
    </header>
    </>
  )
}

export default Header