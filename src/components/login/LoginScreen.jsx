import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    // console.log('Login');
    // navigate('/marvel', {
    //   replace: true
    // })

    const action = {
      type: types.login,
      payload: {
        // ? logged: true, no se manda el logged porque el reducer se encarga de eso
        name: 'Ignacio Martínez',
      }
    }
    const lastPath = localStorage.getItem('pathname') || '/marvel';
    dispatch(action);
    navigate(lastPath, {
      replace: true
    });
  }


  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  )
}
