import { FC } from "react"

import { Card, Grid, Row, Text } from '@nextui-org/react'

import { SmallPokemon } from "../../interfaces"
import { useRouter } from "next/router"

interface Props{
    pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
  
    const {id, img, name} = pokemon

    const router = useRouter()

    const onClickPokemon = () => {
      router.push(`/name/${name}`) 
    }


    return (
      <Grid xs={6} sm={3} md={2} xl={1}  >
      <Card 
        isHoverable 
        isPressable
        onClick={onClickPokemon}
      >
        <Card.Body css={{p:1}}>
          <Card.Image
             src={img}
            //  objectFit="cover"
             objectFit="contain"
             width="100%"
             height={140}
             alt={name}
          />
        </Card.Body>
        <Card.Footer>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text css={{ 
                color: "$accents7", 
                fontWeight: "$semibold", 
                fontSize: "$sm" 
              }}>
              #{id}
            </Text>
            <Text transform='capitalize' b>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
    

  )
}