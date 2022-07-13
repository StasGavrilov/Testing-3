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
        let id: NodeJS.Timeout

        if (count >= 15) {
            id = setTimeout(() => {
                setBigEnough(true)
            }, 300)
        }

        return function cleanup() {
            clearTimeout(id);
        }
    }, [])

    return (
        <div>
            <h2>
                DESC: {description}, DC: {defaultCount}
            </h2>

            <label>
                Incrementor:
                <input
                    value={incrementor}
                    onChange={e => setIncrementor(parseInt(e.target.value) || 1)}
                    type='number'
                />
            </label>

            <button aria-label="increment" onClick={() => setCount(count + incrementor)}>+</button>
            Current count: {count}
            <button aria-label="decrement" onClick={() => setCount(count - incrementor)}>-</button>

            {bigEnough ? null : <div>I am to small</div>}
        </div>
    )
}

export default Counter
