import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import './style/container.css';
import { filterPokemon } from '../redux/slices/pokemonsSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const NavBar = () => {

    const [ viewSearch, setViewSearch ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        dispatch( filterPokemon(e.target.value) );
        setViewSearch( e.target.value );
    }
    return (
        <nav className='navBar'>
            <p style={{ color: '#555', fontSize: '20px' }} data-testid="Listado" >Listado de pokemon</p>
            <div className='NavBarContent'>
                {
                    viewSearch === '' && <FaSearch style={{ position: 'absolute', left: '30px', top: '90px', color: '#9C9C9C' }} />
                }
                <input style={{ height: '30px', color: '#9C9C9C' }} placeholder=' Buscar' onChange={ handleChange }/>
                <Link to='new' ><button className='btn' style={{ marginLeft: '73vw' }}><AiOutlinePlus width={100}/> Nuevo</button></Link>
            </div>
        </nav>
    )
}

export default NavBar