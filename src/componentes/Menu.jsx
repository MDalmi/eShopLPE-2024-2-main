'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import { signIN, signOut } from 'next-auth/react';


function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' href={'/'}>eShop Next 14</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Link className='nav-link' href={'/'}>Home</Link>
            <NavDropdown title="Manutenções" id="basic-nav-dropdown">
              <Link className='dropdown-item' href={'/privado/categoria'}>Categorias</Link>
              <Link className='dropdown-item' href={'/privado/produto'}>Produtos</Link>
            </NavDropdown>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <form action={signIN}>
                <button type='submit'>Login</button>
              </form>
              <form action={() => signOut({ callbackUrl: '/' })}>
                <button type="submit" className="dropdown-item">Logout</button>
              </form>
            </NavDropdown>
            <Link className='nav-link active' href={'/sobre'}>Sobre...</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;