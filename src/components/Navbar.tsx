import {useState} from 'react';
import './NavBar.css';


export default function NavBar(){

    const [ showInputSearch, setInputSearchVisibilityy ] = useState<boolean>(false);
    const [ showButtonConfig, setButtonConfigVisibility ] = useState<boolean>(false);
    

    return(
       <nav className="navbar navbar-light  box-icons">
          <div className="navbar-header">
                
             <a className="navbar-brand title-logo" href="###" >Educatoon</a>

             <div className="nav-btns">
                <div className="nav-item search-div" onMouseOver={ ()=>setInputSearchVisibilityy(true) }  onMouseOut={ ()=>setInputSearchVisibilityy(false) }>
                    {
                        showInputSearch && (
                            <input className="search-input" type="text" placeholder="Search" aria-label="Search" />
                        )
                    }
                    <div className="find-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>

                <div className="nav-item config-div" onMouseOver={ ()=>setButtonConfigVisibility(true) }  onMouseOut={ ()=>setButtonConfigVisibility(false) }>
                    
                    { showButtonConfig && (
                        <div className="configuracoes-div">
                                <span> Configurações </span>
                        </div>
                        )
                    }
                    <div className="setting-icon" >
                        <i className="fa fa-cog"></i>
                    </div>
                </div>
             </div>
          </div>
      </nav>
    );
}