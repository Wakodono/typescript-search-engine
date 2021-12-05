import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { TrackDetail } from '../typings'
import { useParams } from 'react-router'

const detailEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/track/'

function DetailPage() {

    const { id } = useParams()

    const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null)

    const fetchData = async () => {
        try {
            const response = await fetch(
                detailEndpoint + id
            )

            if (!response.ok) return

            const data = await response.json()
            setTrackDetails(data)

        } catch (error) {
            console.log(error)
        }
    } 

    return trackDetails ? (
        <Container>
            <Row>
                <Col xs={10}>
                    <Image fluid src={trackDetails.album.cover_big} />
                    <h4>{trackDetails.title}</h4>
                    <h6>{trackDetails.artist.name}</h6>
                </Col>
            </Row>
        </Container>
    ) : null
}

export default DetailPage
