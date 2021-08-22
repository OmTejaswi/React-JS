import React from 'react'

export default function Err() {
    if (window.location.pathname === '/React-JS/home') {
        window.location.replace(window.location.protocol + "//" + window.location.host + '/React-JS/#/home')
    } else if (window.location.pathname === '/React-JS/about') {
        window.location.replace(window.location.protocol + "//" + window.location.host + '/React-JS/#/about')
    } else if(window.location.pathname !== '/React-JS') {
        window.location.replace(window.location.protocol + "//" + window.location.host + '/React-JS')
    }
    return (
        <div>
            Hello
        </div>
    )
}
