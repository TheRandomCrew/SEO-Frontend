import React from 'react'

const GettingStarted = () => {
    return (
        <div>
            <h1 id="empecemos">Empecemos</h1>

            <p>Al ser en la base una aplicacion de next, simplemente necesita <code>npm</code> instalado y funcional. Luego ubicarse en la consola en la carpeta correspondiente (<code>/DOCS/</code>) y usar los siguietes comandos:</p>

            <h3 id="instalacion">Instalacion</h3>

            <pre><code class="sh language-sh">npm i
            </code></pre>

            <h3 id="abriendomododedesarrollo">Abriendo Modo de Desarrollo</h3>

            <pre><code class="sh language-sh">npm start
            </code></pre>

            <h3 id="crearpaginawebconladocumentacion">Crear pagina web con la documentacion</h3>

            <pre><code class="sh language-sh">npm run build
            </code></pre>
        </div>
    )
}

export default GettingStarted
