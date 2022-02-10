import { useState } from 'react';

function Home() {
    return (
      <div>
          Home 3
          <Contador />
      </div>)
}

function Contador() {
    const [contador, setContador] = useState(4);

    function adicionarContador(){
        setContador(contador+1)
        console.log(contador)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} id={contador}>Adicionar</button>
        </div>
    )
}

export default Home;