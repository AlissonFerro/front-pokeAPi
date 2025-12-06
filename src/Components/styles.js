import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardT = styled(Card)`
    background-color: #dcdcdc;
`;

export const RowHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Void = styled.div``;

export const Input = styled.input`
    border: none;
    border-radius: 3px;
    background-color: grey;
`;

export const Title = styled.h1`
    font-size: 12px;
`;

export const Image = styled.img`
    width: 5rem;
    height: 5rem;
`;