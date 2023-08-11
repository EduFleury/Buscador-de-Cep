import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import "./styles.css"
import api from './services/api';

function App() {

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }catch{
      alert("Ops erro ao buscar cep...");
      setInput("");
    }
  }

  const onChange = (event) =>{
    setInput(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) { // Verifica se a tecla pressionada é Enter (código 13)
      handleSearch();
    } else if (event.which === ESCAPE_KEY) { // Verifica se a tecla pressionada é Esc (código 27)
      setInput("");
    }
}

  return (
    <div className="container">
     <h1 className="title">Buscador Cep</h1>

     <div className="containerInput">

      <input type="text" 
             placeholder="Digite seu cep..."
             value={input}
             onChange={onChange}
             onKeyDown={onKeyDown}
      />

      <button className="buttonSearch" 
              onClick={handleSearch}> 
        <FiSearch size={25} color='#fafafa'/>
      </button>
     </div>

    {Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
     </main>
    )}
    </div>
  );
}

export default App;
