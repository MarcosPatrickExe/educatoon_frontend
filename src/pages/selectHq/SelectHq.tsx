import React from 'react';
import { Link } from 'react-router-dom';
import './selecthq.css';
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


function SelectHq() {
  
  return (
    <div className="select-hq-bg">
          <div className="select-corpo container">
            <div className="header-and-btns">
                <div className='flex'>
                    <button>
                       <img src={arrow} alt="seta" />
                    </button>
                    <h2>Educatoon</h2>
                </div>
                <div className='flex'>
                    <button><img src={search} alt="search"/></button>
                    <button><img src={setting} alt="setting"/></button>
                </div>
            </div>
            <p className="titulo-select-hqs">Explore os quadrinhos</p>

            <div className="filtros flex">
                <a href="##">Fáceis</a>
                <a href="##">Desafiadores</a>
                <a href="##">Engraçados</a>
                <a href="##">Temáticos</a>
                <a href="##">Turminha</a>
            </div>
            <div className="secao-hqs">
              <div className="hqs-row flex">
                  <Link to={"/tirinha"}>
                      <div className="one-hq">
                          <img src={tirinhaPh} alt="comic"/>
                      </div>
                  </Link>
                  <div className="one-hq">
                      <img src={tirinhaPh2} alt="comic"/>
                  </div>
                  <div className="one-hq">
                      <img src={tirinhaPh3} alt="comic"/>
                  </div>
                  <div className="one-hq">
                      <img src={tirinhaPh4} alt="comic"/>
                  </div>
              </div>
              <div className="hqs-row flex">
                  <div className="one-hq">
                    <img src={tirinhaPh6} alt="comic"/>
                  </div>
                  <div className="one-hq">
                    <img src={tirinhaPh7} alt="comic"/>
                  </div>
                  <div className="one-hq">
                    <img src={tirinhaPh8} alt="comic"/>
                  </div>
                  <div className="one-hq">
                    <img src={tirinhaPh9} alt="comic"/>
                  </div>
              </div>
            </div>
            <div className="paginacao">
              <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="##" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagina-atual" href="##">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="##" aria-label="Next">
                           <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                  </ul>
               </nav>
            </div>
          </div>
    </div>
  
    
  )
}

export default SelectHq;