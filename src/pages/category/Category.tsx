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
           

           <div className="box-top-center-text">
                <div className="div-top-center-text" >
                    <p> 
                        <span style={{color: '#F3B700'}}>Escolha</span> sua jornada
                    </p>
                </div>

                <div className="div-bottom-center-text" style={{backgroundColor: Colors.YELLOW }}>
                    <p> Iniciar </p>
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

// git push origin localBranchName:remoteBranchName