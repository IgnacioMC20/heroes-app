import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";
import queryString from 'query-string';
import { useMemo } from "react";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });
  
  
  const { searchText } = formValues;

  const heroes = useMemo(() => getHeroesByName( q ), [q]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`hola ${searchText}`);
    navigate(`?q=${searchText}`);
  }

    return (
      <div>
        <h1>Busquedas</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ handleSearch }>
              <input type="text" placeholder="Buscar Heroe" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange}/>
              <div className="d-flex justify-content-end"><button className="btn btn-primary mt-3" onClick={handleSearch}>Buscar</button></div>
            </form>
          </div>
          <div className="col-7">
            {
              heroes.map( hero => <HeroCard key={hero.id} {...hero} />)
            }
          </div>
        </div>
      </div>
    )
  }
  