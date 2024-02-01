import { Link } from 'react-router-dom'
import './Portfolio.styles'

export default function Portfolio() {

    return (
        <div>
            <p>Portfolio</p>

            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <Link to="/project/1">Project 1</Link>
                <Link to="/project/2">Project 2</Link>
                <Link to="/project/3">Project 3</Link>
            </div>
        </div>
    )
}