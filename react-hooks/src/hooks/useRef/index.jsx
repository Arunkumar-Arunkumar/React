import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [input, setInput] = useState();
    const inputRef = useRef();

    const display = () => {
        setInput(inputRef.current.value)
        console.log("Input", inputRef.current.value);
    }

    return (

        <>
            <div style={{ margin: "auto", width: "50%" }}>
                <div className='d-flex align-items-center justify-content-center'>
                    <h1>Input</h1>
                    <input
                        ref={inputRef}
                        type="text"
                    // value={input}
                    // onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button onClick={display} style={{ textAlign: "center" }}>Submit</button>
                {/* <p>{`Input Value : ${inputRef.current?.value ? inputRef.current?.value : ""}`}</p> */}
                <p>{`Input Value: ${input ? input : ""}`}</p>
            </div>
        </>

    )

}

export default UseRef