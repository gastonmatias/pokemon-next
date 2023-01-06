// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { GetStaticProps } from 'next'
import { NextPage } from "next"

import { Grid } from '@nextui-org/react'

import { pokeApi } from '../api'
import { Layout } from "../components/layouts"
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <>
      <Layout title='Home'>
        
        <Grid.Container gap={2} justify='flex-start'>
            {pokemons.map((e) => (
              <PokemonCard pokemon={e} key={e.id}/>  
            ))}
        </Grid.Container>
        
      </Layout>
    </>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// *SOLO se ejecuta en server side en buildtime
// *SOLO se puede usar en /pages
// *usarlo SOLO cuando se tiene certeza del contenido qe mostrará la page, y qe será invariable
// *data independiente de la interaccion del usuario final (ej: pokemon seran 151 en la app ni mas ni menos)

export const getStaticProps: GetStaticProps = async (ctx) => {

  // console.log('h3llo friend') // este log se ve reflejado en kitty No browser
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
  
  const pokemons: SmallPokemon[] = data.results.map( (e,i) => (
    {   ...e, 
        id:i+1,
        img: `${urlImg}/${i+1}.svg`
    }
  ))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage

