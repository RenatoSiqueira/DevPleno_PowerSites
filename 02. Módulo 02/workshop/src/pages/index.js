import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import './styles.css'

import BtnWhatsApp from '../components/BtnWhatsApp'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Header = ({ children }) => {
    return (
        <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
            {children}
        </div>
    )
}

const Index = () => {
    const { site: { siteMetadata } } = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    const selos = [1, 2, 3, 4]
    const projetos = [1, 2, 3, 4]
    return (
        <div>
            <Helmet>
                <title>{siteMetadata.title}</title>
            </Helmet>
            <Header >
                <Logo />
                <div>
                    <BtnWhatsApp />
                </div>
            </Header>
            <Hero />
            <div className='flex flex-col items-center sm:flex-row justify-around'>
                {
                    selos.map(() => {
                        return 'SELOS my-4'
                    })
                }
            </div>
            <div>
                <h2 className='px-8 py-3 text-2xl font-bold'>Projetos de Móveis Planejados</h2>
                <div className='flex flex-wrap'>
                    {
                        projetos.map(() => {
                            return (
                                <div className='max-w-sm'>
                                    <div className='m-2 rounded shadow-lg'>
                                        IMG
                                    <div className='px-6 py-4'>
                                            <p className='font-bold text-xl mb-2'>Projeto</p>
                                            <p>Descrição</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index