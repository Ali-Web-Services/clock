import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as Messages from "../assets/Messages.json"
const Echo = () => {
    const {message} = useParams()

    if (!message) {
        return (
            <div className="body"></div>
        )
    }
    const [messageKey, setMessageKey] = useState("0")

    const messages = Messages.body[message]

    function getMessageByTime(){
        const seconds = new Date().getSeconds() % 10
        const messageCount =  Object.entries(messages).length
        const activeKey = Math.floor(0.1 * seconds * messageCount).toString()
        setMessageKey(activeKey)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getMessageByTime();
          }, 1000);
          return () => clearInterval(interval);
    }, [])

    return (
        <div className='body'>
            <p className='text center'>{messages[messageKey]}</p>
        </div>
    )
}

export default Echo