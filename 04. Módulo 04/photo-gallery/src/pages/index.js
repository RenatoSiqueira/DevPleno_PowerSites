import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import '../assets/styles.css'

const Index = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }      
    `)

  return (
    <>
      <h1>Galeria de Imagens</h1>
      {
        images.allFile.edges.map(image => {
          return <Image fluid={image.node.childImageSharp.fluid} />
        })
      }
    </>
  )
}

export default Index