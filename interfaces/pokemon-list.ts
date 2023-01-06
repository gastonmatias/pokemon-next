export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number; 
    img:  string; 
}

//* api NO retorna id ni img, pero al usar la interfaz TS NO se queja
//* Interfaz sirve de guia para construir el tipado, pero NO obliga a que
//* si o si retorne todo lo qe se le indique