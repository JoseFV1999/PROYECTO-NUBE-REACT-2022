import './App.css';
import React, { Component, Fragment } from 'react';
import Navegacion from './components/layouts/nabvar';
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/card'
const calificacion = 5;

export class App extends Component{

  state = {
    hoteles: []
  }

  componentDidMount() {
    axios.get('https://proyecto-nube2022.herokuapp.com/api/hoteles/')
    .then(res => {
        this.setState({ hoteles: res.data });
    }, [])
  }

  render(){
  return (
    <Fragment>
      <Navegacion />
      <div className="fondo">
        <CardGroup className="container">
          { this.state.hoteles.slice(0, 4)
            .map(hotel => 
            <Card key={hotel.id}  className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>

        <CardGroup className="container">
          { this.state.hoteles.slice(4, 8)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(8, 12)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(12, 16)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(16, 20)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(20, 24)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(24, 28)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
        <CardGroup className="container">
          { this.state.hoteles.slice(28, 32)
            .map(hotel => 
            <Card key={hotel.id} className='CardCustom ' style={{ margin: '15px' }}>
              <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                  <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/habitaciones/${hotel.id}/`}>{hotel.Nombre_hotel}</Link>
                  </Card.Title>
                  <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                      return '⭐'
                    })}
                  </Card.Text>
                  <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
              </div>
          </Card>)}
        </CardGroup>
      </div>
      <div>
      </div>
    </Fragment>
  );
}}

export default App;
