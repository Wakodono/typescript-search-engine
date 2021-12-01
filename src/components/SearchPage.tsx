import React from 'react'
import { useState, useEffect } from 'react'
import Song from '../interfaces/song'

const SearchPage = () => {
    const [songs, setSongs] = useState<Song[]>([])

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
