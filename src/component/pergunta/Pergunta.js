import './style.css';


export default function Pergunta(props) {

    return (
        <div className="pergunta">

            <h4> {props.nome}</h4 >
            <ion-icon className="play-outline" name="play-outline"></ion-icon>

        </div >
    )
}