import React, { useState } from 'react';
import Grid from 'styled-components-grid';
import { Main, ExpandButton, Bordered } from './style/GridStyles';
import { SEOContextProvider } from './store';
import { NavBar, Search, Tables, Article, InfoButtons, Analysis, Footer } from './section';

const Layout = () => {
    const [hideSEO, setHideSEO] = useState(false); // my first hook

    return (
        <>
            <NavBar />
            <Main>
                <Grid halign="center">
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
                </Grid>
                <SEOContextProvider>
                    <Grid halign="center">
                        <Grid.Unit size={{ mobile: 1, tablet: 0.81, desktop: 0.3 }} hidden={hideSEO}>
                            <Bordered>
                                <Search />
                                <Tables />
                            </Bordered>
                        </Grid.Unit>
                        <Grid.Unit size={{ mobile: 1, tablet: 0.81, desktop: !hideSEO?0.7:1 }}>
                            <Bordered>
                                <Grid>
                                    <Grid.Unit size={{ mobile: 1, tablet: 0.81, desktop: hideSEO?0.9:0.8 }}>
                                        <Article />
                                    </Grid.Unit>
                                    <Grid.Unit size={{ mobile: 1, tablet: 0.8, desktop: hideSEO?0.1:0.2 }}>
                                        <InfoButtons />
                                    </Grid.Unit>
                                </Grid>
                                <Bordered>
                                    <Analysis />
                                </Bordered>
                            </Bordered>
                        </Grid.Unit>
                    </Grid>
                </SEOContextProvider>
            </Main>
            <Footer />
        </>
    )
}

export default Layout;
