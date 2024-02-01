import { Link } from "react-router-dom";

import {
    HeaderWrapper,
    NavBar
} from "./Header.styles"

export default function Header() {
    return (
        <HeaderWrapper>
            <h2>NavBar</h2>
            <NavBar>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/carrers">Carrers</Link>
            </NavBar>
           
        </HeaderWrapper>
    )
}