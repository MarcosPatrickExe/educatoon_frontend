import React, { ButtonHTMLAttributes, useRef } from "react";
import { Link } from "react-router-dom";
import "./tirinha.css";
import pg1 from "../../assets/tirinha/1.svg";
import pg2 from "../../assets/tirinha/2.svg";
import pg3 from "../../assets/tirinha/3.svg";
import pg4 from "../../assets/tirinha/4.svg";
import pg5 from "../../assets/tirinha/5.svg";
import pg6 from "../../assets/tirinha/6.svg";
import pg7 from "../../assets/tirinha/7.svg";
import pg8 from "../../assets/tirinha/pg-8-2.jpg";
import pg9 from "../../assets/tirinha/pg-9.jpg";
import pg10 from "../../assets/tirinha/10.svg";
import pg11 from "../../assets/tirinha/11.svg";
import pg12 from "../../assets/tirinha/12.svg";
import pg13 from "../../assets/tirinha/13.svg";
function Tirinha() {
  const pg8ref = React.createRef<HTMLImageElement>();
  const pg9ref = React.createRef<HTMLImageElement>();

  const moveToPreviousComic = () => {
    let imgElement = pg8ref.current as HTMLImageElement;
    imgElement.scrollIntoView();
  };
  const moveToNextComic = () => {
    let imgElement2 = pg9ref.current as HTMLImageElement;
    imgElement2.scrollIntoView();
  };

  return (
    <div className="background">
      <div className="tirinha container">
        <img src={pg1} alt="" />
        <img src={pg2} alt="" />
        <img src={pg3} alt="" />
        <img src={pg4} alt="" />
        <img src={pg5} alt="" />
        <img src={pg6} alt="" />
        <img src={pg7} alt="" />
        <img ref={pg8ref} src={pg8} alt="" />

        <div className="caixa-interacao">
          <div className="imagem-interacao"></div>

          <div className="texto-interacao">
            <p>
              RAUL OLHA PARA AS BOLINHAS DE GUDE EM SUAS MÃOS, E DIZ QUE TEM O
              TOTAL DE:
            </p>
            <div className="btns-interacao">
              <button onClick={moveToPreviousComic}> 5 </button>
              <button onClick={moveToNextComic}> 9 </button>
              <button onClick={moveToPreviousComic}> 7 </button>
              <button onClick={moveToPreviousComic}> 10 </button>
            </div>
          </div>
        </div>

        <img ref={pg9ref} src={pg9} alt="page final" />
       
      </div>
    </div>
  );
}

export default Tirinha;
