import React from 'react'

export const Memo = React.memo(() => {

    console.log("Se montó el Memo")

    return (
        <h3>Soy el memo</h3>
    )
})