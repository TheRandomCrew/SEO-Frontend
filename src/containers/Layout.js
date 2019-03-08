import React, { Fragment } from 'react'
import tokenService from '../services/token'
import { history, links } from '../routes'
import styled from 'styled-components'
import FooterView from '../components/Footer';
import NavBar from '../components/NavBar';
import Analysis from '../components/Analysis';
// import appContext from '../utils/appContext'
// const { Consumer } = appContext

const Layout = () => {
    const logout = () => {
        tokenService.delete()
        history.replace('/login')
    }
    return (
        <Fragment>
            <NavBar links={links}/>
            <Main>
            <button onClick={logout}>Logout</button><br />
            <RowCenter>
                Boton de expandir
            </RowCenter>
            <Grid>
                <Col>
                    <Grid>
                        searchForm
                    </Grid>
                    <Grid>
                        Cabecera de Tabla
                        <OverflowContainer>
                            <OverflowY>
                                SERPTable
                            </OverflowY>
                            <OverflowY>
                                RankTable
                            </OverflowY>
                        </OverflowContainer>
                    </Grid>
                </Col>
                <Col>
                    <Grid>
                        <Col>
                            Editor
                        </Col>
                        <Col>
                            Botones
                        </Col>
                    </Grid>
                    <Grid>
                        <Analysis/>
                    </Grid>
                </Col>
            </Grid>
            </Main>
            <FooterView/>
        </Fragment>
    )
}

export default Layout;

const Main = styled.main`
    margin-top: 50px;
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

const Grid = styled.div`
  display: flex;
`

const Col = styled.div`
    flex:1;
`

const OverflowContainer = styled.div`
    height: 100vh;
`

const OverflowY = styled.div`
    overflow-y: scroll;
`