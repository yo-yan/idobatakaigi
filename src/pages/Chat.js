import React, { useState, useEffect } from 'react';
import { generateGravatar } from '../gravatar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { sendMessage, db } from '../config/firebase'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Chat = ({ name }) => {
    const [text, setText] = useState('')
    const [avaterurl, setAvaterurl] = useState('')
    const [message, setMessage] = useState()

    const handleClick = async () => {
        await sendMessage(name, text);
        await comment();
    }

    useEffect(() => {

    }, [])

    const comment = async () => {
        let tempArray = []
        await db.collection("messages")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArray.push(doc.data())
                    console.log(`name:${doc.data().name}`);
                    console.log(`message: ${doc.data().message}`);
                });
                setMessage(tempArray)
            });
    }
    console.log(message)
    return (
        <div>
            { message && message.map((element, index) => {


                return (
                    <ul key={index}>
                        <li>
                            <Avatar alt={name} src={generateGravatar(element.name)} />
                            {element.name}
                            {element.message}

                        </li>
                    </ul>
                )
            })
            }

            <Avatar alt={name} src={avaterurl} /><br />{name}
            <TextField id="text" label="text" value={text} onChange={e => setText(e.target.value)} />
            <Button variant="primary" size="lg" active onClick={handleClick}>送信</Button>

        </div>
    )
}

export default Chat

