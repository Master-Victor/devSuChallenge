// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';
// import { setPokemonsList } from '../redux/slices/pokemonsReducer';
// export const usePokemons = () => {

//     const [ pokemons, setPokemons ] = useState([]);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1')
//             .then( (res) => dispatch( setPokemonsList(res) ) )
//             .catch( (err) => dispatch( setPokemonsList(err) ) )
//     }, [])
//     return pokemons;
// }