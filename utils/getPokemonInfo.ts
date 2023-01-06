import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async(nameOrId: string) => {

    // busqueda individual pokemon x name o id
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    // para acotar la info de la api a solo los datos qe necesitamos, aliviando la carga de almacenamiento de next static
    return {
        id:      data.id, 
        name:    data.name, 
        sprites: data.sprites
    }

}