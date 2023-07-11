import React from 'react';
import { Link } from 'react-router-dom';
import './userSettings.css';
import avatar from "../../assets/avatar.svg";
import Category from '../category/Category';
import arrow from "../../assets/Icons/arrow.svg";
import search from "../../assets/Icons/search.svg";
import setting from "../../assets/Icons/setting.svg";
import tirinhaPh from "../../assets/select-hq/tirinha-ph.svg";
import tirinhaPh2 from "../../assets/select-hq/tirinha-ph2.svg";
import tirinhaPh3 from "../../assets/select-hq/tirinha-ph3.svg";
import tirinhaPh4 from "../../assets/select-hq/tirinha-ph4.svg";
import tirinhaPh6 from "../../assets/select-hq/tirinha-ph6.svg";
import tirinhaPh7 from "../../assets/select-hq/tirinha-ph7.svg";
import tirinhaPh8 from "../../assets/select-hq/tirnha-ph8.svg";
import tirinhaPh9 from "../../assets/select-hq/tirinha-ph9.svg";


function UserSettings() {
  
  return (
    <div className="user-settings-bg">
          <div className="select-corpo container">
            <div className="header-and-btns">
                <div className='flex titulo-branco'>
                    <button>
                       <img src={arrow} alt="seta" />
                    </button>
                    <h2>Educatoon</h2>
                </div>
                <div className='flex'>
                   
                </div>
            </div>      
            <div className="inputs-box">
            <p className="">Altere sua conta</p>
            <input className="form-control teste" id="teste" type="text" placeholder="Nome" aria-label="default input example" />
            <input className="form-control teste" id="teste" type="text" placeholder="Email" aria-label="default input example" />
            <input type="password" id="inputPassword5" placeholder="Senha" className="form-control" aria-labelledby="passwordHelpBlock" />
            <input className="form-control teste" id="teste" type="text" placeholder="Telefone" aria-label="default input example" />
            <select className="form-select" id="teste" aria-label="Default select example">
              <option selected>Pais ou Responsável</option>
              <option value="1">Pai</option>
              <option value="2">Responsável</option>
            </select>
            <input className="form-control teste" id="teste" type="text" placeholder="Escola" aria-label="default input example" />
            <div className="endereco-escola-2">
              <input className="form-control teste" id="teste" type="text" placeholder="Cidade" aria-label="default input example" />
              <input className="form-control teste" id="teste" type="text" placeholder="Estado" aria-label="default input example" />
            </div>
            <select className="form-select" id="teste" aria-label="Default select example" placeholder="Escola">
              <option value="1">Escola</option>
              <option value="2">Particular</option>
            </select>
            <div className="flex margin-top">
            <button type="button" className="btn btn-primary" id="btn-entrar">Salvar</button>
            <button type="button" className="btn btn-primary" id="btn-cancelar">Cancelar</button>
          </div>
            </div>
            </div>
        
    </div>
  
    
  )
}

export default UserSettings;