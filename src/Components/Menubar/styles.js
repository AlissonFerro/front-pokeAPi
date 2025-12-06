import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled(Navbar)`
    height: 5vh;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`;