import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as Messages from "../assets/Messages.json"
import { IMessagesBody } from "./interfaces"
const Echo = () => {
    const {message} = useParams()

    if (!message) {
        return (
            <div className="body"></div>
        )
    }
    const [messageIndex, setMessageIndex] = useState<number>(0)
    const { messages } = Messages as IMessagesBody

    const messageBody = messages.find((m) => m.name === message)

    function getMessageByTime(){
        const seconds = new Date().getSeconds() % 10
        const messageCount =  Object.entries(messages).length
        const activeIndex = Math.floor(0.1 * seconds * messageCount)
        setMessageIndex(activeIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getMessageByTime();
          }, 1000);
          return () => clearInterval(interval);
    }, [])

    return (
        <div className='body'>
            {messageBody && <p className='text center'>{messageBody.sequence[messageIndex]}</p>}
        </div>
    )
}

export default Echo