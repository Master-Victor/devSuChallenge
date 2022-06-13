import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  list: {
    data: [],
    stateLoad: 'IDLE',
    allData: []
  }
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getAllPokemons: (state, action) => {
      state.list.data = action.payload;
      state.list.allData = action.payload;
      state.list.stateLoad = 'READY';
    },
    setPokemon: (state, action) => {
      const json = (action.payload);
      axios.post('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });

    },  
    updatepokemon: (state, action) => {
      axios.put( 'https://pokemon-pichincha.herokuapp.com/pokemons/' + action.payload.id, {
        name: action.payload.name,
        image: action.payload.image,
        type: action.payload.type,
        hp: action.payload.hp,
        attack: action.payload.attack,
        defense: action.payload.defense,
        idAuthor: 1,
      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });      
    },
    deletePokemon: (state, action) => {
      axios.delete( 'https://pokemon-pichincha.herokuapp.com/pokemons/' + action.payload )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    filterPokemon: (state, action) => {
      action.payload === ''
        ? state.list.data = state.list.allData
        : state.list.data = state.list.allData.filter( x => x.name.toLowerCase().includes(action.payload.toLowerCase()) )
    },      
  },
})

// Action creators are generated for each case reducer function
export const { getAllPokemons, setPokemon, deletePokemon, updatepokemon, filterPokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer