import { useEffect, useState } from "react";

const Pomodoro = () => {
    const [pomodoro, setPomodoro] = useState({ min: 25, sec: 0, count: 1, percentage: 0})
    const [time, setTime] = useState({ hr: new Date().getHours(), min: new Date().getMinutes() })
    
    function getPomodoro(){  
        const {min, sec, count} = pomodoro
        let minutes, seconds;
        let updatedCount;

        if (min === 0 && sec !== 0) {  // Countdown from 0:59.
            minutes = 0
            seconds = sec - 1
        }
        else if (min === 0 && sec === 0 && (count + 1) % 8 === 0) {  // Set 25 min break timer.
            minutes = 24
            seconds = 59
            updatedCount = count + 1
        }
        else if (min === 0 && sec === 0 && (count + 1) % 2 === 0) {  // Set 5 min break timer.
            minutes = 4
            seconds = 59
            updatedCount = count + 1
        }
        else if (min === 0 && sec === 0) {  // Reset 25 min work timer.
            minutes = 24
            seconds = 59
            updatedCount = count + 1
        }
        else if (sec === 0) {
            minutes = min - 1
            seconds = 59
        }
        else {
            minutes = min
            seconds = sec - 1
        }

        const dividend = ((minutes * 60) + seconds)
        const divisor = (count % 2 === 0 && count % 8 !== 0) ? 300 : 1500  // 5 minutes unless increment of 8, then 
        const updatedPercentage =  100 - ((dividend / divisor) * 100)

        setPomodoro({ min: minutes, sec: seconds, count: updatedCount ?? count, percentage: updatedPercentage})
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            getPomodoro();
            setTime({hr: new Date().getHours(), min: new Date().getMinutes()})
          }, 1000);

          return () => clearInterval(interval)
    }, [pomodoro])
    
    return (
        <div className="body">
            <div id="clock-container">
                <svg height="24em" width="24em" viewBox="0 0 20 20">
                    <circle r="10" cx="10" cy="10" fill="transparent" />
                    <circle r="5" cx="10" cy="10" fill="transparent"
                        stroke="white"
                        strokeWidth="10"
                        strokeDasharray={`calc(${pomodoro.percentage} * 31.4 / 100) 31.4`}
                        transform="rotate(-90) translate(-20)"
                        />
                </svg>
            </div>
            <p className="time">{pomodoro.min > 9 ? pomodoro.min : `0${pomodoro.min}`}:{pomodoro.sec > 9 ? pomodoro.sec : `0${pomodoro.sec}`}</p>
            <p className="time">{time.hr > 9 ? time.hr : `0${time.hr}`}:{time.min > 9 ? time.min : `0${time.min}`}</p>
            <p className="time">{Math.ceil((pomodoro.count % 8) / 2) }/4{pomodoro.count % 2 === 0 ? " (BREAK)" : ""}</p>
        </div>
    )
}

export default Pomodoro