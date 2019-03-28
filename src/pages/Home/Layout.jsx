import React, { useState } from 'react';
import { Grid, Row, Column, Main, ExpandButton, RowCenter, Bordered } from './style/GridStyles';
import { SEOContextProvider } from './store';
import { NavBar, Search, Tables, Article, InfoButtons, Analysis, Footer } from './section';

const Layout = () => {
    const [hideSEO, setHideSEO] = useState(false); // my first hook

    return (
        <>
            <NavBar />
            <Main>
                <RowCenter>
                    <ExpandButton onClick={() => setHideSEO(!hideSEO)}>
                        {hideSEO ? (
                            <p style={{ fontSize: "15px", margin: "5px" }}>
                                Mostrar Tablas
                            </p>
                        ) : (
                                <p style={{ fontSize: "15px", margin: "5px" }}>
                                    Expandir Articulo
                            </p>
                            )}
                    </ExpandButton>
                </RowCenter>
                <SEOContextProvider>
                    <Grid>
                        <Column md={5} hidden={hideSEO}>
                            <Bordered>
                                <Search />
                                <Tables />
                            </Bordered>
                        </Column>
                        <Column>
                            <Bordered>
                                <Grid>
                                    <Row>
                                        <Column sm={12} md={10} lg={10}>
                                            <Article />
                                        </Column>
                                        <Column sm={12} md={2} lg={2}>
                                            <InfoButtons />
                                        </Column>
                                    </Row>
                                </Grid>
                                <Bordered>
                                    <Analysis />
                                </Bordered>
                            </Bordered>
                        </Column>
                    </Grid>
                </SEOContextProvider>
            </Main>
            <Footer />
        </>
    )
}

export default Layout;
