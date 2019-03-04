import React from 'react'
import { Nav, NavDropdown, Button } from 'react-bootstrap'

const SideBarView = ({setPath}) => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0" id="sidebar" role="navigation" style={{ marginTop: '30px' }}>
            <Nav defaultActiveKey="/home" className="flex-column" >
                <Nav.Item><Button variant="dark" block onClick={()=>setPath('index')}>Inicio</Button></Nav.Item>
                <Nav.Item><Button variant="dark" block onClick={()=>setPath('started')}>Empecemos</Button></Nav.Item>
                <Nav.Item><Button onClick={()=>setPath('footer')}>FooterView</Button></Nav.Item>
                <Nav.Link eventKey="Tables">Tables</Nav.Link>
                <Nav.Link eventKey="Menus">Menus</Nav.Link>
                <Nav.Link eventKey="Typography">Typography</Nav.Link>
                {/* <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link> */}
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
}

export default SideBarView

