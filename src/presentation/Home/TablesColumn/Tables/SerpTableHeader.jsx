import React from 'react'
import { Row, Column } from 'styles/GridStyled';

const SerpTableHeader = () => {
    return (
        <Row>
            <Column md={1} lg={1}>
                <input type='checkbox' />
                {/* Copy serpData and make selected, then a button to save instead of serpData */}
            </Column>
            <Column md={5} lg={5}>
                Palabras Claves
                    </Column>
            <Column md={2} lg={2}>
                Bus que da
                    </Column>
            <Column md={2} lg={2}>
                CPC
                    </Column>
            <Column md={2} lg={2}>
                Comp. SEO
                    </Column>
        </Row>
    )
}

export default SerpTableHeader
