import "./style.css"
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Pergunta from "../pergunta/Pergunta.js";

export default function TelaInicial() {

    return (

        <div>

            <Header />
            <div className="containerPerguntas">
                <Pergunta nome="Pergunta 1" pergunta="O que é JSX?" resposta="Uma extensão de linguagem do JavaScript" />
                <Pergunta nome="Pergunta 2" pergunta="O React é " resposta="uma biblioteca JavaScript para construção de interfaces" />
                <Pergunta nome="Pergunta 3" pergunta="Componentes devem iniciar com" resposta="letra maiúscula" />
                <Pergunta nome="Pergunta 4" pergunta="Podemos colocar dentro do JSX" resposta=" expressões" />
                {/* 
5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes 
8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
- [ ] */}
            </div>
            <Footer> 0/4 CONCLUÍDOS</Footer >

        </div>

    )
}