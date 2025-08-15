import type { NamedAPIResourceList, Pokemon } from '../types/pokemon';
import { pokemonApi } from './pokemonApi';

export async function getPokemonsList(limit: number, offset: number): Promise<NamedAPIResourceList> {
    console.log('ejecutando getPokemonsList');
    try {
        const response = (await pokemonApi.get(`pokemon/?limit=${limit}&offset=${offset}`)).data;
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar los pokemones, intente de nuevo por favor');
    }
}

export async function getPokemon(name: string): Promise<Pokemon> {
    console.log('ejecutando getPokemon');
    try {
        const pokemonResponse = (await pokemonApi.get(`pokemon/${name}`)).data;
        const pokemon: Pokemon = {
            id: pokemonResponse.id,
            name: pokemonResponse.name,
            weight: pokemonResponse.weight / 10,
            height: pokemonResponse.height / 10,
            types: pokemonResponse.types.map((slot) => slot.type.name),
            stats: pokemonResponse.stats.map((slot) => ({ name: slot.stat.name, value: slot.base_stat })),
            sprite: pokemonResponse.sprites.front_default,
            gif: pokemonResponse.sprites.other.showdown.front_default,
        };
        return pokemon;
    } catch (error) {
        console.log(error);
        throw new Error(`No se encontró el pokemon "${name}"`);
    }
}
