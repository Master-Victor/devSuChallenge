import React from 'react'
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import './style/container.css';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <p style={{ color: '#555', fontSize: '20px' }}>Listado de pokemon</p>
            <div className='NavBarContent'>
                <FaSearch style={{ position: 'absolute', left: '30px', top: '90px', color: '#9C9C9C' }} />
                <input style={{ height: '30px', color: '#9C9C9C' }} placeholder=' Buscar' />
                <button className='btn' style={{ marginLeft: '73vw' }}><AiOutlinePlus width={100}/> Nuevo</button>
            </div>
        </nav>
    )
}

export default NavBar