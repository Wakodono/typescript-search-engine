import React, { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import { Track } from '../typings'

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Track[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const getSongs = async () => {
        try {
            let res = await fetch('')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Searching shall take place here...</h1>
        </div>
    )
}

export default SearchPage
