import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import { deleteDate } from '../config/firebase'

const Login = ({ setName }) => {

    const [string, setString] = useState('');

    const handleDelete = async () => {
        await deleteDate();
    }

    const handleClick = () => {
        setName(string)
    }

    return (
        <div className='main'>
            <h3>井戸端会議 for Web</h3>
            <TextField id="ニックネーム" label="ニックネーム" value={string} onChange={e => setString(e.target.value)} /><br />
            <Button variant="primary" size="lg" active onClick={handleClick}>Sing in</Button>
            <Button variant="outlined" onClick={handleDelete}>delete</Button>
        </div>
    )
}

export default Login
