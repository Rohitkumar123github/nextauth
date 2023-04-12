"use client"
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'




export default async function backendConnectionPR() {
    const URL = "http://localhost:8080/backend"
    async function getBackend() {
        const res = await axios.get(URL)
        console.log("res.data: ", res.data)
        return res?.data?.message
    }
    const [backRes, setBackRes] = useState("backres")

    // console.log("respData: ", resp.message)
    // setBackRes(resp.message)
    console.log("backRes: ", backRes)

    useEffect(() => {
        const resp = getBackend().then(resp => setBackRes(resp))

    }, [])

    return (
        <div>backendConnectionPR
            <h2>{backRes}</h2>
        </div>
    )
}
