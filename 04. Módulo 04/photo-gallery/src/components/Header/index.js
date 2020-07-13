import React from 'react'
import styles from './styles.module.css'
import { Link } from 'gatsby'

const Header = ({ title = 'Galeria de Imagens' }) => (
    <h1 className={styles.title}>
        <Link to='/'>
            {title}
        </Link>
    </h1>
)

export default Header