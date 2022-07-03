import React, {Fragment, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navegacion from './layouts/nabvar'
import style from './styles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/")
        }
    }, [])

    async function login(){
        console.warn(email, password)
        let item = {email, password};
        let result = await fetch("https://proyecto-nube2022.herokuapp.com/api/login/", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "Accept" : 'application/json'
            },
            body: JSON.stringify(item)
        });
        console.log(JSON.stringify(item))
        result = await result.json();
        let userInfo = JSON.stringify(result)
        if (userInfo.length > 0){
            localStorage.setItem("user-info", userInfo)
            navigate("/")
        }else {
            console.log("Su correo o contraseña son incorrectos")
        }       
    }
    return (
        <Fragment>
            <Navegacion />
            <center>
                <div className={'fondoLogin h-100'}>
                    <div className='container container-small mt-10'>
                        <Form className={'formlogin'} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su correo" 
                                    onChange={(e => setEmail(e.target.value))}/>
                                <Form.Text className="text-muted">
                                    No comparta su informacion.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='labellogin'>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" 
                                    onChange={(e => setPassword(e.target.value))}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className='labellogin' type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" onClick={login}>
                                Iniciar Sesion
                            </Button>
                        </Form>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}

export default Login;