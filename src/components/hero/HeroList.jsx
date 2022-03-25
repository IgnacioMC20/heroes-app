import { useMemo } from "react";
import { getHeoresPublisherById } from "../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeoresPublisherById( publisher ), [ publisher ] );
    


  return (
    <div>
     <h1>Hero List - { publisher } </h1>  
     <div className="row animate__animated animate__fadeIn"> 
    {
        heroes.map( hero => (
            <HeroCard  key={ hero.id } { ...hero } />
        ) )
    }
     </div> 
    </div>
  )
}
