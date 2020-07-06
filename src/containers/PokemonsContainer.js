import React from 'react';
import {useQuery} from 'react-apollo';
import{GET_POKEMONS} from '../graphql/get-pokemons'
import Pokemon from '../components/Pokemon'

export default function PokemonsContainer(){
	 const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });
    
    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}