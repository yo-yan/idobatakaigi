import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';


const Createuser = () => {
    const [name, setName] = useState('')
    const history = useHistory();

    const handleClick = () => {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log('succes createUser')
                history.push('/Login')
            })
            .catch(function (error) {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

    }

    return (
        <div>
            <TextField id="ニックネーム" label="ニックネーム" value={name} onChange={e => setName(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Create</Button>
        </div>
    )
}

export default Createuser
