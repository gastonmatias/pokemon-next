import { Spacer, Text, useTheme, Navbar , Link  } from "@nextui-org/react";
// import NavbarLink from "@nextui-org/react/types/navbar/navbar-link";
import Image from "next/image";
import NextLink from "next/link";
// import {Link as NextLink} from "next";

export const NavigationBar = () => {

  const {theme} = useTheme()

  const imgLogo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'start',
      padding:'0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>
      
      <Image
        src={imgLogo}
        alt='icono de la app'
        width={70}
        height={70}
      />
      
      <NextLink href='/' passHref>
          {/* <Link href='/'> */}
            <>
            <Text color="white" css={{display: 'inline'}} h2>P</Text>
            <Text color="white" css={{display: 'inline'}} h3>okemón </Text>
            </>
          {/* </Link> */}
      </NextLink>
      
      <Spacer css={{ flex:1 }} />

      <NextLink href='/favorites'>
        <Text color="white" css={{marginRight:'20px'}}> Favoritos </Text>
      </NextLink>
    
    </div>
  );
}