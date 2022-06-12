import React,{useEffect} from 'react'
import { usePokemons } from '../hooks/usePokemons';
import { useSelector, useDispatch } from "react-redux";
import {getAllPokemons} from '../redux/slices/pokemonsSlice';
import axios from 'axios';
import NavBar from './NavBar';
import PokemonGroup from './PokemonGroup';
import NewPokemon from './NewPokemon';
import './style/container.css'
const App = () => {

  const dispatch = useDispatch();
    useEffect( () => {
      const fetchAllPokemons = async () => {
          const res = await axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
          dispatch(getAllPokemons(res.data));
      }
      fetchAllPokemons().catch(console.error);;
  }, [])
  const pokemons = useSelector(store => store.pokemons);

  return (
    <div className='container'>
      <NavBar/> 
      <PokemonGroup list={ pokemons.list.data.payload } />
      <NewPokemon/>
    </div>
  )
}

export default App