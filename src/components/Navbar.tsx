import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';


export default function NavBar( {setYellowColorButtons} :any ){

    const currentColor :string = (setYellowColorButtons===true) ? '#F3B700' :'white';
    const currentInputColor :string= (setYellowColorButtons) ? '#e0a903':'rgba(100, 100, 100, 0.2)';
    
    const [ showInputSearch, setInputSearchVisibilityy ] = useState<boolean>(false);
    const [ showButtonConfig, setButtonConfigVisibility ] = useState<boolean>(false);
    

    return(
       <nav className="navbar navbar-light  box-icons">
          <div className="navbar-header">
                
             <div className='title-and-optional-btn'>
                   {
                      setYellowColorButtons  && ( 
                          <Link to={"/cadastrosemcargo"}>
                                <div className="left-arrow-icon">
                                    <i className="fa fa-arrow-left"></i>
                                </div>
                          </Link>
                      )
                    }
                    <a id="title-logo" href="/">Educatoon</a>
             </div>


             <div className="nav-btns">
                <div className="nav-item search-div" onMouseOver={ ()=>setInputSearchVisibilityy(true) }  onMouseOut={ ()=>setInputSearchVisibilityy(false)}  style={{ backgroundColor: `${currentColor}` }}>
                    {
                        showInputSearch && (
                            <input className="search-input" type="text" placeholder="" aria-label="Search" style={{ backgroundColor: `${currentInputColor}`}} />
                        )
                    }
                    <div className="find-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>


                <div className="nav-item config-div" onMouseOver={ ()=>setButtonConfigVisibility(true) }  onMouseOut={ ()=>setButtonConfigVisibility(false)}  style={{ backgroundColor: `${currentColor}`}}>
                    { showButtonConfig && (
                        <div className="configuracoes-div" style={{ backgroundColor: `${currentColor}` }}>
                            <span> Configurações </span>
                        </div>
                        )
                    }
                    <div className="setting-icon"  >
                        <i className="fa fa-cog"></i>
                    </div>
                </div>

             </div>
          </div>
      </nav>
    );
}