import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import { SEOContextProvider } from '../store';
import { Grid, Column } from '../style/GridStyles';
import TablesColumn from './Home/TablesColum/TablesColumn';
import ArticleColumn from './Home/ArticleColumn/ArticleColumn';

const Home = () => {
    const [hide, setHide] = React.useState(false); // my first hook
    return (
        <>
            <NavBar />
            <Main>
                <RowCenter>
                    <Button onClick={() => setHide(!hide)}>
                        {hide ? (
                            <p style={{ fontSize: "15px", margin: "5px" }}>
                                Mostrar Tablas
                            </p>
                        ) : (
                                <p style={{ fontSize: "15px", margin: "5px" }}>
                                    Expandir Articulo
                            </p>
                            )}
                    </Button>
                </RowCenter>
                <SEOContextProvider>
                    <Grid>
                        <Column md={5} hidden={hide}>
                            <TablesColumn />
                        </Column>
                        <Column>
                            <ArticleColumn />
                        </Column>
                    </Grid>
                </SEOContextProvider>
            </Main>
            <Footer />
        </>
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
    background: #2780e3;
    color: #fff;
    padding: 5px 5px;
    border: 2px solid blue;
    border-radius: 10px;
    margin-bottom: 5px;
    height: 40px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
