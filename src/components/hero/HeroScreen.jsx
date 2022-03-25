import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByIds } from "../selectors/getHeroByIds";

export const HeroScreen = () => {

  // ? Hook para parametros enviados por url
  // const params = useParams()

  const { heroId } = useParams();

  const hero = useMemo( () => getHeroByIds( heroId ), [ heroId ]);

  const imagePath = `/assets/${hero.id}.jpg`;

  const navigate = useNavigate();

  const hanldeReturn = () => {
    // ? Regresa en el historial
    navigate(-1);
  }
  if(!hero) return <Navigate to={'/'}/>
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero} />
      </div>
      <div className="col-8">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-transparent text-white">
            <b>Alter Ego: </b> {alter_ego} 
          </li>
          <li className="list-group-item bg-transparent text-white">
            <b>Publisher: </b> {publisher} 
          </li>
          <li className="list-group-item bg-transparent text-white">
            <b>Firts Appearance: </b> {first_appearance} 
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary" onClick={ hanldeReturn }>Regresar</button>
      </div>
    </div>
  )
}
