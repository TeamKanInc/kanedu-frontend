import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import logotipo from "/img/logo_tipo.png"

const  Header = () => {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login")
  }
  const handleSignupClick = () => {
    navigate("/signup")
  }


  return (
    <header className={style.header}>
         <img src={logotipo} />
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
                <li> <button className={style.button_login} onClick={handleLoginClick}>Iniciar sesión</button></li>
                <li> <button className={style.button_signup} onClick={handleSignupClick}>Resgistarse</button></li>
            </ul>
        </nav>

       
       
        
    </header>
  )
}

export default Header;