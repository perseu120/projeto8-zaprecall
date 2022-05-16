import './reset.css';
import './style.css'
import ReactDOM from 'react-dom';
import TelaInicial from './component/telaInicial/TelaInicial.js';
import TelaLogin from './component/telaLogin/TelaLogin.js';
import { useState } from 'react';


function App(){

    
    const [init, setInit] = useState();
  
    return(

        <div className='fundoAplicacao'>
           
            {true ? <TelaLogin  /> : <TelaInicial />}

        </div>
        
    )

}

ReactDOM.render(App(), document.querySelector('.root'));