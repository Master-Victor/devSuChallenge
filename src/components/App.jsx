import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from '../redux/slices/pokemonsSlice';
import axios from 'axios';
import NavBar from './NavBar';
import PokemonList from './PokemonList';
import NewPokemon from './NewPokemon';
import './style/container.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllPokemons = async () => {
      const res = await axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
      dispatch( getAllPokemons(res.data) );
    }
    fetchAllPokemons().catch(console.error);;
  }, [])

  const pokemons = useSelector(store => store.pokemons);

  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <PokemonList list={pokemons.list.data} />
        <Routes>
          <Route path='/new' element={<NewPokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App