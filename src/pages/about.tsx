import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <h1>About Page</h1>
            <Link to="/">Back to home</Link>
            <p>Iram is the creator of this About Page</p>
        </main>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage