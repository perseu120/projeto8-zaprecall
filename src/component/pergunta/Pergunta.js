import { useState } from 'react';
import FlashCard from '../flashcard/FlashCard';
import './style.css';


export default function Pergunta({nome, pergunta, resposta}) {

    const [isClicado, setIsClicado] = useState(true);

    function clicou() {

        setIsClicado(!isClicado);
    }

    return (

        isClicado ? <div className="pergunta" onClick={() => { clicou() }}>

            <h4> {nome}</h4 >
            <ion-icon className="play-outline" name="play-outline"></ion-icon>

        </div > :  < FlashCard nome={nome}pergunta={pergunta} resposta={resposta} />

        
    )
}