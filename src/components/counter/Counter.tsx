import React, { useEffect, useState } from 'react'

interface ICounter {
    defaultCount: number,
    description: string
}

const Counter = ({ defaultCount, description }: ICounter) => {
    const [count, setCount] = useState(defaultCount)
    const [incrementor, setIncrementor] = useState(1)

    return (
        <div>
            <h2>
                DESC: {description}, DC: {defaultCount}
            </h2>

            <label>
                Incrementor:
                <input
                    value={incrementor}
                    onChange={e => setIncrementor(parseInt(e.target.value))}
                    type='text'
                />
            </label>

            <button aria-label="increment" onClick={() => setCount(count + incrementor)}>+</button>
            Current count: {count}
            <button aria-label="decrement" onClick={() => setCount(count - incrementor)}>-</button>
        </div>
    )
}

export default Counter
