import React, { useEffect, Fragment, useState } from 'react'
import '../App.css';
import Navegacion from './layouts/nabvar';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const HotelesCategorias = () => {
    const { id } = useParams()
    const [state, setState] = useState([])
    useEffect(() => {
        const gethotelescatego = async () => {
            await Axios({
                method: 'get',
                url: `https://proyecto-nube2022.herokuapp.com/api/hotel/${id}`
            }).then(response => {
                // console.log(response.data[0]);
                setState(response.data)
            })
        }
        gethotelescatego()
    }, [id])

    /*
    const [state, setState] = useState([]);
    
    const params = useParams();
    
    //state = {
     //   hoteles: []
     // }
      

    axios.get(`http://127.0.0.1:8000/api/hotel/1`)
    .then(res => {
        setState(res.data);
    })
    */
    return (
    <Fragment>
        <Navegacion />
        <div className="fondo">
        <CardGroup className="container">
            { state.slice(0, 4)
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
            { state.slice(4, 8)
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
            { state.slice(8, 12)
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

}

export default HotelesCategorias

