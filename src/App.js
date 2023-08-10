import {FiSearch} from 'react-icons/fi'
import "./styles.css"

function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador Cep</h1>

     <div className="containerInput">

      <input type="text" placeholder="Digite seu cep..."/>

      <button className="buttonSearch"> 
        <FiSearch size={25} color='#fafafa'/>
      </button>
     </div>

     <main className='main'>
      <h2>CEP: 74593580</h2>
      <span>Rua teste algum lugar</span>
      <span>Complemento teste algum lugar</span>
      <span>bairro teste algum lugar</span>
      <span>localidade teste algum lugar</span>
     </main>

    </div>
  );
}

export default App;
