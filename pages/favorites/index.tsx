import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/favorites';

const FavoritesPage = () => {
  
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemonsInLocalStorage())
  }, []);

  
  return (
    <>
    <Layout title="Favoritos">

      { favoritePokemons.length === 0 
          ? <NoFavorites/> 
          : <FavoritePokemons favoritePokemons={favoritePokemons}/>
      }

    </Layout>


    </>
  )
}
export default FavoritesPage