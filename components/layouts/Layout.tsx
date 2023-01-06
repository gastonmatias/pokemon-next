// metatags desde https://ahrefs.com/blog/open-graph-meta-tags/

import Head from "next/head"
import { ReactNode } from "react"
import {NavigationBar} from "../ui"
import { Box } from "./Box"

type LayoutProps = {
    children: ReactNode
    title?: string
}

export const Layout = ({children, title}: LayoutProps) => {
  
  // para conocer el url statico qe debe tener la imagen del metatag
  // facilmente se obtiene con window.location.origin desde frontend
  // pero para evitar conflicto con el server de next, se realiza validacion
  const origin = (typeof window ==='undefined') ? '' : window.location.origin
  
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Gaston Villagra"/>
        <meta name="description" content="información sobre el pokemon xxx"/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

    {/* <Box  css={{maxW: "100%"}}> */}
        <NavigationBar />
        <main style={{padding:'0px 20px'}}>
            {children}
        </main>
    {/* </Box> */}

    </>
  )
}