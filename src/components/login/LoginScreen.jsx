import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login');
    navigate('/marvel', {
      replace: true
    })
  }


    return (
      <div>
          <h1>Login</h1>
          <hr />
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    )
  }
  