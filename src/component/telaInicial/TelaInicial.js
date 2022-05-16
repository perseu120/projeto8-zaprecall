import "./style.css"
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Pergunta from "../pergunta/Pergunta.js";
// import FlashCard from "../flashcard/FlashCard.js";

export default function TelaInicial(){
    return(
        
        <div>

            <Header />
            <div>
                <Pergunta nome="Pergunta 1" />
                <Pergunta nome="Pergunta 2" />
                <Pergunta nome="Pergunta 3" />
                <Pergunta nome="Pergunta 4" />
                
            </div>
            <Footer />

        </div>

    )
}