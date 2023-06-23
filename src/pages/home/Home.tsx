import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import personagensCaindo from "../../assets/home/Personagens-caindo.svg";
import graduationHat from "../../assets/home/graduation-hat.svg";
import Navbar from '../../components/Navbar';

function Home() {
  return(
    <React.Fragment>
       <div className="secao-primeira">
        <div className="container">
          <Navbar/>
        <h1>Junte-se a <br/> aventura!</h1>
        <p>Transforme a <b>aprendizagem</b> <br/> em <b>diversão</b> com o Educatoon!</p>
        <button type="button" className="btn btn-primary" id="btn-entrar">Ser um parceiro</button>
        </div>
       </div>
      <div className="container secao-sobre-nos">
        <div className="sobre-nos-right">
          <img src={personagensCaindo} alt="figura com personagens" />
        </div>
        <div className="sobre-nos-left">
            <div className="sobre-nos-textos">
              <h2>Matemática + Diversão <br/> = Educatoon</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique mauris aliquet non. Ut pellentesque eleifend nulla.</p>
            </div>
            <div className="sobre-nos-textos">
              <h2>Aventuras matemáticas <br/> com quadrinhos!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique mauris aliquet non. Ut pellentesque eleifend nulla.</p>
            </div>
            <button type="button" className="btn btn-primary" id="btn-entrar">Veja mais</button>
        </div>
      </div>
        <div className="secao-vantagens">
          {/* <h2>Por que nos escolher?</h2> */}
          <div className="card-vantagem">
           <img src={graduationHat} alt="figura com personagens" />
            <p className='titulo-vantagem'>Vantagem 01</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
          </div>
          <div className="card-vantagem">
            <img src={graduationHat} alt="figura com personagens" />
            <p className='titulo-vantagem'>Vantagem 01</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
          </div>
          <div className="card-vantagem">
            <img src={graduationHat} alt="figura com personagens" />
            <p className='titulo-vantagem'>Vantagem 01</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
          </div>
        </div>
        <div className="secao-personagens">
          <div className="personagens-caixas">
            <div className="personagens-caixa"></div>
            <div className="personagens-caixa"></div>
          </div>
          <div className="personagens-caixas">
            <div className="personagens-caixa"></div>
            <div className="personagens-caixa"></div>
          </div>
          <div className="personagens-caixas">
            <div className="personagens-caixa"></div>
            <div className="personagens-caixa"></div>
          </div>
        </div>
        <div className="secao-planos">
          {/* <h2>Nossos Planos</h2> */}
          <div className="card-planos">
            <div className="plano-head">
              <p className="cifrao">R$</p>
              <p className="plano-valor">00</p>
            </div>
            <div className="descricao">
              <p>.........</p>
            </div>
          </div>
          <div id="midlle-card" className="card-planos">
            
          </div>
          <div className="card-planos">
            
          </div>
        </div>
        <div className="secao-roda-pe">

        </div>
        <button>
             <Link to={"/login"}>
                Go to Login page
             </Link>
        </button>
    </React.Fragment>
     
  )
}

export default Home;