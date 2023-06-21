import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return(
    <React.Fragment>
       <h1>Testing a home page</h1>

        <button>
             <Link to={"/login"}>
                Go to Login page
             </Link>
        </button>
        <button>
             <Link to={"/category"}>
                Go to Category page
             </Link>
        </button>
    </React.Fragment>
     
  )
}

export default Home;