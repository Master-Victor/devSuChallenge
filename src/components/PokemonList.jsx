import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePokemon, getAllPokemons } from '../redux/slices/pokemonsSlice';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import "./style/container.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
const PokemonList = ({list}) => {
    
    const dispatch = useDispatch();

    const fetchAllPokemons = async () => {
        const res = await axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
        dispatch( getAllPokemons(res.data) );
    }

    const handleDelete = (id) => {
        dispatch( deletePokemon(id) )
        setTimeout( () => fetchAllPokemons(), 1000);
    }  

    return (
        <table>
            <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Acciones</th>
                </tr>      
                {
                    (list !== undefined) && list.map( pokemon => 
                        <tr key={ pokemon.id }>
                            <td>{ pokemon.name }</td>
                            <td>{ <img src={pokemon.image} /> }</td>
                            <td>{ pokemon.attack }</td>
                            <td>{ pokemon.defense }</td>
                            <td className='icons' >
                                <Link to='new' state={pokemon} ><AiFillEdit size={25} color={'#0d6efd'}/></Link>
                                &nbsp;&nbsp;&nbsp;
                                <AiOutlineDelete size={25} color={'#0d6efd'} onClick={ () => handleDelete(pokemon.id) } />
                            </td>
                        </tr>
                    )
                }      
            </tbody>
        </table>
    )
}

export default PokemonList