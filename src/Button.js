import React from 'react'

export default function Button(props){
    return(
        <div>
            <h3># of {props.name}s: {props.amount}</h3>
            <button >Add a {props.name}</button>
        </div>
    )
}