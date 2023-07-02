import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import personagens from "../../assets/personagens-login2.png";
import facebookIcon from "../../assets/facebook-icon.svg";
import gmailIcon from "../../assets/google-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import Category from '../category/Category';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="box">
      <div className="container-login">
        <div className="left-side">
            <div className="infos-login">
                <h1>Entrar no Educatoon</h1>
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
                <p>Ou entre com o seu e-mail</p>
            </div>
            <div className="campos">
                <input className="form-control teste" id="teste" type="text" placeholder="Email" aria-label="default input example" />
                <input type="password" id="inputPassword5" placeholder="Senha" className="form-control" aria-labelledby="passwordHelpBlock" />
            </div>
            <div className="lem-esq-senha">
                <div className="checkbox-secao">
                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" arial-label="..."/>
                    <p>Lembrar Senha</p>
                </div>
                <a href="#">Esqueci minha senha</a>
            </div>
            <div className="botoes">
                <button type="button" className="btn btn-primary" id="btn-entrar">
                    <Link to={"/category"}> 
                        <span id="entrar"> Entrar </span> 
                    </Link>
                </button>
                <button type="button" className="btn btn-primary" id="btn-cadastrar">Criar Conta</button>
            </div>
            <a href="#">Esqueci minha senha</a>
          </div>
          <div className="botoes">
            <button type="button" className="btn btn-primary" id="btn-entrar">Entrar</button>
            <button type="button" className="btn btn-primary" id="btn-cadastrar"><Link to={"/cadastrosemcargo"}>
            Criar Conta
             </Link></button> 
          </div>
        </div>
        <div className="right-side">
             <img src={personagens} className='figura-login' />
        </div>
      </div>
    </div>
  )
}

export default Login;