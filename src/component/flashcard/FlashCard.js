import "./style.css"
import Card from "../card/Card.js";
import seta from "../../assets/imagem/setinha.png";
import { useState } from "react";
import Pergunta from "../pergunta/Pergunta";

export default function FlashCard({computarResposta, setComputarResposta, qntRespondida, setQntRespondida, setCor, isClicado, setIsClicado, nome, pergunta, resposta}) {

    const [isFlip, setIsFlip] = useState(true);
    const [respondido, setRespondido] = useState(true);

    function flipar(){

        setIsFlip(!isFlip);
    }
  
    return (

        <div>

            {isFlip ? <Card className="frente " >
                <p className="textoCard">{pergunta}</p>
                <div className="imagemSeta" onClick={()=>{flipar()}}>
                    <img src={seta} alt="" />
                </div>
            </Card> : <Card className=" fundo" >
                <p className="textoCard">{resposta}</p>
                <div className="botoes" >
                    <button className="botao1" onClick={ ()=> { setComputarResposta([...computarResposta, <ion-icon name="close"></ion-icon>]) ;setIsClicado(!isClicado);setCor("vermelhor"); setQntRespondida(qntRespondida + 1) }}>Não lembrei</button>
                    <button className="botao2" onClick={ ()=> { setComputarResposta([...computarResposta,<ion-icon name="remove-circle-outline"></ion-icon>]) ;setIsClicado(!isClicado);setCor("laranja"); setQntRespondida(qntRespondida + 1) }} > quase não lembrei 2</button>
                    <button className="botao3" onClick={ ()=> { setComputarResposta([...computarResposta,<ion-icon name="checkmark"></ion-icon>]) ;setIsClicado(!isClicado);setCor("verde"); setQntRespondida(qntRespondida + 1) }} >Zap!</button>
                </div>
            </Card> }
            
        </div>

    )
}