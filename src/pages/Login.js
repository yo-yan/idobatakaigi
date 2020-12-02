import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';

const Login = ({ setName }) => {

    const [string, setString] = useState('');

    const handleClick = () => {
        setName(string)
    }

    return (
        <div className='loginform'>
            <h3>井戸端会議 for Web</h3>
            <TextField id="ニックネーム" label="ニックネーム" value={string} onChange={e => setString(e.target.value)} /><br />
            <Button variant="primary" size="lg" active onClick={handleClick}>Sing in</Button>
        </div>
    )
}

export default Login
