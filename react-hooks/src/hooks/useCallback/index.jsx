import React, { useState, useCallback } from 'react'
import List from './List';

const useCallbackExample = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItem = () => {
        return [parseInt(number) + 1, parseInt(number) + 2, parseInt(number) + 3]
    }

    // const getItem = useCallback(() => {
    //     return [parseInt(number) + 1, parseInt(number) + 2, parseInt(number) + 3]
    // }, [number])

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    return (

        <>

            <h1>UseCallback</h1>
            <div style={themeStyles}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
                <List getItem={getItem} />
            </div>

        </>

    )

}

export default useCallbackExample