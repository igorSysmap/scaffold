import { useParams } from "react-router-dom"

import './ProjectDetails.styles'

export default function ProjectDetails() {
    const {id} = useParams();

    return (
        <p>Exibindo informações do projeto {id}</p> 
    )
}