import React, { ButtonHTMLAttributes, useRef } from 'react';
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

  const pg8ref = React.createRef<HTMLImageElement>();
  const pg9ref = React.createRef<HTMLImageElement>();


  const moveToPreviousComic = ()=>{
        let imgElement = pg8ref.current as HTMLImageElement;
        imgElement.scrollIntoView();
  }
  const moveToNextComic = ()=>{
        let imgElement2 = pg9ref.current as HTMLImageElement;
        imgElement2.scrollIntoView();
  }



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
            <div className="imagem-interacao">
            </div>

            <div className="texto-interacao">
                <p>RAUL OLHA PARA AS BOLINHAS DE GUDE EM SUAS MÃOS, E DIZ QUE TEM O TOTAL DE:</p>
                <div className="btns-interacao">
                    <button onClick={ moveToPreviousComic }> 5 </button>
                    <button onClick={ moveToNextComic }> 9 </button>
                    <button onClick={ moveToPreviousComic }> 7 </button>
                    <button onClick={ moveToPreviousComic }> 10 </button>
                </div>
            </div>
        </div>

        <img ref={pg9ref} src={pg9} alt="page final" />

      </div>
    </div>
  )
}

export default Tirinha;