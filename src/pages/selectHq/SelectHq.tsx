import React from 'react';
import { Link } from 'react-router-dom';
import './selecthq.css';
import avatar from "../../assets/avatar.svg";
import Category from '../category/Category';


function SelectHq() {
  return (
    <div className="select-user-bg">
    <h2>Quem está prestes a entrar <br/> nessa jornada conosco?</h2>
    <div className="users">
      <div className="user">
      <Link to={"/cadastroSemCargo"}>
        <img src={avatar} alt="" />
        <p>Sou aluno(a)!</p>
      </Link>
      </div>
      <div className="user">
        <Link to={"/cadastroescola"}>
          <img src={avatar} alt="" />
          <p>Sou escola!</p>          
        </Link>
      </div>
      <div className="user">
        <Link to={"/cadastroguardiao"}>
           <img src={avatar} alt="" />
          <p>Sou pai ou responsável!</p>
        </Link>
      </div>
    </div>
    </div>
    
  )
}

export default SelectHq;