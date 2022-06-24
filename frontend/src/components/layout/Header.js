import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logoutAction } from '../account/actions/logoutAction'

function Header() {

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutAction())
  }


  return (

    <Fragment>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link className='navbar-brand' to="/home">
            <Navbar.Brand >Store Flow</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <NavDropdown title="Cliente" id="navbarScrollingDropdown">
              <NavDropdown.Item>Nova Passagem</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Loja" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/stores">Lojas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/sellers">Vendedores</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/segments">Segmento de Vendas</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Prospecção" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className='dropdown-item' to="/admin/prospections">Prospecção</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/social-medias">Midias Sociais</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/service-types">Tipo de serviço</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuario" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/profile">Minha Conta</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropdown-item" to="/admin/users">Usuários</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </Fragment>

  )
}
export { Header }

