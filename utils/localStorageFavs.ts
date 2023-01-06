
const toggleFavorite = (id:number) => {
    console.log('toggleFavorite exect'); 

    // parsea ids existentes en localstorage. De strings a numbers
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    
    // a continuacion se evalua si el id enviado x params ya existe o no en el array de favorites
    // en caso de existir id, eliminar de favoritos
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id)
    }
    // caso contrario, agregar a favoritos
    else{
        favorites.push(id)
    }

    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const existInFavorites = (id:number): boolean => {
    
    // para evitar errores cuando esta fx es ejecutada desde el server de next!
    if (typeof window === 'undefined') return false
    
    // rescata array de ids de los pokemons actualmente en favoritos
    const favorites : number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id) // retorna true/false
}

const pokemonsInLocalStorage = ():number[] => {
    
    return JSON.parse(localStorage.getItem('favorites')||'[]') // ||'[]' en caso de retornar null, si no hay ningun fav
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemonsInLocalStorage
}