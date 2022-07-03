import React, {Fragment, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './img/logo1.png'
import './Navbar.css'
import Fondo from './img/Sel.jpg'
import axios from 'axios';

class Navegacion extends Component{
    
    constructor (props) {
        super(props)
    }

    state = {
        categorias: []
    }

    componentDidMount() {
        axios.get('https://proyecto-nube2022.herokuapp.com/api/categorias/')
        .then(res => {
            this.setState({ categorias: res.data });
        })
    }
    user = JSON.parse(localStorage.getItem('user-info'))
    logOut(){
        localStorage.clear();
    }

    render(){
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav-fondo'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="No carga" width='50px' height='50px' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                { 
                                this.state.categorias
                                .map(categoria => 
                                    <Link key={categoria.id} to={`/hoteles/${categoria.id}/`} className='nav-link links'>{categoria.Nombre_categoria}</Link>
                                )
                                } 
                                
                            </Nav>
                            <Nav>
                            {localStorage.getItem('user-info')?
                                <NavDropdown className='links links-user'  title={this.user && this.user.Nombre}>
                                    <NavDropdown.Item href="/" onClick={e=>this.logOut(e)}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Fragment>
                                <Nav.Link href="/login" className='links'>Iniciar Sesion</Nav.Link>
                                <Nav.Link href="/register" className='links links-register'>Registrarse</Nav.Link>
                                </Fragment>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
    
}

export default Navegacion;