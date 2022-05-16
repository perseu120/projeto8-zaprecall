import { useState } from 'react';
import FlashCard from '../flashcard/FlashCard';
import './style.css';


export default function Pergunta({ computarResposta, setComputarResposta, qntRespondida, setQntRespondida, nome, pergunta, resposta}) {

    const [isClicado, setIsClicado] = useState(true);

    const [cor, setCor] = useState("");

    function clicou() {

        setIsClicado(!isClicado);
    }

    return (

        isClicado ? <div className={`pergunta ${cor}`} onClick={() => { clicou() }}>

            <h4 className={`${cor}`}> {nome}</h4 >
            <ion-icon className="play-outline" name="play-outline"></ion-icon>

        </div > :  < FlashCard computarResposta={computarResposta} setComputarResposta={setComputarResposta} qntRespondida={qntRespondida} setQntRespondida={setQntRespondida} setCor={setCor} isClicado= {isClicado} setIsClicado={setIsClicado} nome={nome} pergunta={pergunta} resposta={resposta} />

        
    )
}