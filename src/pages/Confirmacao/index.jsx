import Navbar from '../../components/navbar/index';
import './index.css';
import icon from '../../img/icon1.jpeg'

function App() {
  return (
    <>
      <Navbar />
      <div className="confirmacao-body d-flex align-items-center justify-content-center">
          <div className="div-principal">
            <h1 className="text-center">Por favor, retire seu cartão</h1>
            <p className="text-center">Seu quarto fica no segundo andar n° 255</p>
            <img className="icon-cartao" src={icon} alt="icone cartao" />
          </div>
      </div>
    </>
  );
}

export default App;
