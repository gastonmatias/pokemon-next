import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'cal(100vh-100px)', // los 100px sustraidos son calculando el navbar
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
      }}>

        <Text h1>No hay Favoritos!</Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/54.png"
          width={250}
          height={250}
          css={{
            opacity: 0.4
          }}
        />
        
      </Container>
  )
}