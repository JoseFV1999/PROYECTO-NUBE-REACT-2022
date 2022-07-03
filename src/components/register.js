import React, {Fragment, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navegacion from './layouts/nabvar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Register() {
    const [Correo, setCorreo] = useState("");
    const [Password, setPassword] = useState("");
    const [Nombre, setNombre] = useState("");
    
    const navigate = useNavigate();

    async function signup(){
        console.warn(Correo, Password, Nombre)
        let item = {Correo, Password, Nombre};
        console.warn(item)

        let result = await fetch("https://proyecto-nube2022.herokuapp.com/api/register/", {
            method: 'POST', 
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept" : 'application/json'
            }
        });

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/")
    }
    return (
        <Fragment>
            <Navegacion />
            <center>
                <div className={'fondoLogin h-100'}>
                    <div className='container container-small'>
                        <Form className={'formlogin'} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese un  usuario" 
                                onChange={(e => setNombre(e.target.value))}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Correo</Form.Label>
                                <Form.Control type="email" placeholder="example@correo.com" 
                                onChange={(e => setCorreo(e.target.value))}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='labellogin'>Contraseña</Form.Label>
                                <Form.Control type="password" onChange={(e => setPassword(e.target.value))}/>
                            </Form.Group>

                            <Button variant="primary" onClick={signup}>
                                Registrarse
                            </Button>
                        </Form>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}

export default Register;