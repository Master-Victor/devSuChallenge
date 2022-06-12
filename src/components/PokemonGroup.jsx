import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePokemon, updatepokemon } from '../redux/slices/pokemonsSlice';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import "./style/container.css"
const PokemonGroup = ({list}) => {

    const dispatch = useDispatch();

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
                            <td>{ 'imagen'/*pokemon.image*/ }</td>
                            <td>{ pokemon.attack }</td>
                            <td>{ pokemon.defense }</td>
                            <td className='icons' >
                                <AiFillEdit size={25} color={'#0d6efd'} onClick={ () => dispatch( updatepokemon() ) }/>
                                &nbsp;&nbsp;&nbsp;
                                <AiOutlineDelete size={25} color={'#0d6efd'} onClick={ () => dispatch( deletePokemon(pokemon.id) ) } />
                            </td>
                        </tr>
                    )
                }      
            </tbody>
        </table>
    )
}

export default PokemonGroup