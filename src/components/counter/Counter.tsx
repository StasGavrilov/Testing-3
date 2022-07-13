import React, { useEffect, useState } from 'react'

interface ICounter {
    defaultCount: number,
    description: string
}

const Counter = ({ defaultCount, description }: ICounter) => {
    const [count, setCount] = useState(defaultCount)
    const [incrementor, setIncrementor] = useState(1)
    const [bigEnough, setBigEnough] = useState(defaultCount >= 15)

    useEffect(() => {
        if (count >= 15) {
            setTimeout(() => {
                setBigEnough(true)
            }, 300)
        }
    }, [])

    return (
        <div>
            <h2>
                DESC: {description}, DC: {defaultCount}
            </h2>

            <label>
                Incrementor:
                <input type='number' value={incrementor} onChange={e => setIncrementor(parseInt(e.target.value) || 0)} />
            </label>

            <button aria-label="increment" onClick={() => setCount(count + incrementor)}>+</button>
            Current count: {count}
            <button aria-label="decrement" onClick={() => setCount(count - incrementor)}>-</button>

            {bigEnough ? null : <div>I am to small</div>}
        </div>
    )
}

export default Counter
