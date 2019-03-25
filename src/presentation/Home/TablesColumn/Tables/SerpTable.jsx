import React from 'react'

const SerpTable = ({ item, droppableId, snapshot }) => {
  return (
    <Grid hidden={item.key === '-' ? true : false}>
                    <Col lg='1'>
                        <input type='checkbox' />
                    </Col>
                    <Col lg='5'>
                        <span size='large'
                            style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                        >
                            {item.key}
                        </span>
                    </Col>
                    <Col lg='2'>
                        {item.volume}
                    </Col>
                    <Col lg='2'>
                        {item.cpc}
                    </Col>
                    <Col lg='2'>
                        {item.competencia}
                    </Col>
                </Grid>
  )
}

export default SerpTable
