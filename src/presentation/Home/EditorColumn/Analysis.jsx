import React from 'react'


const Analysis = () => {
  return (
    <div>
      <h2 style={{ padding: "0px", marginTop: "5px" }}>Analisis SEO</h2>
      <div
        style={{
          paddingBottom: "25px",
          textAlign: "justify",
          fontSize: "16px",
          fontWeight: "10px"
        }}
      >
        <p>No hay ningun enlace externo en esta pagina, planteate anadir alguno dentro del contexto</p>
        <p>No hay ningun enlace interno en esta pagina, planteate anadir algo relevante</p>
        <p>A las imagenes de esta pagina les faltan los atributos alt.</p>
        <p>La palabra clave objetivo aparece en el primer  parrafo del escrito.</p>
        <p>La densidad de la palabra clave es de 0.9%, lo que esta  genial, la palabra clave objetivo se encontro 5 veces.</p>
        <p>El texto contiene 579 palabras. Es mas o igual que el minimo recomendado de 400 palabras.</p>
        <p>La palabra clave objetivo aparece en la URL de esta pagina.</p>
        <p>La palabra clave objetivo aparece solo en 2(de 3) subtitulos de  tu escrito.  Trata de usarla en al menos un subtitulo mas.</p>
      </div>
    </div>
  )
}

export default Analysis;