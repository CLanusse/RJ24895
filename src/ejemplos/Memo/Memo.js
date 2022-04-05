import React from 'react'


const Memo = React.memo(() => {

    console.log("me rendericé")

    return (
        <div>
            <h3>Soy un memo</h3>
        </div>
    )
})

export default Memo