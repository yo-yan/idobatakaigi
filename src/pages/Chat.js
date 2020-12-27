import React, { useState, useEffect } from 'react';
import { generateGravatar } from '../gravatar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { sendMessage, db } from '../config/firebase'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css';


const Chat = ({ name }) => {
    const [text, setText] = useState('')
    const [avaterurl, setAvaterurl] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const url = generateGravatar(name)
        setAvaterurl(url);
        comment()

    }, [])

    const handleClick = async () => {
        await sendMessage(name, text);
        await comment();
    }

    const comment = async () => {
        let tempArray = []
        await db.collection("messages")
            .orderBy('createAt', 'asc')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, '=>', doc.data());
                    tempArray.push(doc.data())
                });
                setMessage(tempArray)
            });
    }
    console.log(message)
    return (
        <div className='wrapper'>
            <div className='header'>
                <h2>Nuu</h2>
            </div>
            <div className='main'>
                {message && message.map((element, index) => {
                    return (
                        <ul key={index}>
                            <li className='message'>
                                <div className='icon'>
                                    <Avatar alt={name} src={generateGravatar(element.name)} />
                                    {element.name}
                                </div>
                                <h4>{element.message}</h4>
                            </li>
                        </ul>
                    )
                })
                }
            </div>
            <div className='footer'>
                <div>
                    <Avatar className='icon' alt={name} src={generateGravatar(name)} />
                    {name}
                </div>
                <TextField className='text' id="text" label="text" value={text} onChange={e => setText(e.target.value)} />
                <Button className='button' variant="primary" size="lg" active onClick={handleClick}>✈︎</Button><br />
            </div>
        </div>
    )
}

export default Chat

