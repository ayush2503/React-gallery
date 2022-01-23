import React, { useState } from 'react'
import css from "./Time.module.css";


function Time() {
    const [date, setdate] = useState(new Date().toLocaleTimeString())
    setInterval(()=>setdate(new Date().toLocaleTimeString()),1000)
    return (
        <div className={css.time}>
            <p>{date}</p>
        </div>
    )
}

export default Time
