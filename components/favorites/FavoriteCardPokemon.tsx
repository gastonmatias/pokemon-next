import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props{
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
  
    const router = useRouter()

    
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }
    
    const imgUrlBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
    
    return (
    
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
        <Card isHoverable isPressable css={{padding: 10}}>
          <Card.Image
            src={`${imgUrlBase}/${pokemonId}.svg`}
            width={'100%'}
            height={140}
          />
        </Card>
    </Grid>
  )
}