import React from 'react';
import { useDispatch } from 'react-redux';
import { setPokemon } from '../redux/slices/pokemonsSlice';
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";

const NewPokemon = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPokemon({
            name: e.target.name.value,
            image: e.target.image.value,
            type: 'fire',
            hp: 100,
            attack: e.target.ataque.value,
            defense: e.target.defensa.value,
            idAuthor: 1,
        }))
    }

    return (
        <div style={{ paddingTop: '20px',margin: '1vw' }} >
            <div style={{ border: '2px solid #ccc',background: 'white' }} >
                <h4 style={{ paddingLeft: '50vw' }}>Nuevo pokemon</h4>
                <form onSubmit={handleSubmit}>
                    <div style={{ width: '50%;', float: 'left', paddingLeft: '100px' }}>
                        <div>
                            <label htmlFor=""> Nombre: </label>
                            <input style={{ height: '30px' }}type="text" name="name" />
                        </div>
                        <br/>
                        <br/>
                        <div>
                            <label htmlFor=""> Imagen: </label>
                            <input style={{float: 'right', height: '30px'}} type="text" placeholder='url' name='image' />
                        </div>
                    </div>
                    <div style={{ width: '50%;', float: 'right', paddingRight: '100px' }} >
                        <div>
                            <label htmlFor=""> Ataque: </label>
                            <input style={{float: 'right'}} type="range" name="ataque" id="" />
                        </div>
                        <br/>
                        <br/>                        
                        <div>
                            <label htmlFor=""> Defensa: </label>
                            <input type="range" name="defensa" id="" />
                        </div>
                    </div>
                    <br/>
                    <div style={{ paddingTop: '100px', paddingLeft: '50vw' }} >
                        <button type="submit" className='btn'><AiOutlineSave size={15} /> Guardar</button>
                        &nbsp;
                        <button className='btn' > <AiOutlineClose size={15} /> Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPokemon