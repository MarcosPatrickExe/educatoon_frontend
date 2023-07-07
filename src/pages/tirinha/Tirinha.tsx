import React from 'react';
import { Link } from 'react-router-dom';
import './tirinha.css';
import pg1 from "../../assets/tirinha/pg-1.png";
import pg2 from "../../assets/tirinha/pg-2.jpg";
import pg3 from "../../assets/tirinha/pg-3.jpg";
import pg4 from "../../assets/tirinha/pg-4.jpg";
import pg5 from "../../assets/tirinha/pg-5.jpg";
import pg6 from "../../assets/tirinha/pg-6.jpg";
import pg7 from "../../assets/tirinha/pg-7.jpg";
import pg8 from "../../assets/tirinha/pg-8-2.jpg";
import pg9 from "../../assets/tirinha/pg-9.jpg";



function Tirinha() {

  return (
    <div className="tirinha container">
      <img src={pg1} alt="" />
      <img src={pg2} alt="" />
      <img src={pg3} alt="" />
      <img src={pg4} alt="" />
      <img src={pg5} alt="" />
      <img src={pg6} alt="" />
      <img src={pg7} alt="" />
      <img src={pg8} alt="" />

      <div className="caixa-interacao">
          <div className="imagem-interacao">
          </div>

          <div className="texto-interacao">
              <p>RAUL OLHA PARA AS BOLINHAS DE GUDE EM SUAS MÃOS, E DIZ QUE TEM O TOTAL DE:</p>
              <div className="btns-interacao">
                  <button>5 </button>
                  <button>2 </button>
                  <button>7 </button>
                  <button>3 </button>
              </div>
          </div>
      </div>

      <img src={pg9} alt="page final" />

    </div>
  )
}

export default Tirinha;