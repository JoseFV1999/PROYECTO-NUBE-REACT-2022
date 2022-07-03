import React, { useEffect, Fragment, useState } from 'react'
import '../App.css';
import Navegacion from './layouts/nabvar';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const Habitacioneshabitacion = () => {

    const { idHotel } = useParams()
    const [state, setState] = useState([])
    const [tipo, setTipo] = useState("")
    useEffect(() => {
        const gethabitacionescatego = async () => {
            await Axios({
                method: 'get',
                url: `https://proyecto-nube2022.herokuapp.com/api/habitacion/${idHotel}`
            }).then(response => {
                // console.log(response.data[0]);
                setState(response.data)
            })
        }
        gethabitacionescatego()
    }, [idHotel])

    useEffect(() => {
        const gettipohabitacion = async (tp) => {
            await Axios({
                method: 'get',
                url: `https://proyecto-nube2022.herokuapp.com/api/tipohabitaciondata/${tp}`
            }).then(response => {
                // console.log(response.data[0]);
                setTipo(response.data.Tipo_habitacion)
            })
        }
        gettipohabitacion()
    }, [])

    return (
        <Fragment>
        <Navegacion />
        <div className="fondo">
        <CardGroup className="container">
            { state.slice(0, 4)
            .map(habitacion => 
            <Card key={habitacion.id} className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={habitacion.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/detallehabitacion/${habitacion.id}/`}>N° Habitacion {habitacion.Nro_habitacion}</Link>
                    </Card.Title>
                    <Card.Text>{habitacion.Descripcion}</Card.Text>
                    <Card.Text><small className="text-muted"> {habitacion.Estado_habitacion=='1'?'Disponible':'No disponible' } </small></Card.Text>
                    <Card.Text><small className="text-muted"> {tipo} </small></Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>

        <CardGroup className="container">
            { state.slice(4, 8)
            .map(habitacion => 
                <Card key={habitacion.id} className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={habitacion.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/detallehabitacion/${habitacion.id}/`}>N° Habitacion {habitacion.Nro_habitacion}</Link>
                    </Card.Title>
                    <Card.Text>{habitacion.Descripcion}</Card.Text>
                    <Card.Text><small className="text-muted"> {habitacion.Estado_habitacion=='1'?'Disponible':'No disponible' } </small></Card.Text>
                    <Card.Text><small className="text-muted"> {  } </small></Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>

        <CardGroup className="container">
            { state.slice(8, 12)
            .map(habitacion => 
            <Card key={habitacion.id} className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={habitacion.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to={`/detallehabitacion/${habitacion.id}/`}>N° Habitacion {habitacion.Nro_habitacion}</Link>
                    </Card.Title>
                    <Card.Text>{habitacion.Descripcion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>


        </div>
        <div>
        </div>
    </Fragment>
    )
    
}


export default Habitacioneshabitacion
