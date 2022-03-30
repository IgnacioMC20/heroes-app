import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"

export const HeroesApp = () => {
  const init = () => {
    // ? esta funcion se encarga de revisar si hay un token en el localStorage y si no es asi, lo setea en false
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  }

  const [ user, dispatch ] = useReducer( authReducer, {}, init )

  useEffect(() => {
    if(!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [ user ])
  

  return (
    <div>
      <AuthContext.Provider value={ {user, dispatch} }>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  )
}
