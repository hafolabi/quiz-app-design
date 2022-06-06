import { useEffect, useState } from 'react'

export default function Timer({ setStopQuiz, questionNumber }) {
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if(timer === 0) return setStopQuiz(true)
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
        return () => clearInterval(interval)  //cleanup function
    }, [timer, setStopQuiz])

    useEffect(()=>{
        setTimer(30)
    }, [questionNumber])
    return timer
}
