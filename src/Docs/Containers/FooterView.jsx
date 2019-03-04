import React from 'react'
import Highlight from '../Highlight'
const FooterView = () => {
    return (
        <div>
            <h2 id="footerview">FooterView</h2>

            <p>El proposito de este componente es mostrar informacion pertinente en todas las vistas. </p>

            <p>En nuestro caso mostramos el copyright, pero puede adaptarse para  otros usos mas tarde.</p>
            <Highlight
                inline={false}
                code={footer1.split('\n')}
            />

            <p>En <kbd>className='container-fluid .d-sm-none .d-md-block'</kbd> tenemos el codigo para que el footer se oculte en un dispositivo movil</p>
            <p>en <kbd>style</kbd> tenemos un codigo para que el footer se quede en la parte inferior, especialmente 
            <Highlight
                inline={false}
                code={footer2.split('\n')}
            />
            </p>
        </div>
    )
}

export default FooterView

const footer1 = String.raw`<footer
    className='container-fluid .d-sm-none .d-md-block'
    style={{ position: 'fixed', bottom: 0, width: '100%' }}
>    
    <p className='text-right small'>&copy; 2019 SERP</p>
</footer>`

const footer2 = String.raw`style={{
    position: 'fixed',
    bottom: 0
}}
>`