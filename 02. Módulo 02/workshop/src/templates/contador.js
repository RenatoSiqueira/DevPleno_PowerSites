import React from 'react'

const Contador = ({ pageContext }) => (
    <div>
        <h1>Contador</h1>
        Outros Dados
        {
            JSON.stringify(pageContext, null, 2)
        }
    </div>
)

export default Contador