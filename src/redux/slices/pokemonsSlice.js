import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  list: {
    data:[],
    stateLoad: 'IDLE'
  }
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getAllPokemons: (state, payload) => {
      state.list.data = payload;
      state.list.stateLoad = 'READY';
    },
    setPokemon: (state, payload) => {
      const json = (payload.payload);
      axios.post('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },  
    updatepokemon: (state, payload) => {
      // axios.put( 'https://pokemon-pichincha.herokuapp.com/pokemons/' + payload.payload.id, payload.payload )
      axios.put( 'https://pokemon-pichincha.herokuapp.com/pokemons/8067', {
        name: 'testUpdate',
        image: 'testUpdate',
        type: 'water',
        hp: 100,
        attack: 70,
        defense: 80,
        idAuthor: 1,
      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });      
    },
    deletePokemon: (state, payload) => {
      axios.delete( 'https://pokemon-pichincha.herokuapp.com/pokemons/' + payload.payload )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }  
  },
})

// Action creators are generated for each case reducer function
export const { getAllPokemons, setPokemon, deletePokemon, updatepokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer