import style from "./Header.module.css";
import logotipo from "/img/logo_tipo.png"

const  Header = () => {
  return (
    <header className={style.header}>
         <img src={logotipo} />
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
                <li> <button className={style.button_login}>Iniciar sesión</button></li>
                <li> <button className={style.button_signup}>Resgistarse</button></li>
            </ul>
        </nav>

       
       
        
    </header>
  )
}

export default Header;