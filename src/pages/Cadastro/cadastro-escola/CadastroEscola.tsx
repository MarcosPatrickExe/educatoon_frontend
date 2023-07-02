import React from 'react';
import { Link } from 'react-router-dom';
import '../cadastro-sem-cargo/cadastrosemcargo.css';
import facebookIcon from "../../../assets/facebook-icon.svg";
import gmailIcon from "../../../assets/google-icon.svg";
import linkedinIcon from "../../../assets/linkedin-icon.svg";

function CadastroEscola() {
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
            <select className="form-select" id="teste" aria-label="Default select example" placeholder="Escola">
              <option value="1">Escola</option>
              <option value="2">Particular</option>
            </select>
            <input className="form-control teste" id="teste" type="text" placeholder="Nome da Escola" aria-label="default input example" />
            <div className="endereco-escola">
              <input className="form-control teste" id="teste" type="text" placeholder="Cidade" aria-label="default input example" />
              <input className="form-control teste" id="teste" type="text" placeholder="Estado" aria-label="default input example" />
            </div>
            <select className="form-select" id="teste" aria-label="Default select example" placeholder="Escola">
              <option value="1">Tipo Escola</option>
              <option value="2">Particular</option>
            </select>
            <p>Ao informar meus dados, eu concordo com a política de privacidade</p>
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

export default CadastroEscola;