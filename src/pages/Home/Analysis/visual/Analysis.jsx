import React from 'react';
import Scramble from '../logic/Scramble';
import { AdviceDiv,BadgeIcon, H2 } from '../style/components';

const Analysis = ({ titleName = 'Analisis SEO', advices, styles = {}, phrases }) => {
  return (
    <div>
      <H2>{titleName}</H2>
      <Scramble phrases={phrases} />
      <AdviceDiv>
        {advices && advices.map((item, id) => {
          return <span key={id}>
            <p>
              <BadgeIcon
                icon={item.icon}
                color={item.status}
              />
              {item.advice}
            </p>
          </span>
        })}
        <p>
          <BadgeIcon
            icon='search'
            color='error'
          />
          La palabra clave objetivo aparece en la URL de esta pagina.</p>
        {/* <Thing>
<BadgeIcon
    icon='search'
    color='error'
  />
  Hola
</Thing> */}
        <p>La palabra clave objetivo aparece solo en 2(de 3) subtitulos de  tu escrito.  Trata de usarla en al menos un subtitulo mas.</p>
      </AdviceDiv>
    </div>
  )
}

export default Analysis;