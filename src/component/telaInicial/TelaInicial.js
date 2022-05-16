import "./style.css"
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Pergunta from "../pergunta/Pergunta.js";
import { useState } from "react";

export default function TelaInicial() {

    const [qntRespondida, setQntRespondida] = useState(0);

    const [computarResposta, setComputarResposta] = useState([]);

    console.log(computarResposta)

    return (

        <div>

            <Header />
            <div className="containerPerguntas">
                <Pergunta computarResposta={computarResposta} setComputarResposta={setComputarResposta} qntRespondida={qntRespondida} setQntRespondida={setQntRespondida} nome="Pergunta 1" pergunta="O que é JSX?" resposta="Uma extensão de linguagem do JavaScript" />
                <Pergunta computarResposta={computarResposta} setComputarResposta={setComputarResposta} qntRespondida={qntRespondida} setQntRespondida={setQntRespondida}  nome="Pergunta 2" pergunta="O React é " resposta="uma biblioteca JavaScript para construção de interfaces" />
                <Pergunta computarResposta={computarResposta} setComputarResposta={setComputarResposta} qntRespondida={qntRespondida} setQntRespondida={setQntRespondida}  nome="Pergunta 3" pergunta="Componentes devem iniciar com" resposta="letra maiúscula" />
                <Pergunta computarResposta={computarResposta} setComputarResposta={setComputarResposta} qntRespondida={qntRespondida} setQntRespondida={setQntRespondida}  nome="Pergunta 4" pergunta="Podemos colocar dentro do JSX" resposta=" expressões" />
                {/* 
5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes 
8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
- [ ] */}
            </div>
            <Footer> <span>{computarResposta}</span> {qntRespondida}/4 CONCLUÍDOS</Footer >

        </div>

    )
}