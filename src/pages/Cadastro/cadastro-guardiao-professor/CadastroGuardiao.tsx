import React from 'react';
import { Link } from 'react-router-dom';
import '../cadastro-sem-cargo/cadastrosemcargo.css';
import facebookIcon from "../../../assets/facebook-icon.svg";
import gmailIcon from "../../../assets/google-icon.svg";
import linkedinIcon from "../../../assets/linkedin-icon.svg";

function CadastroGuardiao() {
  return(
    <React.Fragment>
    <div className="caixa-maior">
      <div className="left-box">

      </div>
      <div className="right-box">



      <div className="infos-login">
        <div className="caixa-centro">
        <h1>Seja nosso parceiro!</h1>
        <div className="campos">
            <input className="form-control teste" id="teste" type="text" placeholder="Email" aria-label="default input example" />
            <input type="password" id="inputPassword5" placeholder="Senha" className="form-control" aria-labelledby="passwordHelpBlock" />
            <input className="form-control teste" id="teste" type="text" placeholder="Telefone" aria-label="default input example" />
            <select className="form-select" id="teste" aria-label="Default select example">
              <option selected>Pais ou Responsável</option>
              <option value="1">Pai</option>
              <option value="2">Responsável</option>
            </select>
            <div className="cadastro-links">
            <p>Ou entre com</p>
            <div className="btns-social-media">
                      <a href="#" className="btn-social-media">
                        <img src={gmailIcon} alt="Entrar com Gmail" />
                      </a>
                      <a href="#" className="btn-social-media">
                        <img src={facebookIcon} alt="Entrar com Facebook" />
                      </a>
                      <a href="#" className="btn-social-media">
                        <img src={linkedinIcon} alt="Entrar com Linkedin" />
                      </a>
            </div>
                  <p>Ao informar meus dados, eu concordo com a política de privacidade</p>
            </div>
          </div>
    
          <div className="botoes-2">
            <button type="button" className="btn btn-primary" id="btn-entrar">Crie uma conta</button>
          </div>
        </div>
        </div>
         

      </div>
    </div>
    </React.Fragment>
  )
}

export default CadastroGuardiao;