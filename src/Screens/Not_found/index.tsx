import Header from "../../components/ui/Header";
import styles from "./NotFound.module.css";
import img from "/img/notf.png"
const NotFound = () => {
  return (
  
    <>
    <Header/>
    <div className={styles.container}>
    <div className={styles.container_imagen}>
        <img src={img}/>
    </div>
    <div>  <h1>Esta Pagina No pudo ser encontrada</h1></div>
    <div>
      <span>Lo sentimos, la pagina que estas buscando no esta disponible.</span>
      <p></p>
      <span>Tal vez puedes intentar una nueva busqueda.</span>
      </div>
      
    </div>
   
    </>
  )
}

export default NotFound