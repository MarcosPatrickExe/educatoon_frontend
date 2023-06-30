import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return(
    <React.Fragment>
      <div className="rodapebox container">
          <div className="caixa-rodape">
            <h2>Educatoon</h2>
            <p>(69) 8409-7978</p>
            <p>Av. Guaporé, 3109 - Jardim Clodoaldo.</p>
          </div>
          <div className="caixa-rodape">
            <p className="titulo">Navegue</p>
            <p>Quem Somos</p>
            <p>Vantagens</p>
            <p>Personagens</p>
            <p>Planos</p>
          </div>
          <div className="caixa-rodape">
          <p className="titulo">Personagens</p>
            <p>Personagem 01</p>
            <p>Personagem 02</p>
            <p>Personagem 03</p>
            <p>Personagem 04</p>
          </div>
          <div className="caixa-rodape">
          <p className="titulo">Redes sociais</p>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;