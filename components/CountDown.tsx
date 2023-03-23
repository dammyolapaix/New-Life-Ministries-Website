import React, { useState, useEffect } from 'react'

interface Props {
  eventDate: Date
}

const Countdown: React.FC<Props> = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [eventDate])

  return (
    <>
      <div className="text-center font-black text-5xl mb-5 text-tertiary">
        {timeLeft.days} Days
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center border-4 border-tertiary hover:bg-tertiary hover:text-white text-tertiary p-5 rounded-md">
          <div className="font-semibold text-3xl">{timeLeft.hours} </div>
          <div className="font-thin">Hours</div>
        </div>
        <div className="flex flex-col justify-center items-center border-4 border-tertiary hover:bg-tertiary hover:text-white text-tertiary p-5 rounded-md">
          <div className="font-semibold text-3xl">{timeLeft.minutes} </div>
          <div className="font-thin">Minutes</div>
        </div>
        <div className="flex flex-col justify-center items-center border-4 border-tertiary hover:bg-tertiary hover:text-white text-tertiary p-5 rounded-md">
          <div className="font-semibold text-3xl">{timeLeft.seconds} </div>
          <div className="font-thin">Seconds</div>
        </div>
        {/* <div className="minutes">{timeLeft.minutes} minutes</div>
        <div className="seconds">{timeLeft.seconds} seconds</div> */}
      </div>
    </>
  )
}

export default Countdown
