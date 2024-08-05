import style from "./Header.module.css";

const  Header = () => {
  return (
    <header className={style.header}>
         <img src="https://cdn.discordapp.com/attachments/1256685515915399179/1269850145176948807/151_sin_titulo_20240804215056.png?ex=66b18f9b&is=66b03e1b&hm=38d80cad334d80a3b905fc9e8acd5d182134ce9c5d2f4e5d011326cd829f7b2d&" />
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