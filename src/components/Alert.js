import React from 'react'
import '../index.css'

export default function Alert(props) {

    const captialize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{captialize(props.alert.typ)}</strong>{props.alert.msg}
        </div>
    )
}
