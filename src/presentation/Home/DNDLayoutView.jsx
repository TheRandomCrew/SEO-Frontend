import React from 'react'
import { Row, Column } from 'styles/GridStyled';

const DNDLayoutView = ({ item, droppableId, snapshot }) => {
    switch (droppableId) {
        case 'keywords': {
            return (
                <Row hidden={item.key === '-' ? true : false}>
                    <Column md={1} lg={1}>
                        <input
                            type='checkbox'
                            // checked={item.checked}
                            // value={item.key}
                            // onChange={e => console.log(e.target.value)}
                        />
                    </Column>
                    <Column md={5} lg={5}>
                        <span size='large'
                            style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                        >
                            {item.key}
                        </span>
                    </Column>
                    <Column md={2} lg={2}>
                        {item.search_volume}
                    </Column>
                    <Column md={2} lg={2}>
                        {item.cpc}
                    </Column>
                    <Column md={2} lg={2}>
                        {item.competition}
                    </Column>
                </Row>
            )
        }
        case 'title': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.key}
                </span>
            )
        }
        case 'meta': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.key}
                </span>
            )
        }
        case 'editor': {
            return (
                <span size='large'
                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                >{item.key}
                </span>
            )
        }
        default:
            console.error('This case must not exist')
            return (
                <span>ERROR</span>
            )
    }
}

export default DNDLayoutView;