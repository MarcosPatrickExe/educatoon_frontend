import groundGrass from '../../assets/ground_grass.svg';
import wave from '../../assets/wave.svg';
import './Category.css';
import cloud from '../../assets/cloud.png';
import Colors from '../../components/Utils';



export default function Category(){

    return (
        <>
            <h3 className="title-logo">Educatoon</h3>

            <div className="box-icons">
                <div className="find-icon">
                    <i className="fa fa-search"></i>
                    {/* <img src={ require("../../assets/search-icon.png")} alt="search icon"></img> */}
                </div>
                <div className="setting-icon">
                    <i className="fa fa-cog"></i>
                    {/* <img src={ require("../../assets/setting-icon.png")} alt="setting icon"></img> */}
                </div>
            </div>
           

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