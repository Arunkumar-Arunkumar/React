import React, { useEffect, useState } from 'react'

const List = ({ getItem }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItem)
        console.log("Setting Items");
    }, [getItem])

    return (

        <>

            {items.map((item, index) => {
                return <p key={index}>{item}</p>
            })}

        </>

    )

}

export default List