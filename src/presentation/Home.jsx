import React from 'react'
import styled from 'styled-components'
import Layout from './Layout'
import DND from '../state/DND';
import SERP from '../containers/Home/SERP';

const Home = ({ setPair, setHide, title, meta, serpData, hide }) => {
    return (
        <Layout>
            <Main>
                <RowCenter>
                    <Button onClick={() => setHide(!hide)}>
                        {hide ? <h6>Mostrar Tablas</h6> : <h6>Expandir Articulo</h6>}
                    </Button>
                </RowCenter>
                <DND
                    serpData={serpData}
                    setPair={setPair}
                    title={title}
                    meta={meta}
                >
                    <SERP hide={hide} />
                </DND>
            </Main>
        </Layout>
    )
}

export default Home;

const Main = styled.main`
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 40px;
`

const RowCenter = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background: #07c;
    color: #fff;
`