import React from 'react';
import { Link } from 'react-router-dom';
import './selecthq.css';
import avatar from "../../assets/avatar.svg";
import Category from '../category/Category';


function SelectHq() {
  return (
    <div className="select-hq-bg">
      <div className="header-and-btns">
        <div>
          <a href=""></a>
          <h2>Educatoon</h2>
        </div>
        <div>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <p className="titulo-select-hqs">Explore os quadrinhos</p>
      <div className="tag">
        <a href="">Fáceis</a>
        <a href="">Desafiadores</a>
        <a href="">Engraçados</a>
        <a href="">Temáticos</a>
        <a href="">Turminha</a>
      </div>
      <div className="all">
        <div className="hqs-row">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hqs-row">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="paginacao">
        
      </div>
    </div>
    
  )
}

export default SelectHq;