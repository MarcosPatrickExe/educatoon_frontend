import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import personagensCaindo from "../../assets/home/Personagens-caindo.svg";
import persPlaceHolder from "../../assets/home/pers-ph.svg";
import mattImg from "../../assets/home/matt-img.svg";
import pamImg from "../../assets/home/pam-img2.svg";
import matofobicoImg from "../../assets/home/matofobico-img.svg";
import susieImg from "../../assets/home/susie-img.svg";
import VanessinhaImg from "../../assets/home/vanessinha-img.svg";
import patrickImg from "../../assets/home/patrick-img.svg";
import graduationHat from "../../assets/home/graduation-hat.svg";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
function Home() {
  return(
    <React.Fragment>
      <div className="home">

       <div className="secao-primeira">
        <div className="container">
          <Navbar/>
        <h1>Junte-se a <br/> aventura!</h1>
        <p>Transforme a <b>aprendizagem</b> <br/> em <b>diversão</b> com o Educatoon!</p>
        <button type="button">Ser um parceiro</button>
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
            <button type="button">Veja mais</button>
        </div>
      </div>
        <div className="container secao-vantagens">
          <h2>Por que nos escolher?</h2>
          <div className="card-vantagens">
            <div className="card-vantagem">
            <img src={graduationHat} alt="figura com personagens" />
              <p className='titulo-vantagem'>Vantagem 01</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
            </div>
            <div className="card-vantagem">
              <img src={graduationHat} alt="figura com personagens" />
              <p className='titulo-vantagem'>Vantagem 02</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
            </div>
            <div className="card-vantagem">
              <img src={graduationHat} alt="figura com personagens" />
              <p className='titulo-vantagem'>Vantagem 03</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.</p>
            </div>
          </div>
        </div>
        <div className="container secao-personagens">
          <div className="personagens-caixas">
            <div className="personagens-caixa matt">
            <div className="container-personagem">
               
                <div className="pers-img">
                  <img src={mattImg} alt="" />
                </div>
                <div className="pers-nome">
                <p>Matt</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
              </div>
            </div>
            <div className="personagens-caixa pam">
              <div className="container-personagem">
              
                <div className="pers-nome">
                <p>Pam</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
                <div className="pers-img">
                  <img src={pamImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="personagens-caixas-meio">
            <div className="personagens-caixa" id="susie">
            <div className="container-personagem">
               
                <div className="pers-img">
                  <img src={susieImg} alt="" />
                </div>
                <div className="pers-nome">
                <p>Susie</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
              </div>
            </div>
            <div className="personagens-caixa" id="vanessinha">
            <div className="container-personagem">
               
                <div className="pers-nome">
                <p>Vanessinha</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
                <div className="pers-img">
                  <img src={VanessinhaImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="personagens-caixas">
            <div className="personagens-caixa patrick">
            <div className="container-personagem">
              
                <div className="pers-nome">
                <p>Patrick</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
                <div className="pers-img">
                  <img src={patrickImg} alt="" />
                </div>
              </div>
            </div>
            <div className="personagens-caixa matofobico">
            <div className="container-personagem">
              
                <div className="pers-img">
                  <img src={matofobicoImg} alt="" />
                </div>
                <div className="pers-nome">
                <p>Matofóbico</p>
                <button type="button" className="conheca-me">Me conheça</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wav-rodape">
        <div className="secao-planos container">
          <h2>Nossos Planos</h2>
          <div className="cards-planos">
          <div className="card-planos descer">
            <div className="plano-head">
              <div className="preco-plano">
           
              <p className="plano-valor">R$<span className="destaque">00</span>,00</p>
              <p className="cifrao">/Por mês</p>
              </div>
              <button type="button" className="conheca-me">Plano Escola Prata</button>
            </div>
            <div className="descricao">
              <p>Lorem Ipsum dolor </p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
            </div>
            <div className="button-assinar">
            <button type="button" className="conheca-me">Assinar Plano</button>
            </div>
          </div>
          <div id="midlle-card" className="card-planos">
          <div className="plano-head">
              <div className="preco-plano">
           
              <p className="plano-valor">R$<span className="destaque">00</span>,00</p>
              <p className="cifrao">/Por mês</p>
              </div>
              <button type="button" className="conheca-me">Plano Escola Ouro</button>
            </div>
            <div className="descricao">
              <p>Lorem Ipsum dolor </p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
            </div>
            <div className="button-assinar">
            <button type="button" className="conheca-me">Assinar Plano</button>
            </div>
          </div>
          <div className="card-planos descer">
          <div className="plano-head">
              <div className="preco-plano">
           
              <p className="plano-valor">R$<span className="destaque">00</span>,00</p>
              <p className="cifrao">/Por mês</p>
              </div>
              <button type="button" className="conheca-me">Plano Escola Aluno</button>
            </div>
            <div className="descricao">
              <p>Lorem Ipsum dolor </p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
              <p>Lorem Ipsum dolor</p>
            </div>
            <div className="button-assinar">
            <button type="button" className="conheca-me">Assinar Plano</button>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div className="secao-roda-pe">
            <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
     
  )
}

export default Home;