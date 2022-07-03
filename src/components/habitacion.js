import React, { useEffect, Fragment, useState } from 'react'
import '../App.css';
import Navegacion from './layouts/nabvar';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './habitacion.css'

const Habitacion = () => {

    const { idHabi } = useParams()
    const [state, setState] = useState([])
    useEffect(() => {
        const gethabitaciones= async () => {
            await Axios({
                method: 'get',
                url: `https://proyecto-nube2022.herokuapp.com/api/detallehabitacion/${idHabi}`
            }).then(response => {
                // console.log(response.data[0]);
                setState(response.data)
            })
        }
        gethabitaciones()
    }, [idHabi])

    return (
        <Fragment>
            <Navegacion />
            <center>
                <div className='fondoHabitacion'>

                    <Container style={{
                        paddingTop: '100px',}}>
                        { state
                        .map(habitacion => 
                        <Row style={{
                            height: '100%',}}>

                            <Col sm={7}>
                                <img className='ImagenHabitacion' src={habitacion.Imagen} />
                            </Col>
                            <Col sm={5} style={{
                                backgroundColor: '#ffffffa8 !important',
                                backdropFilter: 'blur(10px)'}}>

                                <Card width="100%" style={{
                                    height: '100%',
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,255,255,0.5)'}}>

                                    <div style={{
                                        textAlign: 'left',
                                        height: '100%',
                                        padding: '10px',
                                        overflow: 'auto',}}>

                                        <Card.Title>{habitacion.Nro_habitacion}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{habitacion.Nro_habitacion}</Card.Subtitle>
                                        <Card.Text>{habitacion.Descripcion}</Card.Text>
                                        <Card.Text> <b>Cerradura Electronica:</b> {habitacion.Cerradura_electronica==true?'Si':'No' } </Card.Text>
                                        <Card.Text> <b>Wifi:</b> {habitacion.Wifi=='1'?'4G':'5G' } </Card.Text>
                                        <Card.Text><small className="text-muted"> {habitacion.Estado_habitacion=='1'?'Disponible':'No disponible' } </small></Card.Text>
                                        <Form>
                                            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                            <Form.Label>Fecha de inicio</Form.Label>
                                            <Form.Control style={{width:"80%"}} size="sm" type="date" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Fecha de fin</Form.Label>
                                            <Form.Control style={{width:"80%"}} size="sm" type="date" placeholder="Password" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        height: '20%',
                                        padding: '10px'
                                    }}>
                                        <Button variant="success" style={{}}>Completar reserva</Button>{' '}
                                    </div>
                                </Card>
                            </Col>
                        </Row>)}
                    </Container>
                </div>
            </center>
        </Fragment >
    )
}

export default Habitacion;