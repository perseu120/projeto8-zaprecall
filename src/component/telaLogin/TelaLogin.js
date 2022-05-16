import logo from "../../assets/imagem/logo.png";
import './style.css';


export default function TelaLogin(){

    return (
        <div className="telaLogin" >

            <img className="imagemLogo" src={logo} alt=""/>

            <h1 className="tituloPagina">ZapRecall</h1>

            <button className="buttonIniciar" >Iniciar Recall!</button>  

        </div>
    )
}