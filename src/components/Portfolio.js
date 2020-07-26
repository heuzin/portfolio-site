import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => (
    <div>
        <h1>My Word</h1>
        <p>Checkout the following things I've done:</p>
        <Link to='portfolio/1'>First Item</Link>
        <Link to='portfolio/2'>Second Item</Link>
    </div>
)

export default Portfolio