import React, { useEffect, Fragment, useState } from 'react'
import '../App.css';
import Navegacion from './layouts/nabvar';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const TipoHabitacion = () => {

    const { idHotel } = useParams()
    const [state, setState] = useState([])
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

    return (
        <Fragment>
        </Fragment>
    )
    
}

export default TipoHabitacion
