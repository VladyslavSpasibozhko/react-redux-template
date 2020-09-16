import React from 'react'

const Header = ({ counter, decrement, increment }: any) => {
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default Header
