import React from 'react'
import { useParams } from "react-router";

const About = () => {
    const {name, comment} = useParams();

    return (
    <div>
        <h1>About Us</h1>
        <h1>{name}</h1>
        <h2>{comment}</h2>
    </div>
    )
}

export default About