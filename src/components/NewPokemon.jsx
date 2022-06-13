import React from 'react';
import { useDispatch } from 'react-redux';
import { setPokemon,updatepokemon, getAllPokemons } from '../redux/slices/pokemonsSlice';
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
const NewPokemon = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const fetchAllPokemons = async () => {
        const res = await axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
        dispatch( getAllPokemons(res.data) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (location.state === null)
            ?   (e.target.name.value !== '' && e.target.image.value !== '') 
                ? dispatch(setPokemon({
                    name: e.target.name.value,
                    image: e.target.image.value,
                    type: 'fire',
                    hp: 100,
                    attack: e.target.ataque.value,
                    defense: e.target.defensa.value,
                    idAuthor: 1,
                }))
                : alert('Name or Image no load')
            : e.target.name.value !== '' && e.target.image.value !== ''
                ? dispatch(updatepokemon({
                    id: location.state.id,
                    name: e.target.name.value,
                    image: e.target.image.value,
                    type: location.state.type,
                    hp: location.state.hp,
                    attack: e.target.ataque.value,
                    defense: e.target.defensa.value,
                    idAuthor: 1,                
                }) )
                : alert('Name or Image no load')
        setTimeout( () => fetchAllPokemons(), 1500); 
        e.target.name.value !== '' && e.target.image.value !== '' && alert(`${location.state === null ? 'Creado con exito' : 'Editado con exito'}`)
    }

    return (
        <div style={{ paddingTop: '20px', margin: '1vw' }} >
            <div style={{ border: '2px solid #ccc', background: 'white',minHeight: '25vh' }} >
                <h4 style={{ paddingLeft: '50vw' }}>Nuevo pokemon</h4>
                <form onSubmit={handleSubmit}>
                    <div style={{ float: 'left', paddingLeft: '100px' }}>
                        <div>
                            <label htmlFor=""> Nombre: </label>
                            <input style={{ height: '30px' }} type="text" name="name" defaultValue={location.state !== null ? location.state.name : ''} />
                        </div>
                        <br />
                        <br />
                        <div>
                            <label htmlFor=""> Imagen: </label>
                            <input style={{ float: 'right', height: '30px' }} type="text" placeholder='url' name='image' defaultValue={ location.state !== null ? location.state.image : ''} />
                        </div>
                    </div>
                    <div style={{ float: 'right', paddingRight: '100px' }} >
                        <div>
                            <label htmlFor=""> Ataque: </label>
                            <input style={{ float: 'right' }} type="range" name="ataque" id="" defaultValue={ location.state !== null ? location.state.attack : 0} />
                        </div>
                        <br />
                        <br />
                        <div>
                            <label htmlFor=""> Defensa: </label>
                            <input type="range" name="defensa" id="" defaultValue={ location.state !== null ? location.state.defense : 0} />
                        </div>
                    </div>
                    <br />
                    <div style={{ paddingTop: '100px', paddingLeft: '50vw' }} >
                        <button type="submit" className='btn'><AiOutlineSave size={15} /> Guardar</button>
                        &nbsp;
                        <Link to="/" ><button className='btn' > <AiOutlineClose size={15} /> Cancelar</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPokemon