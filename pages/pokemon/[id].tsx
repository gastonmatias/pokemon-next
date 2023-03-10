import { useState } from 'react';
import confetti from 'canvas-confetti'

import { Button, Card, Col , Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react"
import { NextPage,GetStaticPaths, GetStaticProps } from "next"
import { pokeApi } from "../../api"
import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces"
import { getPokemonInfo, localFavorites } from "../../utils"


interface Props{
  pokemon: Pokemon
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {
  
  // el proceso de localstorage es sincrono, se puede inicializar el valor del state
  // con el valor contenido en el localstorage altokemon
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));
  
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return
    
    confetti({
      zIndex:999,
      particleCount: 100,
      spread: 160,
      angle: 100,
      origin: { x: 1 ,y: 0.6 }
    })
    

  }

  return (
    <>
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop:'5px'}} gap={2} justify='center'>
        
        <Grid xs={10} sm={5} md={4}>
        {/* <Grid xs={4} sm={4}> */}
          <Card isPressable>
            <Card.Body css={{ p: 20 }}>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                objectFit="contain"
                // objectFit="cover"
                width="100%"
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>

        {/* //! 2do card */}
        <Grid xs={10} sm={5} md={4}>
        <Card >
          <Card.Header>
            <Text h1 size={40} transform='capitalize' b css={{justifyContent:'center'}}>{pokemon.name}</Text>
          </Card.Header>

          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Text size={30}>Sprites:</Text>
          <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center">
              <Button 
                color='gradient' 
                ghost={!isInFavorites} 
                onPress={onToggleFavorite}>
                {isInFavorites?  'Eliminar de Favoritos' :'Agregar A Favoritos'} 
              </Button>
              {/* <Button color='gradient' ghost>
                Quitar de misFavoritos
              </Button> */}
            </Row>
          </Card.Footer>
        </Card>
      </Grid>

       

      </Grid.Container>
    </Layout>
    </>
  )
}


export default PokemonPage

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user???s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast ??? getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// You should use getStaticPaths if you???re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${index+1}`)
  // console.log({pokemons151});

  return {
    paths: pokemons151.map( id => (
      { params: {id} }
    )),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const {id} = params as {id: string}

  return {
    props: {
      pokemon: await getPokemonInfo(id)// sin try catch, pq si falla lo hace en buildtime, qe es mas controlable qe produccion
    }
  }
}

/**
 * Array(number)
 * A JavaScript array is initialized with the given elements,
 *  except in the case where a single argument is passed to the Array constructor 
 * and that argument is a number . Note that this special case only applies to 
 * JavaScript arrays created with the Array constructor, not array literals 
 * created with the bracket syntax.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 */