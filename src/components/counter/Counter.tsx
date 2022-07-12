import React, { useState } from 'react'

interface ICounter {
    defaultCount: number,
    description: string
}

const Counter = ({ defaultCount, description }: ICounter) => {
    const [count, setCount] = useState(defaultCount)

    return (
        <div>
            <h2>
                DESC: {description}, DC: {defaultCount}
            </h2>

            <button aria-label='increment' onClick={() => setCount(count + 1)}>+</button>
            Current count: {count}
            <button aria-label='decrement' onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter
