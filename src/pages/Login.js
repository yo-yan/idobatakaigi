import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [name, setName] = useState('')
    const history = useHistory();

    const handleClick = () => {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log('succes createUser')
                history.push('/Chat')
            })
            .catch(function () {
            });
    }

    return (
        <div className='loginpage'>
            <h3>井戸端会議 for Web</h3>
            <TextField id="ニックネーム" label="ニックネーム" value={name} onChange={e => setName(e.target.value)} /><br />
            <Button variant="primary" size="lg" active onClick={handleClick}>Sing in</Button>
        </div>
    )
}

export default Login
