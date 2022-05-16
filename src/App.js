import TelaInicial from './component/telaInicial/TelaInicial.js';
import TelaLogin from './component/telaLogin/TelaLogin.js';
import { useState } from 'react';

export default function App() {

  
    const [init, setInit] = useState(true);

    return (

        <div className='fundoAplicacao'>

            {false ? <TelaLogin init={init} setInit={setInit} /> : <TelaInicial />}

        </div>

    )

}
