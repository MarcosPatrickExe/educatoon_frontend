import groundGrass from '../../assets/ground_grass.svg';
import wave from '../../assets/wave.svg';
import './Category.css';
import cloud from '../../assets/cloud.png';
import Colors from '../../components/Utils';
import { useState } from 'react';



export default function Category(){

    const [showInputSearch, setInputSearchVisibilityy ] = useState(false);
    const [showButtonConfig, setButtonConfigVisibility ] = useState(false);


    const handleMouseOnSearch = () => {
        console.log("mouse on");
        setInputSearchVisibilityy(true);
    }
    const handleMouseOutSearch = () => {
        console.log("mouse out");
        setInputSearchVisibilityy(false);
    }



    return (
        <>

            <nav className="navbar navbar-light  box-icons">
                <div className="navbar-header">
                    <a className="navbar-brand title-logo" href="#" >Educatoon</a>

                    <div className="nav-btns">
                        <div className="nav-item search-div">
                            {
                                showInputSearch && ( 
                                    <input className="search-input" type="text" placeholder="Search" aria-label="Search" />
                                ) 
                            }
                            <div className="find-icon" onClick={handleMouseOnSearch}  onMouseOut={handleMouseOutSearch}>
                                <i className="fa fa-search"></i>
                            </div>
                        </div>
                        <button className="nav-item setting-icon" onMouseOver={ handleMouseOnSearch }  onMouseOut={ handleMouseOutSearch } type="button">
                            <i className="fa fa-cog"></i>
                        </button>
                    </div>
                </div>
            </nav>

{/* 

            <h3 className="title-logo">Educatoon</h3>

            <div className="box-icons">
                <div className="find-icon">
                    <i className="fa fa-search"></i>
                    <img src={ require("../../assets/search-icon.png")} alt="search icon"></img>
                </div>
                <div className="setting-icon">
                    <i className="fa fa-cog"></i>
                    <img src={ require("../../assets/setting-icon.png")} alt="setting icon"></img> 
                </div>
            </div>
    */}

           <div className="box-column-text-center">
                <div className="div-top-center-text  col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  p-1  p-sm-2  p-md-2 p-lg-2" >
                    <p id="escolha-sua-jornada"> 
                        <span style={{color: '#F3B700'}}>Escolha</span> sua jornada
                    </p>
                </div>

                <div className="div-bottom-center-text  col-4 col-sm-4 col-md-3 col-lg-2  p-1  p-sm-1" style={{backgroundColor: Colors.YELLOW }}>
                    <p id="iniciar"> Iniciar </p>
                </div>
           </div>


           <div className="box-previous-next-btns">
                <div className="previous-btn" style={{backgroundColor: Colors.BLUE_PURPLE }}>
                    <i className="fa fa-caret-left" style={{color: 'white'}} ></i>
                </div>

                <div className="next-btn" style={{backgroundColor: Colors.BLUE_PURPLE }}> 
                    <i className="fa fa-caret-right" style={{color: 'white'}} ></i>
                </div>
           </div>


           <img className="cloud-left" src={cloud} alt="cloud" />

           <img className="cloud-right" src={cloud} alt="cloud" />

           <div className="light-point"></div>

           <div className="gradient-bg"></div>

           <img className="footer" src={groundGrass} alt="grass" />
            
           <img className="wave-bg" src={wave} alt="wave background" />
        </>
    );
}


// git pull origin other-branch

// git push origin master:category_page