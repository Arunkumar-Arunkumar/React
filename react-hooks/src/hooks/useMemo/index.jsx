import React, { useState, useMemo } from 'react'

const useMemoExample = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // const doubleNumber = slowFunction(number);

    const doubleNumber = useMemo(()=> {
        return slowFunction(number);
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    console.log("Number", number);


    return (

        <>

            <h1>UseMemo</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>

    )

}

export default useMemoExample

const slowFunction = (num) => {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
}