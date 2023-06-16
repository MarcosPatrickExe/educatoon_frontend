import './login.css';
import personagens from "../assets/personagens-login.svg";

function Login() {
  return (
    <div className="box">
      <div className="container-login">
        <div className="left-side">
          <h1>Entrar no Educatoon</h1>
          <div className="campos">
            <input className="form-control teste" id="teste" type="text" placeholder="Email" aria-label="default input example" />
            <input type="password" id="inputPassword5" placeholder="Senha" className="form-control" aria-labelledby="passwordHelpBlock" />
          </div>
          <div className="botoes">
            <button type="button" className="btn btn-primary" id="btn-entrar">Entrar</button>
            <button type="button" className="btn btn-primary" id="btn-cadastrar">Criar Conta</button>
          </div>
        </div>
        <div className="right-side">
          <img src={personagens} className='figura-login' />
        </div>
      </div>
    </div>
  )
}

export default Login;