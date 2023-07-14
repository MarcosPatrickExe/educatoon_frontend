import groundGrass from '../../assets/ground_grass.svg';
import wave from '../../assets/wave.svg';
import './Category.css';
import cloud from '../../assets/cloud.png';
import Colors from '../../components/Utils';
import React, { useState } from 'react';
import pam from '../../assets/pam-planeta.png';
import matofobico from '../../assets/matofobico-planeta.png';
import pat from '../../assets/patrick-planeta.png';
import matt from '../../assets/matt-planeta.png';
import susie from '../../assets/susie-planeta.png';
import NavBar from '../../components/Navbar';
import { Link } from 'react-router-dom';


export default function Category(){

    const [ arrayImages, changeImagesSequence ] = useState( [pat, susie, matt, pam, matofobico] );


    const nextCategoryClickEvent = function(){
        const auxArr = [];
        auxArr[0] = arrayImages[4];

        for( let i=1; i < arrayImages.length; i++){
             auxArr[i] = arrayImages[i-1];
        }
        changeImagesSequence( auxArr );
    }

    const previousCategoryClickEvent = function(){
        const auxArr = Array(5);
        auxArr[4] = arrayImages[0];

        for( let i=3; i >= 0; i--){
             auxArr[i] = arrayImages[i+1];
        }
        changeImagesSequence(auxArr);
    }



    return (
        <div>
{/*---------------------NAVBAR COM ICONES DE PESQUISA E DE CONFIGURACAO --------------------------*/}
            <NavBar setYellowColorButtons={false}></NavBar>
{/*------------------------------------------------------------------------------============-----*/}


            <div className="left-start-planet" style={{ backgroundImage: `url( ${arrayImages[0]} )` }}></div>
            <div className="left-planet" style={{ backgroundImage: `url( ${arrayImages[1]} )` }}></div>
            <div className="central-planet" style={{ backgroundImage: `url( ${arrayImages[2]} )` }}></div>
            <div className="right-planet" style={{ backgroundImage: `url( ${arrayImages[3]} )` }}></div>
            <div className="right-end-planet" style={{ backgroundImage: `url( ${arrayImages[4]} )` }}></div>

           
            <div className="div-top-center-text  col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  p-1  p-sm-2  p-md-2 p-lg-2" >
                <p id="escolha-sua-jornada"> 
                    <span style={{color: '#F3B700'}}>Escolha</span> sua jornada
                </p>
            </div>

            <div className="div-bottom-center-text  col-4 col-sm-3 col-md-3 col-lg-2  p-1  p-sm-1" style={{backgroundColor: Colors.YELLOW }}>
                <Link to="/selecthq">
                    <p id="iniciar"> Iniciar </p>
                </Link>
            </div>
           



{/*------------------ BOTOES "PROXIMO" E "ANTERIOR" PARA MUDAR AS CATEGORIAS ---------------------*/}
            <div className="box-previous-next-btns">
                <div className="previous-btn" style={{backgroundColor: Colors.BLUE_PURPLE }} onClick={ previousCategoryClickEvent }>
                    <i className="fa fa-caret-left" style={{color: 'white'}} ></i>
                </div>

                <div className="next-btn" style={{backgroundColor: Colors.BLUE_PURPLE }} onClick={ nextCategoryClickEvent }> 
                    <i className="fa fa-caret-right" style={{color: 'white'}} ></i>
                </div>
            </div>
{/*------------------------------------------------------------------------------============-----*/}



{/*------------------ IMAGEM E GRADIENTE DO FUNDO ---------------------*/}
            <img className="cloud-left" src={cloud} alt="cloud" />

            <img className="cloud-right" src={cloud} alt="cloud" />

            <div className="light-point"></div>

            <div className="gradient-bg"></div>

            <img className="footer" src={groundGrass} alt="grass" />
                
            <img className="wave-bg" src={wave} alt="wave background" />
{/*-------------------------------------------------------------------------------------------------*/}

        </div>
    )
}

// COMANDOS PARA FAZER O PULL E O PUSH DE UMA BRANCH ESPECIFICA: 
// git pull origin other-branch
// git push origin master:category_page