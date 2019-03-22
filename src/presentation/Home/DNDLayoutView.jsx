import React from 'react'
import styled from 'styled-components'

const DNDLayoutView = ({ item, droppableId, snapshot }) => {
    switch (droppableId) {
        case 'keywords': {
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
        case 'title': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.content}
                </span>
            )
        }
        case 'meta': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.content}
                </span>
            )
        }
        case 'editor': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.content}
                </span>
            )
        }
        default:
            console.error('This case must not exist')
            return(
                <span>ERROR</span>
            )
    }
}

export default DNDLayoutView;

const Grid = styled.div`
    display: flex;
`

const Col = styled.div`
    flex:1;
`