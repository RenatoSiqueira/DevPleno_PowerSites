import React from 'react'

import BtnWhatsApp from './BtnWhatsApp'

const Footer = () => (
    <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
        <div>
            <h5>Lima Móveis</h5>
            <p>Rua Tal, Bairro Y</p>
        </div>
        <BtnWhatsApp />
    </div>
)

export default Footer