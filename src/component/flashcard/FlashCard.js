import "./style.css"
import Card from "../card/Card.js";
import seta from "../../assets/imagem/setinha.png";
import { useState } from "react";
import Pergunta from "../pergunta/Pergunta";

export default function FlashCard({nome, pergunta, resposta}) {

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
                    <button className="botao1" onClick={()=>{ }}>Não lembrei</button>
                    <button className="botao2"> quase não lembrei 2</button>
                    <button className="botao3">Zap!</button>
                </div>
            </Card> }
            
        </div>

    )
}