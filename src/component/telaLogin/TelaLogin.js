import logo from "../../assets/imagem/logo.png";
import './style.css';


export default function TelaLogin({init, setInit}){

    return (
        <div className="telaLogin" >

            <img className="imagemLogo" src={logo} alt=""/>

            <h1 className="tituloPagina">ZapRecall</h1>

            <button className="buttonIniciar" onClick={()=>{setInit(!init)}} >Iniciar Recall!</button>  

        </div>
    )
}