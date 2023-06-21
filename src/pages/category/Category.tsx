import groundGrass from '../../assets/ground_grass.svg';
import wave from '../../assets/wave.svg';
import './Category.css';
import cloud from '../../assets/cloud.png';


export default function Category(){

    return (
        <>
            <img className="cloud-left" src={cloud} alt="cloud" />

            <img className="cloud-right" src={cloud} alt="cloud" />

            <div className="light-point"></div>

            <div className="gradient-bg"></div>

            <img className="footer" src={groundGrass} alt="grass" />
            
            <img className="wave-bg" src={wave} alt="wave background" />
        </>
    );
}