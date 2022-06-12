import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import getAllPokemons from '../redux/slices/pokemonsSlice';

export const usePokemons = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        const fetchAllPokemons = async () => {
            const res = await axios.get('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
            dispatch(getAllPokemons(res.data));
        }
        fetchAllPokemons().catch(console.error);;
    }, [dispatch])
}